import { r as registerInstance, h } from './index-8fd6d07a.js';

const DraggableWrapper = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("arv-flex", { layout: this.layout }, h("slot", null)));
    }
};

export { DraggableWrapper as arv_draggable_wrapper };
