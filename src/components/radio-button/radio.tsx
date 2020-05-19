import { Component, Event, EventEmitter, Prop, Host, h } from '@stencil/core';
import { Color, FlexDirection } from '../../interface';
import { generateAttrValue } from '../../utils/helpers';

@Component({
  tag: 'arv-radio',
  styleUrl: 'radio.css',
  shadow: true
})
export class Radio {

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
   * Label of the radio input.
   */
  @Prop() label: string;

  /**
   * Input value of the radio input.
   */
  @Prop() value?: string;

  /**
   * Emitted if checked prop has changed.
   */
  @Event() arvChange: EventEmitter<boolean>;

  change = () => {
    this.checked = !this.checked;
    this.arvChange.emit(this.checked);
  }

  render() {
    const hostCls = {};
    const inputCls = {
      radio: true,
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
        onClick={this.change}
      >
        <label class="label">{this.label}</label>
        <input
          disabled={this.disabled}
          class={inputCls}
          type="radio"
          value={this.value}
          checked={this.checked} />
      </Host>
    );
  }
}
