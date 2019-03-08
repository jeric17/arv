import { Component, Prop, Watch, State } from '@stencil/core';
import { StepItem } from './arv-stepper.model';

@Component({
  tag: 'arv-stepper',
  styleUrl: 'arv-stepper.css',
  shadow: true
})
export class Stepper {

  @State() stepsData: StepItem[];

  @Prop() steps: any;

  @Prop() color = 'primary';

  @Watch('steps')
  handleSteps() {
    this.load();
  }

  componentWillLoad() {
    this.load();
  }

  load() {
    if (!this.steps) {
      this.stepsData = [];
      return false;
    }
    if (typeof this.steps !== 'string') {
      this.stepsData = this.steps;
      return false;
    }
    try {
      const steps = JSON.parse(this.steps);
      this.stepsData = steps;
    } catch(e) {
      console.error(e);
    }
  }

  render() {
    const stepsLength = this.stepsData.length - 1;
    return (
      <arv-flex>
        {this.stepsData.map((step, index) => {
           const stepperItemClassNames = {
             stepperItem: true,
             done: step.done,
             'default': this.color === 'default',
             primary: this.color === 'primary',
             secondary: this.color === 'secondary'
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
