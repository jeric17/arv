import { Component, Element, State, h } from '@stencil/core';

@Component({
  tag: 'my-testing-component',
  styleUrl: 'my-testing-component.css',
  shadow: true
})
export class MyTestingComponent {
  @Element() el: HTMLElement;

  @State() checked?: boolean;

  render() {

    return (
      <div>
        <arv-container
          height="100vh"
          width="500px"
        >
          <arv-text truncate>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab doloribus reiciendis non fugit esse sequi sint! Illum, corporis consequuntur aspernatur asperiores numquam quas quod libero, voluptatibus voluptate nesciunt dolorem sequi!
            </p>
          </arv-text>
        </arv-container>
      </div>
    );
  }
}
