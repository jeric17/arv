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

  @Prop() value: string;

  @Prop() variant: string;

  @Prop() inputText: string;

  @Listen('optionSelected')
  optionSelectedHandler(evt) {
    this.onSelect(evt);
  }

  getStyle(h) {
    const rect = this.parentEl.getBoundingClientRect();
    // const top = (() => {
    //   if (this.variant === 'select') {
    //     return this.parentEl.offsetTop;
    //   }
    //   return rect.top;
    // })();
    const { top } = rect;

    if ((top + 32 + h) > window.innerHeight) {
      return {
        top: `${top - h}px`,
        left: `${rect.x}px`,
        width: `${rect.width}px`
      };  
    }
    return {
      top: `${top + 32}px`,
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
    const h = target.clientHeight;
    const { top, left, width } = this.getStyle(h);

    target.style.top = top;
    target.style.left = left;
    target.style.width = width;
    target.zIndex = 999;

    const targetOption: HTMLElement = this.el.shadowRoot.querySelector(`arv-select-option[data-value="${this.value}"]`);

    if (targetOption) {
      target.scrollTo(0, (targetOption.offsetTop - (h / 2)));
    }
  }

  render() {
    return (
      <div class="container">
        <arv-backdrop
          onBackdropClick={() => this.onSelect(null) }
          transparent></arv-backdrop>
        <arv-transition animation="fadeIn">
          <div class="arv-virtual-portal">
          </div>
        </arv-transition>
      </div>
    );
  }
}
