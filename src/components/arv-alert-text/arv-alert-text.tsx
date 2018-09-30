import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'arv-alert-text',
  styleUrl: 'arv-alert-text.css',
  shadow: true
})
export class AlertText {

  @Prop() variant = 'default';

  render() {
    const rootClassNames = {
      root: true,
      'default': this.variant === 'default',
      error: this.variant === 'error',
      success: this.variant === 'success'
    };

    return (
      <div class={rootClassNames}>
        <slot />
      </div>
    );
  }
}
