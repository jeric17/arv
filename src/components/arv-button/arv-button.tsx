import { Component, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'arv-button',
  styleUrl: 'arv-button.css',
  shadow: true
})
export class Button {

  /* oneOf: [default, primary, secondary, inherit] */
  @Prop() color: string = 'default';

  @Prop() disabled: boolean = false;

  @Prop() full: boolean = false;

  @Prop() icon: string;

  @Prop() buttonClick: (e: MouseEvent) => void;

  @Prop() rounded: boolean = true;

  /* oneOf: [small, medium, large] */
  @Prop() size: string = 'medium';

  @Prop() styles: any;

  /* oneOf: [start, center, end]*/
  @Prop() textAlign: string = 'center';

  @Prop() type: string;

  /* oneOf: [bordered, flat, raised, flat-icon, raised-icon] */
  @Prop() variant: string = 'flat';

  @Event() onButtonClick: EventEmitter;

  hostData() {
    return {
      class: {
        full: this.full
      }
    };
  }

  btnClick(e: MouseEvent) {
    if (this.disabled) {
      return false;
    }
    this.onButtonClick.emit({
      event: e,
      type: this.type
    });

    return this.buttonClick && this.buttonClick(e);
  }

  render() {
    const rootClassNames = {
      button: true,
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
      raisedIcon: this.variant === 'raised-icon',
      boxed: !this.rounded
    };

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
        onClick={this.btnClick.bind(this)} >
        <arv-flex
          items="center"
          justify={this.textAlign}>
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
