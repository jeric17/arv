import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'arv-accordion-item',
  styleUrl: 'arv-accordion-item.css',
  shadow: true
})
export class AccordionItem {

  @Prop() active: boolean;

  @Prop() color = 'default';

  @Prop() itemTitle: string;  

  render() {
    const rootClassNames = {
      root: true,
    };

    const contentClassNames = {
      content: true,
      active: this.active    
    };

    console.log('AccordionItem')    

    return (
        <div class={rootClassNames}>
            <div class="title">
                <arv-text>asd{this.itemTitle}</arv-text>
                <slot name="controls"></slot>
            </div>
            <div class={contentClassNames}>
                <slot name="content"></slot>
            </div>
        </div>
    );
  }
}
