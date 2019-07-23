import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'arv-dialog-content',
  styleUrl: 'arv-dialog-content.css',
  shadow: true
})
export class DialogContent {

  @Prop() animation = 'slideInBottom';
  @Prop() full: boolean;
  @Prop() padded = true;

  render() {

    return (
      <div class={{
        root: true,
        full: this.full
      }}>
        <arv-transition animation={this.animation}>
          <arv-paper
            padded={false}
            box={this.full}
            noOverflow
          >
            <slot />
          </arv-paper>
        </arv-transition>
      </div>
    );
  }
}
