import { Component, Prop, Element, Listen, Host, h } from '@stencil/core';
import { Color } from '../../interface';
import { generateAttrValue } from '../../utils/helpers';

@Component({
  tag: 'arv-accordion',
  styleUrl: 'accordion.css',
  shadow: true
})
export class Accordion {

  @Element() el: HTMLElement;

  /**
   * Color variant to use.
   */
  @Prop({ reflect: true }) color: Color;

  /**
   * Listens for the event when accordion item is clicked.
   *
   * @param event.detail index number of the accordion item.
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
     * Adds item-index  attribute to
     * each child element.
     */
    Array.from(this.el.children).forEach((item, index) => {
      item.setAttribute('item-index', String(index));
    });
  }

  render() {
    const cls = {
      ...generateAttrValue(this.color)
    };
    return (
      <Host class={cls}>
        <slot />
      </Host>
    );
  }
}
