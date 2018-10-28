import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'arv-card',
  styleUrl: 'arv-card.css',
  shadow: true
})
export class Card {

  @Prop() width: string;

  @Prop() height: string;

  @Prop() styles: any;

  render() {
    const style = {
      height: this.height,
      width: this.width
    };

    const styles = {
      ...this.styles,
      ...style
    };

    return (
      <div
        style={styles}
        class="arv-card">
        <arv-paper>
          <slot></slot>
        </arv-paper>
      </div>
    );
  }
}
