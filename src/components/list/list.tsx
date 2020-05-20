import { Component, h } from '@stencil/core';

@Component({
  tag: 'arv-list',
  styleUrl: 'list.css',
  shadow: true
})
export class List {

  render() {
    return (
      <slot></slot>
    );
  }
}
