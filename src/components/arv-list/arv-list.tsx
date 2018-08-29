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
      <arv-flex
        layout="column"
        class={rootClassNames}>
        <slot></slot>
      </arv-flex>
    );
  }
}
