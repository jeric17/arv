import { Component, h, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'arv-list-item',
  styleUrl: 'list-item.css',
  shadow: true
})
export class ListItem {

  @Prop() buttonSize = 'medium';

  @Prop() icon: string;

  @Prop() itemClick: (e: any, index: number) => void;

  @Prop() itemIndex: number;

  @Prop() showIcon: boolean;

  @Prop() textAlign = 'start';

  @Prop() showDivider = true;

  @Event() arvItemClick: EventEmitter;

  click(e) {
    if (this.itemClick) {
      this.itemClick(e, this.itemIndex)
    }

    this.arvItemClick.emit(e);
  }

  render() {
    return (
      <li
        class="root">
        <arv-button
          icon={this.icon}
          textAlign={this.textAlign}
          buttonClick={this.click.bind(this)}
          variant="flat"
          rounded={false}
          size={this.buttonSize}
          full>
          <slot></slot>
        </arv-button>
        {this.showDivider && (<arv-divider height="0px"></arv-divider>)}
      </li>
    );
  }
}
