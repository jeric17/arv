import { Component, Element, Event, EventEmitter, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'arv-form',
})
export class Form {

  @Prop() layout = 'column';

  @Element() el:HTMLElement;

  @Event() onFormSubmit: EventEmitter;

  @Listen('onInputChange')
  onInputChangeHandler(ev) {
    console.log('change', ev);
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
      <form>
        <arv-flex layout={this.layout}>
          <slot />
        </arv-flex>
      </form>
    );
  }
}
