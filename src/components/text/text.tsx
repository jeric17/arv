import { Component, h, Element, Prop, State } from '@stencil/core';

@Component({
  tag: 'arv-text',
  styleUrl: 'text.css',
  shadow: true
})
export class Text {

  @Element() el: HTMLElement;

  @State() show = true;

  @Prop() isRequired: boolean;
  @Prop() color: string;
  /* oneOf: [heading1, heading2, heading3, body1, body2, caption, subtle] */
  @Prop() variant: string = 'body1';
  @Prop() lineHeight: string;
  @Prop() maxChars: number;
  @Prop() weight: number;
  @Prop() strong: boolean;
  @Prop() noWrap: boolean;
  @Prop() preWrap: boolean;
  @Prop() strike: boolean;
  @Prop() textOverflow: boolean;
  @Prop() textAlign = 'left';
  @Prop() textShadow: boolean;
  @Prop() textDecoration: string;

  componentDidUpdate() {
    this.setText();
  }

  componentDidLoad() {
    if (this.maxChars) {
      this.show = false;
    }
    setTimeout(() => {
      this.setText();
      this.show = true;
    }, 100);
  }

  setText() {
    const { innerText } = this.el;
    if (this.maxChars && innerText.length > this.maxChars) {
      this.el.innerText = innerText.substring(0, this.maxChars) + '...';
    }
  }

  render() {
    const rootClassNames = {
      root: true,
      primary: this.color === 'primary',
      secondary: this.color === 'secondary',
      primaryDark: this.color === 'primary-dark',
      secondaryDark: this.color === 'secondary-dark',
      error: this.color === 'error',
      success: this.color === 'success',
      dark: this.color === 'dark',
      light: this.color === 'light',
      warning: this.color === 'warning',
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
      preWrap: this.preWrap,
      textOverflow: this.textOverflow,
      textCenter: this.textAlign === 'center',
      textLeft: this.textAlign === 'left',
      textRight: this.textAlign === 'right',
      textJustify: this.textAlign === 'justify',
      show: this.show,
      textShadow: this.textShadow
    };

    const styles = {
      'font-weight': `${this.weight}`
    };

    if (this.textDecoration) {
      styles['text-decoration'] = this.textDecoration;
    }

    if (this.lineHeight) {
      styles['line-height'] = this.lineHeight;
    }

    return (
      <div
        style={styles}
        class={rootClassNames}>
        <slot></slot>
        {this.isRequired && (
          <span class="required">*</span>
        )}
      </div>
    );
  }
}
