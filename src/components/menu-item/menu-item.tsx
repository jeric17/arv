import { Component, Host, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'arv-menu-item',
  styleUrl: 'menu-item.css',
  shadow: true
})
export class MenuItem {
  @Event() arvMenuSelect: EventEmitter;

  render() {
    return (
      <Host onClick={() => this.arvMenuSelect.emit()}>
        <slot></slot>
      </Host>
    );
  }
}