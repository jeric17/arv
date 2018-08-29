import { Component, Prop } from '@stencil/core';
import cx from 'classnames';

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

  render() {
    const Avatar = () => (
      <arv-avatar imgSrc={this.avatarImage}></arv-avatar>
    );
    const Title = () => (
      <arv-text variant="heading3">{this.titleHeader}</arv-text>
    );
    const SubHeader = () => (
      <arv-text variant="heading4">{this.subHeader}</arv-text>
    );
    const rootClassNames = cx('arv-card-header', {});

    return (
      <div class={rootClassNames}>
        <arv-flex justify="between">
          {this.avatarImage && <Avatar />}
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
