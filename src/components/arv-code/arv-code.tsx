import { Component } from '@stencil/core';

@Component({
  tag: 'arv-code',
  styleUrl: 'arv-code.css'
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
