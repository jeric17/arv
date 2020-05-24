import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'arv-tab-panel',
  styleUrl: 'tab-panel.css',
  shadow: true
})
export class TabPanel {
  @Prop() isActive: boolean;

  render() {
    const cls = {
      isActive: this.isActive
    };

    return (
      <Host class={cls}>
        <slot></slot>
      </Host>
    );
  }
}