import { Component, Event, EventEmitter, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'arv-input',
  styleUrl: 'arv-input.css',
  shadow: true
})
export class Input {

  @State() error = false;  

  @Prop() disabled = false;

  @Prop() full: boolean;

  @Prop() hasError: boolean;

  @Prop() label: string;

  /* oneOf: [column, row] */
  @Prop() layout = 'column';

  @Prop() name: string;

  @Prop() inputChange: (e: any) => void;

  @Prop() placeholder: string;

  @Prop() required = false;

  @Prop() type = 'text';

  @Prop() value: string;

  @Event() onInput: EventEmitter;

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

  input(ev) {
    this.onInput.emit({
      event: ev,
      value: ev.target['value'],
      name: ev.target.name,
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

    return (
      <div class={rootClassNames}>
        <arv-flex layout={this.layout}>
          {this.label && <Label />}
          <arv-divider layout={this.layout}></arv-divider>
          <input
            required={this.required}
            name={this.name}
            class={inputClassNames}
            placeholder={this.placeholder}
            disabled={this.disabled}
            onChange={this.change.bind(this)}
            type={this.type}
            onInput={this.input.bind(this)}
            value={this.value} />
        </arv-flex>
      </div>
    );
  }
}
