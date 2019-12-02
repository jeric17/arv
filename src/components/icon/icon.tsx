import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'arv-icon',
  styleUrl: 'icon.css',
  shadow: true
})
export class Icon {

  @Prop() color: string;

  @Prop() icon: string;

  @Prop() noMargin: boolean;

  /* oneOf: [small, medium, large] */
  @Prop() size: string = 'medium';

  @Prop() styles: any = {};

  @Prop() withButtonIcon: boolean;

  render() {
    const rootClassNames = {
      'material-icons': true,
      icon: true,
      small: this.size === 'small',
      medium: this.size === 'medium',
      large: this.size === 'large',
      xlarge: this.size === 'xlarge',
      xxlarge: this.size === 'xxlarge',
      noMargin: this.noMargin,
      withButtonIcon: this.withButtonIcon,
      defaultColor: this.color === 'default',
      primary: this.color === 'primary',
      secondary: this.color === 'secondary',
      warning: this.color === 'warning',
      success: this.color === 'success',
      error: this.color === 'error'
    };

    return (
      <span style={this.styles} class={rootClassNames}>
        {this.icon}
      </span>
    );
  }
}