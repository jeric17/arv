import { Component, Prop } from '@stencil/core';
import cx from 'classnames';

@Component({
  tag: 'arv-header',
  styleUrl: 'arv-header.css',
  shadow: true
})
export class Header {

  /* oneOf: [default, primary, secondary, inherit] */
  @Prop() color: string = 'primary';

  @Prop() padded: boolean = false;  

  /* oneOf: [static, inherit, absolute, relative, fixed] */
  @Prop() position: string = 'static';

  @Prop() shadow: boolean;

  render() {
    const rootClassNames = cx('arv-header', {
      'default': this.color === 'default',
      primary: this.color === 'primary',
      secondary: this.color === 'secondary',
      inherit: this.color === 'inherit',
      'static': this.position === 'static',
      absolute: this.position === 'absolute',
      relative: this.position === 'relative',
      fixed: this.position === 'fixed',
      shadow: this.shadow,
      padded: this.padded
    });
    return (
      <div class={rootClassNames}>
        <slot></slot>
      </div>
    );
  }
}
