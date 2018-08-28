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

  /* name: icon
   * type: string */
  @Prop() icon: string;

  /* name: size
   * oneOf: [small, medium, large] */
  @Prop() size: string = 'medium';

  @Prop() type: string;

  /* name: variant
   * oneOf: [flat, raised, flat-icon, raised-icon] */
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

    const Icon = () => (
      <arv-icon
        icon={this.icon}
        size={this.size} />
    );

    return (
      <button
        class={rootClassNames}
        type={this.type}
        onClick={this.onButtonClick} >
        {this.icon && <Icon />}
        <slot></slot>
      </button>
    );
  }
}
