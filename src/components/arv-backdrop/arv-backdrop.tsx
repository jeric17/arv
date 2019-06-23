import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'arv-backdrop',
  styleUrl: 'arv-backdrop.css',
  shadow: true
})
export class Backdrop {

  @Prop() onBackdropClick: (event: Event) => void;

  @Prop() transparent: boolean;

  @Prop() position: string = 'fixed';

  render() {
    const rootClassNames = {
      backdrop: true,
      transparent: this.transparent,
      fixed: this.position === 'fixed',
      absolute: this.position === 'absolute',
      relative: this.position === 'relative'
    };

    return (
      <div
        onClick={this.onBackdropClick}
        class={rootClassNames}></div>
    );
  }
}
