import { Component, Element, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'arv-menu',
  styleUrl: 'arv-menu.css',
  shadow: true
})
export class Menu {

  @Element() el: HTMLElement;

  @State() show: boolean = false;

  @Prop() yPosition: string = 'bottom';
  @Prop() xPosition: string = 'right';

  @Prop() disableBackdropClick: boolean;  

  @Listen('mouseup')
  mouseUpHandler() {
    this.toggle();
  }

  @Listen('blur')
  blurHandler() {
    setTimeout(() => {
      if (this.disableBackdropClick) {
        return false;  
      }
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
      left: this.yPosition === 'left',
      right: this.yPosition === 'right'
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
