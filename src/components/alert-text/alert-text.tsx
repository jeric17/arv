import { Component, Prop, Host, h } from '@stencil/core';
import { Color } from '../../interface';
import { generateAttrValue } from '../../utils/helpers';

@Component({
  tag: 'arv-alert-text',
  styleUrl: 'alert-text.css',
  shadow: true
})
export class AlertText {

  /**
   * Color variant to use.
   */
  @Prop() color: Color;

  render() {
    const cls = {
      ...generateAttrValue(this.color)
    };
    return (
      <Host class={cls}>
        <slot></slot>
      </Host>
    );
  }
}
