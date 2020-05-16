import { Component, Event, EventEmitter, Host, h } from '@stencil/core';

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
