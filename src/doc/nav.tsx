import { Component, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'doc-nav',
  shadow: true
})
export class DocNav {

  items = [
    'Accordion',
    'AlertText',
    'Avatar',
    'AvatarGroup',
    'Button',
    'Flex'
  ];

  @Event() docSelectComponent: EventEmitter<string>;

  click = (itemName: string) => {
    this.docSelectComponent.emit(itemName);
  }

  render() {
    return (
      <arv-side-pane>
        <arv-list>
          {this.items.map(item => (
            <arv-list-item onClick={() => this.click(item)}>
              {item}
            </arv-list-item>
          ))}
        </arv-list>
      </arv-side-pane>
    );
  }
}
