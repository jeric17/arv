import { Component, Element, Event, EventEmitter, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'arv-form',
  styleUrl: 'arv-form.css'
})
export class Form {

  @Prop() layout = 'column';

  @Element() el:HTMLElement;

  @Event() onFormSubmit: EventEmitter;

  @Listen('onInputChange')
  onInputChangeHandler() {
    // TODO
  }  

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
      <form class="arv-form">
        <arv-flex layout={this.layout}>
          <slot />
        </arv-flex>
      </form>
    );
  }
}
