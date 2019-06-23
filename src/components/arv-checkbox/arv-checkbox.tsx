import { Component, h, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'arv-checkbox',
  styleUrl: 'arv-checkbox.css',
  shadow: true
})
export class Checkbox {

  @Prop() color = 'default';

  @Prop() label: string;

  @Prop() labelVariant = 'caption';

  @Prop() layout = 'row';

  // checkbox, option
  @Prop() mode = 'checkbox';  

  @Prop() name: string;

  @Prop() styles: any;

  @Prop() textWidth = 'auto';

  @Prop() value = false;

  @Prop() onTick: (e: any) => void;

  @Event() arvInputChange: EventEmitter;

  click(e) {
    if (this.onTick && typeof this.onTick === 'function') {
      this.onTick({
        name: this.name,
        value: this.value
      });
    }
    this.arvInputChange.emit(e);
  }

  render() {
    const rootClassName = {
      root: true,
      row: this.layout === 'row',
      column: this.layout === 'column'
    }
    const checkboxClassNames = {
      checkbox: true,
      checked: this.value === true,
      primary: this.color === 'primary',
      secondary: this.color === 'secondary',
      'default': this.color === 'default',
      option: this.mode === 'option'
    };
    const dividerLayout = this.layout === 'row' ? 'column' : 'row';
    const layoutItems = this.layout === 'row' ? 'center' : 'start';

    return (
      <div
        onClick={this.click.bind(this)}
        class={rootClassName}
        style={this.styles}>
        <arv-flex
          items={layoutItems}
          layout={this.layout}
          full>
          <div class="checkboxWrapper">
            <div class={checkboxClassNames}>
              <arv-icon icon="check"></arv-icon>
            </div>
            <input
              class="input"
              type="checkbox"
              checked={this.value}/>
          </div>
          <arv-divider
            layout={dividerLayout}
            transparent>
          </arv-divider>
          <arv-container width={this.textWidth}>
            {this.label && <arv-text variant={this.labelVariant}>{this.label}</arv-text>}
          </arv-container>
        </arv-flex>
      </div>
    );
  }
}
