import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'doc-control',
  styleUrl: 'control.css',
  shadow: true
})
export class DocControl {
  colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'dark', 'light'];

  @Prop() settings: any = [];

  @Event() docSettingsChange: EventEmitter<any>;

  generateField = (item: any, index: number) => {
    const labelWidth = '100px';
    const control = (() => {
      if (item.type === 'color') {
        return (
          <arv-select
            label="color"
            labelWidth={labelWidth}
            flex-direction="row"
            value={item.value || 'Select'}
            selectChange={data => {
              this.dataChange(data, index);
            }}
            full
          >
            <arv-menu-item value="">None</arv-menu-item>
            {this.colors.map((color: string) => (
              <arv-menu-item value={color}>{color}</arv-menu-item>
            ))}
          </arv-select>
        );
      }
      if (item.type === 'boolean') {
        const dataArray = ['true', 'false'];
        return (
          <arv-select
            label={item.name}
            labelWidth={labelWidth}
            flex-direction="row"
            value={item.value || 'Select'}
            selectChange={data => {
              this.dataChange(data, index);
            }}
            full
          >
            {dataArray.map((d: string) => (
              <arv-menu-item value={d}>{d}</arv-menu-item>
            ))}
          </arv-select>
        );
      }
      if (item.type === 'size') {
        const dataArray = ['small', 'normal', 'large'];
        return (
          <arv-select
            label={item.name}
            labelWidth={labelWidth}
            flex-direction="row"
            value={item.value || 'Select'}
            selectChange={data => {
              this.dataChange(data, index);
            }}
            full
          >
            {dataArray.map((d: string) => (
              <arv-menu-item value={d}>{d}</arv-menu-item>
            ))}
          </arv-select>
        );
      }
      if (item.type === 'oneOf') {
        return (
          <arv-select
            label={item.name}
            labelWidth={labelWidth}
            flex-direction="row"
            value={item.value || 'Select'}
            selectChange={data => {
              this.dataChange(data, index);
            }}
            full
          >
            <arv-menu-item value="">None</arv-menu-item>
            {item.data.map((d: string) => (
              <arv-menu-item value={d}>{d}</arv-menu-item>
            ))}
          </arv-select>
        );
      }
      if (item.type === 'string') {
        return (
          <arv-input
            inputChange={data => {
              this.dataChange(data, index);
            }}
            labelWidth={labelWidth}
            label={item.name}
            value={item.value}></arv-input>
        );
      }
    })();

    const description = (() => {
      if (item.description) {
        return item.description;
      }
      if (item.type === 'size') {
        return 'Size variant to set.';
      }
      if (item.type === 'color') {
        return 'Color variant to set.'
      }
    })();

    const controlWidth = { width: '300px', minWidth: '300px' };

    return [
      <arv-flex align-items="center">
        <div style={controlWidth}>
          {control}
        </div>
        <p class="control-description">{description}</p>
      </arv-flex>,
      <arv-spacer></arv-spacer>
    ];
  }

  render() {
    return (
      <arv-flex direction="column">
        <h2>Props</h2>
        <arv-divider></arv-divider>
        <arv-spacer></arv-spacer>
        <arv-flex
          direction="column"
          wrap="wrap"
          expanded
        >
          {this.settings.map(this.generateField)}
        </arv-flex>
      </arv-flex>
    );
  }

  private dataChange(data: any, index: number) {
    this.settings[index].value = data;
    this.settings = this.settings.concat();
    this.docSettingsChange.emit({
      settings: this.settings,
      item: this.settings[index]
    });
  }
}
