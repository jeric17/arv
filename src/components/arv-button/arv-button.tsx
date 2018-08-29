import { Component, Prop } from '@stencil/core';
import cx from 'classnames';

@Component({
  tag: 'arv-button',
  styleUrl: 'arv-button.css',
  shadow: true
})
export class Button {

  @Prop() onButtonClick: (e: Event) => void;

  /* oneOf: [default, primary, secondary, inherit] */
  @Prop() color: string = 'default';

  @Prop() disabled: boolean = false;

  @Prop() full: boolean = false;

  @Prop() icon: string;

  /* oneOf: [small, medium, large] */
  @Prop() size: string = 'medium';

  @Prop() styles: any;

  @Prop() type: string;

  /* oneOf: [bordered, flat, raised, flat-icon, raised-icon] */
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
      bordered: this.variant === 'bordered',
      flat: this.variant === 'flat',
      raised: this.variant === 'raised',
      flatIcon: this.variant === 'flat-icon',
      raisedIcon: this.variant === 'raised-icon'
    });

    const Icon = () => (
      <arv-icon
        size={this.size}
        icon={this.icon}>
      </arv-icon>
    );

    return (
      <button
        style={this.styles}
        class={rootClassNames}
        type={this.type}
        onClick={this.onButtonClick} >
        <arv-flex
          items="center"
          justify="center">
          {this.icon && <Icon />}
          <div class="slot">
            <arv-text>
              <slot></slot>
            </arv-text>
          </div>
        </arv-flex>
      </button>
    );
  }
}
