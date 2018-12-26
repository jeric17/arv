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

  @Prop() disabled: boolean;

  @Prop() values: string[] = [];

  @Event() add: EventEmitter;

  @Event() inputChange: EventEmitter;

  @Event() inputEnter: EventEmitter;

  @Event() remove: EventEmitter;

  change(index, event) {
    event.index = index;
    if (this.onInputChange && typeof this.onInputChange === 'function') {
      this.onInputChange(event);
    }

    this.inputChange.emit(event);
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
  }

  removeItem(index) {
    if (this.onRemove && typeof this.onRemove === 'function') {
      this.onRemove(index);
    }    
    this.remove.emit(index);
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
            disabled={this.disabled}
            inputChange={this.addItem.bind(this)}
            full
          />
        </arv-form-control>
      </arv-flex>
    );
  }
}
