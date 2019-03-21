import { Component, Prop, State, Watch } from '@stencil/core';
import { diff } from './diff';

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
    const diffData = diff(this.o, this.n);
    if (this.currentMode === 'old') {
      diffData.stringArray = diffData.stringArray.filter(d => d.minus || (!d.minus && !d.plus));
    }
    if (this.currentMode === 'new') {
      diffData.stringArray = diffData.stringArray.filter(d => d.plus || (!d.minus && !d.plus));
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
        <Content
          diffData={diffData}
          currentMode={this.currentMode}
        />
      </arv-flex>
    );
  }
}

function Content({ diffData, currentMode }) {
  const { stringArray } = diffData;

  const data = stringArray.map(d => {

    const itemClass = {
      plus: d.plus,
      minus: d.minus,
      none: !d.minus && !d.plus,
      item: true
    };

    const itemSymbol = (() => {
      if (d.plus) {
        return '+';
      }
      if (d.minus) {
        return '-';
      }
      return '_';
    })();

    return (
      <arv-flex class={itemClass} items="center">
        <arv-flex class="line-wrapper" justify="end">
          {(currentMode === 'all' || currentMode === 'new') && (
            <arv-text class="line">{Number(d.indexes[0]) + 1}</arv-text>  
          )}
          {(currentMode === 'all' || currentMode === 'old') && (
            <arv-text class="line">{Number(d.indexes[1]) + 1}</arv-text>
          )}
        </arv-flex>
        <arv-divider layout="column" transparent></arv-divider>
        <span class="line-symbol">{itemSymbol}</span>
        <arv-text preWrap>{d.data}</arv-text>
      </arv-flex>
    );
  });

  return data;
}

