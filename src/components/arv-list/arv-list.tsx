import { Component, Prop } from '@stencil/core';
import cx from 'classnames';

@Component({
  tag: 'arv-list',
  styleUrl: 'arv-list.css',
  shadow: true
})
export class List {

  @Prop() color: string = 'default'

  render() {
    const rootClassNames = cx('arv-list', {});
    return (
      <div class={rootClassNames}>
        <arv-flex
          layout="column">
          <slot></slot>
        </arv-flex>
      </div>
    );
  }
}
