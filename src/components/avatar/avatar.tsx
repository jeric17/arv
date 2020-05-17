import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'arv-avatar',
  styleUrl: 'avatar.css',
  shadow: true
})
export class Avatar {

  /**
   * Alt attr of the img element.
   */
  @Prop() alt: string;

  /**
   * Image source of the img element
   */
  @Prop() imgSrc: string;

  /**
   * Size variant to set.
   */
  @Prop() size: string = 'medium';

  render() {
    const cls = {
      small: this.size === 'small',
      medium: this.size === 'medium',
      large: this.size === 'large',
    };

    return (
      <Host class={cls}>
        <img
          src={this.imgSrc}
          alt={this.alt} />
      </Host>
    );
  }
}
