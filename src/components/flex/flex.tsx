import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'arv-flex',
  styleUrl: 'flex.css',
  shadow: true
})
export class Flex {

  @Prop() alignItems: 'flex-start' | 'flex-end' | 'center' | 'stretch';

  @Prop() direction: 'row' | 'column' | 'row-reverse' | 'column-reverse';

  @Prop() flex: string;

  @Prop() justify: 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'flex-start' | 'flex-end' | string;

  @Prop() styles: { [key: string]: string };

  @Prop() wrap: 'wrap' | 'no-wrap' | 'wrap-reverse';

  @Prop() expanded: boolean;

  /**
   * Deprecated props.
   */
  @Prop() layout?: any;
  @Prop() padded?: any;
  @Prop() items?: any;
  @Prop() full?: any;
  @Prop() fullHeight?: any;

  render() {
    const cls = {
      expanded: this.expanded,
    };
    const styles = {
      'flex-direction': this.direction,
      'justify-content': this.justify,
      'align-items': this.alignItems,
      'flex-wrap': this.wrap,
      'flex': this.flex,
      ...this.styles,
    };

    return (
      <Host
        class={cls}
        style={styles}>
        <slot></slot>
      </Host>
    );
  }
}
