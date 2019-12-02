import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'arv-info',
  styleUrl: 'info.css'
})
export class Info {

  @Prop() color: string;

  @Prop() imageSrc: string;

  @Prop() icon: string;

  @Prop() infoDescription: string;

  @Prop() infoTitle: string;

  @Prop() variant: string;

  render() {
    const rootClassNames = {
      root: true,
      primary: this.color === 'primary',
      secondary: this.color === 'secondary',
      warning: this.color === 'warning',
      error: this.color === 'error'
    };
    return (
      <div class={rootClassNames}>
        {this.icon && (
          <div class="image">
            <arv-icon size="large" icon={this.icon}></arv-icon>
          </div>
        )}
        <arv-flex layout="column" padded>
          {this.infoTitle && [
            <arv-text variant="heading4">{this.infoTitle}</arv-text>,
            <arv-divider transparent />
          ]}
          {this.infoDescription && [
            <arv-text variant="caption">{this.infoDescription}</arv-text>,
          ]}
          <slot />
        </arv-flex>
      </div>
    );
  }
}
