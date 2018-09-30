import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'arv-stepper',
  styleUrl: 'arv-stepper.css',
  shadow: true
})
export class Stepper {

  @Prop() steps = [];

  constructor() {}

  render() {
    const stepsLength = this.steps.length - 1;
    return (
      <arv-flex>
        {this.steps.map((step, index) => {
           const stepperItemClassNames = {
             stepperItem: true,
             done: step.done
           };
           const divider = <div class="divider"></div>
           const checkItem = <div class="stepperIndex"><arv-icon size="medium" icon="check"></arv-icon></div>;
           const indexItem = <div class="stepperIndex">{index + 1}</div>;
           return [
             <div class={stepperItemClassNames}>
               {step.done ? checkItem: indexItem}
               <arv-text
                 variant="body1"
                 noWrap>{step.title}</arv-text>
               {(index < stepsLength) && divider}
             </div>
           ];
        })}
      </arv-flex>
    );
  }
}
