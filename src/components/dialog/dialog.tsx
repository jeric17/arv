import { Component, Event, EventEmitter, Element, Prop, Watch, Host, h } from '@stencil/core';

@Component({
  tag: 'arv-dialog',
  styleUrl: 'dialog.css',
  shadow: true
})
export class Dialog {

  /**
   * Reference to component element.
   */
  @Element() el: HTMLElement;

  /**
   * Dialog title shown at the header part.
   */
  @Prop() dialogTitle?: string;

  /**
   * Disables background click to close.
   */
  @Prop() disableBgClose: boolean;

  /**
   * Will show the dialog.
   */
  @Prop() isOpen: boolean;

  @Watch('isOpen')
  isOpenChanged(value: boolean) {
    if (value) {
      this.open();
    }
  }

  /**
   * Listen to this event to handle close
   */
  @Event() arvDialogClose: EventEmitter;

  componentDidLoad() {
    if (this.isOpen) {
      this.open();
    }
  }

  /**
   * Handle close
   */
  close() {
    this.arvDialogClose.emit();
  }

  render() {
    const dialogCls = {
      dialog: true,
    };

    return (
      <Host>
        <div class={dialogCls}>
          {this.dialogTitle && (
            <h1 class="title">{this.dialogTitle}</h1>
          )}
          <arv-button
            class="close-btn"
            onClick={() => this.close()}>
            <arv-icon icon="clear"></arv-icon>
          </arv-button>
          <slot></slot>
        </div>
      </Host>
    );
  }

  /**
   * Will append the dialog content to document and
   * add event listener to virtual component
   */
  private open() {
    const dialogEl = this.el.shadowRoot.querySelector('.dialog');
    const arvVirtual = document.createElement('arv-virtual');

    if (!this.disableBgClose) {
      arvVirtual.addEventListener('arvVirtualClose', () => {
        this.close();
      });
    }

    arvVirtual.appendChild(dialogEl);
    document.body.appendChild(arvVirtual);
  }
}
