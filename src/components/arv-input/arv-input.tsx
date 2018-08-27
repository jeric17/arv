import { Component, Prop } from '@stencil/core';
import cx from 'classnames';

@Component({
  tag: 'arv-input',
  styleUrl: 'arv-input.css',
  shadow: true
})
export class Input {

  /* name: disabled
   * type: boolean */
  @Prop() disabled: boolean = false;

  /* name: label
   * type: string */
  @Prop() label: string;

  /* name: layout
   * oneOf: [column, row] */
  @Prop() layout: string = 'row';

  @Prop() name: string;

  @Prop() onInputChange: (e: Event) => void;

  /* name: required
   * type: boolean */
  @Prop() required: boolean = false;

  @Prop() type: string = 'text';

  @Prop() value: string;

  render() {
    const rootClassNames = cx('arv-input', {
      disabled: this.disabled,
    });

    const Label = () => (
      <label class="label">{this.label}</label>
    );

    return (
      <div class={rootClassNames}>
        <arv-flex layout={this.layout}>
          {this.label && <Label />}
          <input
            disabled={this.disabled}
            onChange={this.onInputChange}
            type={this.type}
            value={this.value} />
        </arv-flex>
      </div>
    );
  }
}
