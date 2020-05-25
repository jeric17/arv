'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1336621a.js');

const DraggableWrapper = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h("arv-flex", { layout: this.layout }, index.h("slot", null)));
    }
};

exports.arv_draggable_wrapper = DraggableWrapper;
