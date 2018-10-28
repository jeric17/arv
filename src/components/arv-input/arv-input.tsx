import { Component, Element, Event, EventEmitter, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'arv-input',
  styleUrl: 'arv-input.css',
  shadow: true
})
export class Input {
  @Element() el: HTMLElement;

  @State() error = false;

  @Prop() autocomplete = 'off';

  @Prop() disabled = false;

  @Prop() fileUpload = false;

  @Prop() full: boolean;

  @Prop() hasError: boolean;

  @Prop() icon: string;

  @Prop() input: (e: any) => void;  

  @Prop() inputBlur: (e: any) => void;  

  @Prop() inputFocus: (e: any) => void;

  @Prop() inputChange: (e: any) => void;

  @Prop() label: string;

  /* oneOf: [column, row] */
  @Prop() layout = 'column';

  @Prop() name: string;

  @Prop() placeholder: string;

  @Prop() required = false;

  @Prop() type = 'text';

  @Prop() value: string;

  @Prop() multiple: boolean;

  @Prop() rows: number = 5;

  @Event() onInput: EventEmitter;

  @Event() onBlur: EventEmitter;

  @Event() onFocus: EventEmitter;

  @Event() onInputChange: EventEmitter;

  @Event() onInputEnter: EventEmitter;

  @Listen('keydown.enter')
  handleKeyEnter(e) {
    const inputElement = this.el.shadowRoot.querySelector('input');

    this.onInputEnter.emit({
      target: inputElement,
      event: e,
      value: inputElement.value,
      name: inputElement.name,
      type: this.type,
      required: this.required
    });
  }

  validate(value) {
    if (this.required && !value) {
      this.error = true;  
    } else {
      this.error = false;  
    }
  }

  private _change(e) {
    const value = (() => {
      if (this.type === 'file') {
        return e.target.files[0].name
      }
      return e.target.value;
    })();
    this.validate(value);
    if (this.inputChange) {
      this.inputChange(e);
    }
   
    this.onInputChange.emit({
      target: e.target,
      event: e,
      value,
      name: e.target.name,
      type: this.type,
      required: this.required
    });
  }

  private _focus(e) {
    const value = e.target['value'];
    if (this.inputFocus) {
      this.inputFocus(e);
    }
    this.onFocus.emit({
      target: e.target,
      event: e,
      value,
      name: e.target.name,
      type: this.type,
      required: this.required
    });
  }
  private _blur(e) {
    const value = e.target['value'];
    if (this.inputBlur) {
      this.inputBlur(e);
    }
    this.onBlur.emit({
      event: e,
      value,
      name: e.target.name,
      type: this.type,
      required: this.required
    });
  }

  private _input(e) {
    if (this.input) {
      this.input(e);  
    }
    const value = (() => {
      if (this.type === 'file') {
        return e.target.files[0].name
      }
      return e.target.value;
    })();
    this.onInput.emit({
      target: e.target,
      event: e,
      value,
      name: e.target.name,
      type: this.type,
      required: this.required
    });
  }

  hostData() {
    return {
      class: {
        full: this.full  
      }
    };  
  }

  render() {
    const rootClassNames = {
      root: true,
      disabled: this.disabled,
      row: this.layout === 'row',
      column: this.layout === 'column',
      full: this.full,
      icon: Boolean(this.icon),
      fileUpload: this.fileUpload
    };

    const inputClassNames = {
      input: true,
      error: this.error || this.hasError
    };

    const labelClass = {
      label: true,
      labelRow: this.layout === 'row',
      labelColumn: this.layout === 'column'
    };

    const Label = () => (
      <label
        class={labelClass}>{this.label}</label>
    );

    const layout = (() => {
      if (this.layout === 'row') {
        return 'column';
      }
      return 'row';
    })();

    const iconStyles = {
      position: 'absolute',
      top: '0.5em',
      left: '0.4em',
      color: '#333'
    };

    const Input = () => {
      if (!this.multiple) {
        return (
          <input
            required={this.required}
            name={this.name}
            class={inputClassNames}
            placeholder={this.placeholder}
            disabled={this.disabled}
            type={this.type}
            onChange={this._change.bind(this)}
            onInput={this._input.bind(this)}
            onFocus={this._focus.bind(this)}
            onBlur={this._blur.bind(this)}
            autocomplete={this.autocomplete}
            value={this.value} />
        );
      }
      return (
          <textarea
            rows={this.rows}
            required={this.required}
            name={this.name}
            class={inputClassNames}
            placeholder={this.placeholder}
            disabled={this.disabled}
            onChange={this._change.bind(this)}
            onInput={this._input.bind(this)}
            onFocus={this._focus.bind(this)}
            onBlur={this._blur.bind(this)}
            value={this.value} />
        );
    };

    return (
      <div class={rootClassNames}>
        <arv-flex layout={this.layout}>
          {this.label && !this.fileUpload && <Label />}
          <arv-divider 
            noMargin={layout === 'row' ? true : false}
            layout={layout} 
            transparent></arv-divider>
          <div class="inputWrapper">
            {this.icon && <arv-icon styles={iconStyles} icon={this.icon}></arv-icon>}
            <Input />
            {this.label && this.fileUpload && <Label />}
            {this.value && this.fileUpload && (
              <arv-flex justify="center" items="center" full>
                <arv-text variant="subtle">{this.value}</arv-text>
              </arv-flex>
            )}
          </div>
        </arv-flex>
      </div>
    );
  }
}
