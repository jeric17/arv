import { Component, Prop, Host, h } from '@stencil/core';
import { generateAttrValue } from '../../utils/helpers';
import { Color } from '../../interface';

@Component({
  tag: 'arv-switch',
  styleUrl: 'switch.css',
  shadow: true
})
export class Switch {

  /**
   * Color variant to set.
   */
  @Prop() color: Color;

  /**
   * Disables the element.
   */
  @Prop() disabled: boolean;

  /**
   * Layout direction of label and switch element.
   */
  @Prop() flexDirection?: 'row' | 'column' | 'column-reverse' | 'row-reverse';

  /**
   * Label of the element.
   */
  @Prop() label?: string;

  @Prop({ mutable: true }) value: boolean;

  click = () => {
    if (this.disabled) {
      return false;
    }
    this.value = !this.value;
  }

  render() {
    const classNames = {
      root: true,
      active: this.value,
      ...generateAttrValue(this.color),
      disabled: this.disabled
    };

    const cls = {
      col: this.flexDirection && this.flexDirection.indexOf('column') > -1
    };

    const styles = (() => {
      if (this.flexDirection) {
        return {
          flexDirection: this.flexDirection
        };
      }
      return {};
    })();

    return (
      <Host
        style={styles}
        class={cls}>
        {this.label && (
          <span class="label">{this.label}</span>
        )}
        <slot name="label"></slot>
        <div
          onClick={this.click}
          class={classNames}
        >
          <div class="bar"></div>
          <div class="circle"></div>
        </div>
      </Host>
    );
  }
}