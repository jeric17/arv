import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'arv-transition',
  styleUrl: 'arv-transition.css',
  shadow: true
})
export class Transition {

  @Prop() animation: string;

  @Prop() full: boolean;

  render() {
    const classNames = {
      root: true,
      full: this.full,
      fadeIn: this.animation === 'fadeIn',
      fadeOut: this.animation === 'fadeOut',
      slideInTop: this.animation === 'slideInTop',
      slideInBottom: this.animation === 'slideInBottom',
      slideOutTop: this.animation === 'slideOutTop',
      slideOutBottom: this.animation === 'slideOutBottom',
      scaleUp: this.animation === 'scaleUp',
      scaleHeight: this.animation === 'scaleHeight',
    };

    return (
      <div class={classNames}>
        <slot />
      </div>
    );
  }
}
