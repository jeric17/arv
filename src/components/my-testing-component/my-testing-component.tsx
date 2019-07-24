import { Component, Element, State, h} from '@stencil/core';

@Component({
  tag: 'my-testing-component',
  shadow: true
})
export class MyTestingComponent {
  @Element() el: HTMLElement;

  @State() values = [];

  add = event => {
    this.values = this.values.concat(event.target.value);
  }

  render() {

    return (
      <div>
        <arv-multiple-input
          values={this.values}
          add={this.add}
        ></arv-multiple-input>
      </div>
    );
  }
}
