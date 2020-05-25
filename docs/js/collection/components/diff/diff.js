import { Component, h, Element, Prop, State, Watch } from '@stencil/core';
import * as jsdiff from 'diff';
export class Diff {
    constructor() {
        this.history = [];
        this.currentStep = 0;
        this.o = '';
        this.n = '';
        this.currentJump = 0;
        this.autoScroll = false;
        this.showControls = true;
        this.showLineControl = true;
        // refresh jump diffOnly
        this.controls = [];
        this.displayMode = 'all';
        this.refresh = () => {
            this.currentStep = 0;
            this.history = [];
            this.load();
            this.onUpdate();
        };
        this.mergeCodes = (diffArray, index, isIncoming) => {
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
        };
        this.onUpdate = () => {
            const sb = this.diffData.reduce((c, n) => {
                if (n.value !== undefined) {
                    return `${c}${n.value}`;
                }
                return c;
            }, '');
            const isDone = !Boolean(this.diffData.find(d => d.added || d.removed));
            if (this.mergeChange) {
                this.mergeChange(this.diffData, sb, isDone);
            }
        };
        this.undo = () => {
            if (!this.history.length || this.currentStep === 0) {
                return false;
            }
            this.currentStep -= 1;
            this.diffData = this.history[this.currentStep];
            this.onUpdate();
        };
        this.redo = () => {
            const l = this.history.length;
            if (!l || this.currentStep >= l) {
                console.log(false, this.currentStep, l);
                return false;
            }
            this.currentStep += 1;
            const data = this.history[this.currentStep];
            if (data) {
                this.diffData = data;
            }
            else {
                this.currentStep -= 1;
            }
            this.onUpdate();
        };
        this.jump = (next) => {
            const lastEl = Array.from(this.el.shadowRoot.querySelectorAll('[data-group]')).pop();
            if (!lastEl) {
                return false;
            }
            let currentJump = this.currentJump;
            if (!next) {
                currentJump -= 1;
            }
            else {
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
            const targetRect = target.getBoundingClientRect();
            const contentRect = contentWrapper.getBoundingClientRect();
            const top = targetRect.y - contentRect.y + contentWrapper.scrollTop;
            contentWrapper.scrollTo({
                behavior: 'smooth',
                left: 0,
                top
            });
            this.currentJump = currentJump;
        };
    }
    oldVersionHandler(d) {
        this.loadItem(d, 'o');
        this.setDiffData();
    }
    newVersionHandler(d) {
        this.loadItem(d, 'n');
        this.setDiffData();
    }
    handleDisplayMode() {
        this.currentMode = this.displayMode;
    }
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
    setDiffData() {
        this.diffData = jsdiff.default.diffLines(this.o, this.n);
    }
    loadItem(target, versionType) {
        if (typeof target !== 'string') {
            try {
                this[versionType] = JSON.stringify(target, null, 2);
            }
            catch (e) {
                console.log(e);
            }
            return false;
        }
        this[versionType] = target;
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
        return (h("arv-flex", { layout: "column", class: "root" },
            this.showControls && (h("arv-flex", { class: "controlWrapper", items: "center" },
                this.showLineControl && (h("arv-tooltip", { message: "refresh" },
                    h("arv-button", { icon: "refresh", variant: "flat-icon", onClick: () => this.refresh() }))),
                h("arv-tooltip", { message: "Previous diff" },
                    h("arv-button", { icon: "chevron_left", variant: "flat-icon", onClick: () => this.jump(false) })),
                h("arv-tooltip", { message: "Next diff" },
                    h("arv-button", { icon: "chevron_right", variant: "flat-icon", onClick: () => this.jump(true) })),
                this.showLineControl && [
                    h("arv-tooltip", { message: "Undo" },
                        h("arv-button", { disabled: !hasUndo, icon: "undo", variant: "flat-icon", buttonClick: () => this.undo() })),
                    h("arv-tooltip", { message: "Redo" },
                        h("arv-button", { disabled: !hasRedo, icon: "redo", variant: "flat-icon", buttonClick: () => this.redo() }))
                ])),
            h("div", { class: "contentWrapper" },
                h(Content, { diffData: diffData, mergeCodes: this.mergeCodes, showLineControl: this.showLineControl }))));
    }
    static get is() { return "arv-diff"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["diff.css"]
    }; }
    static get styleUrls() { return {
        "$": ["diff.css"]
    }; }
    static get properties() { return {
        "autoScroll": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "auto-scroll",
            "reflect": false,
            "defaultValue": "false"
        },
        "showControls": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "show-controls",
            "reflect": false,
            "defaultValue": "true"
        },
        "showLineControl": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "show-line-control",
            "reflect": false,
            "defaultValue": "true"
        },
        "controls": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "any[]",
                "resolved": "any[]",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "[]"
        },
        "oldVersion": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "old-version",
            "reflect": false
        },
        "newVersion": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "new-version",
            "reflect": false
        },
        "displayMode": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "display-mode",
            "reflect": false,
            "defaultValue": "'all'"
        },
        "mergeChange": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(diffArray: any[], sb: string, done: boolean) => void",
                "resolved": "(diffArray: any[], sb: string, done: boolean) => void",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        }
    }; }
    static get states() { return {
        "diffData": {},
        "o": {},
        "n": {},
        "currentMode": {}
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "oldVersion",
            "methodName": "oldVersionHandler"
        }, {
            "propName": "newVersion",
            "methodName": "newVersionHandler"
        }, {
            "propName": "displayMode",
            "methodName": "handleDisplayMode"
        }]; }
}
function Content({ diffData, mergeCodes, showLineControl }) {
    let groupNumber = 0;
    let lastIsDefault;
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
        return (h("arv-flex", { layout: "column", class: classNames, "data-group": groupNumber },
            showControl && (h("arv-flex", { class: "lineControl" },
                h("arv-divider", { "is-vertical": true }),
                h("arv-text", { class: "lineButton current", onClick: () => mergeCodes(arr, i, false) }, "Accept current"),
                h("arv-text", { class: "div" }, "|"),
                h("arv-text", { class: "lineButton incoming", onClick: () => mergeCodes(arr, i, true) }, "Accept incoming"),
                h("arv-divider", { "is-vertical": true }))),
            h("arv-flex", { class: itemClass, items: "center" },
                h("arv-divider", { "is-vertical": true }),
                h(LineSymbol, { item: d, showLineControl: showLineControl }),
                h("arv-text", { class: "textWrapper" }, d.value))));
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
        return h("div", { class: "space" });
    }
    if (itemSymbol === '-' || itemSymbol === '+') {
        return (h("span", { class: "line-symbol" }, itemSymbol));
    }
    const message = item.added ? 'Incoming' : 'Current';
    return (h("arv-tooltip", { message: message, position: "right" },
        h("span", { class: "line-symbol letter-mode" }, itemSymbol)));
}
function checkIsDefault(item) {
    return !item.added && !item.removed;
}
function clone(d) {
    return JSON.parse(JSON.stringify(d));
}
