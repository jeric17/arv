import { Component } from '@stencil/core';

@Component({
  tag: 'arv-form-control',
  styleUrl: 'arv-form-control.css',
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