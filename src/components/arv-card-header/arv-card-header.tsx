import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'arv-card-header',
  styleUrl: 'arv-card-header.css',
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
      <arv-text variant="heading4">{this.titleHeader}</arv-text>
    );
    const SubHeader = () => (
      <arv-text variant="caption">{this.subHeader}</arv-text>
    );

    return (
      <div
        style={this.styles}
        class="card-header">
        <arv-flex justify="between">
          {this.avatarImage && <Avatar />}
          <arv-flex layout="column">
            {this.titleHeader && <Title />}
            <arv-divider 
              height="4px"
              transparent />
            {this.subHeader && <SubHeader />}
          </arv-flex>
          {this.action && this.action}
        </arv-flex>
      </div>
    );
  }
}
