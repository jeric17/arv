import { Component, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'arv-badge',
  styleUrl: 'arv-badge.css',
  shadow: true
})
export class Badge {

  @State() badgeStylesObj = {};

  @Prop() show = true;

  @Prop() color: string;

  @Prop() size: string;

  @Prop() badgeStyle: any;

  @Watch('badgeStyle')
  handleStyles(badgeStyle) {
    this.load(badgeStyle);
  }

  componentWillLoad() {  
    this.load(this.badgeStyle);
  }

  load(badgeStyle) {
    if (!badgeStyle) {  
      return false;
    }
    if (typeof badgeStyle !== 'string') {
      this.badgeStylesObj = badgeStyle;  
      return false;
    }
    try {
      const styles = JSON.parse(badgeStyle);
      this.badgeStylesObj = styles;
    } catch (e) {
      console.error(e);
    }
  }  

  render() {

    const classNames = {
      badge: true,
      primary: this.color === 'primary',
      secondary: this.color === 'secondary',
      error: this.color === 'error',
      warning: this.color === 'warning',
      success: this.color === 'success',
      small: this.size === 'small',
      hidden: !this.show
    };    

    return (
      <div class="root">
        <div
          style={this.badgeStylesObj}
          class={classNames}
        >
          <slot name="badge"></slot>
        </div>
        <slot></slot>
      </div>
    );
  }
}
