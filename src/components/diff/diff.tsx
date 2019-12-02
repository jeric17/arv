import { Component, h, Element, Prop, State, Watch } from '@stencil/core';
import * as jsdiff from 'diff';

@Component({
  tag: 'arv-diff',
  styleUrl: 'diff.css',
  shadow: true
})
export class Diff {
  history = [];
  currentStep = 0;

  @Element() el: HTMLElement;

  @State() diffData: any[];
  @State() o = '';
  @State() n = '';
  @State() currentMode: string;
  currentJump = 0;

  @Prop() autoScroll = false;
  @Prop() showControls = true;
  @Prop() showLineControl = true;
  // refresh jump diffOnly
  @Prop() controls = [];

  @Prop() oldVersion: any;
  @Watch('oldVersion')
  oldVersionHandler(d: any) {
    this.loadItem(d, 'o');
    this.setDiffData();
  }

  @Prop() newVersion: any;
  @Watch('newVersion')
  newVersionHandler(d: any) {
    this.loadItem(d, 'n');
    this.setDiffData();
  }

  @Prop() displayMode = 'all';
  @Watch('displayMode')
  handleDisplayMode() {
    this.currentMode = this.displayMode;
  }

  @Prop() mergeChange: (diffArray: any[], sb: string, done: boolean) => void;

  componentWillLoad() {
    this.currentMode = this.displayMode;
    this.load();
    this.setDiffData();
  }

  componentDidLoad() {
    if (this.autoScroll) {
      this.jump(true);
    }
  }

  load() {
    this.loadItem(this.oldVersion, 'o');
    this.loadItem(this.newVersion, 'n');
    this.setDiffData();
  }

  refresh = () => {
    this.currentStep = 0;
    this.history = [];
    this.load();

    this.onUpdate();
  }

  setDiffData() {
    this.diffData = jsdiff.default.diffLines(this.o, this.n);
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

  mergeCodes = (diffArray, index, isIncoming) => {
    let shouldContinue = false;
    const dataArray = clone(diffArray);

    const map = dataArray.map((d, i) => {

      if (!d.added && !d.removed && shouldContinue) {
        shouldContinue = false;
      }

      if (i === index) {
        if (isIncoming && d.added) {
          d.added = false;
        }
        if (!isIncoming && d.removed) {
          d.removed = false;
        }
        shouldContinue = true;
      }

      // Incoming block
      if (shouldContinue && d.removed && isIncoming) {
        d.removed = false;
        d.added = false;
        d.value = undefined;
      }
      if (shouldContinue && d.added && isIncoming) {
        d.removed = false;
        d.added = false;
      }

      // Retain block
      if (shouldContinue && d.added && !isIncoming) {
        d.removed = false;
        d.added = false;
        d.value = undefined;
      }
      if (shouldContinue && d.removed && !isIncoming) {
        d.removed = false;
        d.added = false;
      }

      return d;
    });

    this.history[this.currentStep] = this.diffData;
    this.currentStep += 1;
    this.history[this.currentStep] = map;
    this.diffData = map;

    this.onUpdate();
  }

  onUpdate = () => {
    const sb = this.diffData.reduce((c, n) => {
      if (n.value !== undefined) {
        return `${c}${n.value}`;
      }
      return c;
    }, '');
    const isDone = !Boolean(this.diffData.find(d => d.added || d.removed));

    if (this.mergeChange) {
      this.mergeChange(
        this.diffData,
        sb,
        isDone
      );
    }
  }

  undo = () => {
    if (!this.history.length || this.currentStep === 0) {
      return false;
    }
    this.currentStep -= 1;
    this.diffData = this.history[this.currentStep];

    this.onUpdate();
  }

  redo = () => {
    const l = this.history.length;
    if (!l || this.currentStep >= l) {
      console.log(false, this.currentStep, l);
      return false;
    }
    this.currentStep += 1;
    const data = this.history[this.currentStep];
    if (data) {
      this.diffData = data;
    } else {
      this.currentStep -= 1;
    }

    this.onUpdate();
  }

  jump = (next: boolean) => {
    const lastEl: any = Array.from(this.el.shadowRoot.querySelectorAll('[data-group]')).pop();
    if (!lastEl) {
      return false;
    }

    let currentJump = this.currentJump;
    if (!next) {
      currentJump -= 1;
    } else {
      currentJump += 1;
    }
    if (!currentJump && !next) {
      currentJump = Number(lastEl.dataset.group);
    }
    const target = this.el.shadowRoot.querySelector(`[data-group="${currentJump}"]`);
    const contentWrapper = this.el.shadowRoot.querySelector('.contentWrapper');

    if (!target) {
      this.currentJump = 0;
      return false;
    }
    const targetRect: any = target.getBoundingClientRect();
    const contentRect: any = contentWrapper.getBoundingClientRect();

    const top = targetRect.y - contentRect.y + contentWrapper.scrollTop;

    contentWrapper.scrollTo({
      behavior: 'smooth',
      left: 0,
      top
    });

    this.currentJump = currentJump;
  }

  render() {
    let diffData = clone(this.diffData);

    if (this.currentMode === 'old') {
      diffData = diffData.filter(d => d.removed || (!d.removed && !d.added));
    }
    if (this.currentMode === 'new') {
      diffData = diffData.filter(d => d.added || (!d.removed && !d.added));
    }
    const l = this.history.length;
    const hasUndo = this.currentStep > 0 && l > 0;
    const hasRedo = this.currentStep < l - 1 && l > 0;

    return (
      <arv-flex layout="column" class="root">
        {this.showControls && (
          <arv-flex
            class="controlWrapper"
            items="center">
            {this.showLineControl && (
              <arv-tooltip message="refresh">
                <arv-button
                  icon="refresh"
                  variant="flat-icon"
                  onClick={() => this.refresh()}
                ></arv-button>
              </arv-tooltip>
            )}
            <arv-tooltip message="Previous diff">
              <arv-button
                icon="chevron_left"
                variant="flat-icon"
                onClick={() => this.jump(false)}
              ></arv-button>
            </arv-tooltip>
            <arv-tooltip message="Next diff">
              <arv-button
                icon="chevron_right"
                variant="flat-icon"
                onClick={() => this.jump(true)}
              ></arv-button>
            </arv-tooltip>
            {this.showLineControl && [
              <arv-tooltip message="Undo">
                <arv-button
                  disabled={!hasUndo}
                  icon="undo"
                  variant="flat-icon"
                  buttonClick={() => this.undo()}
                ></arv-button>
              </arv-tooltip>,
              <arv-tooltip message="Redo">
                <arv-button
                  disabled={!hasRedo}
                  icon="redo"
                  variant="flat-icon"
                  buttonClick={() => this.redo()}
                ></arv-button>
              </arv-tooltip>
            ]}
          </arv-flex>
        )}
        <div class="contentWrapper">
          <Content
            diffData={diffData}
            mergeCodes={this.mergeCodes}
            showLineControl={this.showLineControl}
          />
        </div>
      </arv-flex>
    );
  }
}

function Content({ diffData, mergeCodes, showLineControl }) {
  let groupNumber = 0;
  let lastIsDefault: boolean;

  const data = diffData.filter(d => d.value !== undefined).map((d, i, arr) => {
    const isDefault = checkIsDefault(d);

    if (isDefault && !lastIsDefault) {
      /* groupNumber += 1; */
    }

    if (!isDefault && lastIsDefault) {
      groupNumber += 1;
    }
    const showControl = !isDefault && lastIsDefault && showLineControl;

    lastIsDefault = isDefault;

    const itemClass = {
      plus: d.added,
      minus: d.removed,
      none: !d.added && !d.removed,
      item: true
    };

    const classNames = {
      showLineControl,
    };

    return (
      <arv-flex
        layout="column"
        class={classNames}
        data-group={groupNumber}
      >

        {showControl && (
          <arv-flex class="lineControl">
            <arv-divider layout="column" transparent></arv-divider>
            <arv-text
              class="lineButton current"
              onClick={() => mergeCodes(arr, i, false)}
            >
              Accept current
             </arv-text>
            <arv-text class="div">|</arv-text>
            <arv-text
              class="lineButton incoming"
              onClick={() => mergeCodes(arr, i, true)}
            >
              Accept incoming
             </arv-text>
            <arv-divider layout="column" transparent></arv-divider>
          </arv-flex>
        )}

        <arv-flex
          class={itemClass}
          items="center"
        >
          <arv-divider layout="column" transparent></arv-divider>
          <LineSymbol item={d} showLineControl={showLineControl} />
          <arv-text class="textWrapper" preWrap>{d.value}</arv-text>
        </arv-flex>
      </arv-flex>
    );
  });

  return data;
}

function LineSymbol({ item, showLineControl }) {
  const itemSymbol = (() => {
    if (item.added && showLineControl === true) {
      return 'i';
    }

    if (item.removed && showLineControl === true) {
      return 'c';
    }

    if (item.added) {
      return '+';
    }
    if (item.removed) {
      return '-';
    }
    return null;
  })();

  if (!itemSymbol) {
    return <div class="space"></div>;
  }

  if (itemSymbol === '-' || itemSymbol === '+') {
    return (
      <span class="line-symbol">{itemSymbol}</span>
    );
  }

  const message = item.added ? 'Incoming' : 'Current';

  return (
    <arv-tooltip message={message} position="right">
      <span class="line-symbol letter-mode">{itemSymbol}</span>
    </arv-tooltip>
  );
}

function checkIsDefault(item: any) {
  return !item.added && !item.removed;
}

function clone(d) {
  return JSON.parse(JSON.stringify(d));
}
