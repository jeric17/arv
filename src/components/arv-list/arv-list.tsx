import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'arv-list',
  styleUrl: 'arv-list.css',
  shadow: true
})
export class List {

  @Prop() color: string = 'default'

  render() {
    return (
      <div class="root">
        <arv-flex
          layout="column">
          <slot></slot>
        </arv-flex>
      </div>
    );
  }
}
