import { Component, Prop, Host, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'arv-menu-item',
  styleUrl: 'menu-item.css',
  shadow: true
})
export class MenuItem {

  /**
   * Value to pass in the arvMenuSelect event.
   */
  @Prop() value: any;

  @Prop() hideValue?: boolean;

  /**
   * Event emitted when clicked.
   */
  @Event() arvMenuSelect: EventEmitter<any>;

  render() {
    return (
      <Host onClick={() => this.arvMenuSelect.emit(this.value)}>
        {!this.hideValue && (
          <arv-text wrap="nowrap">
            <slot name="value"></slot>
          </arv-text>
        )}
        <slot></slot>
      </Host>
    );
  }
}