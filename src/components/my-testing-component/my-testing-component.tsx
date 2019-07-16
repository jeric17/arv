import { Component, Listen, h} from '@stencil/core';

@Component({
  tag: 'my-testing-component'  
})
export class MyTestingComponent {

  @Listen('arvInput')
  handleInput(e) {
    console.log(e);
  }
  
  render() {
    return (
      <arv-input 
        debounceTime={3000}
      />
    );
  }
}
