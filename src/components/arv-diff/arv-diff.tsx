import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'arv-diff',
  styleUrl: 'arv-diff.css'
})
export class Diff {

  @Prop() source1: string;
  
  @Prop() source2: string;

  render() {
    return (
       <div></div>  
    );
  }
}
