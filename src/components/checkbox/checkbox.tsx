import { Component, Event, EventEmitter, Prop, Host, h } from '@stencil/core';
import { Color, Size, FlexDirection } from '../../interface';
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
   * Size variant to use.
   */
  @Prop() size: Size;

  /**
   * Input value of the checkbox
   */
  @Prop() value?: string;

  /**
   * Emitted if checked prop has changed.
   */
  @Event() arvChange: EventEmitter<boolean>;

  change = () => {
    if (this.disabled) {
      return false;
    }
    this.checked = !this.checked;
    this.arvChange.emit(this.checked);
  }

  render() {
    const hostCls = {
      ...generateAttrValue(this.size),
      ...generateAttrValue(this.color),
      disabled: this.disabled,
      checked: this.checked
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
        onClick={this.change}
      >
        <label class="label">{this.label}</label>
        <div class="control">
          <div class="value">
            <arv-icon icon="check"></arv-icon>
          </div>
        </div>
        <input
          disabled={this.disabled}
          type="checkbox"
          value={this.value}
          checked={this.checked} />
      </Host>
    );
  }
}
