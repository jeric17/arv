import { Component, Prop, Host, h } from '@stencil/core';
import { Color } from '../../interface';
import { generateAttrValue } from '../../utils/helpers';

@Component({
  tag: 'arv-list-item',
  styleUrl: 'list-item.css',
  shadow: true
})
export class ListItem {

  @Prop() activeColor: Color;

  @Prop() color: Color;

  @Prop() isActive?: boolean;

  render() {
    const cls = {
      ...generateAttrValue(this.color),
      [`${this.activeColor}-active`]: Boolean(this.activeColor),
      active: this.isActive
    };

    return (
      <Host class={cls}>
        <slot></slot>
      </Host>
    );
  }
}
