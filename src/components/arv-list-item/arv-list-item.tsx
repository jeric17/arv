import { Component, Prop } from '@stencil/core';
import cx from 'classnames';

@Component({
  tag: 'arv-list-item',
  styleUrl: 'arv-list-item.css',
  shadow: true
})
export class ListItem {

  @Prop() onItemClick: (e: Event, index: number) => void;

  @Prop() itemIndex: number;

  render() {
    const rootClassNames = cx('arv-list-item', {});
    return (
      <div
        onClick={e => this.onItemClick(e, this.itemIndex)}
        class={rootClassNames}>
        <arv-flex
          items="center"
          justify="between">
          <slot></slot>
          <arv-icon
            icon="chevron_right"
            size="small"></arv-icon>
        </arv-flex>
      </div>
    );
  }
}
