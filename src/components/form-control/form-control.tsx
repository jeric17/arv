import { Component, h } from '@stencil/core';

@Component({
  tag: 'arv-form-control',
  styleUrl: 'form-control.css',
  shadow: true
})
export class FormControl {
  render() {
    return (
      <div class="root">
        <slot />
      </div>
    );
  }
}