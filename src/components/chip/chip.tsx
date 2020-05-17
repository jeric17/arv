import { Component, Prop, Host, h } from '@stencil/core';
import { Color, Size } from '../../interface';
import { generateAttrValue } from '../../utils/helpers';

@Component({
  tag: 'arv-chip',
  styleUrl: 'chip.css',
  shadow: true
})
export class Chip {

  /**
   * Color variant to set.
   */
  @Prop() color: Color;

  /**
   * Size variant to set.
   */
  @Prop() size: Size;

  render() {
    const cls = {
      ...generateAttrValue(this.color),
      ...generateAttrValue(this.size),
    };

    return (
      <Host class={cls}>
        <slot></slot>
      </Host>
    );
  }
}
