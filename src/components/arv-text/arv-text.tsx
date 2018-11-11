import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'arv-text',
  styleUrl: 'arv-text.css',
  shadow: true
})
export class Text {

  @Prop() color: string;
  /* oneOf: [heading1, heading2, heading3, body1, body2, caption, subtle] */
  @Prop() variant: string = 'body1';

  @Prop() weight: number;

  @Prop() strong: boolean;

  @Prop() noWrap: boolean;

  @Prop() preWrap: boolean;  

  @Prop() strike: boolean;

  render() {
    const rootClassNames = {
      root: true,
      primary: this.color === 'primary',
      secondary: this.color === 'secondary',
      heading1: this.variant === 'heading1',
      heading2: this.variant === 'heading2',
      heading3: this.variant === 'heading3',
      heading4: this.variant === 'heading4',
      body1: this.variant === 'body1',
      body2: this.variant === 'body2',
      caption: this.variant === 'caption',
      caption2: this.variant === 'caption2',
      subtle: this.variant === 'subtle',
      strong: this.strong,
      noWrap: this.noWrap,
      strike: this.strike,
      preWrap: this.preWrap
    };

    const styles = {
      'font-weight': `${this.weight}`
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
