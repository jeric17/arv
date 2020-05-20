import { Component, State, Element, Listen, Watch, Prop, h } from '@stencil/core';
import * as comps from './components';

@Component({
  tag: 'doc-content',
  styleUrl: 'content.css',
  shadow: true
})
export class DocContent {
  demoComponent: HTMLElement;

  @Element() el: HTMLElement;

  @State() settings = [];

  @Prop() selectedComponent: string;

  @Watch('selectedComponent')
  applyHtmlSample(item) {
    this.addComponent(item);
  }

  @Listen('docSettingsChange')
  settingsChanged(value) {
    const settings = value.detail;
    this.settings = settings.settings;
    this.demoComponent.setAttribute(settings.item.name, settings.item.value);
  }

  componentWillLoad() {
    this.settings = comps[this.selectedComponent].props;
  }

  componentDidLoad() {
    this.addComponent(this.selectedComponent);
  }

  render() {
    const selectedComp = comps[this.selectedComponent];
    const settings = selectedComp.props;

    return (
      <arv-flex direction="column" expanded>
        <h1>{this.selectedComponent}</h1>
        <arv-divider></arv-divider>
        <p></p>
        <arv-paper shadow-level="0">
          <div id="sample"></div>
        </arv-paper>
        <doc-control settings={settings}></doc-control>
        <doc-html
          config={selectedComp}
          settings={this.settings}
        ></doc-html>
        <footer></footer>
      </arv-flex>
    );
  }

  private addComponent(item: string) {
    const value = comps[item];
    const wrapper = this.el.shadowRoot.getElementById('sample');
    const compEl = document.createElement(value.element);
    compEl.setAttribute('id', 'demoComponent');
    if (value.slot) {
      compEl.innerHTML = value.slot;
    }
    wrapper.innerHTML = '';
    wrapper.appendChild(compEl);
    this.demoComponent = compEl;
  }
}
