import { Component, h, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'arv-container',
  styleUrl: 'container.css',
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

  @Prop() position: string;

  @Prop() styles: any;

  @Prop() width: string;

  @Prop() full: boolean;

  @Prop() color: string;

  @Prop() scrollable: boolean;

  @Prop() containerClick: (e: MouseEvent) => void;

  @Listen('click')
  handleClick(event) {
    if (this.containerClick) {
      this.containerClick(event);
    }
  }

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
      margin: this.margin,
      position: this.position,
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
