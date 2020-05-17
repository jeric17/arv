import { Component, h, Prop } from '@stencil/core';
import { generateAttrValue } from '../../utils/helpers';
import { Color } from '../../interface';

@Component({
  tag: 'arv-switch',
  styleUrl: 'switch.css',
  shadow: true
})
export class Switch {

  @Prop() color: Color = 'primary';

  @Prop() disabled: boolean;

  @Prop({ mutable: true }) value: boolean;

  click = () => {
    this.value = !this.value;
  }

  render() {
    const classNames = {
      root: true,
      active: this.value,
      ...generateAttrValue(this.color),
      disabled: this.disabled
    };

    return (
      <div
        onClick={this.click}
        class={classNames}
      >
        <div class="bar"></div>
        <div class="circle"></div>
      </div>
    );
  }
}