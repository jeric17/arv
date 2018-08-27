import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'arv-card-media',
  styleUrl: 'arv-card-media.css',
  shadow: true
})
export class CardMedia {

  @Prop() imageSrc: string;

  render() {
    const styles = {
      'background-image': `url(${this.imageSrc})`
    };
    return (
      <div class="arv-card-media" style={styles}></div>
    );
  }
}
