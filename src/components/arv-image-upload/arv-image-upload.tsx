import { Component, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'arv-image-upload',
  styleUrl: 'arv-image-upload.css',
  shadow: true
})
export class ImageUpload {

  @Prop() disabled: boolean;

  @Prop() size: string;

  @Prop() imgSrc: string;

  @Prop() onUpload: (e: any) => void;

  @Prop() onRemove: () => void;  

  @Event() upload: EventEmitter;

  @Event() remove: EventEmitter;

  change(evt) {
    this.upload.emit({
      target: evt.target,
      files: evt.target.files    
    });
    if (this.onUpload) {
      this.onUpload(evt.target);
    }
  }

  removeItem() {
    this.remove.emit();
    if (this.onRemove) {
      this.onRemove();
    }
  }

  render() {
    const rootClassNames = {
      root: true,
      large: this.size === 'large',
      disabled: this.disabled
    };

    const imgClassNames = {
      img: true
    };

    const imgStyle = {};

    if (this.imgSrc) {
      imgStyle['background-image'] = `url(${this.imgSrc})`;
    }

    const text = (() => {
      if (this.imgSrc) {
        return 'Change Image';
      }
      return 'Upload Image';
    })();    

    return (
      <div class={rootClassNames}>
        {this.imgSrc && (
          <div class="remove-button">
            <arv-button
              disabled={this.disabled}
              buttonClick={this.removeItem.bind(this)}
              icon="close"
              variant="flat-icon"
            ></arv-button>
          </div>  
        )}
        <div class={imgClassNames} style={imgStyle}>
          {!this.imgSrc && <arv-icon size="xlarge" icon="photo"></arv-icon>}
        </div>
        <div class="hover">
          <span class="hoverText">{text}</span>
        </div>
        <input
          disabled={this.disabled}
          class="input"
          type="file"
          onChange={this.change.bind(this)} />
      </div>
    );
  }
}
