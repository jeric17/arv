import { Component, Element, Prop, Host, h } from '@stencil/core';
import { Color } from '../../interface';
import { generateAttrValue } from '../../utils/helpers';

@Component({
  tag: 'arv-text',
  styleUrl: 'text.css',
  shadow: true
})
export class Text {

  @Element() el: HTMLElement;

  /**
   * Color variant to use.
   */
  @Prop() color: Color;

  /**
   * Will apply a text shadow.
   */
  @Prop() shadow?: boolean;

  /**
   * Truncates the text with ellipsis.
   */
  @Prop() truncate?: boolean;

  render() {
    const cls = {
      ...generateAttrValue(this.color),
      truncate: this.truncate,
      shadow: this.shadow,
    };

    if (cls.truncate && this.el.children.length) {
      const node: any = this.el.children[0];

      node.style.textOverflow = 'ellipsis';
      node.style.width = '100%';
      node.style.overflow = 'hidden';
    }

    return (
      <Host class={cls}>
        <slot></slot>
      </Host>
    );
  }
}
