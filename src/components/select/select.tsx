import { Component, Element, Event, EventEmitter, State, Prop, Listen, Host, h } from '@stencil/core';
import { Color } from '../../interface';
import { generateAttrValue, delay } from '../../utils/helpers';

/**
 * @slot value - custom component to display the value.
 * @slot - menu items
 */
@Component({
  tag: 'arv-select',
  styleUrl: 'select.css',
  shadow: true
})
export class Select {

  /**
   * Reference to the host element.
   */
  @Element() el: HTMLElement;

  /**
   * Shows the select menu items
   */
  @State() isOpen: boolean;

  /**
   * Color variant to use.
   */
  @Prop() color: Color;

  /**
   * Position of label and select component value.
   */
  @Prop() flexDirection: 'row' | 'column' | 'row-reverse' | 'column-reverse' | string;

  /**
   * Will occupy the available width space.
   */
  @Prop() full: boolean;

  /**
   * Label of the select component.
   */
  @Prop() label?: string;

  /**
   * Sets the min-width and width of the label.
   */
  @Prop() labelWidth: string;

  /**
   * Callback function triggered on menu select.
   */
  @Prop() selectChange: (data: any) => void;

  /**
   * Value to display in the select component.
   */
  @Prop() value?: string;

  /**
   * The value on selectChange will also return the event object.
   */
  @Prop() valueWithEvent?: boolean;

  /**
   * Event fired if the menu item is clicked.
   */
  @Event() arvSelectChange: EventEmitter<any>;

  /**
   * Listens to a arvMenuSelect event from MenuItem
   * component to fire the close function. The
   * value received will be included in
   * arvSelectChange event.
   *
   * @param value - value from MenuItem component
   */
  @Listen('arvMenuSelect')
  async onMenuSelect(value: any) {
    const data = this.valueWithEvent ? value : value.detail;
    await this.close();
    this.arvSelectChange.emit(data);
    if (this.selectChange) {
      this.selectChange(data);
    }
  }

  open() {
    this.isOpen = true;
    const el: HTMLElement = this.el.shadowRoot.querySelector('.items');
    setTimeout(() => {
      // Try block to bypass jest error
      try {
        el.focus();
      } catch (e) { }
    }, 100);
  }

  blur() {
    this.close();
  }

  render() {
    const hostCls = {
      full: this.full,
      isOpen: this.isOpen,
      ...generateAttrValue(this.color),
      row: false
    };

    const styles = {
      flexDirection: this.flexDirection
    };

    const labelStyle = {};

    if (this.labelWidth) {
      Object.assign(labelStyle, {
        width: this.labelWidth,
        minWidth: this.labelWidth
      });
    }

    if (this.flexDirection && this.flexDirection.indexOf('row') > -1) {
      hostCls.row = true;
    }

    return (
      <Host
        class={hostCls}
        style={styles}
      >
        <label style={labelStyle}>{this.label}</label>
        <div class="control">
          <div
            onClick={() => this.open()}
            class="select"
          >
            <span class="value">
              {this.value}
            </span>
            <slot name="value"></slot>
          </div>
          <div
            onBlur={() => this.blur()}
            tabIndex={-1}
            class="items"
          >
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }

  private close() {
    return delay(() => {
      this.isOpen = false;
    }, 300);
  }
}
