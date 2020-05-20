import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'arv-card',
  styleUrl: 'card.css',
  shadow: true
})
export class Card {

  render() {

    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
