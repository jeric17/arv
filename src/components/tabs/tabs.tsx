import { Component, Element, Event, State, EventEmitter, Prop, Host, h } from '@stencil/core';
import { Color } from '../../interface';
import { generateAttrValue } from '../../utils/helpers';

@Component({
  tag: 'arv-tabs',
  styleUrl: 'tabs.css',
  shadow: true
})
export class Tabs {

  /**
   * Reference to host element.
   */
  @Element() el: HTMLElement;

  /**
   * Current active tab index.
   */
  @State() activeIndex = 0;

  /**
   * Color variant to set.
   */
  @Prop() color: Color;

  /**
   * Tab names to appear in the tab header.
   */
  @Prop() tabNames = '[]';

  /**
   * Header will be compressed, not occupying the whole tab width.
   */
  @Prop() compressedHeader?: boolean;

  /**
   * Emitted on tab header click.
   */
  @Event() arvTabClick: EventEmitter<number>;

  /**
   * Adds item-index attribute to children.
   */
  componentDidLoad() {
    Array.from(this.el.children).forEach((item, index) => {
      item.setAttribute('item-index', String(index));
    });
  }

  /**
   * Set the active index and emit event on tab click. Also manage is-active
   * attribute on children.
   */
  tabClick = (index: number) => {
    this.activeIndex = index;
    this.arvTabClick.emit(index);
    Array.from(this.el.children).forEach((item, i) => {
      if (i === index) {
        item.setAttribute('is-active', 'true');
      } else {
        item.setAttribute('is-active', 'false');
      }
    });
  }

  render() {
    const hostCls = {
      ...generateAttrValue(this.color),
      compressed: this.compressedHeader
    };

    const tabNames = JSON.parse(this.tabNames);

    return (
      <Host class={hostCls}>
        <div class="header">
          {tabNames.map((tabName, index) => (
            <span
              onClick={() => this.tabClick(index)}
              class="tab-name"
            >{tabName}</span>
          ))}
          <span class="filler"></span>
        </div>
        <slot></slot>
      </Host>
    );
  }
}
