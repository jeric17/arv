import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'arv-loader',
  styleUrl: 'loader.css',
  shadow: true
})
export class Loader {

  @Prop() color = 'primary';

  @Prop() contained: boolean;

  @Prop() size: string;

  render() {
    const rootClassNames = {
      root: true,
      contained: this.contained
    };

    const spinnerClassNames = {
      spinner: true,
      primary: this.color === 'primary',
      secondary: this.color === 'secondary',
      warning: this.color === 'warning',
      error: this.color === 'error',
      success: this.color === 'success',
      xsmall: this.size === 'xsmall',
      small: this.size === 'small',
      large: this.size === 'large'
    };

    return (
      <div class={rootClassNames}>
        <arv-flex layout="column" justify="center" items="center">
          <div class={spinnerClassNames}></div>
          <slot />
        </arv-flex>
      </div>
    );
  }
}
