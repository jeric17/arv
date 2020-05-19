import { Component, Element, Listen, Host, h } from '@stencil/core';

@Component({
  tag: 'arv-accordion',
  styleUrl: 'accordion.css',
  shadow: true
})
export class Accordion {

  @Element() el: HTMLElement;

  /**
   * Listens for the event when accordion item is clicked.
   *
   * @param event.detail - index number of the accordion item.
   */
  @Listen('arvToggleAccordion')
  arvToggleAccordionHandler(event: CustomEvent) {
    const { detail: activeIndex } = event;
    Array.from(this.el.children).forEach((item, index) => {
      if (activeIndex === index) {
        return false;
      }
      item.setAttribute('active', 'false');
    });
  }

  componentDidLoad() {
    /**
     * Adds item-index attribute to each child element.
     */
    Array.from(this.el.children).forEach((item, index) => {
      item.setAttribute('item-index', String(index));
    });
  }

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
