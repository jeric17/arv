import { Component, Element, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'arv-dialog-portal',
  styleUrl: 'arv-dialog-portal.css',
  shadow: true
})
export class DialogPortal {

  @Element() el: HTMLElement;

  @State() backdropAnimation = 'fadeIn';

  @Prop() content: any;

  @Prop() scrollable: boolean;

  @Method('removeDialog')
  removeDialog() {
    const target = this.el.shadowRoot.querySelector('.arv-dialog-portal');

    const dialogContent = target.querySelector('arv-dialog-content');
    dialogContent['animation'] = 'slideOutBottom';
    this.backdropAnimation = 'fadeOut';
  }

  componentDidLoad() {
    const target = this.el.shadowRoot.querySelector('.arv-dialog-portal');
    const { children } = this.el;

    target.appendChild(children[0]);

    const dialogContent = target.querySelector('arv-dialog-content');
    dialogContent['animation'] = 'slideInBottom';
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
