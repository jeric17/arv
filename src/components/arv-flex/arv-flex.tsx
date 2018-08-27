import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'arv-flex',
  styleUrl: 'arv-flex.css',
  shadow: true
})
export class Flex {

  /* name: content
   * oneOf: [start, end, center, stretch, around, between] */
  @Prop() content: string = 'start';

  /* name: items
   * oneOf: [start, end, center, stretch, baseline] */
  @Prop() items: string = 'start';

  /* name: justify
   * oneOf: [center, start, end, around, between, evenly] */
  @Prop() justify: string = 'start';

  /* name: layout
   * oneOf: [row, row-reverse, column, column-reverse] */
  @Prop() layout: string = 'row';

  /* type: number */
  @Prop() order: number = 0;

  /* name: wrap
   * oneOf: [wrap, no-wrap, wrap-reverse] */
  @Prop() wrap: string = 'wrap';

  render() {
    const rootClassNames = `arv-flex layout-${this.layout} justify-${this.justify} items-${this.items} content-${this.content}`;

    const styles = {
      '--order': `${this.order}`
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
