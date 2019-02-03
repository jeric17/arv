import { Component, Element, Event, EventEmitter, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'arv-input',
  styleUrl: 'arv-input.css',
  shadow: true
})
export class Input {

  inputElement: any;

  @Element() el: HTMLElement;

  @State() error = false;

  @Prop() autocomplete = 'off';

  @Prop() disabled = false;

  @Prop() fileUpload = false;

  @Prop() full: boolean;

  @Prop() hasError: boolean;

  @Prop() hashKey: number;

  @Prop() icon: string;

  @Prop() inputProps = {};  

  @Prop() input: (e: any) => void;

  @Prop() inputStyle = {};

  @Prop() inputBlur: (e: any) => void;  

  @Prop() inputFocus: (e: any) => void;

  @Prop() inputChange: (e: any) => void;

  @Prop() inputEnter: (e: any) => void;  

  @Prop() label: string;

  /* oneOf: [column, row] */
  @Prop() layout = 'column';

  @Prop() name: string;

  @Prop() placeholder: string;

  @Prop() required = false;

  @Prop() size = 'medium';

  @Prop() type = 'text';

  @Prop() value: string;

  @Prop() multiple: boolean;

  @Prop() rows: number = 5;

  @Event() onInput: EventEmitter;

  @Event() onBlur: EventEmitter;

  @Event() onFocus: EventEmitter;

  @Event() onInputChange: EventEmitter;

  @Event() onInputEnter: EventEmitter;

  @Listen('focus')
  focusHandler() {
    this.inputElement.focus();
  }

  @Listen('keydown.enter')
  handleKeyEnter(e) {
    const inputElement = (() => {
      if (!this.multiple) {
        return this.el.shadowRoot.querySelector('input');
      }
      return this.el.shadowRoot.querySelector('textarea');
    })();

    if (this.inputEnter) {
      this.inputEnter({
        target: this.inputElement,
        event: e,
      });
    }

    this.onInputEnter.emit({
      target: inputElement,
      event: e,
      value: inputElement.value,
      name: inputElement.name,
      type: this.type,
      required: this.required
    });
  }

  componentDidLoad() {
    const elem = (() => {
      if (!this.multiple) {
        return 'input';
      }
      return 'textarea';
    })();  
    this.inputElement = this.el.shadowRoot.querySelector(elem);
  }

  validate() {
    this.error = this.inputElement.validationMessage;
  }

  private _change(e) {
    const value = (() => {
      if (this.type === 'file') {
        return e.target.files[0].name
      }
      return e.target.value;
    })();
    this.validate();
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
    this.inputElement.focus();
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
      error: this.error || this.hasError,
      large: this.size === 'large'
    };

    const labelClass = {
      label: true,
      labelRow: this.layout === 'row',
      labelColumn: this.layout === 'column'
    };

    const Label = () => (
      <label
        class={labelClass}>
        {this.label}
        {this.required && (
          <span class="required">*</span>  
        )}
        </label>
    );

    const layout = (() => {
      if (this.layout === 'row') {
        return 'column';
      }
      return 'row';
    })();

    const iconStyles = {
      position: 'absolute',
      left: '0.4em',
      color: '#333',
      height: '100%',
      top: '0px',
      display: 'flex',
      'align-items': 'center'
    };

    const Input = () => {
      if (!this.multiple) {
        return (
          <input
            style={this.inputStyle}
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
            value={this.value}
            tabindex={0}
            {...this.inputProps} />
        );
      }
      return (
          <textarea
            style={this.inputStyle}
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
            value={this.value}
            {...this.inputProps} />
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
            {this.icon && <arv-icon styles={iconStyles} icon={this.icon} noMargin></arv-icon>}
            <Input />
            {this.label && this.fileUpload && <Label />}
            {this.value && this.fileUpload && (
              <arv-flex justify="center" items="center" full padded>
                <arv-text variant="subtle">{this.value}</arv-text>
              </arv-flex>
            )}
          </div>
        </arv-flex>
      </div>
    );
  }
}
