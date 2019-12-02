import { Component, h, Element, Listen, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'arv-virtual-portal',
  styleUrl: 'virtual-portal.css',
  shadow: true
})
export class VirtualPortal {

  @Element() el: HTMLElement;

  @State() isBottom: boolean;

  @Prop() content: any;

  @Prop() select: (evt: any) => void;

  @Prop() parentEl: any;

  @Prop() value: string;
  @Watch('value')
  handleValueChange() {
    this.updateTop();
  }

  @Prop() variant: string;

  @Prop() inputText: string;

  @Listen('optionSelected')
  optionSelectedHandler(evt) {
    this.select(evt);
  }

  getStyle(h) {
    const rect = this.parentEl.getBoundingClientRect();
    // const top = (() => {
    //   if (this.variant === 'select') {
    //     return this.parentEl.offsetTop;
    //   }
    //   return rect.top;
    // })();
    const { top: _t } = rect;
    const top = _t + window.scrollY;

    if ((top + rect.height + h - window.scrollY) > window.innerHeight) {
      this.isBottom = false;
      return {
        top: `${top - h}px`,
        left: `${rect.x}px`,
        width: `${rect.width}px`
      };
    }
    this.isBottom = true;
    return {
      top: `${top + rect.height}px`,
      left: `${rect.x}px`,
      width: `${rect.width}px`
    };
  }

  updateTop() {
    setTimeout(() => {
      const transitionEl: any = this.el.shadowRoot.querySelector('arv-transition');
      const target: any = this.el.shadowRoot.querySelector('.arv-virtual-portal');
      const { top } = this.getStyle(target.clientHeight);
      transitionEl.style.top = top;
    }, 100);
  }

  componentDidLoad() {
    const transitionEl: any = this.el.shadowRoot.querySelector('arv-transition');
    const target: any = this.el.shadowRoot.querySelector('.arv-virtual-portal');
    const { children } = this.el;

    Array.from(children).forEach(d => {
      target.appendChild(d);
    });
    const h = target.clientHeight;
    const { top, left, width } = this.getStyle(h);

    transitionEl.style.position = 'relative';
    transitionEl.style.display = 'block';
    transitionEl.style.top = top;
    // target.style.top = top;
    transitionEl.style.left = left;
    transitionEl.style.width = width;
    target.style.width = width;
    transitionEl.zIndex = 999;

    const targetOption: HTMLElement = this.el.shadowRoot.querySelector(`arv-select-option[data-value="${this.value}"]`);

    if (targetOption) {
      target.scrollTo(0, (targetOption.offsetTop - (h / 2)));
    }
  }

  render() {

    return (
      <div class="container">
        <arv-backdrop
          onBackdropClick={() => this.select(null)}
          transparent></arv-backdrop>
        <arv-transition animation="scaleHeight">
          <div class="arv-virtual-portal">
          </div>
        </arv-transition>
      </div>
    );
  }
}
