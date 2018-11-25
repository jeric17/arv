import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'arv-icon',
  styleUrl: 'arv-icon.css',
  shadow: true
})
export class Icon {

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
      withButtonIcon: this.withButtonIcon
    };

    return (
      <span style={this.styles} class={rootClassNames}>
        {this.icon}
      </span>
    );
  }
}
