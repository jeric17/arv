import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'arv-paper',
  styleUrl: 'paper.css',
  shadow: true
})
export class Paper {

  /**
   * How much shadow to be applied.
   */
  @Prop() shadowLevel?: 0 | 1 | 2 = 1;

  /**
   * Border only, no shadows.
   */
  @Prop() outlined?: boolean;

  render() {
    const cls = {
      'shadow-0': this.shadowLevel === 0,
      'shadow-1': this.shadowLevel === 1,
      'shadow-2': this.shadowLevel === 2,
      outlined: this.outlined,
    };

    return (
      <Host class={cls}>
        <slot></slot>
      </Host>
    );
  }
}
