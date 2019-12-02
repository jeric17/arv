import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'arv-radio-button',
  styleUrl: 'radio-button.css',
  shadow: true
})
export class RadioButton {

  @Prop() color: string;
  @Prop() disabled: boolean;
  @Prop() label: string;
  @Prop() radioClick: any;
  @Prop() size: 'normal' | 'large' = 'normal';
  @Prop() textVariant = 'caption';
  @Prop() value: boolean;

  @Event() arvRadioClick: EventEmitter;

  get radioClass() {
    return {
      radio: true,
      active: this.value,
      normal: this.size === 'normal',
      large: this.size === 'large',
      disabled: this.disabled,
      primary: this.color === 'primary',
      secondary: this.color === 'secondary',
      error: this.color === 'error',
      success: this.color === 'success',
    };
  }

  get rootClass() {
    return {
      root: true,
    };
  }

  get textEl() {
    if (!this.label) {
      return;
    }

    return (
      <arv-text
        class="text"
        variant={this.textVariant}
      >
        {this.label}
      </arv-text>
    );
  }

  click = (event: Event) => {
    if (this.disabled) {
      return false;
    }

    if (this.radioClick) {
      this.radioClick(event);
    }

    this.arvRadioClick.emit(event);
  }

  render() {

    return (
      <arv-flex
        onClick={this.click}
        class={this.rootClass}
        items="center"
      >
        <div class={this.radioClass}>
          <div class="indicator"></div>
        </div>
        {this.textEl}
        <slot></slot>
      </arv-flex>
    );
  }
}
