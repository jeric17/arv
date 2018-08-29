import { Component, Prop } from '@stencil/core';
import cx from 'classnames';

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

  render() {
    const rootClassNames = cx('arv-avatar', {
      small: this.size === 'small',
      medium: this.size === 'medium',
      large: this.size === 'large',
    });
    const style = {
      'background-image': `url(${this.imgSrc})`
    };

    return (
      <div
        style={style}
        class={rootClassNames}>
      </div>
    );
  }
}
