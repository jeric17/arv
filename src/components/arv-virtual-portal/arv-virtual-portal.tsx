import { Component, Element, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'arv-virtual-portal',
  styleUrl: 'arv-virtual-portal.css',
  shadow: true
})
export class VirtualPortal {

  @Element() el: HTMLElement;

  @Prop() content: any;

  @Prop() onSelect: (evt: any) => void;

  @Prop() parentEl: any;

  @Listen('optionSelected')
  optionSelectedHandler(evt) {
    this.onSelect(evt);
  }

  getStyle() {
    const rect = this.parentEl.getBoundingClientRect();
    return {
      top: `${rect.top + 32}px`,
      left: `${rect.x}px`,
      width: `${rect.width}px`
    };
  }

  componentDidLoad() {
    const target: any = this.el.shadowRoot.querySelector('.arv-virtual-portal');
    const { children } = this.el;

    Array.from(children).forEach(d => {
      target.appendChild(d);
    });

    const { top, left, width } = this.getStyle();

    target.style.top = top;
    target.style.left = left;
    target.style.width = width;
    target.zIndex = 999;
  }

  render() {
    return (
      <div class="container">
        <arv-backdrop
          onBackdropClick={() => this.onSelect(null) }
          transparent></arv-backdrop>
        <div class="arv-virtual-portal">
        </div>
      </div>
    );
  }
}
