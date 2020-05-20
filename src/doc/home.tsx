import { Component, Listen, State, h } from '@stencil/core';

@Component({
  tag: 'doc-home',
  styleUrl: 'home.css',
  shadow: true
})
export class Home {

  @State() selectedComponent = 'Accordion';

  @Listen('docSelectComponent')
  docSelectComponentHandler(event) {
    const { detail: componentName } = event;
    this.selectedComponent = componentName;
  }

  render() {

    return (
      <arv-flex expanded>
        <doc-nav></doc-nav>
        <arv-flex direction="column" expanded>
          <arv-header color="primary" position="sticky">
            <arv-flex justify="space-between" align-items="center">
              <h2>Arv UI</h2>
              <arv-spacer vertical></arv-spacer>
              <p>v.2.0.0</p>
            </arv-flex>
          </arv-header>
          <doc-content selectedComponent={this.selectedComponent}></doc-content>
        </arv-flex>
      </arv-flex>
    );
  }
}
