import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'arv-flex',
  styleUrl: 'arv-flex.css',
  shadow: true
})
export class Flex {

  /* oneOf: [start, end, center, stretch, around, between] */
  @Prop() content: string = 'start';

  /* oneOf: [start, end, center, stretch, baseline] */
  @Prop() items: string = 'start';

  /* oneOf: [center, start, end, around, between, evenly] */
  @Prop() justify: string = 'start';

  /* oneOf: [row, row-reverse, column, column-reverse] */
  @Prop() layout: string = 'row';

  @Prop() order: number = 0;

  /* oneOf: [wrap, no-wrap, wrap-reverse] */
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
