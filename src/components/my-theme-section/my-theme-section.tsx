import { Component, State } from '@stencil/core';

@Component({
  tag: 'my-theme-section',
  styleUrl: 'my-theme-section.css',
  shadow: true
})
export class MyThemeSection {

  @State() themeSettings = {
    '--primary-color': '#00e5ff',
    '--primary-light-color': '#6effff',
    '--primary-dark-color': '#00b2cc',
    '--primary-text-color': '#000000',

    '--secondary-color': '#7c4dff',
    '--secondary-light-color': '#b47cff',
    '--secondary-dark-color': '#3f1dcb',
    '--secondary-text-color': '#ffffff',

    '--default-color': '#fafafa',
    '--default-light-color': '#ffffff',
    '--default-dark-color': '#c7c7c7',
    '--default-text-color': '#000000',

    '--light-color': '#f5f5f5',
    '--light-text-color': '#c2c2c2',

    '--dark-color': '#263238',
    '--dark-text-color': '#102027',

    '--error-color': '#f44336',
    '--error-light-color': '#ff7961',
    '--error-dark-color': '#ba000d',
    '--error-text-color': '#000000',

    '--warning-color': '#ff9800',
    '--warning-light-color': '#ffc947',
    '--warning-dark-color': '#c66900',
    '--warning-text-color': '#000000',

    '--success-color': '#8bc34a',
    '--success-light-color': '#bef67a',
    '--success-dark-color': '#5a9216',
    '--success-text-color': '#000000',
  };

  @State() radius = '2px';

  componentWillLoad() {
    if (window['themeSettings']) {
      this.themeSettings = window['themeSettings'];
    }
    if (window['radius']) {
      this.radius = window['radius'];
    }
  }

  valueChange = event => {
    if (!event) {
      return false;
    }

    const { target: { value, name }} = event;
    const themeSettings = JSON.parse(JSON.stringify(this.themeSettings));
    themeSettings[name] = value;
    this.themeSettings = themeSettings;

    window['themeSettings'] = themeSettings;
    document.body.style.setProperty(name, value);
  };

  radiusChange = event => {
    const { target: { value }} = event;
    this.radius = value;

    window['radius'] = this.radius;
    document.body.style.setProperty('--radius', value);
  }

  render() {
    const keys = Object.keys(this.themeSettings);

    return (
      <arv-flex fullHeight layout="column" padded>
        <arv-text variant="heading1">Theming</arv-text>

        <arv-divider transparent></arv-divider>

        <arv-text>Arv ui library uses css variables to control the overall theme</arv-text>

        <arv-divider transparent></arv-divider>

        <arv-text>Current theme settings:</arv-text>

        {keys.map((item: string) => (
          <arv-flex items="end">
            <arv-input
              inputChange={this.valueChange}
              name={item}
              label={item}
              value={this.themeSettings[item]}
            ></arv-input>
            <arv-divider layout="column"></arv-divider>
            <arv-input
              inputChange={this.valueChange}
              type="color"
              name={item}
              value={this.themeSettings[item]}
            ></arv-input>
          </arv-flex>
        ))}

        <arv-input
          inputChange={this.radiusChange}
          label="--radius"
          value={this.radius}
        ></arv-input>

        <arv-divider transparent></arv-divider>

      </arv-flex>
    );
  }
}
