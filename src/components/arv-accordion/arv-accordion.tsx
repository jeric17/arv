import { Component } from '@stencil/core';

@Component({
  tag: 'arv-accordion',
  styleUrl: 'arv-accordion.css',
  shadow: true
})
export class Accordion {
  render() {
    return (
      <div class="root">
        <slot />
      </div>    
    );    
  }
}
