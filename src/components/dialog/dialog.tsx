import { Component, Event, EventEmitter, Element, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'arv-dialog',
  styleUrl: 'dialog.css',
  shadow: true
})
export class Dialog {
  dialogId?: number;

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
  @Prop() disableBgClose = false;

  /**
   * Will show the dialog.
   */
  @Prop() isOpen: boolean;

  /**
 * Scrollable dialog box. For dialog boxes that
 * exceeds the screen.
 */
  @Prop() scrollable?: boolean;

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

  componentWillLoad() {
    this.dialogId = Math.ceil(Math.random() * 1000000000);
  }

  componentDidLoad() {
    if (this.isOpen) {
      this.open();
    }
  }

  /**
   * Handle close
   */
  close() {
    this.isOpen = false;
    this.arvDialogClose.emit();
  }

  render() {
    return (
      <slot></slot>
    );
  }

  /**
   * Will append the dialog content to document and
   * add event listener to virtual component.
   */
  private open() {
    const el = this.el;
    const arvVirtual = document.createElement('arv-virtual');
    const elChildren = Array.from(this.el.children);

    /**
     * Apply dialog attributes to arv-virtual component.
     */
    arvVirtual.setAttribute('dialog-title', this.dialogTitle || '');
    arvVirtual.setAttribute('disable-bg-close', String(this.disableBgClose));
    arvVirtual.setAttribute('scrollable', String(this.scrollable));
    arvVirtual.setAttribute('dialog-id', String(this.dialogId));

    /**
     * Return the elements back to the arv-dialog element.
     */
    arvVirtual.addEventListener('arvVirtualClose', () => {
      el.setAttribute('is-open', 'false');

      elChildren.forEach(node => {
        el.appendChild(node);
      })
      document.body.removeChild(arvVirtual);
    });

    /**
     * Transfer children to arv-virtual component.
     */
    elChildren.forEach(node => {
      arvVirtual.appendChild(node);
    });

    /**
     * Add the arv-virtual component to document body.
     */
    document.body.appendChild(arvVirtual);
  }
}
