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

  @Prop() href: string;  

  @Prop() icon: string;

  @Prop() buttonClick: (e: MouseEvent) => void;

  @Prop() padded = true;

  @Prop() rounded: boolean = true;

  /* oneOf: [small, medium, large] */
  @Prop() size: string = 'medium';

  @Prop() styles: any;

  /* oneOf: [start, center, end]*/
  @Prop() textAlign: string = 'center';

  @Prop() type: string;

  /* oneOf: [bordered, flat, raised, flat-icon, raised-icon] */
  @Prop() variant: string = 'flat';

  /* oneOf: [dialogOk, dialogCancel] */
  @Prop() roleType: string;

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
      type: this.type,
      roleType: this.roleType
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
      warning: this.color === 'warning',
      error: this.color === 'error',
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
      fab: this.variant === 'fab',
      boxed: !this.rounded,
      noPad: !this.padded
    };

    const iconMode = ['fab', 'flat-icon', 'raised-icon'];

    const Icon = () => (
      <arv-icon
        noMargin={rootClassNames.flatIcon || rootClassNames.raisedIcon || rootClassNames.fab}
        withButtonIcon={this.icon && !iconMode.includes(this.variant)}
        size={this.size}
        icon={this.icon}>
      </arv-icon>
    );

    const C = () => (
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
    );  

    const T = ({ p }) => {
      if (this.href) {
        return <a href={this.href} {...p}><C /></a>
      }
      return <button {...p}><C /></button>
    };

    const props = {
       style: this.styles,
       class: rootClassNames,
       type: this.type,
       onClick: this.btnClick.bind(this)
    };    

    return (
      <T p={props}></T>
    );
  }
}
