import { Component, Prop, Host, h } from '@stencil/core';
import { Color } from '../../interface';
import { generateAttrValue } from '../../utils/helpers';

@Component({
  tag: 'arv-header',
  styleUrl: 'header.css',
  shadow: true
})
export class Header {

  /**
   * Set the Color variant.
   */
  @Prop() color: Color = 'primary';

  /**
   * Position of the header
   */
  @Prop() position: 'static' | 'inherit' | 'absolute' | 'relative' | 'fixed' | 'sticky' = 'static';

  /**
   * Will not show a dropshadow.
   */
  @Prop() noShadow?: boolean;

  render() {
    const cls = {
      ...generateAttrValue(this.color),
      ...generateAttrValue(this.position),
      'no-shadow': this.noShadow
    };
    return (
      <Host class={cls}>
        <slot></slot>
      </Host>
    );
  }
}
