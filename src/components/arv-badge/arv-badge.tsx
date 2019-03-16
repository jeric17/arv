import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'arv-badge',
  styleUrl: 'arv-badge.css',
  shadow: true
})
export class Badge {

  @Prop() color: string;

  @Prop() size: string;

  render() {

    const classNames = {
      badge: true,
      primary: this.color === 'primary',
      secondary: this.color === 'secondary',
      error: this.color === 'error',
      warning: this.color === 'warning',
      success: this.color === 'success',
      small: this.size === 'small'
    };

    return (
      <div class="root">
        <div class={classNames}>
          <slot name="badge"></slot>
        </div>
        <slot></slot>
      </div>
    );
  }
}
