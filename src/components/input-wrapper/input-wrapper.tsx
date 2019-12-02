import { Component, h } from '@stencil/core';

@Component({
  tag: 'arv-input-wrapper',
  styleUrl: 'input-wrapper.css'
})
export class InputWrapper {

  render() {
    return (
      <div class="arv-input-wrapper">
        <slot></slot>
      </div>
    );
  }
}
