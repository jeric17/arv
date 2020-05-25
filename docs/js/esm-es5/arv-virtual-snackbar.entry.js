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
import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-8fd6d07a.js';
import { g as generateAttrValue } from './helpers-5034f609.js';
var virtualSnackbarCss = "@-webkit-keyframes out{from{opacity:1}to{opacity:0}}@keyframes out{from{opacity:1}to{opacity:0}}@-webkit-keyframes in{from{opacity:0;-webkit-transform:scale(0.5);transform:scale(0.5)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes in{from{opacity:0;-webkit-transform:scale(0.5);transform:scale(0.5)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}:host{top:0;left:0;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;position:fixed;z-index:9999;width:100vw}.snackbar{-webkit-animation:in 0.3s;animation:in 0.3s;-webkit-transform-origin:center;transform-origin:center;background-color:var(--default-bg);border-radius:var(--radius);-webkit-box-shadow:1px 2px 3px rgba(3, 3, 3, 0.3);box-shadow:1px 2px 3px rgba(3, 3, 3, 0.3);-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--font-color);margin:1em;padding:0.7em 0.25em 0.7em 1em;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}:host(.hideClose) .snackbar{padding:1em}:host(.out){-webkit-animation:out 0.3s forwards;animation:out 0.3s forwards}:host(.verticalCenter){top:calc(100vh - 50%)}:host(.bottom){top:auto;bottom:0}:host(.left){-ms-flex-pack:start;justify-content:flex-start}:host(.right){-ms-flex-pack:end;justify-content:flex-end}:host(.primary) .snackbar{background-color:var(--primary-color);color:var(--primary-text-color);--icon-color:var(--primary-text-color)}:host(.secondary) .snackbar{background-color:var(--secondary-color);color:var(--secondary-text-color);--icon-color:var(--secondary-text-color)}:host(.success) .snackbar{background-color:var(--success-color);color:var(--success-text-color);--icon-color:var(--success-text-color)}:host(.warning) .snackbar{background-color:var(--warning-color);color:var(--warning-text-color);--icon-color:var(--warning-text-color)}:host(.danger) .snackbar{background-color:var(--danger-color);color:var(--danger-text-color);--icon-color:var(--danger-text-color)}:host(.dark) .snackbar{background-color:var(--dark-color);color:var(--dark-text-color);--icon-color:var(--dark-text-color)}:host(.light) .snackbar{background-color:var(--light-color);color:var(--light-text-color);--icon-color:var(--light-text-color)}.sb-icon{margin-right:1em}.sb-btn{margin-left:1em}";
var VirtualSnackbar = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.durationTimeout = null;
        this.color = '';
        /**
         * Position of the snack bar in horizontal axis.
         */
        this.xPosition = 'center';
        /**
         * Position of the snack bar in vertical axis.
         */
        this.yPosition = 'top';
        this.close = function () {
            _this.el.classList.add('out');
            setTimeout(function () {
                _this.arvVirtualSnackbarClose.emit();
            }, 300);
        };
        this.closeBtnClick = function () {
            clearTimeout(_this.durationTimeout);
            _this.close();
        };
        this.arvVirtualSnackbarClose = createEvent(this, "arvVirtualSnackbarClose", 7);
    }
    class_1.prototype.durationCheck = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.init();
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.componentDidLoad = function () {
        this.init();
    };
    class_1.prototype.disconnectedCallback = function () {
        clearTimeout(this.durationTimeout);
    };
    class_1.prototype.init = function () {
        var _this = this;
        if (!this.duration) {
            return false;
        }
        clearTimeout(this.durationTimeout);
        this.durationTimeout = setTimeout(function () {
            _this.close();
        }, this.duration);
    };
    class_1.prototype.render = function () {
        var cls = Object.assign({ top: this.yPosition === 'top', bottom: this.yPosition === 'bottom', left: this.xPosition === 'left', right: this.xPosition === 'right', verticalCenter: this.yPosition === 'center', horizontalCenter: this.xPosition === 'center', hideClose: this.hideClose }, generateAttrValue(this.color));
        return (h(Host, { class: cls }, h("div", { class: "snackbar" }, this.icon && (h("arv-icon", { class: "sb-icon", icon: this.icon })), h("arv-text", { wrap: "nowrap" }, this.message), h("slot", null), !this.hideClose && (h("arv-button", { class: "sb-btn", onClick: this.closeBtnClick, color: this.color, icon: "clear", "is-icon": true })))));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "counter": ["durationCheck"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
VirtualSnackbar.style = virtualSnackbarCss;
export { VirtualSnackbar as arv_virtual_snackbar };
