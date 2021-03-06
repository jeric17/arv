import { Component, Element, State, Prop, Host, Method, h } from '@stencil/core';
import { Color } from '../../interface';

@Component({
  tag: 'arv-snackbar',
  styleUrl: 'snackbar.css',
  shadow: true
})
export class Snackbar {

  /**
   * Flag to let the virtual snackbar to update
   * if it is already opened.
   */
  counter = 0;

  /**
   * Reference to the host element.
   */
  @Element() el: HTMLElement;

  /**
   * If the snackbar is open.
   */
  @State() isOPen = false;

  /**
   * Color variant to use.
   */
  @Prop() color?: Color;

  /**
   * Text content of the snackbar.
   */
  @Prop() message?: string;

  /**
   * How long will the snackbar show.
   */
  @Prop() duration: number;

  /**
   * Will not render the snackbar's close button.
   */
  @Prop() hideClose = false;

  /**
   * An icon on the left side of the snackbar.
   */
  @Prop() icon?: string;

  /**
   * Position of the snack bar in horizontal axis.
   */
  @Prop() xPosition: 'left' | 'right' | 'center' = 'center';

  /**
   * Position of the snack bar in vertical axis.
   */
  @Prop() yPosition: 'top' | 'bottom' | 'center' = 'top';

  /**
   * Opens up a snackbar.
   */
  @Method()
  async open() {
    this.initOpen();
  }

  private initOpen() {
    const el = this.el;
    /**
     * If the snackbar is arealy opened. Update the counter attribute
     * to notify the virtual snackbar and let it handle
     * updating the duration.
     */
    if (this.isOPen) {
      const virtual = document.body.querySelector('arv-virtual-snackbar');
      virtual.setAttribute('counter', String(this.counter));

      this.counter++;

      return this.el;
    }

    /**
     * Create element.
     */
    const virtual = document.createElement('arv-virtual-snackbar');
    const elChildren = Array.from(this.el.children);

    /**
     * Apply prop attributes.
     */
    if (this.color) {
      virtual.setAttribute('color', String(this.color));
    }
    virtual.setAttribute('duration', String(this.duration));
    virtual.setAttribute('message', String(this.message || ''));
    virtual.setAttribute('counter', String(this.counter));
    virtual.setAttribute('x-position', this.xPosition);
    virtual.setAttribute('y-position', this.yPosition);
    if (this.icon) {
      virtual.setAttribute('icon', this.icon);
    }
    if (this.hideClose) {
      virtual.setAttribute('hide-close', 'true');
    }

    /**
     * Listen to close event.
     */
    virtual.addEventListener('arvVirtualSnackbarClose', () => {
      elChildren.forEach(node => {
        el.appendChild(node);
      })

      document.body.removeChild(virtual);
      this.isOPen = false;
    });

    /**
     * Transfer children to arv-virtual component.
     */
    elChildren.forEach(node => {
      virtual.appendChild(node);
    });

    document.body.appendChild(virtual);

    this.counter++;
    this.isOPen = true;

    /**
     * Just return the host element.
     */
    return this.el;
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
