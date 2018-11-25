import { Component, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'arv-image-upload',
  styleUrl: 'arv-image-upload.css',
  shadow: true
})
export class ImageUpload {

  @Prop() size: string;

  @Prop() imgSrc: string;

  @Event() upload: EventEmitter;  

  change(evt) {
    this.upload.emit({
      target: evt.target,
      files: evt.target.files    
    });
  }

  render() {
    const rootClassNames = {
      root: true,
      large: this.size === 'large'
    };

    const imgClassNames = {
      img: true
    };

    const imgStyle = {};

    if (this.imgSrc) {
      imgStyle['background-image'] = `url(${this.imgSrc})`;
    }

    return (
      <div class={rootClassNames}>
        <div class={imgClassNames} style={imgStyle}>
          {!this.imgSrc && <arv-icon size="xlarge" icon="photo"></arv-icon>}
        </div>
        <div class="hover">
          <span class="hoverText">Upload Image</span>
        </div>
        <input
          class="input"
          type="file"
          onChange={this.change.bind(this)} />
      </div>
    );
  }
}
