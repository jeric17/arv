import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'arv-draggable'
})
export class Draggable {

  @Prop() key: string;

  @Prop() over: (evt: DragEvent, key: string) => void;

  @Prop() start: (evt: DragEvent, key: string) => void;

  @Prop() drop: (evt: DragEvent, k1: string, k2: string) => void;

  onDragOver(evt: DragEvent) {
    evt.preventDefault();
    if (this.over) {
      this.over(evt, this.key);
    }
  }

  onDragStart(evt: DragEvent) {
    evt.dataTransfer.setData('text/plain', this.key);
    if (this.start) {
      this.start(evt, this.key);
    }
  }

  onDrop(evt: DragEvent) {
    const key = evt.dataTransfer.getData('Text');
    if (this.drop) {
      this.drop(evt, key, this.key);
    }
  }

  render() {
    return (
      <div
        onDragStart={this.onDragStart.bind(this)}
        onDragOver={this.onDragOver.bind(this)}
        onDrop={this.onDrop.bind(this)}
        draggable
      >
        <slot />
      </div>
    );
  }
}
