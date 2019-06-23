import { Component, h, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'arv-accordion',
  styleUrl: 'arv-accordion.css',
  shadow: true
})
export class Accordion {
  @Prop() onItemChange: (index: any) => void;

  @Listen('arvClick')
  itemClickHandler(event: CustomEvent) {
    if (this.onItemChange) {
      this.onItemChange(event.detail);
    }
  }

  render() {
    return (
      <arv-flex layout="column">
        <slot />
      </arv-flex>
    );
  }
}
