import { Component, Element, State, h} from '@stencil/core';

@Component({
  tag: 'my-testing-component',
  styleUrl: 'my-testing-component.css',
  shadow: true
})
export class MyTestingComponent {
  @Element() el: HTMLElement;

  @State() values = [];

  render() {

    return (
      <div>
        <arv-container
          height="400px"
          width="500px"
        >
          <arv-uploader></arv-uploader>
        </arv-container>
      </div>
    );
  }
}
