import { Component, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'arv-accordion-item',
  styleUrl: 'arv-accordion-item.css',
  shadow: true
})
export class AccordionItem {

  @Prop() active: boolean;

  @Prop() color = 'default';

  @Prop() itemTitle: string;  

  @Event() itemClick: EventEmitter;  

  render() {
    const rootClassNames = {
      root: true,
    };

    const contentClassNames = {
      content: true,
      active: this.active    
    };

    return (
        <div class={rootClassNames}>
            <div class="header">
                <div onClick={e => this.itemClick.emit(e)} class="title">
                  <arv-text strong>asd{this.itemTitle}</arv-text>
                </div>
                <div class="controls">
                  <slot name="controls"></slot>
                </div>
            </div>
            <div class={contentClassNames}>
                <arv-transition animation="fadeIn">
                  <slot name="content"></slot>
                </arv-transition>
            </div>
        </div>
    );
  }
}