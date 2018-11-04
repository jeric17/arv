import { Component } from '@stencil/core';

@Component({
  tag: 'arv-section',
  styleUrl: 'arv-section.css',
  shadow: true
})
export class Section {
  render() {
    return (
      <div class="root">
        <slot />
      </div>    
    );    
  }
}
