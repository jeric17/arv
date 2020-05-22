import { Component, h, Element, Listen, Prop, State, Host } from '@stencil/core';

@Component({
  tag: 'arv-menu',
  styleUrl: 'menu.css',
  shadow: true
})
export class Menu {

  /**
   * timeout delay.
   */
  delay = 300;

  /**
   * Reference to host element.
   */
  @Element() el: HTMLElement;

  /**
   * Reference of menu list to show or hide.
   */
  @State() isOpen = false;

  /**
   * top and bottom position of content.
   */
  @Prop() yPosition: 'top' | 'bottom' = 'bottom';

  /**
   * let and right position of content.
   */
  @Prop() xPosition: 'left' | 'right' = 'right';

  /**
   * Click outside of the menu will not trigger close.
   */
  @Prop() disableBgclose?: boolean;

  @Listen('blur')
  blurHandler() {
    this.isOpen = false;
  }

  menuTriggerClick = () => {
    this.toggle();
  }

  menuListClick = () => {
    setTimeout(() => {
      this.isOpen = false;
    }, this.delay);
  }

  private toggle() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      // dismiss jest error
      try {
        this.el.focus();
      } catch (e) { }

      const content: any = this.el.shadowRoot.querySelector('.content');
      if (this.yPosition === 'top') {
        const menutriggerEl = this.el.shadowRoot.querySelector('.menu-trigger');
        content.style.marginBottom = `${menutriggerEl.clientHeight}px`;
      } else {
        content.style.marginBottom = '';
      }
    }
  }

  render() {
    const contentCls = {
      content: true,
      top: this.yPosition === 'top',
      bottom: this.yPosition === 'bottom',
      left: this.xPosition === 'left',
      right: this.xPosition === 'right',
      isOpen: this.isOpen
    };

    return (
      <Host tabIndex={-1}>
        <div
          class="menu-trigger"
          onClick={this.menuTriggerClick}
        >
          <slot></slot>
        </div>
        <div class={contentCls}>
          <slot name="content"></slot>
          <div onClick={this.menuListClick} class="menu-list">
            <slot name="menu-list"></slot>
          </div>
        </div>
      </Host>
    );
  }
}
