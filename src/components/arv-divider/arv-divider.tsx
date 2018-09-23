import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'arv-divider',
  styleUrl: 'arv-divider.css',
  shadow: true
})
export class Divider {

  @Prop() bordered: boolean = true;

  @Prop() height: string;

  @Prop() layout: string = 'row';

  @Prop() width: string = '100%';

  render() {
    const rootClassNames = {
      divider: true,
      bordered: this.bordered,
      row: this.layout === 'row',
      column: this.layout === 'column'
    };

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
