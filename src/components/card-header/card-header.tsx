import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'arv-card-header',
  styleUrl: 'card-header.css',
  shadow: true
})
export class CardHeader {

  @Prop() action: any;

  @Prop() avatarImage: string;

  /* oneOf: [default, primary, secondary] */
  @Prop() color: string = 'default';

  @Prop() subHeader: string;

  @Prop() titleHeader: string;

  @Prop() styles: any;

  render() {
    const Avatar = () => (
      <arv-avatar imgSrc={this.avatarImage}></arv-avatar>
    );
    const Title = () => (
      <arv-text variant="heading5" strong>{this.titleHeader}</arv-text>
    );
    const SubHeader = () => (
      <arv-text style={{ width: '100%' }} variant="caption2" textOverflow>{this.subHeader}</arv-text>
    );

    return (
      <div
        style={this.styles}
        class="card-header">
        <arv-flex justify="between">
          {this.avatarImage && <Avatar />}
          {this.avatarImage && <arv-divider layout="column"></arv-divider>}
          <arv-flex layout="column">
            {this.titleHeader && <Title />}
            {this.subHeader && <SubHeader />}
          </arv-flex>
          {this.action && this.action}
        </arv-flex>
      </div>
    );
  }
}
