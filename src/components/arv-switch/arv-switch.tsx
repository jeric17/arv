import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'arv-switch',
  styleUrl: 'arv-switch.css',
  shadow: true
})
export class Switch {
  @Prop() color = 'primary';

  @Prop() disabled: boolean;

  @Prop() value: boolean;

  render() {
    const classNames = {
      root: true,
      active: this.value,
      primary: this.color === 'primary',
      secondary: this.color === 'secondary',
      disabled: this.disabled
    };

    return (
      <div class={classNames}>
        <div class="bar"></div>
        <div class="circle"></div>
      </div>    
    );
  }    
}