import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'arv-side-pane',
  styleUrl: 'side-pane.css'
})
export class SidePane {
  render() {
    return (
      <Host>
        <slot name="header"></slot>
        <slot></slot>
        <slot name="footer"></slot>
      </Host>
    );
  }
}
