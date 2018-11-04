import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'arv-section-title',
  styleUrl: 'arv-section-title.css',
  shadow: true
})
export class SectionTitle {

  @Prop() textVariant = 'caption';

  @Prop() textColor = 'secondary';  

  render() {
    return (
      <div class="root">
        <arv-text variant={this.textVariant} color={this.textColor}>
          <slot />
        </arv-text>
      </div>
    );
  }
}