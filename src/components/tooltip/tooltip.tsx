import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'arv-tooltip',
  styleUrl: 'tooltip.css',
  shadow: true
})
export class Tooltip {

  /**
   * Tooltip message.
   */
  @Prop() message: string;

  /**
   * Tooltip position
   */
  @Prop() position: 'top' | 'bottom' | 'right' | 'left' = 'top';

  render() {
    const cls = {
      [this.position]: true
    };

    return (
      <Host class={cls}>
        <span class="tooltip-message">{this.message}</span>
        <slot></slot>
      </Host>
    );
  }
}
