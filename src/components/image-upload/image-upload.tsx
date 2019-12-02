import { Component, h, Element, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'arv-image-upload',
  styleUrl: 'image-upload.css',
  shadow: true
})
export class ImageUpload {

  @Element() el: HTMLElement;

  @Prop() disabled: boolean;

  @Prop() hashKey: number;

  @Prop() size: string;

  @Prop() imgSrc: string;

  @Prop() uploadImage: (e: any) => void;

  @Prop() removeImage: () => void;

  @Event() arvUploadImage: EventEmitter;

  @Event() arvRemoveImage: EventEmitter;

  change(evt) {
    this.arvUploadImage.emit({
      target: evt.target,
      files: evt.target.files
    });
    if (this.uploadImage) {
      this.uploadImage(evt.target);
    }
  }

  removeItem() {
    const input = this.el.shadowRoot.querySelector('input');
    input.value = null;
    this.arvRemoveImage.emit();
    if (this.removeImage) {
      this.removeImage();
    }
  }

  render() {
    const rootClassNames = {
      root: true,
      xsmall: this.size === 'xsmall',
      small: this.size === 'small',
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
              variant="raised-icon"
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
