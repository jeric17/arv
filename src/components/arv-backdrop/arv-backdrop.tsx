import { Component, Prop } from '@stencil/core';
import cx from 'classnames';

@Component({
  tag: 'arv-backdrop',
  styleUrl: 'arv-backdrop.css',
  shadow: true
})
export class Backdrop {

  @Prop() onBackdropClick: (event: Event) => void;

  @Prop() transparent: boolean;

  @Prop() position: string = 'fixed';

  render() {
    const rootClassNames = cx('arv-backdrop', {
      transparent: this.transparent,
      fixed: this.position === 'fixed',
      absolute: this.position === 'absolute',
      relative: this.position === 'relative'
    });

    return (
      <div
        onClick={this.onBackdropClick}
        class={rootClassNames}></div>
    );
  }
}
