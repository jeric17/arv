import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'arv-alert-text',
  styleUrl: 'alert-text.css',
  shadow: true
})
export class AlertText {

  @Prop() color = 'default';

  @Prop() textAlign = 'start';

  @Prop() icon: string;

  render() {
    const rootClassNames = {
      root: true,
      'default': this.color === 'default',
      error: this.color === 'error',
      success: this.color === 'success',
      primary: this.color === 'primary',
      secondary: this.color === 'secondary',
      warning: this.color === 'warning'
    };

    return (
      <arv-flex
        justify={this.textAlign}
        class={rootClassNames}
        padded
      >
        <arv-flex items="center" fullWidth={false}>
          {Boolean(this.icon) && <arv-icon icon={this.icon} />}
          <slot />
        </arv-flex>
      </arv-flex>
    );
  }
}
