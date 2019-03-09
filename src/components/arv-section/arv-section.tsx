import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'arv-section',
  styleUrl: 'arv-section.css',
  shadow: true
})
export class Section {

  @Prop() icon: string;

  @Prop() sectionTitle: string;

  @Prop() titleColor: string;

  @Prop() titleVariant = 'heading3';

  render() {
    return (
      <div class={{
        root: true,
        primary: this.titleColor === 'primary',
        secondary: this.titleColor === 'secondary'
      }}>
        <div class="title">
          {this.icon && <arv-icon icon={this.icon}></arv-icon>}
          <arv-text variant={this.titleVariant}>{this.sectionTitle}</arv-text>
        </div>
        <div class="content">
          <slot />
        </div>
      </div>
    );
  }
}
