import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'arv-avatar-group',
  styleUrl: 'arv-avatar-group.css',
  shadow: true
})
export class AvatarGroup {

  @Prop() index: number;

  @Prop() showMore: () => void;

  @Prop() maxItems = 0;

  @Prop() imageItems: string[] = [];

  @Prop() size = 'small';

  @Prop() styles: any;

  @Prop() bordered: boolean;

  @Event() onShowMore: EventEmitter;

  render() {
    const imageLength = this.imageItems.length;
    const more = imageLength > this.maxItems ? (imageLength - this.maxItems) : 0;
    const MoreBtn = () => (
      <div
        onClick={() => this.showMore()}
        class={{
          more: true,
          small: this.size === 'small',
        }}
      >
        <arv-text>+{more}</arv-text>
      </div>
    );

    const imageItems = this.imageItems.slice(0, this.maxItems);

    const styles: any = {};

    if (this.bordered) {
      styles.borderWidth = '2px';
      styles.borderStyle = 'solid';
      styles.borderColor = '#eee';
    }

    return (
      <arv-flex>
        {imageItems.map((d, i) => {
           if (i > 0) {
             styles.marginLeft = '-10px';
           }
           return (
             <arv-avatar
               styles={Object.assign(styles, this.styles)}
               imgSrc={d}
               size={this.size}
               ></arv-avatar>
           );
        })}
        {Boolean(this.maxItems && more) && <MoreBtn />}
      </arv-flex>
    );
  }
}
