'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1336621a.js');

const editorCss = ":host,.root,.editor{display:block;width:100%;height:100%;--icon-color:#333}.root{position:relative}.editor{overflow-y:scroll;border-radius:var(--radius);border:1px solid #efefef;padding:1em;outline:none;-webkit-box-sizing:border-box;box-sizing:border-box}.headingList{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:120px}.control{border:1px solid #efefef;display:-ms-flexbox;display:flex;min-height:33px;-ms-flex-wrap:wrap;flex-wrap:wrap;display:flex;-ms-flex-negative:0;flex-shrink:0}.wrapper{position:absolute;top:0;left:0;background-color:rgba(255, 255, 255, 0.2);z-index:1;height:100%;width:100%}.input{opacity:0;opacity:0;display:block;width:33px;height:33px;position:absolute}.inputWrapper{background-color:#f5f5f5;cursor:pointer;position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;overflow:hidden;width:33px;height:33px;--default-icon-color:#333;-webkit-transition:all 0.3s;transition:all 0.3s}.inputWrapper:hover{background-color:#cdcdcd}.editor img{max-width:100%;display:block}";

const Editor = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.disabledTools = [];
        this.blur = () => {
            this.editorOnBlur.emit();
        };
        this.editorOnBlur = index.createEvent(this, "editorOnBlur", 7);
    }
    async setValue(value) {
        const editorContent = this.el.shadowRoot.querySelector('.editor');
        editorContent.innerHTML = value;
    }
    async getValue() {
        const editorContent = this.el.shadowRoot.querySelector('.editor');
        return editorContent.innerHTML;
    }
    formatBlock(block) {
        document.execCommand('formatBlock', false, block);
    }
    imageGet() {
        if (this.handleImage) {
            const editorContent = this.el.shadowRoot.querySelector('.editor');
            this.handleImage(editorContent);
        }
    }
    getImage() {
        const editorContent = this.el.shadowRoot.querySelector('.editor');
        const file = this.el.shadowRoot.querySelector('input[type=file]')['files'][0];
        const reader = new FileReader();
        reader.addEventListener("load", function () {
            const dataURI = reader.result;
            const img = document.createElement('img');
            img.src = dataURI;
            editorContent.appendChild(img);
        }, false);
        if (file) {
            reader.readAsDataURL(file);
        }
    }
    showLink() {
        const url = prompt('Enter the URL');
        document.execCommand('createLink', false, url);
    }
    size(s) {
        document.execCommand('fontSize', false, s);
    }
    comm(c, v = null) {
        document.execCommand(c, false, v);
    }
    render() {
        const rootClassNames = {
            root: true
        };
        const controls = [
            {
                icon: 'format_bold',
                comm: 'bold',
            },
            {
                icon: 'format_underline',
                comm: 'underline',
            },
            {
                icon: 'format_italic',
                comm: 'italic',
            },
            {
                icon: 'format_strikethrough',
                comm: 'strikeThrough',
            },
            {
                icon: 'format_list_numbered',
                comm: 'insertOrderedList',
            },
            {
                icon: 'format_list_bulleted',
                comm: 'insertUnorderedList',
            },
            {
                icon: 'format_align_center',
                comm: 'justifyCenter',
            },
            {
                icon: 'format_align_left',
                comm: 'justifyLeft',
            },
            {
                icon: 'format_align_right',
                comm: 'justifyRight',
            },
            {
                icon: 'format_align_justify',
                comm: 'justifyFull',
            },
            {
                icon: 'format_clear',
                comm: 'removeFormat',
            },
            {
                icon: 'undo',
                comm: 'undo',
            },
            {
                icon: 'redo',
                comm: 'redo',
            },
            {
                icon: 'link_off',
                comm: 'unlink',
            }
        ].filter(d => {
            return !this.disabledTools.includes(d.comm);
        });
        const headings = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
        const sizes = [1, 2, 3, 4, 5, 6, 7];
        const controlsWrapper = (index.h("div", { class: "control" }, controls.map((d, i) => (index.h("arv-button", { key: i, onClick: this.comm.bind(this, d.comm), icon: d.icon, variant: "flat-icon", rounded: false }))), index.h("arv-button", { onClick: this.showLink.bind(this), icon: "insert_link", variant: "flat-icon", rounded: false }), index.h("arv-menu", { xPosition: "left" }, index.h("div", { slot: "menu" }, index.h("arv-button", { icon: "title", variant: "flat-icon", rounded: false })), index.h("div", { class: "headingList", slot: "menu-list" }, headings.map((d, i) => (index.h("arv-button", { rounded: false, key: i, onClick: this.formatBlock.bind(this, d), full: true }, "Heading ", i + 1))))), index.h("arv-menu", { xPosition: "left" }, index.h("div", { slot: "menu" }, index.h("arv-button", { icon: "format_size", variant: "flat-icon", rounded: false })), index.h("div", { class: "headingList", slot: "menu-list" }, sizes.map(d => (index.h("arv-button", { rounded: false, key: d, onClick: this.size.bind(this, d), full: true }, d))))), index.h("span", { class: "inputWrapper" }, index.h("arv-icon", { onClick: this.imageGet.bind(this), icon: "image" }), !Boolean(this.handleImage) && (index.h("input", { class: "input", onChange: this.getImage.bind(this), type: "file", accept: "image/*" })))));
        return (index.h("div", { class: rootClassNames }, index.h("arv-flex", { layout: "column" }, controlsWrapper, index.h("arv-divider", null), index.h("div", { class: "editor", contenteditable: true, onBlur: this.blur }))));
    }
    get el() { return index.getElement(this); }
};
Editor.style = editorCss;

exports.arv_editor = Editor;
