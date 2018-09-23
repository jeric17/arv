import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'arv-paper',
  styleUrl: 'arv-paper.css',
  shadow: true
})
export class Paper {

  @Prop() height: string;

  @Prop() padded: boolean;

  @Prop() transparent: boolean;

  @Prop() width: string;

  render() {
    const rootClassNames = {
      root: true,
      padded: this.padded,
      transparent: this.transparent
    };

    const styles = {
      height: this.height,
      width: this.width,
    };

    return (
      <div
        style={styles}
        class={rootClassNames}>
        <slot></slot>
      </div>
    );
  }
}
