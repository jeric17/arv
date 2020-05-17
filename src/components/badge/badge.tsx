import { Component, Prop, Host, h } from '@stencil/core';
import { Color } from '../../interface';
import { generateAttrValue } from '../../utils/helpers';

@Component({
  tag: 'arv-badge',
  styleUrl: 'badge.css',
  shadow: true
})
export class Badge {

  /**
   * Color variant to set.
   */
  @Prop() color?: Color;

  /**
   * Will hide the badge.
   */
  @Prop() invisible?: boolean;

  /**
   * Value of the badge to show.
   */
  @Prop() value?: number;

  /**
   * Css styles to extend the component's ui
   */
  @Prop() styles?: { [key: string]: string };

  render() {

    const cls = {
      ...generateAttrValue(this.color),
      'arv-invisible': this.invisible
    };

    return (
      <Host class={cls}>
        <span
          style={this.styles}
          class="value">{this.value}</span>
        <slot></slot>
      </Host>
    );
  }
}
