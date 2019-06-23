import { Component, h, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'arv-draggable-wrapper',
  shadow: true
})
export class DraggableWrapper {

  @Prop() layout = 'column';

  @Listen('itemDrop')
  dropHandler(event) {
    console.log(event);
  }

  @Listen('itemStart')
  startHandler(event) {
    console.log(event);
  }

  @Listen('itemOver')
  overHandler() {
    /* console.log(event); */
  }

  @Listen('itemEnd')
  endHandler() {
    console.log('end');
  }

  @Listen('itemExit')
  exitHandler() {
    console.log('exit');
  }

  @Listen('itemEnter')
  enterHandler() {
    console.log('enter');
  }

  @Listen('itemLeave')
  leaveHandler() {
    console.log('leave');
  }

  render() {
    return (
      <arv-flex layout={this.layout}>
        <slot />
      </arv-flex>
    );
  }
}
