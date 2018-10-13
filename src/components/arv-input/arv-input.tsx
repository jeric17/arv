import { Component, Event, EventEmitter, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'arv-input',
  styleUrl: 'arv-input.css',
  shadow: true
})
export class Input {

  @State() error = false;

  @Prop() autocomplete = 'off';

  @Prop() disabled = false;

  @Prop() full: boolean;

  @Prop() hasError: boolean;

  @Prop() label: string;

  /* oneOf: [column, row] */
  @Prop() layout = 'column';

  @Prop() name: string;

  @Prop() inputBlur: (e: any) => void;  

  @Prop() inputFocus: (e: any) => void;

  @Prop() inputChange: (e: any) => void;

  @Prop() placeholder: string;

  @Prop() required = false;

  @Prop() type = 'text';

  @Prop() value: string;

  @Event() onInput: EventEmitter;

  @Event() onBlur: EventEmitter;

  @Event() onFocus: EventEmitter;

  @Event() onInputChange: EventEmitter;

  @Event() onInputEnter: EventEmitter;

  @Listen('keydown.enter')
  handleKeyEnter(ev) {
    this.onInputEnter.emit(ev);
  }

  validate(value) {
    if (this.required && !value) {
      this.error = true;  
    } else {
      this.error = false;  
    }
  }

  change(e) {
    const value = e.target['value'];
    this.validate(value);
    if (this.inputChange) {
      this.inputChange(e);
    }
    this.onInputChange.emit({
      event: e,
      value,
      name: e.target.name,
      type: this.type,
      required: this.required
    });
  }

  focus(e) {
    const value = e.target['value'];
    if (this.inputFocus) {
      this.inputFocus(e);
    }
    this.onFocus.emit({
      event: e,
      value,
      name: e.target.name,
      type: this.type,
      required: this.required
    });
  }
  blur(e) {
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

  input(e) {
    this.onInput.emit({
      event: e,
      value: e.target['value'],
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
      full: this.full
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

    return (
      <div class={rootClassNames}>
        <arv-flex layout={this.layout}>
          {this.label && <Label />}
          <arv-divider 
            noMargin={layout === 'row' ? true : false}
            layout={layout} 
            transparent></arv-divider>
          <input
            required={this.required}
            name={this.name}
            class={inputClassNames}
            placeholder={this.placeholder}
            disabled={this.disabled}
            type={this.type}
            onChange={this.change.bind(this)}
            onInput={this.input.bind(this)}
            onFocus={this.focus.bind(this)}
            onBlur={this.blur.bind(this)}
            autocomplete={this.autocomplete}
            value={this.value} />
        </arv-flex>
      </div>
    );
  }
}
