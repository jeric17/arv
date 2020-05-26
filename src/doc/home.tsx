import { Component, Host, Listen, State, h } from '@stencil/core';

@Component({
  tag: 'doc-home',
  styleUrl: 'home.css',
  shadow: true
})
export class Home {

  @State() isDark = false;

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
            <arv-header color="secondary" position="sticky">
              <arv-flex justify="space-between" align-items="center" expanded>
                <arv-flex align-items="center">
                  <svg class="logo" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 399.32 455.52"><defs></defs><title>arv-logo</title><polygon class="cls-1" points="28.44 128.26 27.88 326.29 199.1 425.79 370.88 327.26 371.44 129.23 200.22 29.73 28.44 128.26" /><path class="cls-1" d="M.6,120.7,0,332.7a15.26,15.26,0,0,0,7.59,13.24l183.3,106.51a15.26,15.26,0,0,0,15.26.05L390.05,347a15.28,15.28,0,0,0,7.67-13.2l.6-212a15.28,15.28,0,0,0-7.6-13.25L207.43,2.07a15.28,15.28,0,0,0-15.27,0L8.27,107.5A15.28,15.28,0,0,0,.6,120.7Z" transform="translate(0.5 0.5)" /><polygon class="cls-2" points="371.44 128.75 199.16 228.26 198.6 426.26 370.88 327.75 371.44 128.75" /><polygon class="cls-1" points="199.16 227.26 28.44 127.78 27.88 326.77 198.6 426.26 199.16 227.26" /><polygon class="cls-3" points="371.16 128.26 199.16 29.26 28.16 128.26 371.16 128.26" /><polygon class="cls-3" points="371.16 128.26 28.16 128.26 28.16 236.18 28.16 236.18 28.16 327.26 371.16 327.26 200.16 277.26 371.16 128.26" /><polygon class="cls-3" points="371.16 327.26 199.16 426.26 28.16 327.26 371.16 327.26" /><polyline class="cls-4" points="199.16 426.26 199.16 228.05 28.16 128.26" /></svg>
                  <arv-spacer vertical></arv-spacer>
                  <h2>Arv UI</h2>
                </arv-flex>
                <arv-spacer vertical></arv-spacer>
                <arv-switch onClick={this.changeMode}></arv-switch>
                <arv-flex align-items="center">
                  <p>v.1.0.1</p>
                  <arv-spacer vertical></arv-spacer>
                  <a href="https://github.com/jeric17/arv">
                    <svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a>
                </arv-flex>
              </arv-flex>
            </arv-header>
            {Boolean(this.selectedComponent) && (
              <doc-content isDark={this.isDark} selectedComponent={this.selectedComponent}></doc-content>
            )}
          </arv-flex>
        </arv-flex>
      </Host >
    );
  }
}
