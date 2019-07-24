import { Component, h, Element, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'arv-multiple-input',
  styleUrl: 'arv-multiple-input.css',
  shadow: true
})
export class MultipleInput {

  @Element() el: HTMLElement;

  @Prop() add: (e: any) => void;

  @Prop() inputChange: (e: any) => void;

  @Prop() inputEnter: (e: any) => void;

  @Prop() removeValue: (e: any) => void;

  @Prop() update: (e: any) => void;

  @Prop() disabled: boolean;

  @Prop() values: string[] = [];

  @Prop() placeholder: string;

  @Event() arvAdd: EventEmitter;

  @Event() arvUpdate: EventEmitter;  

  @Event() arvInputChange: EventEmitter;

  @Event() arvInputEnter: EventEmitter;

  @Event() arvRemove: EventEmitter;

  triggerUpdate(data) {
    if (this.update && typeof this.update === 'function') {
      this.update(data);
    }
    this.arvUpdate.emit(data);
  }

  change(index, event) {
    event.index = index;
    if (this.inputChange && typeof this.inputChange === 'function') {
      this.inputChange(event);
    }

    this.arvInputChange.emit(event);

    const values = [...this.values];
    values[index] = event.target.value;

    this.triggerUpdate(values);
  }

  enter(index, event) {
    event.index = index;
    if (this.inputEnter && typeof this.inputEnter === 'function') {
      this.inputEnter(event);
    }

    this.arvInputEnter.emit(event);
  }

  addItem(event) {
    if (this.add && typeof this.add === 'function') {
      this.add(event);
    }

    this.arvAdd.emit(event);

    this.triggerUpdate(this.values.concat([event.target.value]));

    const addInput: any = this.el.shadowRoot.querySelector('.addInput');
    addInput.clear();
  }

  removeItem(index) {
    if (this.removeValue && typeof this.removeValue === 'function') {
      this.removeValue(index);
    }
    this.arvRemove.emit(index);
    const values = [...this.values];
    values.splice(index, 1);
    this.triggerUpdate(values);
  }

  render() {
    return (
      <arv-flex layout="column">
        {this.values.map((value, index) => (
          <arv-flex class="item">
            <arv-input
              disabled={this.disabled}
              inputChange={this.change.bind(this, index)}
              inputEnter={this.enter.bind(this, index)}
              value={value}
              full
            />
            <arv-divider layout="column"/>
            <arv-button
              buttonClick={this.removeItem.bind(this, index)}
              variant="flat-icon"
              icon="close"
            />
          </arv-flex>
        ))}
        <arv-form-control>
          <arv-input
            class="addInput"
            placeholder={this.placeholder}
            disabled={this.disabled}
            inputChange={this.addItem.bind(this)}
            full
          />
        </arv-form-control>
      </arv-flex>
    );
  }
}
