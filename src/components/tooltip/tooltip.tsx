import { Component, Prop, Host, h } from '@stencil/core';
import { generateAttrValue } from '../../utils/helpers';
import { Color } from '../../interface';

@Component({
  tag: 'arv-tooltip',
  styleUrl: 'tooltip.css',
  shadow: true
})
export class Tooltip {

  /**
   * Color variant to use.
   */
  @Prop() color: Color;

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
      [this.position]: true,
      ...generateAttrValue(this.color)
    };

    return (
      <Host class={cls}>
        <span class="tooltip-message">
          {this.message}
          <slot name="tooltip"></slot>
        </span>
        <slot></slot>
      </Host>
    );
  }
}
