import { Component, h, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'arv-button',
  styleUrl: 'button.css',
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
  @Prop() layout: string;
  @Prop() loading: boolean;
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
  /* oneOf: [dialogOk, dialogCancel, fileUpload] */
  @Prop() roleType: string;
  @Prop() multipleFileUpload: boolean;

  @Event() arvButtonClick: EventEmitter;
  @Event() arvButtonFileUpload: EventEmitter;

  hostData() {
    return {
      class: {
        full: this.full
      }
    };
  }

  btnClick(e: MouseEvent) {
    if (this.disabled || this.loading) {
      return false;
    }
    this.arvButtonClick.emit({
      event: e,
      type: this.type,
      roleType: this.roleType
    });

    return this.buttonClick && this.buttonClick(e);
  }

  onFileChange = (event: any) => {
    this.arvButtonFileUpload.emit(event.target.files);
  }

  render() {
    const rootClassNames = {
      button: true,
      'default': this.color === 'default',
      inherit: this.color === 'inherit',
      primary: this.color === 'primary',
      secondary: this.color === 'secondary',
      warning: this.color === 'warning',
      light: this.color === 'light',
      dark: this.color === 'dark',
      error: this.color === 'error',
      success: this.color === 'success',
      disabled: this.disabled === true,
      full: this.full === true,
      small: this.size === 'small',
      medium: this.size === 'medium',
      large: this.size === 'large',
      xlarge: this.size === 'xlarge',
      bordered: this.variant === 'bordered',
      flat: this.variant === 'flat',
      raised: this.variant === 'raised',
      flatIcon: this.variant === 'flat-icon',
      raisedIcon: this.variant === 'raised-icon',
      fab: this.variant === 'fab',
      ghost: this.variant === 'ghost',
      ghostIcon: this.variant === 'ghost-icon',
      boxed: !this.rounded,
      noPad: !this.padded,
      loading: this.loading
    };

    const iconMode = ['fab', 'flat-icon', 'raised-icon'];

    const Icon = () => (
      <arv-icon
        noMargin={rootClassNames.flatIcon || rootClassNames.raisedIcon || rootClassNames.fab}
        withButtonIcon={this.icon && !iconMode.includes(this.variant)}
        size={this.size}
        icon={this.icon}
      >
      </arv-icon>
    );

    const C = () => (
      <arv-flex
        layout={this.layout}
        items="center"
        justify={this.textAlign}>
        {this.icon && <Icon />}
        {(this.variant !== 'fab') && (
          <div class="slot">
            <arv-text>
              <slot></slot>
            </arv-text>
          </div>
        )}
      </arv-flex>
    );

    const Loader = () => (
      <arv-flex items="center" justify="center">
        <arv-loader size="xsmall"></arv-loader>
      </arv-flex>
    );

    const T = ({ p }) => {
      if (this.href) {
        return <a href={this.href} {...p}><C /></a>
      }
      if (this.roleType === 'fileUpload') {
        return (
          <div class="uploadWrapper">
            <label class="uploadLabel">
              <a {...p}>
                <C />
              </a>
              <input
                disabled={this.disabled}
                id="file"
                type="file"
                multiple={this.multipleFileUpload}
                onChange={this.onFileChange}
                class="input"
              />
            </label>
          </div>
        );
      }
      return (
        <button {...p}>
          {!this.loading && <C />}
          {this.loading && <Loader />}
        </button>
      );
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