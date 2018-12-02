import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'arv-loader',
  styleUrl: 'arv-loader.css',
  shadow: true
})
export class Loader {
  @Prop() contained: boolean;

  @Prop() size: string;

  render() {
    const rootClassNames = {
      root: true,
      contained: this.contained
    };

    const spinnerClassNames = {
      spinner: true,
      xsmall: this.size === 'xsmall',
      small: this.size === 'small',
      large: this.size === 'large'
    };   

    return (
      <div class={rootClassNames}>
        <div class={spinnerClassNames}></div>
      </div>
    );
  }
}
