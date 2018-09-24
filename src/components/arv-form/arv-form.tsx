import { Component, Element, Event, EventEmitter, Listen } from '@stencil/core';

@Component({
  tag: 'arv-form',
  shadow: true
})
export class Form {

  @Element() el:HTMLElement;

  @Event() onFormSubmit: EventEmitter;

  @Listen('onInputEnter')
  onEnterHandler(ev) {
    this.onFormSubmit.emit({
      event: ev,
      element: this.el
    });
  }

  @Listen('onButtonClick')
  onButtonClickHandler(ev) {
    if (ev.detail.type === 'submit') {
      this.onFormSubmit.emit({
        event: ev,
        element: this.el
      });
    }
  }

  submit(ev) {
    this.onFormSubmit.emit({
      event: ev,
      element: this.el
    });
  }

  render() {
    return (
      <form onSubmit={this.submit.bind(this)}>
        <slot />
      </form>
    );
  }
}
