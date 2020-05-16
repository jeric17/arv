import { Component, h, Prop } from '@stencil/core';
import { Color, Size } from '../../interface';
import { generateAttrValue } from '../../utils/helpers';

@Component({
  tag: 'arv-icon',
  styleUrl: 'icon.css',
  shadow: true
})
export class Icon {

  /**
   * Color variant to use.
   */
  @Prop() color: Color;

  /**
   * Size variant to use.
   */
  @Prop() size: Size;

  /**
   * Name of the icon to use
   */
  @Prop() icon: string;

  /**
   * Css styles to extend the component's ui
   */
  @Prop() styles: { [key: string]: string };

  /**
   * Deprecated props.
   */
  @Prop() withButtonIcon: boolean;
  @Prop() noMargin: boolean;

  render() {
    const rootCls = {
      'material-icons': true,
      ...generateAttrValue(this.color),
      ...generateAttrValue(this.size),
    };

    return (
      <span
        style={this.styles}
        class={rootCls}>
        {this.icon}
      </span>
    );
  }
}
