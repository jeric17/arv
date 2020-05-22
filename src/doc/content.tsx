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

  @State() settings: any[];

  @Prop() isDark?: boolean;

  @Prop() selectedComponent: string;

  @Watch('selectedComponent')
  applyHtmlSample(item) {
    this.settings = comps[item].props;
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

  private addComponent(item: string) {
    const {
      slot,
      props,
      containerContent,
      element,
      onLoad } = comps[item];
    const container = this.el.shadowRoot.getElementById('sample');
    const compEl = document.createElement(element);
    compEl.setAttribute('id', 'demoComponent');
    if (slot) {
      compEl.innerHTML = slot;
    }
    props.forEach(d => {
      if (d.value) {
        compEl.setAttribute(d.name, d.value);
      }
    });
    if (containerContent) {
      container.innerHTML = containerContent;
    } else {
      container.innerHTML = '';
    }
    container.appendChild(compEl);
    this.demoComponent = compEl;
    if (onLoad) {
      onLoad(container);
    }
  }

  render() {
    if (!this.selectedComponent) {
      return null;
    }

    const selectedComp = comps[this.selectedComponent];

    return (
      <arv-flex class="root" direction="column" expanded>
        <h1>{this.selectedComponent}</h1>
        <arv-divider></arv-divider>
        <p></p>
        <arv-paper shadow-level="0">
          <div id="sample"></div>
        </arv-paper>
        <doc-control settings={selectedComp.props}></doc-control>
        <doc-html
          isDark={this.isDark}
          config={selectedComp}
          settings={this.settings}
        ></doc-html>
        <footer></footer>
      </arv-flex>
    );
  }
}
