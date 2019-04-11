import { Component, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'arv-select-option',
  styleUrl: 'arv-select-option.css',
  shadow: true
})
export class SelectOption {

  @Prop() disabled = false;

  @Prop() value: any;

  @Prop() selected: boolean;

  @Prop() parse: boolean;

  @Prop() onSelect: (e: any) => void;

  @Prop() noStyle = false;

  @Event() optionSelected: EventEmitter;

  optionHandler() {
    const data = (() => {
      if (this.parse) {
        return JSON.parse(this.value);
      }
      return this.value;
    })();

    if (this.onSelect) {
      this.onSelect(data);
    }

    this.optionSelected.emit(data);
  }

  hostData() {
    return {
      'data-value': this.value
    }
  }

  render() {
    const rootClassNames = {
      root: true,
      selected: this.selected,
      noStyle: this.noStyle,
      disabled: this.disabled
    };

    return (
      <div
        onClick={() => {
          this.optionHandler();
        }}
        class={rootClassNames}>
        <slot></slot>
      </div>
    );
  }
}
