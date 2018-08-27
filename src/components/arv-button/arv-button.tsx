import { Component, Prop } from '@stencil/core';
import cx from 'classnames';

@Component({
  tag: 'arv-button',
  styleUrl: 'arv-button.css',
  shadow: true
})
export class Button {

  @Prop() onButtonClick: (e: Event) => void;

  /* name: color
   * oneOf: [default, primary, secondary, inherit] */
  @Prop() color: string = 'default';

  /* name: disabled
   * type: boolean */
  @Prop() disabled: boolean = false;

  /* name: full
   * type: boolean */
  @Prop() full: boolean = false;

  /* name: size
   * oneOf: [small, medium, large] */
  @Prop() size: string = 'medium';

  /* name: variant
   * oneOf: [flat, raised] */
  @Prop() variant: string = 'flat';

  render() {
    const rootClassNames = cx('arv-button', {
      'default': this.color === 'default',
      inherit: this.color === 'inherit',
      primary: this.color === 'primary',
      secondary: this.color === 'secondary',
      disabled: this.disabled,
      full: this.full,
      small: this.size === 'small',
      medium: this.size === 'medium',
      large: this.size === 'large',
      flat: this.variant === 'flat',
      raised: this.variant === 'raised',
    });

    return (
      <button onClick={this.onButtonClick} class={rootClassNames}>
        <slot></slot>
      </button>
    );
  }
}
