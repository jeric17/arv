import { Component, Prop, Host, h } from '@stencil/core';
import { Color, FlexDirection } from '../../interface';
import { generateAttrValue } from '../../utils/helpers';

@Component({
  tag: 'arv-checkbox',
  styleUrl: 'checkbox.css',
  shadow: true
})
export class Checkbox {

  /**
   * Color variant to set.
   */
  @Prop() color?: Color;

  /**
   * flex direction of the label and the input.
   */
  @Prop() flexDirection: FlexDirection;

  /**
   * Label of the check box
   */
  @Prop() label: string;

  /**
   * Input value of the checkbox
   */
  @Prop() value: boolean;

  render() {
    const hostCls = {};
    const inputCls = {
      checkbox: true,
      ...generateAttrValue(this.color),
    };
    let hostStyles = {};
    if (this.flexDirection) {
      hostStyles = {
        flexDirection: this.flexDirection,
      };
      hostCls[`flex-${this.flexDirection}`] = true;
    }
    return (
      <Host
        class={hostCls}
        style={hostStyles}
      >
        <label class="label">{this.label}</label>
        <input
          class={inputCls}
          type="checkbox"
          checked={this.value} />
      </Host>
    );
  }
}
