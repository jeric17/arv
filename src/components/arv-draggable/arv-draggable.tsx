import { Component, h, Element, Prop, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'arv-draggable',
  styleUrl: 'arv-draggable.css',
  shadow: true,
})
export class Draggable {

  @Element() el: HTMLElement;

  @State() isOver: boolean;
  @State() isTopOver: boolean;
  @State() isBottomOver: boolean;

  @Prop() hashKey: string;
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
  @Prop() dropBottom: (evt: DragEvent, k1: string, k2: string) => void;
  @Prop() dropLeft: (evt: DragEvent, k1: string, k2: string) => void;
  @Prop() dropRight: (evt: DragEvent, k1: string, k2: string) => void;
  @Prop() disabled = false;
  @Prop() isLast: boolean;
  @Prop() direction: 'vertical' | 'horizontal' = 'vertical';

  @Event() itemDrag: EventEmitter;
  @Event() itemDrop: EventEmitter;
  @Event() itemStart: EventEmitter;
  @Event() itemOver: EventEmitter;
  @Event() itemEnter: EventEmitter;
  @Event() itemEnd: EventEmitter;
  @Event() itemExit: EventEmitter;
  @Event() itemLeave: EventEmitter;
  @Event() itemDropTop: EventEmitter;
  @Event() itemDropBottom: EventEmitter;
  @Event() itemDropLeft: EventEmitter;
  @Event() itemDropRight: EventEmitter;

  applyEvent(evt: DragEvent, propName: string, eventName: string, options = {}) {
    evt.dataTransfer.setData('text/plain', this.hashKey);

    if (this[propName]) {
      this[propName](evt, this.hashKey, options);
    }

    const data = {
      dragEvent: evt,
      key: this.hashKey
    };

    this[eventName].emit({
      ...data,
      ...options,
    });
  }

  onDragOver = (evt: DragEvent) => {
    evt.preventDefault();
    this.isOver = true;
    this.applyEvent(evt, 'over', 'itemOver');
  }

  onDragStart= (evt: DragEvent) => {
    console.log('dragstart');
    evt.dataTransfer.dropEffect = 'copy';
    this.applyEvent(evt, 'start', 'itemStart');
  }

  onDragEnter = (evt: DragEvent) => {
    console.log('dragenter');
    this.applyEvent(evt, 'enter', 'itemEnter');
  }

  onDragLeave= (evt: DragEvent) => {
    this.applyEvent(evt, 'leave', 'itemLeave');
    this.isOver = false;
  }

  onDragEnd = (evt: DragEvent) => {
    this.applyEvent(evt, 'end', 'itemEnd');
  }

  onDragExit= (evt: DragEvent) => {
    this.applyEvent(evt, 'exit', 'itemExit');
  }

  onDrag = (evt: DragEvent) => {
    console.log('drag');
    this.applyEvent(evt, 'drag', 'itemDrag');
  }

  onDrop = (evt: DragEvent) => {
    console.log('draggable', evt);
    evt.preventDefault();
    const key = evt.dataTransfer.getData('Text');

    this.applyEvent(evt, 'drop', 'itemDrop', {
      target: key
    });
  }

  onDragTop = () => {
    if (this.isTopOver) {
      return false;
    }
    this.isTopOver = true;
  }

  onDragLeaveTop = () => {
    this.isTopOver = false;
  }

  onDropTop = (evt: DragEvent) => {
    evt.preventDefault();
    this.isTopOver = false;

    const key = evt.dataTransfer.getData('Text');

    this.applyEvent(evt, 'dropTop', 'itemDropTop', {
      target: key
    });
    this.applyEvent(evt, 'dropLeft', 'itemDropLeft', {
      target: key
    });
  }

  onDragBottom = () => {
    if (this.isBottomOver) {
      return false;
    }
    this.isBottomOver = true;
  }

  onDragLeaveBottom = () => {
    this.isBottomOver = false;
  }

  onDropBottom = (evt: DragEvent) => {
    evt.preventDefault();
    this.isBottomOver = false;

    const key = evt.dataTransfer.getData('Text');

    this.applyEvent(evt, 'dropBottom', 'itemDropBottom', {
      target: key
    });
    this.applyEvent(evt, 'dropRight', 'itemDropRight', {
      target: key
    });
  }

  render() {
    const isVertical = this.direction === 'vertical';

    const rootClass = {
      draggable: true,
      isOver: this.isOver,
      primary: this.color === 'primary',
      secondary: this.color === 'secondary',
      disabled: this.disabled,
      horizontal: !isVertical
    };

    const topClass = {
      top: true,
      isTopOver: this.isTopOver,
      horizontalLine: !isVertical
    };

    const bottomClass = {
      bottom: true,
      isBottomOver: this.isBottomOver,
      horizontalLine: !isVertical
    };

    return (
      <div
        class={rootClass}
        onDragEnd={this.onDragEnd}
        onDragExit={this.onDragExit}
        onDragEnter={this.onDragEnter}
        onDragLeave={this.onDragLeave}
        onDragOver={this.onDragOver}
        onDragStart={this.onDragStart}
        onDrop={this.onDrop}
        onDrag={this.onDrag}
        draggable={!this.disabled}
      >
        <div
          class={topClass}
          onDragEnter={this.onDragTop}
          onDragLeave={this.onDragLeaveTop}
          onDrop={this.onDropTop}
        ></div>
        <arv-flex class="slotWrapper" items="center">
          {this.showIcon && (
             <arv-icon
               icon="drag_indicator"
               noMargin
               ></arv-icon>
          )}
          <slot />
        </arv-flex>
        <slot />
        {this.isLast && (
           <div
             class={bottomClass}
             onDragEnter={this.onDragBottom}
             onDragLeave={this.onDragLeaveBottom}
             onDrop={this.onDropBottom}
             ></div>
        )}
      </div>
    );
  }
}
