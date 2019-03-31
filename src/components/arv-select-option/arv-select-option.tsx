import { Component, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'arv-select-option',
  styleUrl: 'arv-select-option.css',
  shadow: true
})
export class SelectOption {

  @Prop() value: string;

  @Prop() selected: boolean;

  @Prop() parse: boolean;

  @Prop() onSelect: (e: any) => void;

  @Event() optionSelected: EventEmitter;

  optionHandler() {
    console.log('option handler');
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
      selected: this.selected
    };

    return (
      <div
        onClick={() => {
          console.log('inside clicke!');
          this.optionHandler();
        }}
        class={rootClassNames}>
        <slot></slot>
      </div>
    );
  }
}
