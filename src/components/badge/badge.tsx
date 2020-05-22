import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'arv-badge',
  styleUrl: 'badge.css',
  shadow: true
})
export class Badge {

  /**
   * Will hide the badge.
   */
  @Prop() invisible?: boolean;

  /**
   * Value of the badge to show.
   */
  @Prop() value?: number | string;

  /**
   * Value will not render commas.
   */
  @Prop() disableComma?: boolean;

  render() {

    const cls = {
      'arv-invisible': this.invisible
    };

    const val = (!this.disableComma && this.value) ?
      Number(this.value).toLocaleString() :
      this.value;

    return (
      <Host class={cls}>
        <div class="value">{val}</div>
        <slot></slot>
      </Host>
    );
  }
}
