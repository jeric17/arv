import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'arv-container',
  styleUrl: 'arv-container.css',
  shadow: true
})
export class Container {

  // oneOf [main]
  @Prop() variant: string;

  @Prop() max1080: boolean;

  @Prop() height: string;

  @Prop() hidden: boolean;

  @Prop() margin: string;

  @Prop() padding: string;

  @Prop() styles: any;

  @Prop() width: string;

  @Prop() full: boolean;

  @Prop() color: string;

  @Prop() scrollable: boolean;

  render() {
    const rootClassNames = {
      container: true,
      full: this.full,
      hidden: this.hidden,
      responsive: this.variant === 'responsive',
      max1080: this.max1080,
      primary: this.color === 'primary',
      secondary: this.color === 'secondary',
      warning: this.color === 'warning',
      light: this.color === 'light',
      dark: this.color === 'dark',
      scrollable: this.scrollable
    };

    const style = {
      height: this.height,
      width: this.width,
      padding: this.padding,
      margin: this.margin
    };

    const styles = {
      ...this.styles,
      ...style
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
