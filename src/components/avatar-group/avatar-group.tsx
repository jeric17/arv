import { Component, Element, Prop, Event, EventEmitter, Host, h } from '@stencil/core';

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
   * Maximun number of avatars to show.
   */
  @Prop() max?: number;

  /**
   * Emitted when .more is clicked.
   */
  @Event() arvMore: EventEmitter;

  render() {
    let extra = 0;

    if (this.max &&
      this.el.children.length > this.max) {
      const items = Array.from(this.el.children).splice(this.max);
      items.forEach((node: HTMLElement) => {
        node.style.display = 'none !important';
      });
      extra = items.length;
    }

    return (
      <Host>
        <slot></slot>
        {extra && (
          <span
            onClick={() => this.arvMore.emit()}
            class="more">+{extra}</span>
        )}
      </Host>
    );
  }
}
