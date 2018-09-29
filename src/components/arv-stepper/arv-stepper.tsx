import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'arv-stepper',
  styleUrl: 'arv-stepper.css',
  shadow: true
})
export class Stepper {

  @Prop() steps: any[] = [];

  render() {
    const stepsLength = this.steps.length - 1;    
    return (
      <arv-flex>
        {this.steps.map((step, index) => {
          const stepperItemClassNames = {
            stepperItem: true,
            done: step.done,    
          };
          const divider = <div class="divider"></div>
          const checkItem = <div class="material-icons stepperIndex">check</div>;
          const indexItem = <div class="stepperIndex">{index + 1}</div>;
          <div class={stepperItemClassNames}>
            {step.done ? checkItem: indexItem}
            <arv-text variant="body1">{step.title}</arv-text>
          </div>
          {(index < stepsLength) && divider}
        })}
      </arv-flex>    
    );
  }    
}
