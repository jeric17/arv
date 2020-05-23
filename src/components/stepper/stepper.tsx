import { Component, Prop, Event, EventEmitter, Method, State, Watch, Host, h } from '@stencil/core';
import { Color } from '../../interface';
import { generateAttrValue } from '../../utils/helpers';

@Component({
  tag: 'arv-stepper',
  styleUrl: 'stepper.css',
  shadow: true
})
export class Stepper {

  /**
   * Array of steps.
   */
  @State() stepperSteps: { done: boolean; title: string }[];

  /**
   * The current step.
   */
  @Prop({ mutable: true }) activeIndex: number;

  /**
   * Color variant to use.
   */
  @Prop() color: Color;

  /**
   * Steps data
   */
  @Prop() steps: any;

  /**
   * Will parse again the steps attr on update.
   */
  @Watch('steps')
  stepsChange() {
    this.init();
  }

  /**
   * Emitted when an step item is clicked.
   */
  @Event() arvItemClick: EventEmitter<number>;

  /**
   * Public api to trigger next step.
   */
  @Method()
  async next() {
    if (this.activeIndex === this.stepperSteps.length) {
      return false;
    }
    const stepsClone = this.cloneSteps();
    stepsClone[this.activeIndex].done = true;
    this.stepperSteps = stepsClone;
    this.activeIndex++;
  }

  /**
   * Public api to trigger back.
   */
  @Method()
  async back() {
    if (this.activeIndex === 0) {
      return false;
    }
    const stepsClone = this.cloneSteps();
    stepsClone[this.activeIndex - 1].done = false;
    this.stepperSteps = stepsClone;
    this.activeIndex--;
  }

  componentWillLoad() {
    this.init();
  }

  /**
   * Handles step item click.
   */
  itemClick = (index: number) => {
    this.arvItemClick.emit(index);
  }

  private cloneSteps() {
    return JSON.parse(JSON.stringify(this.stepperSteps));
  }

  /**
   * Converts the steps string to array.
   */
  private init() {
    try {
      this.stepperSteps = JSON.parse(this.steps);
    } catch (e) {
      this.stepperSteps = this.steps;
    }
  }

  render() {
    const hostCls = {
      ...generateAttrValue(this.color)
    };

    const stepsLength = this.stepperSteps.length - 1;

    return (
      <Host class={hostCls}>

        {this.stepperSteps.map((step, index) => {
          const stepIndex = index + 1;

          /**
           * Line separator between steps.
           */
          const divider = <div class="divider"></div>;

          /**
           * Will be visible if the step item is tag done.
           */
          const checkItem = (
            <div class="index">
              <arv-icon icon="check"></arv-icon>
            </div>
          );

          /**
           * Step item classList.
           */
          const stepperCls = {
            item: true,
            done: step.done,
            active: this.activeIndex === index
          };

          /**
           * Step number ui.
           */
          const indexItem = <div class="index">{stepIndex}</div>;

          return (
            <div
              class={stepperCls}
              onClick={() => this.itemClick(index)}
            >
              {step.done ? checkItem : indexItem}
              <div class="title">{step.title}</div>
              {(index < stepsLength) && divider}
            </div>
          );
        })}
      </Host>
    );
  }
}
