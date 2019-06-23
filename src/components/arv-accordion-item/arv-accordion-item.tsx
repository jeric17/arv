import { Component, h, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'arv-accordion-item',
  styleUrl: 'arv-accordion-item.css',
  shadow: true
})
export class AccordionItem {

  @Prop() animated = true;  

  @Prop() active: boolean;

  @Prop() color = 'default';

  @Prop() itemIndex: any;

  @Prop() itemTitle: string;  

  @Event() arvClick: EventEmitter;

  render() {
    const rootClassNames = {
      root: true,
      active: this.active,
      animated: this.animated
    };

    const contentClassNames = {
      content: true,
      animated: this.animated
    };

    return (
        <div class={rootClassNames}>
            <div
              onClick={() => this.arvClick.emit(this.itemIndex)} 
              class="header"
            >
                <arv-flex items="center">
                  <arv-icon class="icon" size="medium" icon="arrow_drop_down"></arv-icon>
                  <arv-text variant="caption">{this.itemTitle}</arv-text>
                </arv-flex>
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
