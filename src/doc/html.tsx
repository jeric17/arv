import { Component, Host, Element, Prop, Watch, h } from '@stencil/core';
import Prism from 'prismjs';
import cssCoy from 'prismjs/themes/prism-coy.css';
import cssTomorrow from 'prismjs/themes/prism-tomorrow.css';

@Component({
  tag: 'doc-html',
  styleUrl: 'html.css',
  shadow: true
})
export class DocHtml {

  @Element() el: HTMLElement;

  @Prop() config: any = {};

  @Prop() isDark?: boolean;

  @Prop() settings = [];

  @Watch('settings')
  settingsHandler() {
    this.init();
  }

  get htmlCode() {
    const { element, slot } = this.config;

    return `
    <${element} ${this.propsString}>
         ${slot || ''}
    </${element}>
`;
  }

  get propsString() {
    return this.settings.map(d => {
      if (!d.value) {
        return '';
      }
      return `${d.name}="${d.value}"`;
    }).filter(d => d).join(` `);
  }

  componentDidLoad() {
    this.init();
  }

  render() {

    return (
      <Host>
        {this.isDark && (
          <style>{cssTomorrow}</style>
        )}
        {!this.isDark && (
          <style>{cssCoy}</style>
        )}
        <arv-flex direction="column">
          <arv-spacer></arv-spacer>
          <h2>Html</h2>
          <arv-divider></arv-divider>
          <arv-spacer></arv-spacer>
          <pre>
            <code class="language-html">
            </code>
          </pre>
        </arv-flex>
      </Host>
    );
  }

  private init() {
    const html = Prism.highlight(this.htmlCode, Prism.languages.html, 'html');
    this.el.shadowRoot.querySelector('code').innerHTML = html;
  }
}
