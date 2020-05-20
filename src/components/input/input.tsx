import { Component, Event, EventEmitter, Method, Prop, Host, h } from '@stencil/core';
import { generateAttrValue } from '../../utils/helpers';
import { Color, Size } from '../../interface';
import { Watch } from '@stencil/core';
@Component({
  tag: 'arv-input',
  styleUrl: 'input.css',
  shadow: true
})
export class Input {

  /**
   * Reference to the input element.
   */
  private inputEl?: HTMLInputElement | any;

  /**
   * Sets autocomplete for the input.
   */
  @Prop() autocomplete: 'on' | 'off' = 'off';

  /**
   * Activates autocorrect for the input.
   */
  @Prop() autocorrect: 'on' | 'off' = 'off';

  /**
   * Sets autofocus once the input loads.
   */
  @Prop() autofocus = false;

  /**
   * Sets the color variant to use.
   */
  @Prop() color: Color;

  /**
   * Disableds the input element.
   */
  @Prop() disabled?: boolean;

  /**
   * Position of label and select component value.
   */
  @Prop() flexDirection: 'row' | 'column' | 'row-reverse' | 'column-reverse' | string;

  /**
   * Material icon to use.
   */
  @Prop() icon?: string;

  /**
   * Callback prop function triggered on value change.
   */
  @Prop() inputChange: (value: any) => void;

  /**
   * Label of the input.
   */
  @Prop() label?: string;

  /**
    * Sets the min-width and width of the label.
    */
  @Prop() labelWidth?: string;

  /**
   * max value for a ranged type
   */
  @Prop() max?: string;

  /**
   * Maximum character length
   */
  @Prop() maxlength?: number;

  /**
   * min value for a ranged type
   */
  @Prop() min?: string;

  /**
   * Minimum character length
   */
  @Prop() minlength?: number;

  /**
   * Name of the input element.
   */
  @Prop() name?: string;

  /**
   * Placeholder text for the input element.
   */
  @Prop() placeholder?: string;

  /**
   * Sets the size variant to use.
   */
  @Prop() size: Size;

  /**
   * type of input element.
   */
  @Prop() type = 'text';

  /**
   * Value of the input element.
   */
  @Prop({ mutable: true }) value?: string | number | null = '';

  @Watch('value')
  valueChanged() {
    this.arvChange.emit(this.value);
    if (this.inputChange) {
      this.inputChange(this.value);
    }
  }

  /**
   * Blur event from input
   */
  @Event() arvBlur: EventEmitter<any>;

  /**
   * Emitted when this.value changes
   */
  @Event() arvChange: EventEmitter<any>;

  /**
   * Emitted when input has focus
   */
  @Event() arvFocus: EventEmitter<any>;

  /**
   * keydown event emitted from input element.
   */
  @Event() arvKeydown: EventEmitter<any>;

  /**
   * Public api that returns the input element.
   */
  @Method()
  async getInputElement() {
    return this.inputEl;
  }

  @Method()
  async inputFocus() {
    if (this.inputEl) {
      this.inputEl.focus();
    }
  }

  input = () => {
    this.value = this.inputEl.value;
  }

  blur = event => {
    this.arvBlur.emit(event);
  }

  focus = event => {
    this.arvFocus.emit(event);
  }

  keydown = event => {
    this.arvKeydown.emit(event);
  }

  render() {
    const cls = {
      ...generateAttrValue(this.color),
      ...generateAttrValue(this.size),
      hasIcon: Boolean(this.icon),
      row: this.flexDirection && this.flexDirection.indexOf('row') > -1,
    };
    const labelStyle = {};
    if (this.labelWidth) {
      Object.assign(labelStyle, {
        width: this.labelWidth,
        minWidth: this.labelWidth
      });
    }
    const rootStyles: any = {};
    if (this.flexDirection) {
      rootStyles.flexDirection = this.flexDirection;
    }
    return (
      <Host style={rootStyles} class={cls}>
        <label
          style={labelStyle}
          htmlFor="input"
          class="label"
        >{this.label}</label>
        {this.icon && (
          <arv-icon icon={this.icon}></arv-icon>
        )}
        <input
          ref={input => this.inputEl = input}
          autoComplete={this.autocomplete}
          autoCorrect={this.autocorrect}
          autoFocus={this.autofocus}
          disabled={this.disabled}
          id="input"
          min={this.min}
          max={this.max}
          minLength={this.minlength}
          maxLength={this.maxlength}
          name={this.name}
          placeholder={this.placeholder}
          type={this.type}
          value={this.value}
          onInput={this.input}
          onBlur={this.blur}
          onFocus={this.focus}
          onKeyDown={this.keydown} />
      </Host>
    );
  }
}
