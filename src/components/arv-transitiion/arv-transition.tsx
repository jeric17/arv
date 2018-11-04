import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'arv-transition',
  styleUrl: 'arv-transition.css',
  shadow: true
})
export class Transition {

  @Prop() animation: string;

  render() {
    const classNames = {
      root: true,
      fadeIn: this.animation === 'fadeIn',
      fadeOut: this.animation === 'fadeOut',
      slideInTop: this.animation === 'slideInTop',
      slideInBottom: this.animation === 'slideInBottom',
      slideOutBottom: this.animation === 'slideOutBottom',
    };

    return (
      <div class={classNames}>
        <slot />
      </div>    
    );
  }
}