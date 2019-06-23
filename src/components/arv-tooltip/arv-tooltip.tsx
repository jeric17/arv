import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'arv-tooltip',
  styleUrl: 'arv-tooltip.css',
  shadow: true
})
export class Tooltip {

  @Prop() color: string;

  @Prop() message: string;

  @Prop() position = 'top';

  @Prop() fixed = false;

  @Prop() show = false;

  @Prop() full = false;

  hostData() {
    return {
      style: {
        width: this.full ? '100%': 'auto'
      }  
    };
  }

  render() {
    const rootClass = {
      root: true,
      fixed: this.fixed,
      show: this.show
    };

    const toolTipClass = {
      toolTip: true,
      primary: this.color === 'primary',
      secondary: this.color === 'secondary',
      error: this.color === 'error',
      success: this.color === 'success',
      top: this.position === 'top',
      bottom: this.position === 'bottom',
      right: this.position === 'right',
      left: this.position === 'left',
    };    

    return (
      <div class={rootClass}>
        <div class={toolTipClass}>
          <arv-text noWrap variant="caption2">{this.message}</arv-text>
        </div>
        <slot></slot>
      </div>    
    );    
  }    
}
