import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'arv-spacer',
  styleUrl: 'spacer.css',
  shadow: true
})
export class Spacer {

  /**
   * Will render a vertical spacer
   */
  @Prop() vertical?: boolean;

  render() {
    const cls = {
      vertical: this.vertical
    };
    return <Host class={cls}></Host>;
  }
}
