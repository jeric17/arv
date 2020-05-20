import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'doc-html',
  styleUrl: 'html.css',
  shadow: true
})
export class DocHtml {

  @Prop() config: any = {};

  @Prop() settings = [];

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
    }).join(`
    `);
  }

  render() {
    return (
      <arv-flex direction="column">
        <arv-spacer></arv-spacer>
        <h2>Html</h2>
        <arv-divider></arv-divider>
        <arv-spacer></arv-spacer>
        <pre>
          {this.htmlCode}
        </pre>
      </arv-flex>
    );
  }
}
