import { Component, Event, EventEmitter, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'arv-input',
  styleUrl: 'arv-input.css',
  shadow: true
})
export class Input {

  @Prop() disabled: boolean = false;

  @Prop() full: boolean;

  @Prop() label: string;

  /* oneOf: [column, row] */
  @Prop() layout: string = 'column';

  @Prop() name: string;

  @Prop() inputChange: (e: any) => void;

  @Prop() placeholder: string;

  @Prop() required: boolean = false;

  @Prop() type: string = 'text';

  @Prop() value: string;

  @Event() onInput: EventEmitter;

  @Event() onInputChange: EventEmitter;

  @Event() onInputEnter: EventEmitter;

  @Listen('keydown.enter')
  handleKeyEnter(ev) {
    this.onInputEnter.emit(ev);
  }

  change(e) {
    if (this.inputChange) {
      this.inputChange(e);
    }
    this.onInputChange.emit({
      event: e,
      value: e.target['value'],
      name: e.target.name
    });
  }

  input(ev) {
    this.onInput.emit({
      event: ev,
      value: ev.target['value'],
      name: ev.target.name
    });
  }

  render() {
    const rootClassNames = {
      root: true,
      disabled: this.disabled,
      row: this.layout === 'row',
      column: this.layout === 'column',
      full: this.full
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
            name={this.name}
            class="input"
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
