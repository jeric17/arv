import { Component, Element, Event, State, EventEmitter, Prop, Host, Watch, h } from '@stencil/core';
import { Color } from '../../interface';
import { generateAttrValue } from '../../utils/helpers';

@Component({
  tag: 'arv-tabs',
  styleUrl: 'tabs.css',
  shadow: true
})
export class Tabs {

  activeHeader = null;

  /**
   * Reference to host element.
   */
  @Element() el: HTMLElement;

  @State() counter = 0;

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
   * Alignment of tab headers.
   */
  @Prop() tabAlignment: 'right' | 'center' | 'left';

  @Watch('tabAlignment')
  alignmentChanged() {
    setTimeout(() => {
      this.counter++;
    }, 0);
  }

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
      if (!index) {
        item.setAttribute('is-active', 'true');
      } else {
        item.setAttribute('is-active', 'false');
      }
    });
  }

  /**
   * Set the active index and emit event on tab click. Also manage is-active
   * attribute on children.
   */
  tabClick = (index: number) => {
    this.setActiveHeader(index);
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

  borderCls(index: number) {
    const tabNames = this.el.shadowRoot.querySelectorAll('.tabName');
    const item = tabNames[index];
    if (!item) {
      return {};
    }
    const header = this.el.shadowRoot.querySelector('.header');
    const { left: headerLeft } = header.getBoundingClientRect();
    const {
      left: itemLeft,
      width: itemWidth
    } = item.getBoundingClientRect();

    const style = {
      left: `${itemLeft - headerLeft}px`,
      width: `${itemWidth}px`
    };

    return style;
  }

  private setActiveHeader(index: number = 0) {
    const headers = this.el.shadowRoot.querySelectorAll('.tabName');
    this.activeHeader = headers[index];
  }

  render() {
    const hostCls = {
      ...generateAttrValue(this.color),
      ...generateAttrValue(this.tabAlignment),
      noActiveHeader: !Boolean(this.activeHeader)
    };

    const tabNames = JSON.parse(this.tabNames);

    return (
      <Host class={hostCls}>
        <div class="header">
          {tabNames.map((item, index) => {
            const tabCls = {
              tabName: true,
              active: index === this.activeIndex,
            };
            return (
              <div
                onClick={() => this.tabClick(index)}
                class={tabCls}
              >
                {item.icon && (
                  <arv-icon icon={item.icon}></arv-icon>
                )}
                <span>{item.name}</span>
                <div class="tempBorder"></div>
              </div>
            );
          })}
          <span class="filler"></span>
          <div class="border" style={this.borderCls(this.activeIndex)}></div>
        </div>
        <slot></slot>
      </Host>
    );
  }
}
