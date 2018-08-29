import { Component, Element, Prop, Watch } from '@stencil/core';
import cx from 'classnames';

@Component({
  tag: 'arv-dialog',
  styleUrl: 'arv-dialog.css',
  shadow: true
})
export class Dialog {
  rootClassName = 'arv-dialog';
  portal = 'arv-dialog-portal';

  @Element() el: HTMLElement;

  @Prop() handleClose: () => void;

  @Prop() show: boolean;

  @Watch('show')
  showChanged() {
    if (this.show) {
      return this._showContent();
    }

    return this._hideContent();
  }

  @Prop() parent: HTMLElement;

  private _showContent() {
    const dialog = this.el.shadowRoot.querySelector(`.${this.rootClassName}`);
    const slot = this.el.children[0];
    const elem = document.createElement(this.portal);

    elem.appendChild(dialog);
    elem.appendChild(slot);

    document.body.appendChild(elem);
  }

  private _hideContent() {
    const portal = document.body.querySelector(`:scope > ${this.portal}`);

    this.el.shadowRoot.appendChild(portal.shadowRoot.querySelector(`.${this.rootClassName}`));
    this.el.appendChild(portal.children[0]);

    document.body.removeChild(portal);
  }

  render() {
    const rootClassNames = cx(this.rootClassName, {});
    const slot = this.show ? <slot></slot> : null;

    return (
      <div class={rootClassNames}>
        <div class="content arv-dialog-content">
          <arv-button onButtonClick={this.handleClose}>close</arv-button>
          {slot}
        </div>
      </div>
    );
  }
}
