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
import { r as registerInstance, h, H as Host, g as getElement } from './index-8fd6d07a.js';
var snackbarCss = ":host{display:none}";
var Snackbar = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Flag to let the virtual snackbar to update
         * if it is already opened.
         */
        this.counter = 0;
        /**
         * If the snackbar is open.
         */
        this.isOPen = false;
        /**
         * Will not render the snackbar's close button.
         */
        this.hideClose = false;
        /**
         * Position of the snack bar in horizontal axis.
         */
        this.xPosition = 'center';
        /**
         * Position of the snack bar in vertical axis.
         */
        this.yPosition = 'top';
    }
    /**
     * Opens up a snackbar.
     */
    class_1.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.initOpen();
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.initOpen = function () {
        var _this = this;
        var el = this.el;
        /**
         * If the snackbar is arealy opened. Update the counter attribute
         * to notify the virtual snackbar and let it handle
         * updating the duration.
         */
        if (this.isOPen) {
            var virtual_1 = document.body.querySelector('arv-virtual-snackbar');
            virtual_1.setAttribute('counter', String(this.counter));
            this.counter++;
            return this.el;
        }
        /**
         * Create element.
         */
        var virtual = document.createElement('arv-virtual-snackbar');
        var elChildren = Array.from(this.el.children);
        /**
         * Apply prop attributes.
         */
        if (this.color) {
            virtual.setAttribute('color', String(this.color));
        }
        virtual.setAttribute('duration', String(this.duration));
        virtual.setAttribute('message', String(this.message || ''));
        virtual.setAttribute('counter', String(this.counter));
        virtual.setAttribute('x-position', this.xPosition);
        virtual.setAttribute('y-position', this.yPosition);
        if (this.icon) {
            virtual.setAttribute('icon', this.icon);
        }
        if (this.hideClose) {
            virtual.setAttribute('hide-close', 'true');
        }
        /**
         * Listen to close event.
         */
        virtual.addEventListener('arvVirtualSnackbarClose', function () {
            elChildren.forEach(function (node) {
                el.appendChild(node);
            });
            document.body.removeChild(virtual);
            _this.isOPen = false;
        });
        /**
         * Transfer children to arv-virtual component.
         */
        elChildren.forEach(function (node) {
            virtual.appendChild(node);
        });
        document.body.appendChild(virtual);
        this.counter++;
        this.isOPen = true;
        /**
         * Just return the host element.
         */
        return this.el;
    };
    class_1.prototype.render = function () {
        return (h(Host, null, h("slot", null)));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
Snackbar.style = snackbarCss;
export { Snackbar as arv_snackbar };
