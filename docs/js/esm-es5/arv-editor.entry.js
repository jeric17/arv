var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, c as createEvent, h, g as getElement } from './index-8fd6d07a.js';
var editorCss = ":host,.root,.editor{display:block;width:100%;height:100%;--icon-color:#333}.root{position:relative}.editor{overflow-y:scroll;border-radius:var(--radius);border:1px solid #efefef;padding:1em;outline:none;-webkit-box-sizing:border-box;box-sizing:border-box}.headingList{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:120px}.control{border:1px solid #efefef;display:-ms-flexbox;display:flex;min-height:33px;-ms-flex-wrap:wrap;flex-wrap:wrap;display:flex;-ms-flex-negative:0;flex-shrink:0}.wrapper{position:absolute;top:0;left:0;background-color:rgba(255, 255, 255, 0.2);z-index:1;height:100%;width:100%}.input{opacity:0;opacity:0;display:block;width:33px;height:33px;position:absolute}.inputWrapper{background-color:#f5f5f5;cursor:pointer;position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;overflow:hidden;width:33px;height:33px;--default-icon-color:#333;-webkit-transition:all 0.3s;transition:all 0.3s}.inputWrapper:hover{background-color:#cdcdcd}.editor img{max-width:100%;display:block}";
var Editor = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.disabledTools = [];
        this.blur = function () {
            _this.editorOnBlur.emit();
        };
        this.editorOnBlur = createEvent(this, "editorOnBlur", 7);
    }
    class_1.prototype.setValue = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var editorContent;
            return __generator(this, function (_a) {
                editorContent = this.el.shadowRoot.querySelector('.editor');
                editorContent.innerHTML = value;
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.getValue = function () {
        return __awaiter(this, void 0, void 0, function () {
            var editorContent;
            return __generator(this, function (_a) {
                editorContent = this.el.shadowRoot.querySelector('.editor');
                return [2 /*return*/, editorContent.innerHTML];
            });
        });
    };
    class_1.prototype.formatBlock = function (block) {
        document.execCommand('formatBlock', false, block);
    };
    class_1.prototype.imageGet = function () {
        if (this.handleImage) {
            var editorContent = this.el.shadowRoot.querySelector('.editor');
            this.handleImage(editorContent);
        }
    };
    class_1.prototype.getImage = function () {
        var editorContent = this.el.shadowRoot.querySelector('.editor');
        var file = this.el.shadowRoot.querySelector('input[type=file]')['files'][0];
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            var dataURI = reader.result;
            var img = document.createElement('img');
            img.src = dataURI;
            editorContent.appendChild(img);
        }, false);
        if (file) {
            reader.readAsDataURL(file);
        }
    };
    class_1.prototype.showLink = function () {
        var url = prompt('Enter the URL');
        document.execCommand('createLink', false, url);
    };
    class_1.prototype.size = function (s) {
        document.execCommand('fontSize', false, s);
    };
    class_1.prototype.comm = function (c, v) {
        if (v === void 0) { v = null; }
        document.execCommand(c, false, v);
    };
    class_1.prototype.render = function () {
        var _this = this;
        var rootClassNames = {
            root: true
        };
        var controls = [
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
        ].filter(function (d) {
            return !_this.disabledTools.includes(d.comm);
        });
        var headings = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
        var sizes = [1, 2, 3, 4, 5, 6, 7];
        var controlsWrapper = (h("div", { class: "control" }, controls.map(function (d, i) { return (h("arv-button", { key: i, onClick: _this.comm.bind(_this, d.comm), icon: d.icon, variant: "flat-icon", rounded: false })); }), h("arv-button", { onClick: this.showLink.bind(this), icon: "insert_link", variant: "flat-icon", rounded: false }), h("arv-menu", { xPosition: "left" }, h("div", { slot: "menu" }, h("arv-button", { icon: "title", variant: "flat-icon", rounded: false })), h("div", { class: "headingList", slot: "menu-list" }, headings.map(function (d, i) { return (h("arv-button", { rounded: false, key: i, onClick: _this.formatBlock.bind(_this, d), full: true }, "Heading ", i + 1)); }))), h("arv-menu", { xPosition: "left" }, h("div", { slot: "menu" }, h("arv-button", { icon: "format_size", variant: "flat-icon", rounded: false })), h("div", { class: "headingList", slot: "menu-list" }, sizes.map(function (d) { return (h("arv-button", { rounded: false, key: d, onClick: _this.size.bind(_this, d), full: true }, d)); }))), h("span", { class: "inputWrapper" }, h("arv-icon", { onClick: this.imageGet.bind(this), icon: "image" }), !Boolean(this.handleImage) && (h("input", { class: "input", onChange: this.getImage.bind(this), type: "file", accept: "image/*" })))));
        return (h("div", { class: rootClassNames }, h("arv-flex", { layout: "column" }, controlsWrapper, h("arv-divider", null), h("div", { class: "editor", contenteditable: true, onBlur: this.blur }))));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
Editor.style = editorCss;
export { Editor as arv_editor };
