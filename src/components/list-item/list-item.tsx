import { Component, h } from '@stencil/core';

@Component({
  tag: 'arv-list-item',
  styleUrl: 'list-item.css',
  shadow: true
})
export class ListItem {

  render() {
    return (
      <slot></slot>
    );
  }
}
