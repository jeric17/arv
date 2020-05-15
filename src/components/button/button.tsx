import { Component, Prop, Host, h } from '@stencil/core';
import { Color, Size } from '../../interface';
import { generateAttrValue } from '../../utils/helpers';

/**
 * @slot - Content or middle content of the button.
 * @slot start - Left content of the button.
 * @slot end - Right content of the button.*
 */
@Component({
  tag: 'arv-button',
  styleUrl: 'button.css',
  shadow: true,
})
export class Button {

  /**
   * Color variant to use.
   */
  @Prop() color?: Color;

  /**
   * Size variant to use.
   */
  @Prop() size?: Size;

  /**
   * Button variant to use.
   */
  @Prop() variant?: 'raised' | 'ghost' | string;

  /**
   * Fullwidth button.
   */
  @Prop() full?: boolean;

  /**
   * Disable the button.
   */
  @Prop() disabled?: boolean;

  /**
   * Edged corners.
   */
  @Prop() boxed?: boolean;

  /**
   * Css styles to extend the component's ui
   */
  @Prop() styles?: { [key: string]: string };

  /**
   * Deprecated props
   */
  @Prop() textAlign?: any;
  @Prop() buttonClick?: any;
  @Prop() icon?: any;
  @Prop() rounded?: any;
  @Prop() padded?: any;

  render() {
    const hostCls = {
      full: this.full
    };

    const rootCls = {
      ...generateAttrValue(this.color),
      ...generateAttrValue(this.size),
      ...generateAttrValue(this.variant),
      boxed: this.boxed,
    };

    return (
      <Host class={hostCls}>
        <button
          style={this.styles}
          class={rootCls}
          disabled={this.disabled}>
          <span class="content">
            <slot name="start"></slot>
            <slot></slot>
            <slot name="end"></slot>
          </span>
        </button>
      </Host>
    );
  }
}
