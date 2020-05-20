import { Component, Event, EventEmitter, Prop, Host, h } from '@stencil/core';
import { Color } from '../../interface';
import { generateAttrValue } from '../../utils/helpers';

@Component({
  tag: 'arv-accordion-item',
  styleUrl: 'accordion-item.css',
  shadow: true
})
export class AccordionItem {

  @Prop({ mutable: true, reflect: true }) active = false;

  @Prop() color: Color;

  @Prop() itemIndex: number;

  @Event() arvToggleAccordion: EventEmitter<number>;

  toggle = () => {
    this.active = !this.active;
    this.arvToggleAccordion.emit(this.itemIndex);
  }

  render() {
    const cls = {
      ...generateAttrValue(this.color),
      active: this.active,
    };

    return (
      <Host class={cls}>
        <div
          class="title"
          onClick={this.toggle}
        >
          <slot name="title"></slot>
        </div>
        <div class="content">
          <slot></slot>
          <arv-divider></arv-divider>
        </div>
      </Host>
    );
  }
}
