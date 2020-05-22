import { Component, Host, Listen, State, h } from '@stencil/core';

@Component({
  tag: 'doc-home',
  styleUrl: 'home.css',
  shadow: true
})
export class Home {

  @State() isDark = true;

  @State() selectedComponent = 'Accordion';

  @Listen('docSelectComponent')
  docSelectComponentHandler(event) {
    const { detail: componentName } = event;
    this.selectedComponent = null;
    setTimeout(() => {
      this.selectedComponent = componentName;
    }, 100);
  }

  changeMode = () => {
    document.body.classList.toggle('dark');
    this.isDark = !this.isDark;
  }

  render() {
    const cls = {
      dark: this.isDark
    };

    return (
      <Host class={cls}>
        <arv-flex expanded>
          <doc-nav class={cls}></doc-nav>
          <arv-flex direction="column" expanded>
            <arv-header color="primary" position="sticky">
              <arv-flex justify="space-between" align-items="center" expanded>
                <h2>Arv UI</h2>
                <arv-spacer vertical></arv-spacer>
                <arv-switch onClick={this.changeMode}></arv-switch>
                <arv-flex align-items="center">
                  <p>v.2.0.0</p>
                  <arv-spacer vertical></arv-spacer>
                  <svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
                </arv-flex>
              </arv-flex>
            </arv-header>
            {Boolean(this.selectedComponent) && (
              <doc-content isDark={this.isDark} selectedComponent={this.selectedComponent}></doc-content>
            )}
          </arv-flex>
        </arv-flex>
      </Host>
    );
  }
}
