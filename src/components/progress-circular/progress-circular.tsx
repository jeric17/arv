import { Component, Prop, Host, h } from '@stencil/core';
import { Color, Size } from '../../interface';
import { generateAttrValue } from '../../utils/helpers';

@Component({
  tag: 'arv-progress-circular',
  styleUrl: 'progress-circular.css',
  shadow: true
})
export class ProgressCircular {

  /**
   * Color variant to set.
   */
  @Prop() color: Color;

  /**
   * Size variant to set.
   */
  @Prop() size: Size;

  render() {
    const cls = {
      ...generateAttrValue(this.color),
      ...generateAttrValue(this.size)
    };

    return (
      <Host class={cls}>
        <div class="wrapper">
          <svg
            viewBox="22 22 44 44">
            <circle class="circle"
              cx="44"
              cy="44" r="20.2"
              fill="none"
              stroke-width="3.6"
            ></circle>
          </svg>
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
