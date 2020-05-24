import { Component, State, Event, EventEmitter, h } from '@stencil/core';

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
    'Badge',
    'Button',
    'Checkbox',
    'Chip',
    'Dialog',
    'Flex',
    'Header',
    'Icon',
    'Input',
    'Menu',
    'Paper',
    'Radio',
    'Select',
    'Snackbar',
    'Stepper',
    'Switch',
    'Table',
    'Tabs',
    'Tooltip'
  ];

  @State() selectedItem = 'Accordion';

  @Event() docSelectComponent: EventEmitter<string>;

  click = (itemName: string) => {
    this.docSelectComponent.emit(itemName);
    this.selectedItem = itemName;
  }

  render() {
    return (
      <arv-side-pane>
        <arv-list>
          {this.items.map(item => (
            <arv-list-item
              active-color="light"
              isActive={this.selectedItem === item}
              onClick={() => this.click(item)}>
              {item}
            </arv-list-item>
          ))}
        </arv-list>
      </arv-side-pane>
    );
  }
}
