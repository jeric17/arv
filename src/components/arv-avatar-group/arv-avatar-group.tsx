import { Component, Prop, Event, EventEmitter, State, Watch } from '@stencil/core';

@Component({
  tag: 'arv-avatar-group',
  styleUrl: 'arv-avatar-group.css',
  shadow: true
})
export class AvatarGroup {

  @State() imageItemsData: string[];

  @Prop() index: number;

  @Prop() showMore: () => void;

  @Prop() maxItems: any = 0;

  @Prop() imageItems: string | string[];

  @Watch('imageItems')
  handleImageItems() {
    this.load();
  }

  @Prop() size = 'small';

  @Prop() styles: any;

  @Prop() bordered: boolean;

  @Event() onShowMore: EventEmitter;

  componentWillLoad() {
    this.load();
  }

  load() {
    if (!this.imageItems) {
      this.imageItemsData = [];
      return false;
    }
    if (typeof this.imageItems !== 'string') {
      this.imageItemsData = this.imageItems;
      return false;
    }
    try {
      const imageItems = JSON.parse(this.imageItems);
      this.imageItemsData = imageItems;
    } catch(e) {
      console.error(e);
    }
  }

  render() {
    const imageLength = this.imageItemsData.length;
    const more = imageLength > Number(this.maxItems) ? (imageLength - this.maxItems) : 0;
    const MoreBtn = () => (
      <div
        onClick={() => {
          if (this.showMore) {
            this.showMore()
          }
        }}
        class={{
          more: true,
          small: this.size === 'small',
        }}
      >
        <arv-text>+{more}</arv-text>
      </div>
    );

    const imageItems = this.imageItemsData.slice(0, this.maxItems);

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
