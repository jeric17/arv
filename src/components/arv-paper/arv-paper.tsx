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

  render() {
    const rootClassNames = cx('arv-paper', {
      padded: this.padded,
      transparent: this.transparent
    });

    const styles = (() => {
      if (this.height) {
        return {
          height: this.height
        };
      }
      return {};
    })();

    return (
      <div
        style={styles}
        class={rootClassNames}>
        <slot></slot>
      </div>
    );
  }
}
