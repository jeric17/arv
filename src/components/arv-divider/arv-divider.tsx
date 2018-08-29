import { Component, Prop } from '@stencil/core';
import cx from 'classnames';

@Component({
  tag: 'arv-divider',
  styleUrl: 'arv-divider.css',
  shadow: true
})
export class Divider {

  @Prop() bordered: boolean;

  @Prop() height: string;

  @Prop() layout: string = 'row';

  @Prop() width: string;

  render() {
    const rootClassNames = cx('arv-divider', {
      bordered: this.bordered,
      row: this.layout === 'row',
      column: this.layout === 'column'
    });

    const styles = {
      height: this.height,
      width: this.width,
    };

    return (
      <div
        style={styles}
        class={rootClassNames}>
      </div>
    );
  }
}
