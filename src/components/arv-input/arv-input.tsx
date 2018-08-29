import { Component, Prop } from '@stencil/core';
import cx from 'classnames';

@Component({
  tag: 'arv-input',
  styleUrl: 'arv-input.css',
  shadow: true
})
export class Input {

  @Prop() disabled: boolean = false;

  @Prop() full: boolean;

  @Prop() label: string;

  /* oneOf: [column, row] */
  @Prop() layout: string = 'row';

  @Prop() name: string;

  @Prop() onInputChange: (e: Event) => void;

  @Prop() placeholder: string;

  @Prop() required: boolean = false;

  @Prop() type: string = 'text';

  @Prop() value: string;

  render() {
    const rootClassNames = cx('arv-input', {
      disabled: this.disabled,
      row: this.layout === 'row',
      column: this.layout === 'column',
      full: this.full
    });

    const Label = () => (
      <label
        class="label">{this.label}</label>
    );

    return (
      <div class={rootClassNames}>
        <arv-flex layout={this.layout}>
          {this.label && <Label />}
          <arv-divider layout={this.layout}></arv-divider>
          <input
            class="input"
            placeholder={this.placeholder}
            disabled={this.disabled}
            onChange={this.onInputChange}
            type={this.type}
            value={this.value} />
        </arv-flex>
      </div>
    );
  }
}
