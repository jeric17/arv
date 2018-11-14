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

  render() {
    const rootClassNames = {
      'material-icons': true,
      icon: true,
      small: this.size === 'small',
      medium: this.size === 'medium',
      large: this.size === 'large',
      noMargin: this.noMargin
    };

    return (
      <span style={this.styles} class={rootClassNames}>
        {this.icon}
      </span>
    );
  }
}
