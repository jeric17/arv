import { Component, Event, EventEmitter, Element, Prop, State } from '@stencil/core';

@Component({
  tag: 'arv-snackbar',
  styleUrl: 'arv-snackbar.css',
  shadow: true
})
export class Snackbar {

  padding = 8;
  timeout = null;

  @Element() el: HTMLElement;

  @State() animation: string;  

  @State() elementStyles = {};

  @Prop() animationIn = 'slideInTop';

  @Prop() animationOut = 'slideOutTop';

  @Prop() color: string;

  @Prop() horizontal = 'center';

  @Prop() icon: string;

  @Prop() message: string;  

  @Prop() open = false;

  @Prop() timing = 3;  

  @Prop() vertical = 'top';

  @Event() handleClose: EventEmitter;

  componentWillLoad() {
    this.animation = this.animationIn;
  }

  componentDidLoad() {
    this.elementStyles = this.getStyles(this.vertical, this.horizontal);

    if (this.timing) {
      this.timingClose();
    }
  }

  componentDidUnload() {
    clearTimeout(this.timeout);
  }

  private getStyles(v, h) {
    const style = {};
    
    const height = window.innerHeight;
    const width = window.innerWidth;
    
    const root = this.el.shadowRoot.querySelector('.root');

    if (!root) {
      return style;    
    }
    
    const elementHeight = root.clientHeight;
    const elementWidth = root.clientWidth;

    if (v === 'top') {
      style['top'] = `${this.padding}px`;
    }

    if (v === 'center') {
      style['top'] = `${height / 2 - (elementHeight / 2)}px`;
    }

    if (v === 'bottom') {
      style['bottom'] = `${this.padding}px`;
    }

    if (h === 'left') {
      style['left'] = `${this.padding}px`;
    }

    if (h === 'center') {
      style['left'] = `${width / 2 - (elementWidth / 2)}px`;
    }

    if (h === 'right') {
      style['right'] = `${this.padding}px`;
    }

    return style;
  }

  private timingClose() {
     this.timeout = setTimeout(() => {    
       this.animation = this.animationOut;
       setTimeout(() => {
         this.handleClose.emit();
       }, 250);
     }, (this.timing * 1000) - 300);
  }

  render() {
    if (!this.open) {
      return false;
    }    

    const rootClassNames = {
      root: true,
      error: this.color === 'error'
    };

    return (
        <div 
            style={this.elementStyles}
            class={rootClassNames}>
          <arv-transition animation={this.animation}>
            <div class="content">
            <arv-flex items="center">
                {this.icon && [
                  <arv-icon icon={this.icon} noMargin/>,
                  <arv-divider layout="column" transparent />
                ]}
                <arv-text>
                    {this.message}
                </arv-text>
                <slot />
            </arv-flex>
            </div>
          </arv-transition>
        </div>
    );
  }
}
