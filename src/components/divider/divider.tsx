import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'arv-divider',
  styleUrl: 'divider.css',
  shadow: true
})
export class Divider {
  @Prop() isVertical?: boolean;

  render() {
    const cls = {
      'arv-vertical': this.isVertical
    }
    return (
      <Host class={cls}></Host>
    );
  }
}
