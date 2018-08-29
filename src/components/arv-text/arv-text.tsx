import { Component, Prop } from '@stencil/core';
import cx from 'classnames';

@Component({
  tag: 'arv-text',
  styleUrl: 'arv-text.css',
  shadow: true
})
export class Text {

  /* oneOf: [heading1, heading2, heading3, body1, body2, caption, subtle] */
  @Prop() variant: string = 'body1';

  @Prop() weight: number;

  @Prop() strong: boolean;

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
      strong: this.strong
    });

    const styles = {
      'fonr-weight': `${this.weight}`
    };

    return (
      <div
        style={styles}
        class={rootClassNames}>
        <slot></slot>
      </div>
    );
  }
}
