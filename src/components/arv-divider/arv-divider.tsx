import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'arv-divider',
  styleUrl: 'arv-divider.css',
  shadow: true
})
export class Divider {

  @Prop() bordered: boolean = true;

  @Prop() height: string = '8px';

  @Prop() layout: string = 'row';

  @Prop() width: string = '8px';

  @Prop() transparent: boolean;

  hostData() {
    return {
      class: {
        full: this.layout === 'row'  
      }  
    };  
  }

  render() {
    const rootClassNames = {
      divider: true,
      bordered: this.bordered,
      row: this.layout === 'row',
      column: this.layout === 'column',
      transparent: this.transparent
    };

    const styles = (() => {
      if (this.layout === 'row') {
        return {
          'margin-top': this.height,
          'margin-bottom': this.height
        };
      }
      return {
        'margin-left': this.width,
        'margin-right': this.width
      };
    })();

    return (
      <div
        style={styles}
        class={rootClassNames}>
      </div>
    );
  }
}
