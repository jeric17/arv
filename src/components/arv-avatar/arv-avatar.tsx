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
      medium: this.size === 'mdium',
      large: this.size === 'large',
    });
    return (
      <div class={rootClassNames}>
        <img alt={this.alt} src={this.imgSrc}/>
      </div>
    );
  }
}
