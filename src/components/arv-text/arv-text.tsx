import { Component, Prop } from '@stencil/core';
import cx from 'classnames';

@Component({
  tag: 'arv-text',
  styleUrl: 'arv-text.css',
  shadow: true
})
export class Text {

  /* name: variant
   * oneOf: [heading1, heading2, heading3, body1, body2, caption, subtle] */
  @Prop() variant: string = 'body1';

  render() {
    const rootClassNames = cx('arv-text', {
      heading1: this.variant === 'heading1',
      heading2: this.variant === 'heading2',
      heading3: this.variant === 'heading3',
      heading4: this.variant === 'heading4',
      body1: this.variant === 'body1',
      body2: this.variant === 'body2',
      caption: this.variant === 'caption',
      subtle: this.variant === 'subtle',
    });
    return (
      <div class={rootClassNames}>
        <slot></slot>
      </div>
    );
  }
}
