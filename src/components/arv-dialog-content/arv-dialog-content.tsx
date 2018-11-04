import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'arv-dialog-content',
  styleUrl: 'arv-dialog-content.css',
  shadow: true
})
export class DialogContent {
  @Prop() animation = 'slideInBottom';

  render() {
    return (
      <div class="root">
        <arv-transition animation={this.animation}>
          <arv-paper padded>
            <slot />
          </arv-paper>
        </arv-transition>
      </div>
    );    
  }    
}
