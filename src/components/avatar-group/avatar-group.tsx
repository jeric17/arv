import { Component, Element, Prop, Event, EventEmitter, State, Host, h } from '@stencil/core';
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
   * Will be loaded after the componentDidLoad.
   */
  @State() loaded = false;

  /**
   * Maximun number of avatars to show.
   */
  @Prop() max?: number;

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
    const avatars = Array.from(this.el.children);

    if (this.max &&
      this.el.children.length > this.max
    ) {
      const items = avatars.slice(this.max);
      items.forEach((node: HTMLElement) => {
        node.style.display = 'none';
      });
      this.extra = items.length;
    }

    avatars.slice(0, this.extra + 1).forEach((node: any, index: number) => {
      if (index === 0) {
        return false;
      }
      node.style.marginLeft = '-15%';
    });

    this.loaded = true;
  }

  render() {
    const cls = {
      ...generateAttrValue(this.size),
      loaded: this.loaded
    };

    return (
      <Host class={cls}>
        <slot></slot>
        {Boolean(this.extra) && (
          <div
            onClick={() => this.arvMore.emit()}
            class="more">+{this.extra}</div>
        )}
      </Host>
    );
  }
}
