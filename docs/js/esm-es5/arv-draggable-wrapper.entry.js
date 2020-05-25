import { r as registerInstance, h } from './index-8fd6d07a.js';
var DraggableWrapper = /** @class */ (function () {
    function DraggableWrapper(hostRef) {
        registerInstance(this, hostRef);
        this.layout = 'column';
    }
    DraggableWrapper.prototype.dropHandler = function (event) {
        console.log(event);
    };
    DraggableWrapper.prototype.startHandler = function (event) {
        console.log(event);
    };
    DraggableWrapper.prototype.overHandler = function () {
        /* console.log(event); */
    };
    DraggableWrapper.prototype.endHandler = function () {
        console.log('end');
    };
    DraggableWrapper.prototype.exitHandler = function () {
        console.log('exit');
    };
    DraggableWrapper.prototype.enterHandler = function () {
        console.log('enter');
    };
    DraggableWrapper.prototype.leaveHandler = function () {
        console.log('leave');
    };
    DraggableWrapper.prototype.render = function () {
        return (h("arv-flex", { layout: this.layout }, h("slot", null)));
    };
    return DraggableWrapper;
}());
export { DraggableWrapper as arv_draggable_wrapper };
