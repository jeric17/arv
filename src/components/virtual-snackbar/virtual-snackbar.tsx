import { Component, Element, Prop, Event, EventEmitter, Watch, Host, h } from '@stencil/core';
import { Color } from '../../interface';
import { generateAttrValue } from '../../utils/helpers';

@Component({
  tag: 'arv-virtual-snackbar',
  styleUrl: 'virtual-snackbar.css',
  shadow: true,
})
export class VirtualSnackbar {

  durationTimeout = null;

  @Element() el: HTMLElement;

  @Prop() color?: Color = '';

  @Prop() message?: string;

  @Prop() duration: number;

  @Prop() hideClose?: boolean;

  @Prop() icon?: string;

  /**
   * Position of the snack bar in horizontal axis.
   */
  @Prop() xPosition: 'left' | 'right' | 'center' = 'center';

  /**
   * Position of the snack bar in vertical axis.
   */
  @Prop() yPosition: 'top' | 'bottom' | 'center' = 'top';

  @Prop() counter: number;
  @Watch('counter')
  async durationCheck() {
    this.init();
  }

  @Event() arvVirtualSnackbarClose: EventEmitter;

  componentDidLoad() {
    this.init();
  }

  disconnectedCallback() {
    clearTimeout(this.durationTimeout);
  }

  init() {
    if (!this.duration) {
      return false;
    }
    clearTimeout(this.durationTimeout);
    this.durationTimeout = setTimeout(() => {
      this.close();
    }, this.duration);
  }

  close = () => {
    this.el.classList.add('out');
    setTimeout(() => {
      this.arvVirtualSnackbarClose.emit();
    }, 300);
  }

  closeBtnClick = () => {
    clearTimeout(this.durationTimeout);
    this.close();
  }

  render() {
    const cls = {
      top: this.yPosition === 'top',
      bottom: this.yPosition === 'bottom',
      left: this.xPosition === 'left',
      right: this.xPosition === 'right',
      verticalCenter: this.yPosition === 'center',
      horizontalCenter: this.xPosition === 'center',
      hideClose: this.hideClose,
      ...generateAttrValue(this.color)
    };

    return (
      <Host class={cls}>
        <div class="snackbar">
          {this.icon && (
            <arv-icon
              class="sb-icon"
              icon={this.icon}></arv-icon>
          )}
          <arv-text wrap="nowrap">{this.message}</arv-text>
          <slot></slot>
          {!this.hideClose && (
            <arv-button
              class="sb-btn"
              onClick={this.closeBtnClick}
              color={this.color}
              icon="clear"
              is-icon
            ></arv-button>
          )}
        </div>
      </Host>
    );
  }
}
