import { Component, Element, Prop, Event, Watch, EventEmitter, State, Host, h } from '@stencil/core';
import { generateAttrValue } from '../../utils/helpers';
import { Size } from '../../interface';

@Component({
  tag: 'arv-avatar-group',
  styleUrl: 'avatar-group.css',
  shadow: true
})
export class AvatarGroup {

  /**
   * Reference to host element.
   */
  @Element() el: HTMLElement;

  /**
   * Excess avatars that is not shown due to the max attribute.
   */
  @State() extra: number;

  /**
   * Maximun number of avatars to show.
   */
  @Prop() max?: number;

  /**
   * Updates children styling once max value has changed.
   */
  @Watch('max')
  maxHandler() {
    this.init();
  }

  /**
   * Size variant to set.
   */
  @Prop() size: Size;

  /**
   * Emitted when .more is clicked.
   */
  @Event() arvMore: EventEmitter;

  /**
   * Adds style attributes, dislay and margin-left, to avatar elements.
   */
  componentDidLoad() {
    this.init();
  }

  private init() {
    const avatars = Array.from(this.el.children);
    const max = this.max - 1;

    avatars.forEach((node: any, index: number) => {
      if (index > 0) {
        node.style.marginLeft = '-15%';
      } else {
        node.style.marginLeft = '';
      }
      if (index > max) {
        node.style.display = 'none';
      } else {
        node.style.display = '';
      }
    });
  }

  render() {
    const cls = {
      ...generateAttrValue(this.size)
    };
    const childrenLength = this.el.children.length;
    let extra = 0;
    if (this.max &&
      childrenLength > this.max
    ) {
      extra = childrenLength - this.max;
    }
    return (
      <Host class={cls}>
        <slot></slot>
        {Boolean(extra) && (
          <div
            onClick={() => this.arvMore.emit()}
            class="more">+{extra}</div>
        )}
      </Host>
    );
  }
}
