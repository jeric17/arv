import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @State() showDialog: boolean = false;

  @Prop() first: string;
  @Prop() last: string;

  toggleDialog() {
    this.showDialog = !this.showDialog;
  }

  render() {
    return (
      <div>
        <arv-button onButtonClick={() => this.toggleDialog()}>
          Toggle
        </arv-button>

        <arv-dialog
          show={this.showDialog}
          handleClose={() => this.toggleDialog()}>
          <arv-card>
            <arv-card-header titleHeader="Card Here"></arv-card-header>
          </arv-card>
        </arv-dialog>
      </div>
    );
  }
}
