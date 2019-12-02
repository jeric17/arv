import { Component, h, Prop, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'arv-uploader',
  styleUrl: 'uploader.css'
})
export class Uploader {

  @State() isDragging: boolean;

  @Prop() hideUploadButton: boolean;
  @Prop() placeholder: string;
  @Prop() uploadText: string;
  @Prop() uploadTextVariant: string;

  @Event() arvFilesChange: EventEmitter<FileList>;

  onDragEnd = (e: DragEvent) => {
    this.prevent(e);
  }

  onDragEnter = (e: DragEvent) => {
    this.prevent(e);
  }

  onDragExit = (e: DragEvent) => {
    this.prevent(e);
    this.isDragging = false;
  }

  onDragLeave = (e: DragEvent) => {
    this.prevent(e);
    this.isDragging = false;
  }

  onDragOver = (e: DragEvent) => {
    this.prevent(e);
    this.dragging();
  }

  onDrop = (e: DragEvent) => {
    console.log('uploader', e);
    this.prevent(e);
    this.isDragging = false;

    this.arvFilesChange.emit(e.dataTransfer.files);
  }

  inputChange = (e) => {
    this.arvFilesChange.emit(e.target.files);
  }

  prevent = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }

  dragging = () => {
    if (this.isDragging) {
      return;
    }
    this.isDragging = true;
  }

  get uploadButton() {
    if (this.hideUploadButton) {
      return;
    }

    return (
      <label class="label">
        <arv-text class="labelText" variant={this.uploadTextVariant || 'heading4'}>
          {this.uploadText || 'Upload'}
        </arv-text>
        <input
          onChange={this.inputChange}
          id="file"
          class="input"
          name="files"
          type="file"
          multiple
        />
      </label>
    );
  }

  render() {

    const classNames = {
      root: true,
      isDragging: this.isDragging
    };

    return (
      <div
        class={classNames}
        onDragEnd={this.onDragEnd}
        onDragExit={this.onDragExit}
        onDragEnter={this.onDragEnter}
        onDragLeave={this.onDragLeave}
        onDragOver={this.onDragOver}
        onDrop={this.onDrop}

      >
        <arv-flex layout="column">
          {this.uploadButton}
          <div class="content-wrapper">
            <slot></slot>
          </div>
        </arv-flex>
      </div>
    );
  }
}
