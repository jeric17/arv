import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'arv-avatar',
  styleUrl: 'avatar.css',
  shadow: true
})
export class Avatar {

  @Prop() alt: string;

  @Prop() imgSrc: string;

  /* oneOf: [small, medium, large] */
  @Prop() size: string = 'medium';

  @Prop() styles: any;

  render() {
    const rootClassNames = {
      avatar: true,
      small: this.size === 'small',
      medium: this.size === 'medium',
      large: this.size === 'large',
      xlarge: this.size === 'xlarge',
      xxlarge: this.size === 'xxlarge'
    };
    const style = {};

    if (this.imgSrc) {
      style['background-image'] = `url(${this.imgSrc})`;
    }

    const styles = {
      ...this.styles,
      ...style,
    };

    return (
      <div
        style={styles}
        class={rootClassNames}>
      </div>
    );
  }
}