'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1336621a.js');

const imageUploadCss = "@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.root{position:relative;height:120px;width:120px;border-radius:var(--radius);overflow:hidden;-webkit-box-shadow:0 2px 2px rgba(3,3,3,0.3);box-shadow:0 2px 2px rgba(3,3,3,0.3);background-color:#dfdfdf}.img{background-size:cover;background-position:center center;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.small{height:80px;width:80px}.xsmall{height:40px;width:40px}.large{height:150px;width:150px}.input{position:absolute;opacity:0;height:100%;width:100%;top:0;left:0;cursor:pointer}.remove-button{--icon-color:#fff;--default-light-color:rgba(3, 3, 3, 0.3);display:none;position:absolute;z-index:9;right:0;width:33px;-ms-flex-pack:end;justify-content:flex-end}.hover{-webkit-animation:fadeIn 0.3s;animation:fadeIn 0.3s;display:none;background-color:rgba(3,3,3,0.5);-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;top:0;left:0;width:100%;height:100%;position:absolute}.hoverText{color:#fff;text-shadow:1px 1px 1px rgba(3,3,3,0.3)}.small .hoverText{font-size:0.8rem}.xsmall .hoverText{display:none}.root:hover .hover{display:-ms-flexbox;display:flex}.root:hover .remove-button{display:-ms-flexbox;display:flex}.disabled,.disabled .input{cursor:not-allowed}";

const ImageUpload = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.arvUploadImage = index.createEvent(this, "arvUploadImage", 7);
        this.arvRemoveImage = index.createEvent(this, "arvRemoveImage", 7);
    }
    change(evt) {
        this.arvUploadImage.emit({
            target: evt.target,
            files: evt.target.files
        });
        if (this.uploadImage) {
            this.uploadImage(evt.target);
        }
    }
    removeItem() {
        const input = this.el.shadowRoot.querySelector('input');
        input.value = null;
        this.arvRemoveImage.emit();
        if (this.removeImage) {
            this.removeImage();
        }
    }
    render() {
        const rootClassNames = {
            root: true,
            xsmall: this.size === 'xsmall',
            small: this.size === 'small',
            large: this.size === 'large',
            disabled: this.disabled
        };
        const imgClassNames = {
            img: true
        };
        const imgStyle = {};
        if (this.imgSrc) {
            imgStyle['background-image'] = `url(${this.imgSrc})`;
        }
        const text = (() => {
            if (this.imgSrc) {
                return 'Change Image';
            }
            return 'Upload Image';
        })();
        return (index.h("div", { class: rootClassNames }, this.imgSrc && (index.h("div", { class: "remove-button" }, index.h("arv-button", { disabled: this.disabled, buttonClick: this.removeItem.bind(this), icon: "close", variant: "raised-icon" }))), index.h("div", { class: imgClassNames, style: imgStyle }, !this.imgSrc && index.h("arv-icon", { size: "xlarge", icon: "photo" })), index.h("div", { class: "hover" }, index.h("span", { class: "hoverText" }, text)), index.h("input", { disabled: this.disabled, class: "input", type: "file", onChange: this.change.bind(this) })));
    }
    get el() { return index.getElement(this); }
};
ImageUpload.style = imageUploadCss;

exports.arv_image_upload = ImageUpload;
