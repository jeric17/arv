import { Component, h } from '@stencil/core';

@Component({
  tag: 'arv-code',
  styleUrl: 'code.css'
})
export class Code {
  render() {
    return (
      <div class="root">
        <code>
        </code>
      </div>
    );
  }
}