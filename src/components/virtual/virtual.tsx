import { Component, Prop, Event, EventEmitter, Host, h } from '@stencil/core';

/**
 * Dynamically added component to display a dialog component
 * on top of the page.
 * slot - content of the dialog component
 */
@Component({
  tag: 'arv-virtual',
  styleUrl: 'virtual.css',
  shadow: true
})
export class Virtual {

  /**
   * Dialog title shown at the header part.
   */
  @Prop() dialogTitle?: string;

  /**
   * Disables background click to close.
   */
  @Prop() disableBgClose: boolean;

  /**
   * Scrollable dialog box. For dialog boxes that
   * exceeds the screen.
   */
  @Prop() scrollable?: boolean;

  /**
   * Trigger close handler.
   */
  @Event() arvVirtualClose: EventEmitter;

  render() {
    const cls = {
      scrollable: this.scrollable
    };
    return (
      <Host class={cls}>
        <div class="wrapper">
          <div
            onClick={() => {
              if (!this.disableBgClose) {
                this.arvVirtualClose.emit();
              }
            }}
            class="backdrop"></div>
          <div class="content">
            <div class="header">
              {this.dialogTitle && (
                <h1 class="title">{this.dialogTitle}</h1>
              )}
              <slot name="header"></slot>
              <arv-button
                class="close-btn"
                is-icon
                onClick={() => {
                  this.arvVirtualClose.emit();
                }}>
                <arv-icon icon="clear"></arv-icon>
              </arv-button>
            </div>
            <div class="inner">
              <slot></slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
