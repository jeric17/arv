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

  @Prop() actions: any;

  @Prop() dialogTitle: string;

  @Prop() full: boolean;

  @Prop() bgColor = '#fff';

  @Prop() scrollable: boolean;

  @Prop() show: boolean;

  @Prop() handleClose: () => void;

  @Prop() hideClose: boolean;

  @Watch('show')
  showChanged() {
    if (this.show) {
      this._addBodyOverlay();
      return this._showContent();
    }

    this._removeBodyOverlay();
    return this._hideContent();
  }

  @Prop() parent: HTMLElement;

  @Event() onOk: EventEmitter;

  @Event() onClose: EventEmitter;

  onHandleClose(ok = false) {
    const portal = document.body.querySelector(`:scope > ${this.portal}`);
    portal['removeDialog']();
    setTimeout(() => {
      if (this.handleClose) {
        this.handleClose();
      }
      if (!ok) {
        this.onClose.emit(true);
        return false;
      }
      this.onOk.emit(true);
    }, 300);
  }

  private _addBodyOverlay() {
    document.body.style.overflow = 'hidden';
  }

  private _removeBodyOverlay() {
    document.body.style.overflow = 'auto';
  }

  private _showContent() {
    const dialog = this.el.shadowRoot.querySelector(`.${this.rootClassName}`);
    const slot = this.el.children[0];
    const elem = document.createElement(this.portal);

    if (this.scrollable) {
      elem.setAttribute('scrollable', 'true');
    }

    if (this.full) {
      elem.setAttribute('full', 'true');
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
        margin={this.full ? '' : '1em'}
        class={this.rootClassName}
        hidden={!this.show}>
        <arv-dialog-content
          full={this.full}
          style={{'--paper-color': this.bgColor}}
        >
          <div class={{
            content: true,
            'arv-dialog-content': true,
            contentFull: this.full
          }}>
            {!this.hideClose && (
               <arv-flex justify="between" items="center">
                 <arv-text variant="heading3">{this.dialogTitle}</arv-text>
                 <arv-button
                   variant="flat-icon"
                   icon="close"
                   buttonClick={this.onHandleClose.bind(this, false)}></arv-button>
               </arv-flex>
            )}
            {slot}
            {this.actions && [
               <arv-divider transparent/>,
               <arv-flex justify="end">
                 {this.actions.cancel && (
                    <arv-button
                      variant={this.actions.cancel.variant}
                      color={this.actions.cancel.color}
                      buttonClick={this.onHandleClose.bind(this, false)}>
                      {this.actions.cancel.text || 'Cancel'}
                    </arv-button>
                 )}
                 <arv-divider layout="column" transparent />
                 {this.actions.ok && (
                    <arv-button
                      variant={this.actions.ok.variant || 'raised'}
                      color={this.actions.ok.color || 'primary'}
                      buttonClick={this.onHandleClose.bind(this, true)}>
                      {this.actions.ok.text || 'Ok'}
                    </arv-button>
                 )}
               </arv-flex>
            ]}
          </div>
        </arv-dialog-content>
      </arv-container>
    );
  }
}
