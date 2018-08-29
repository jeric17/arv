import { Component, Prop } from '@stencil/core';
import cx from 'classnames';

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
    const rootClassNames = cx('arv-paper', {
      padded: this.padded,
      transparent: this.transparent
    });

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
