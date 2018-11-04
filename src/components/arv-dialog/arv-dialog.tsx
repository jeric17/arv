import { Component, Element, Event, EventEmitter, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'arv-dialog',
  styleUrl: 'arv-dialog.css',
  shadow: true
})
export class Dialog {
  rootClassName = 'arv-dialog';
  portal = 'arv-dialog-portal';

  @Element() el: HTMLElement;

  @Prop() scrollable: boolean;

  @Prop() show: boolean;

  @Watch('show')
  showChanged() {
    if (this.show) {
      return this._showContent();
    }

    return this._hideContent();
  }

  @Prop() parent: HTMLElement;

  @Event() onClose: EventEmitter;

  onHandleClose() {
    const portal = document.body.querySelector(`:scope > ${this.portal}`);
    portal['removeDialog']();
    setTimeout(() => {
      this.onClose.emit(true);  
    }, 300);
  }

  private _showContent() {
    const dialog = this.el.shadowRoot.querySelector(`.${this.rootClassName}`);
    const slot = this.el.children[0];
    const elem = document.createElement(this.portal);

    if (this.scrollable) {
      elem.setAttribute('scrollable', 'true');
    }

    elem.appendChild(dialog);
    elem.appendChild(slot);

    document.body.appendChild(elem);
  }

  private _hideContent() {
    const portal = document.body.querySelector(`:scope > ${this.portal}`);
    if (!portal) {
      return false;  
    }
    this.el.shadowRoot.appendChild(portal.shadowRoot.querySelector(`.${this.rootClassName}`));
    this.el.appendChild(portal.children[0]);

    document.body.removeChild(portal); 
  }

  render() {
    const slot = this.show ? <slot></slot> : null;

    return (
      <arv-container
        margin="1em"
        class={this.rootClassName}
        hidden={!this.show}>
        <arv-dialog-content>
          <div class="content arv-dialog-content">
            <arv-button
              variant="flat-icon"
              icon="close"
              buttonClick={this.onHandleClose.bind(this)}></arv-button>
            {slot}
          </div>
        </arv-dialog-content>
      </arv-container>
    );
  }
}
