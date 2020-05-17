import { Component, Event, EventEmitter, Prop, Host, h } from '@stencil/core';
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
   * Disables the input element.
   */
  @Prop() disabled?: boolean;

  /**
   * Checked flag for the input element.
   */
  @Prop({ mutable: true }) checked?: boolean;

  /**
   * flex direction of the label and the input.
   */
  @Prop() flexDirection: FlexDirection;

  /**
   * Will show a indeterminate state.
   */
  @Prop({ mutable: true }) indeterminate?: boolean;

  /**
   * Label of the check box
   */
  @Prop() label: string;

  /**
   * Input value of the checkbox
   */
  @Prop() value?: string;

  @Event() arvChange: EventEmitter<boolean>;

  change = () => {
    this.checked = !this.checked;
    this.arvChange.emit(this.checked);
  }

  render() {
    const hostCls = {};
    const inputCls = {
      checkbox: true,
      ...generateAttrValue(this.color),
      indeterminate: this.indeterminate,
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
          onChange={this.change}
          disabled={this.disabled}
          class={inputCls}
          type="checkbox"
          value={this.value}
          checked={this.checked} />
      </Host>
    );
  }
}
