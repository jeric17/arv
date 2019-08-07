import { Component, Element, State, h} from '@stencil/core';

@Component({
  tag: 'my-testing-component',
  styleUrl: 'my-testing-component.css',
  shadow: true
})
export class MyTestingComponent {
  @Element() el: HTMLElement;

  @State() values = [
    'item1',
    'item2',
    'item3',
    'item4',
    'item5',
  ];

  render() {
    const vLength = this.values.length - 1;

    return (
      <div>
        <arv-container
          height="auto"
          width="500px"
        >
          <arv-flex layout="row" wrap>
            {this.values.map((d, i) => (
              <arv-draggable
                direction="horizontal"
                showIcon={false}
                isLast={i > 0 && i === vLength}
                >
                <arv-container
                  color="secondary"
                  width="100px"
                  height="100px"
                  margin="8px"
                >
                  <arv-flex
                    items="center"
                    justify="center"
                    fullHeight>
                    <arv-text>{d}</arv-text>
                  </arv-flex>
                </arv-container>
              </arv-draggable>
            ))}
          </arv-flex>
        </arv-container>
      </div>
    );
  }
}
