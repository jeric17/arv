import { Component, h, Event, EventEmitter, Element, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'arv-snackbar',
  styleUrl: 'snackbar.css',
  shadow: true
})
export class Snackbar {

  loading: boolean;
  padding = 8;
  timeout = null;
  timeout2 = null;

  @Element() el: HTMLElement;

  @State() animation: string;

  @State() elementStyles = {};

  @Prop() animationIn = 'slideInTop';

  @Prop() animationOut = 'slideOutTop';

  @Prop() variant: string;

  @Watch('variant')
  handleVariant() {
    this.clear();
    this.timingClose();
  }

  @Prop() horizontal = 'center';

  @Prop() icon: string;

  @Prop() message: string;

  @Prop() open = false;

  @Watch('open')
  handleOpen() {
    this.init();
  }

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

  componentDidUnload() {
    if (this.timeout) {
      this.clear();
    }
  }

  clear() {
    clearTimeout(this.timeout);
    clearTimeout(this.timeout2);
    this.timeout = null;
  }

  init() {
    if (!this.open) {
      if (this.timeout && !this.loading) {
        this.clear();
      }
      return false;
    }

    if (!this.loading && this.timing && this.timeout) {
      this.clear();
    }
    this.timingClose();
  }

  getStyles(v, h) {
    const style = {};

    const height = window.innerHeight;
    const width = window.innerWidth;

    const elementHeight = 52;

    if (!v || v === 'top') {
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
      style['left'] = `${width / 2}px`;
    }

    if (h === 'right') {
      style['right'] = `${this.padding}px`;
    }

    return style;
  }

  timingClose() {
    if (this.variant === 'loading') {
      return false;
    }
    this.loading = true;

    this.timeout = setTimeout(() => {
      this.animation = this.animationOut;
      this.timeout2 = setTimeout(() => {
        this.loading = false;
        this.animation = this.animationIn;
        this.handleClose.emit();
        if (this.close) {
          this.close();
        }
      }, 250);
    }, (this.timing * 1000) - 280);
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

    const Content = () => (
      <div class={{
        content: true,
        hCenter: this.horizontal === 'center'
      }}>
        <arv-flex items="center">
          {icon && [
            <arv-icon icon={icon} noMargin />,
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
    );

    const elementStyles = this.getStyles(this.vertical, this.horizontal);

    return (
      <div
        style={elementStyles}
        class={rootClassNames}
      >
        <arv-transition animation={this.animation}>
          <Content />
        </arv-transition>
      </div>
    );
  }
}