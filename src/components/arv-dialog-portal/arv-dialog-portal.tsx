import { Component, Element, Prop } from '@stencil/core';
import cx from 'classnames';

@Component({
  tag: 'arv-dialog-portal',
  styleUrl: 'arv-dialog-portal.css',
  shadow: true
})
export class DialogPortal {

  @Element() el: HTMLElement;

  @Prop() content: any;

  componentDidLoad() {
    const target = this.el.shadowRoot.querySelector('.arv-dialog-portal');
    const { children } = this.el;

    target.appendChild(children[0]);
  }

  render() {
    const rootClassNames = cx('arv-dialog-portal', {});
    return (
      <div class={rootClassNames}>
      </div>
    );
  }
}
