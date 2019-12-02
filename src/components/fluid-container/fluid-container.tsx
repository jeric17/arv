import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'arv-fluid-container',
  styleUrl: 'fluid-container.css',
  shadow: true
})
export class FluidContainer {

  @Prop() maxWidth: string;

  @Prop() minWidth: string;

  hostData() {
    const style = {};

    if (this.maxWidth) {
      style['max-width'] = this.maxWidth;
    }

    if (this.minWidth) {
      style['min-width'] = this.minWidth;
    }
    return { style };
  }

  render() {
    return (
      <div class="root">
        <slot />
      </div>
    );
  }
}
