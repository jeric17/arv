import { Component, Prop, State, Watch } from '@stencil/core';
import * as jsdiff from 'diff';

@Component({
  tag: 'arv-diff',
  styleUrl: 'arv-diff.css',
  shadow: true
})
export class Diff {

  @State() o = '';

  @State() n = '';

  @State() currentMode: string;

  @Prop() oldVersion: any;
  @Watch('oldVersion')
  oldVersionHandler(d: any) {
    this.loadItem(d, 'o');
  }

  @Prop() newVersion: any;
  @Watch('newVersion')
  newVersionHandler(d: any) {
    this.loadItem(d, 'n');
  }

  @Prop() displayMode = 'all';
  @Watch('displayMode')
  handleDisplayMode() {
    this.currentMode = this.displayMode;
  }

  componentWillLoad() {
    this.currentMode = this.displayMode;
    this.load();
  }

  load() {
    this.loadItem(this.oldVersion, 'o');
    this.loadItem(this.newVersion, 'n');
  }

  loadItem(target: any, versionType: string) {
    if (typeof target !== 'string') {
      try {
        this[versionType] = JSON.stringify(target, null, 2)
      } catch (e) {
        console.log(e);
      }

      return false;
    }

    this[versionType] = target;
  }

  render() {
    let diffData = jsdiff.diffLines(this.o, this.n);
    if (this.currentMode === 'old') {
      diffData = diffData.filter(d => d.removed || (!d.removed && !d.added));
    }
    if (this.currentMode === 'new') {
      diffData = diffData.filter(d => d.added || (!d.removed && !d.added));
    }

    return (
      <arv-flex layout="column" class="root">
        <arv-flex items="center">
          <arv-button
            variant="raised"
            color={this.currentMode === 'all' ? 'primary' : 'default'}
            buttonClick={() => { this.currentMode = 'all' }}>
            Merged
          </arv-button>
          <arv-divider layout="column" transparent></arv-divider>
          <arv-button
            variant="raised"
            color={this.currentMode === 'new' ? 'primary' : 'default'}
            buttonClick={() => { this.currentMode = 'new' }}>
            New
          </arv-button>
          <arv-divider layout="column" transparent></arv-divider>
          <arv-button
            variant="raised"
            color={this.currentMode === 'old' ? 'primary' : 'default'}
            buttonClick={() => { this.currentMode = 'old' }}>
            Old
          </arv-button>
          <arv-divider layout="column" transparent></arv-divider>
        </arv-flex>
        <arv-divider transparent></arv-divider>
        <div class="contentWrapper">
          <Content
            diffData={diffData}
          />
        </div>
      </arv-flex>
    );
  }
}

function Content({ diffData }) {
  const data = diffData.map(d => {

    const itemClass = {
      plus: d.added,
      minus: d.removed,
      none: !d.added && !d.removed,
      item: true
    };

    const itemSymbol = (() => {
      if (d.added) {
        return '+';
      }
      if (d.removed) {
        return '-';
      }
      return '_';
    })();

    return (
      <arv-flex class={itemClass} items="center">
        <arv-divider layout="column" transparent></arv-divider>
        <span class="line-symbol">{itemSymbol}</span>
        <arv-text preWrap>{d.value}</arv-text>
      </arv-flex>
    );
  });

  return data;
}

