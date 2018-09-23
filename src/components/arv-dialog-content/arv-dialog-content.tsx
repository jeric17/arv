import { Component } from '@stencil/core';

@Component({
  tag: 'arv-dialog-content',
  styleUrl: 'arv-dialog-content.css',
  shadow: true
})
export class DialogContent {
  render() {
    return (
      <div class="root">
        <arv-paper padded>
           <slot />
        </arv-paper>
      </div>    
    );    
  }    
}
