import { Component, Element, Prop, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'arv-draggable',
  styleUrl: 'arv-draggable.css',
  shadow: true,
})
export class Draggable {

  @Element() el: HTMLElement;

  @State() isOver: boolean;

  @State() isTopOver: boolean;

  @Prop() key: string;

  @Prop() showIcon = true;

  @Prop() color = 'default';

  @Prop() drag: (evt: DragEvent, key: string) => void;

  @Prop() over: (evt: DragEvent, key: string) => void;

  @Prop() start: (evt: DragEvent, key: string) => void;

  @Prop() enter: (evt: DragEvent, key: string) => void;

  @Prop() leave: (evt: DragEvent, key: string) => void;

  @Prop() end: (evt: DragEvent, key: string) => void;

  @Prop() exit: (evt: DragEvent, key: string) => void;

  @Prop() drop: (evt: DragEvent, k1: string, k2: string) => void;

  @Prop() dropTop: (evt: DragEvent, k1: string, k2: string) => void;

  @Prop() disabled = false;

  @Event() itemDrag: EventEmitter;

  @Event() itemDrop: EventEmitter;

  @Event() itemStart: EventEmitter;

  @Event() itemOver: EventEmitter;

  @Event() itemEnter: EventEmitter;

  @Event() itemEnd: EventEmitter;

  @Event() itemExit: EventEmitter;

  @Event() itemLeave: EventEmitter;

  @Event() itemDropTop: EventEmitter;

  applyEvent(evt: DragEvent, propName: string, eventName: string, options = {}) {
    evt.dataTransfer.setData('text/plain', this.key);

    if (this[propName]) {
      this[propName](evt, this.key, options);
    }

    const data = {
      dragEvent: evt,
      key: this.key
    };

    this[eventName].emit({
      ...data,
      ...options,
    });
  }

  onDragOver(evt: DragEvent) {
    evt.preventDefault();
    this.isOver = true;
    this.applyEvent(evt, 'over', 'itemOver');
  }

  onDragStart(evt: DragEvent) {
    evt.dataTransfer.dropEffect = 'copy';
    this.applyEvent(evt, 'start', 'itemStart');
  }

  onDragEnter(evt: DragEvent) {
    this.applyEvent(evt, 'enter', 'itemEnter');
  }

  onDragLeave(evt: DragEvent) {
    this.applyEvent(evt, 'leave', 'itemLeave');
    this.isOver = false;
  }

  onDragEnd(evt: DragEvent) {
    this.applyEvent(evt, 'end', 'itemEnd');
  }

  onDragExit(evt: DragEvent) {
    this.applyEvent(evt, 'exit', 'itemExit');
  }

  onDrag(evt: DragEvent) {
    this.applyEvent(evt, 'drag', 'itemDrag');
  }

  onDrop(evt: DragEvent) {
    evt.preventDefault();  
    const key = evt.dataTransfer.getData('Text');

    this.applyEvent(evt, 'drop', 'itemDrop', {
      target: key
    });
  }

  onDragTop() {
    if (this.isTopOver) {
      return false;
    }
    this.isTopOver = true;
  }

  onDragLeaveTop() {
    this.isTopOver = false;
  }

  onDropTop(evt: DragEvent) {
    evt.preventDefault();  
    this.isTopOver = false;

    const key = evt.dataTransfer.getData('Text');

    this.applyEvent(evt, 'dropTop', 'itemDropTop', {
      target: key
    });
  }

  render() {
    const rootClass = {
      draggable: true,
      isOver: this.isOver,
      primary: this.color === 'primary',
      secondary: this.color === 'secondary',
      disabled: this.disabled
    };

    const topClass = {
      top: true,
      isTopOver: this.isTopOver
    };

    return (
      <div
        class={rootClass}
        onDragEnd={this.onDragEnd.bind(this)}
        onDragExit={this.onDragExit.bind(this)}
        onDragEnter={this.onDragEnter.bind(this)}
        onDragLeave={this.onDragLeave.bind(this)}
        onDragOver={this.onDragOver.bind(this)}
        onDragStart={this.onDragStart.bind(this)}
        onDrop={this.onDrop.bind(this)}
        onDrag={this.onDrag.bind(this)}
        draggable={!this.disabled}
      >
        <div
          class={topClass}
          onDragEnter={this.onDragTop.bind(this)}
          onDragLeave={this.onDragLeaveTop.bind(this)}
          onDrop={this.onDropTop.bind(this)}
        >
        </div>
        <arv-flex items="center">
          {this.showIcon && (
             <arv-icon
               icon="drag_indicator"
               noMargin
               ></arv-icon>
          )}
          <slot />
        </arv-flex>
        <slot />
      </div>
    );
  }
}
