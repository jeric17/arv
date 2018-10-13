import { Component, Element, Prop } from '@stencil/core';

@Component({
  tag: 'arv-dialog-portal',
  styleUrl: 'arv-dialog-portal.css',
  shadow: true
})
export class DialogPortal {

  @Element() el: HTMLElement;

  @Prop() content: any;

  @Prop() scrollable: boolean;

  componentDidLoad() {
    const target = this.el.shadowRoot.querySelector('.arv-dialog-portal');
    const { children } = this.el;

    target.appendChild(children[0]);
  }

  render() {
    const classNames = {
      'arv-dialog-portal': true,
      scrollable: this.scrollable  
    };

    return (
      <div class={classNames}>
        <arv-backdrop></arv-backdrop>
      </div>
    );
  }
}
