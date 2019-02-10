import { Component, Event, EventEmitter, Element, Prop, State } from '@stencil/core';

@Component({
  tag: 'arv-snackbar',
  styleUrl: 'arv-snackbar.css',
  shadow: true
})
export class Snackbar {

  loading: boolean;
  padding = 8;
  timeout = null;

  @Element() el: HTMLElement;

  @State() animation: string;  

  @State() elementStyles = {};

  @Prop() animationIn = 'slideInTop';

  @Prop() animationOut = 'slideOutTop';

  @Prop() variant: string;

  @Prop() horizontal = 'center';

  @Prop() icon: string;

  @Prop() message: string;  

  @Prop() open = false;

  @Prop() timing = 3;

  @Prop() top = 0;

  @Prop() vertical = 'top';

  @Prop() close: () => void;  

  @Event() handleClose: EventEmitter;

  componentWillLoad() {
    this.animation = this.animationIn;
  }

  componentDidLoad() {
    this.init();
  }

  componentDidUpdate() {
    this.init();
  }  

  componentDidUnload() {
    clearTimeout(this.timeout);
  }

  init() {
    if (!this.open) {
      return false;  
    }

    this.elementStyles = this.getStyles(this.vertical, this.horizontal);

    if (this.timing) {
      this.timingClose();
    }    
  }

  getStyles(v, h) {
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
      style['top'] = `${this.padding + this.top}px`;
    }

    if (v === 'center') {
      style['top'] = `${this.top + height / 2 - (elementHeight / 2)}px`;
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
    if (this.loading || this.variant === 'loading') {
      return false
    }
    this.loading = true;
    this.timeout = setTimeout(() => {    
      this.animation = this.animationOut;
      setTimeout(() => {
        this.loading = false;
        this.animation = this.animationIn;
        this.handleClose.emit();
        if (this.close) {
          this.close();  
        }
      }, 250);
    }, (this.timing * 1000) - 300);
  }

  render() {
    if (!this.open) {
      return false;
    }

    const rootClassNames = {
      root: true,
      error: this.variant === 'error',
      warning: this.variant === 'warning',
      success: this.variant === 'success'
    };

    const icon = (() => {
      if (this.icon) {
        return this.icon;
      }
      if (this.variant === 'error') {
        return 'error';
      }
      if (this.variant === 'warning') {
        return 'warning';
      }
      if (this.variant === 'success') {
        return 'check_circle'
      }
      return null;
    })();

    return (
        <div
            style={this.elementStyles}
            class={rootClassNames}>
          <arv-transition animation={this.animation}>
            <div class="content">
            <arv-flex items="center">
                {icon && [
                  <arv-icon icon={icon} noMargin/>,
                  <arv-divider layout="column" transparent />
                ]}
                {(this.variant === 'loading') && [
                  <arv-loader size="xsmall" />,
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
