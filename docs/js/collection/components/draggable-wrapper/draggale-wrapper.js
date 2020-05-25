import { Component, h, Prop, Listen } from '@stencil/core';
export class DraggableWrapper {
    constructor() {
        this.layout = 'column';
    }
    dropHandler(event) {
        console.log(event);
    }
    startHandler(event) {
        console.log(event);
    }
    overHandler() {
        /* console.log(event); */
    }
    endHandler() {
        console.log('end');
    }
    exitHandler() {
        console.log('exit');
    }
    enterHandler() {
        console.log('enter');
    }
    leaveHandler() {
        console.log('leave');
    }
    render() {
        return (h("arv-flex", { layout: this.layout },
            h("slot", null)));
    }
    static get is() { return "arv-draggable-wrapper"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "layout": {
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
            "attribute": "layout",
            "reflect": false,
            "defaultValue": "'column'"
        }
    }; }
    static get listeners() { return [{
            "name": "itemDrop",
            "method": "dropHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "itemStart",
            "method": "startHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "itemOver",
            "method": "overHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "itemEnd",
            "method": "endHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "itemExit",
            "method": "exitHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "itemEnter",
            "method": "enterHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "itemLeave",
            "method": "leaveHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
