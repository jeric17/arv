import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'arv-list-item',
  styleUrl: 'arv-list-item.css',
  shadow: true
})
export class ListItem {

  @Prop() itemClick: (e: Event, index: number) => void;

  @Prop() itemIndex: number;

  @Prop() showIcon: boolean;

  click(e) {
    if (this.itemClick) {
      this.itemClick(e, this.itemIndex)
    }
  }

  render() {
    return (
      <li
        class="root">
        <arv-button
          buttonClick={this.click.bind(this)}
          variant="flat"
          textAlign="start"
          full>
          <slot></slot>
        </arv-button>
        <arv-divider transparent></arv-divider>
      </li>
    );
  }
}
