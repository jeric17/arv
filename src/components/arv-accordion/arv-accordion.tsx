import { Component, h, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'arv-accordion',
  styleUrl: 'arv-accordion.css',
  shadow: true
})
export class Accordion {
  @Prop() onItemChange: (index: any) => void;

  @Listen('arvToggleAccordion')
  itemClickHandler(event: CustomEvent) {
    if (this.onItemChange) {
      this.onItemChange(event.detail);
    }
  }

  render() {
    return (
      <div class="root">
        <slot />  
      </div>
    );
  }
}
