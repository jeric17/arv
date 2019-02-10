import { Component, Element, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'arv-menu',
  styleUrl: 'arv-menu.css',
  shadow: true
})
export class Menu {

  @Element() el: HTMLElement;

  @State() hide: boolean;
  @State() show: boolean;

  @Prop() yPosition = 'bottom';
  @Prop() xPosition = 'right';

  @Prop() disableBackdropClick: boolean;

  @Listen('mouseup')
  mouseUpHandler() {
    this.toggle();
  }

  @Listen('blur')
  blurHandler() {
    if (!this.disableBackdropClick) {
      this.hide = true;
    }
    setTimeout(() => {
      if (this.disableBackdropClick) {
        return false;
      }
      this.hide = false;
      this.show = false;
    }, 250);
  }

  toggle() {
    this.show = !this.show;
    if (this.show) {
      this.el.focus();
    }
  }

  hostData() {
    return {
      tabindex: '-1'
    };
  }

  render() {
    const rootClassNames = {
      root: true
    };

    const menuListClassNames = {
      list: true,
      show: this.show,
      top: this.yPosition === 'top',
      bottom: this.yPosition === 'bottom',
      left: this.xPosition === 'left',
      right: this.xPosition === 'right',
      listHide: this.hide
    };

    return (
      <div class={rootClassNames}>
        <div class="menu">
          <slot name="menu" />
        </div>
        <ul class={menuListClassNames}>
          <arv-paper>
            <slot name="menu-list" />
          </arv-paper>
        </ul>
      </div>
    );
  }
}
