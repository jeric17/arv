import { Component, Prop } from '@stencil/core';
import cx from 'classnames';

@Component({
  tag: 'arv-icon',
  styleUrl: 'arv-icon.css',
  shadow: true
})
export class Icon {

  /* name: icon
   * type: string */
  @Prop() icon: string;

  /* name: size
   * oneOf: [small, medium, large] */
  @Prop() size: string = 'medium';

  render() {
    const rootClassNames = cx('material-icons arv-icon', {
      small: this.size === 'small',
      medium: this.size === 'medium',
      large: this.size === 'large'
    });

    return (
      <span class={rootClassNames}>
        {this.icon}
      </span>
    );
  }
}
