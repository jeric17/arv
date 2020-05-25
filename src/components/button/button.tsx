import { Component, Element, Prop, Host, h } from '@stencil/core';
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
   * Reference to the host element.
   */
  @Element() el: HTMLElement;

  /**
   * Color variant to use.
   */
  @Prop() color?: Color;

  /**
   * Flex direction layout of icon and button content.
   */
  @Prop() flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';

  /**
   * Material icon to show inside the button.
   */
  @Prop() icon?: string;

  /**
   * Render as an icon button.
  */
  @Prop() isIcon?: boolean;

  /**
   * Displays a circular progress.
   */
  @Prop() loading?: boolean;

  /**
   * Circular progress color.
   */
  @Prop() loadingColor?: Color;

  /**
   * On loading state will show this string instead.
   */
  @Prop() loadingText?: string;

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
  @Prop() rounded?: any;
  @Prop() padded?: any;

  render() {
    const hostCls = {
      full: this.full,
      hasIcon: Boolean(this.icon),
      isLoading: this.loading,
    };

    const rootCls = {
      ...generateAttrValue(this.color),
      ...generateAttrValue(this.size),
      ...generateAttrValue(this.variant),
      boxed: this.boxed,
      isIcon: this.isIcon
    };

    const buttonStyle: any = {};

    if (this.flexDirection) {
      buttonStyle.flexDirection = this.flexDirection;
    }

    return (
      <Host class={hostCls}>
        <button
          style={this.styles}
          class={rootCls}
          disabled={this.disabled}>
          <span class="content" style={buttonStyle}>
            {this.loading && (
              <arv-progress-circular
                color={this.loadingColor}
                size="small"></arv-progress-circular>
            )}
            {this.icon && (
              <arv-icon icon={this.icon}></arv-icon>
            )}
            <slot name="start"></slot>
            <div class="buttonText">
              <slot></slot>
            </div>
            <span class="loadingText">
              {this.loadingText}
            </span>
            <slot name="end"></slot>
          </span>
        </button>
      </Host>
    );
  }
}
