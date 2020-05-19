import { Component, Prop, Event, EventEmitter, Host, h } from '@stencil/core';
import { Color } from '../../interface';
import { generateAttrValue } from '../../utils/helpers';

@Component({
  tag: 'arv-stepper',
  styleUrl: 'stepper.css',
  shadow: true
})
export class Stepper {

  @Prop() activeIndex: number;

  /**
   * Color variant to use.
   */
  @Prop() color: Color;

  /**
   * Steps data
   */
  @Prop() steps: { done: boolean; title: string }[] = [];

  @Event() arvItemClick: EventEmitter<number>;

  itemClick = (index: number) => {
    this.arvItemClick.emit(index);
  }

  render() {
    const hostCls = {
      ...generateAttrValue(this.color)
    };

    const stepsLength = this.steps.length - 1;

    return (
      <Host class={hostCls}>

        {this.steps.map((step, index) => {
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
