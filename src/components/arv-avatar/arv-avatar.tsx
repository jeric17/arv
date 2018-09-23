import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'arv-avatar',
  styleUrl: 'arv-avatar.css',
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
    };
    const style = {
      'background-image': `url(${this.imgSrc})`
    };

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
