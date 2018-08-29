import { Component, Prop } from '@stencil/core';
import cx from 'classnames';

@Component({
  tag: 'arv-divider',
  styleUrl: 'arv-divider.css',
  shadow: true
})
export class Divider {

  @Prop() layout: string = 'row';

  render() {
    const rootClassNames = cx('arv-divider', {
      row: this.layout === 'row',
      column: this.layout === 'column'
    });

    return (
      <div class={rootClassNames}></div>
    );
  }
}
