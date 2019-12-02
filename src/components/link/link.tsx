import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'arv-link',
  styleUrl: 'link.css',
  shadow: true
})
export class Link {

  @Prop() color: string = 'primary';

  @Prop() styles: any;

  render() {
    const rootClassNames = {
      root: true,
      primary: this.color === 'primary',
      secondary: this.color === 'secondary',
      'default': this.color === 'default'
    };

    return (
      <div
        style={this.styles}
        class={rootClassNames}>
        <slot></slot>
      </div>
    );
  }
}
