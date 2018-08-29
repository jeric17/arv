import { Component, Event, EventEmitter, Prop } from '@stencil/core';
import cx from 'classnames';

@Component({
  tag: 'arv-select-option',
  styleUrl: 'arv-select-option.css',
  shadow: true
})
export class SelectOption {

  @Prop() value: string;

  @Prop() selected: boolean;

  @Prop() parse: boolean;

  @Event() optionSelected: EventEmitter;

  optionHandler() {
    const data = (() => {
      if (this.parse) {
        return JSON.parse(this.value);
      }
      return this.value;
    })();

    this.optionSelected.emit(data);
  }

  render() {
    const rootClassNames = cx('arv-select-option', {
      selected: this.selected
    });

    return (
      <div
        onClick={() => this.optionHandler() }
        class={rootClassNames}>
        <slot></slot>
      </div>
    );
  }
}
