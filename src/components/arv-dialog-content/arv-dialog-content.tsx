import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'arv-dialog-content',
  styleUrl: 'arv-dialog-content.css',
  shadow: true
})
export class DialogContent {
  @Prop() animation = 'slideInBottom';

  @Prop() full: boolean;

  render() {
    return (
      <div class={{
        root: true,
        full: this.full
      }}>
        <arv-transition animation={this.animation}>
          <arv-paper padded={!this.full} box={this.full}>
            <slot />
          </arv-paper>
        </arv-transition>
      </div>
    );
  }
}
