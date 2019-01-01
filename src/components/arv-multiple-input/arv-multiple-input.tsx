import { Component, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'arv-multiple-input',
  styleUrl: 'arv-multiple-input.css',
  shadow: true
})
export class MultipleInput {
  @Prop() onAdd: (e: any) => void;

  @Prop() onInputChange: (e: any) => void;

  @Prop() onInputEnter: (e: any) => void;

  @Prop() onRemove: (e: any) => void;

  @Prop() onUpdate: (e: any) => void;

  @Prop() disabled: boolean;

  @Prop() values: string[] = [];

  @Prop() placeholder: string;

  @Event() add: EventEmitter;

  @Event() update: EventEmitter;  

  @Event() inputChange: EventEmitter;

  @Event() inputEnter: EventEmitter;

  @Event() remove: EventEmitter;

  triggerUpdate(data) {
    if (this.onUpdate && typeof this.onUpdate === 'function') {
      this.onUpdate(data);
    }
    this.update.emit(data);
  }

  change(index, event) {
    event.index = index;
    if (this.onInputChange && typeof this.onInputChange === 'function') {
      this.onInputChange(event);
    }

    this.inputChange.emit(event);

    const values = [...this.values];
    values[index] = event.target.value;

    this.triggerUpdate(values);
  }

  enter(index, event) {
    event.index = index;
    if (this.onInputEnter && typeof this.onInputEnter === 'function') {
      this.onInputEnter(event);
    }

    this.inputEnter.emit(event);
  }

  addItem(event) {
    if (this.onAdd && typeof this.onAdd === 'function') {
      this.onAdd(event);
    }

    this.add.emit(event);

    this.triggerUpdate(this.values.concat([event.target.value]));
  }

  removeItem(index) {
    if (this.onRemove && typeof this.onRemove === 'function') {
      this.onRemove(index);
    }    
    this.remove.emit(index);
    const values = [...this.values];
    values.splice(index, 1);
    this.triggerUpdate(values);
  }

  render() {
    return (
      <arv-flex layout="column">
        {this.values.map((value, index) => (
          <arv-flex padded>
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
