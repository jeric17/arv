import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'arv-chips',
  styleUrl: 'arv-chips.css',
  shadow: true
})
export class Chips {

  @Prop() size: string;

  @Prop() target: string;

  @Prop() url: string;

  @Prop() variant = 'default';

  render() {
    const rootClassNames = {
      root: true,
      'default': this.variant === 'default',
      small: this.size === 'small'
    };

    return (
      <div class={rootClassNames}>
        <slot />
      </div>
    );
  }
}
