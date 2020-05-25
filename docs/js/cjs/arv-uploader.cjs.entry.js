'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1336621a.js');

const uploaderCss = ":host{display:block}:host,.root{height:100%;width:100%;outline-style:var(--dragging-outline-style, dashed);outline-width:var(--dragging-outline-width, 2px);outline-color:transparent;outline-offset:var(--dragging-outline-offset, -10px);-webkit-transition:all 0.3s;transition:all 0.3s;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative}.root{background-color:var(--uploader-bg, #fff)}.input{height:0px;width:0px;overflow:hidden;max-width:0px;max-height:0px}.label{cursor:pointer}.isDragging{outline-style:var(--dragging-outline-style, dashed);outline-width:var(--dragging-outline-width, 2px);outline-color:var(--dragging-outline-color, var(--primary-color))}.content-wrapper{height:100%;overflow-y:scroll;position:relative;width:100%}.labelText{display:block;padding:0.25em 1.75em;background-color:var(--upload-button-bg, var(--primary-color));border-radius:var(--radius)}";

const Uploader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.onDragEnd = (e) => {
            this.prevent(e);
        };
        this.onDragEnter = (e) => {
            this.prevent(e);
        };
        this.onDragExit = (e) => {
            this.prevent(e);
            this.isDragging = false;
        };
        this.onDragLeave = (e) => {
            this.prevent(e);
            this.isDragging = false;
        };
        this.onDragOver = (e) => {
            this.prevent(e);
            this.dragging();
        };
        this.onDrop = (e) => {
            console.log('uploader', e);
            this.prevent(e);
            this.isDragging = false;
            this.arvFilesChange.emit(e.dataTransfer.files);
        };
        this.inputChange = (e) => {
            this.arvFilesChange.emit(e.target.files);
        };
        this.prevent = (e) => {
            e.preventDefault();
            e.stopPropagation();
        };
        this.dragging = () => {
            if (this.isDragging) {
                return;
            }
            this.isDragging = true;
        };
        this.arvFilesChange = index.createEvent(this, "arvFilesChange", 7);
    }
    get uploadButton() {
        if (this.hideUploadButton) {
            return;
        }
        return (index.h("label", { class: "label" }, index.h("arv-text", { class: "labelText" }, this.uploadText || 'Upload'), index.h("input", { onChange: this.inputChange, id: "file", class: "input", name: "files", type: "file", multiple: true })));
    }
    render() {
        const classNames = {
            root: true,
            isDragging: this.isDragging
        };
        return (index.h("div", { class: classNames, onDragEnd: this.onDragEnd, onDragExit: this.onDragExit, onDragEnter: this.onDragEnter, onDragLeave: this.onDragLeave, onDragOver: this.onDragOver, onDrop: this.onDrop }, index.h("arv-flex", { layout: "column" }, this.uploadButton, index.h("div", { class: "content-wrapper" }, index.h("slot", null)))));
    }
};
Uploader.style = uploaderCss;

exports.arv_uploader = Uploader;
