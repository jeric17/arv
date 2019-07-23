import { Component, Element, State, h} from '@stencil/core';

@Component({
  tag: 'my-testing-component',
  shadow: true
})
export class MyTestingComponent {
  @Element() el: HTMLElement;

  @State() show = false;

  toggle = () => {
    this.show = !this.show;
  }

  render() {
    const headerAction = {
      color: 'secondary',
      text: 'Save',
      variant: 'raised',
      fn: t => {
        t.onHandleClose();
      }
    };
    return (
      <div>
        <arv-button
          onClick={this.toggle}
        >
          Toggle
        </arv-button>
        <arv-dialog
          dialogTitle="Hello World"
          show={this.show}
          handleClose={this.toggle}
          headerColor="primary"
          headerAction={headerAction}
          full
        >
          <div>
            <div>OK</div>
            <arv-button
            >Cancel</arv-button>
          </div>
        </arv-dialog>
      </div>
    );
  }
}
