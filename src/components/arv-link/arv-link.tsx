import { Component, Prop } from '@stencil/core';
import cx from 'classnames';

@Component({
  tag: 'arv-link',
  styleUrl: 'arv-link.css',
  shadow: true
})
export class Link {

  @Prop() color: string = 'primary';

  @Prop() styles: any;

  render() {
    const rootClassNames = cx('arv-link', {
      primary: this.color === 'primary',
      secondary: this.color === 'secondary',
      'default': this.color === 'default'
    });

    return (
      <div
        style={this.styles}
        class={rootClassNames}>
        <slot></slot>
      </div>
    );
  }
}
