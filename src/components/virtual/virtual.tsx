import { Component, Event, EventEmitter, Host, h } from '@stencil/core';

/**
 * Dynamically added component to display on top
 * of the page. e.g. Dialog, Alert.
 * slot - content of the virtual component
 */
@Component({
  tag: 'arv-virtual',
  styleUrl: 'virtual.css',
  shadow: true
})
export class Virtual {

  /**
   * Trigger close handler.
   */
  @Event() arvVirtualClose: EventEmitter;

  render() {
    return (
      <Host>
        <div
          onClick={() => {
            this.arvVirtualClose.emit();
          }}
          class="backdrop"></div>
        <slot></slot>
      </Host>
    );
  }
}
