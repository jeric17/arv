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
import { r as registerInstance, h, H as Host, c as createEvent, g as getElement } from './index-8fd6d07a.js';
import { g as generateAttrValue, d as delay } from './helpers-5034f609.js';
import { c as createCommonjsModule, a as commonjsGlobal } from './_commonjsHelpers-97e6d7b1.js';
var dividerCss = ":host{width:100%;border-bottom-width:1px;border-bottom-style:solid;border-color:var(--default-highlight)}";
var Divider = /** @class */ (function () {
    function Divider(hostRef) {
        registerInstance(this, hostRef);
    }
    Divider.prototype.render = function () {
        var cls = {
            'arv-vertical': this.isVertical
        };
        return (h(Host, { class: cls }));
    };
    return Divider;
}());
Divider.style = dividerCss;
var flexCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.expanded){height:100%;width:100%}";
var Flex = /** @class */ (function () {
    function Flex(hostRef) {
        registerInstance(this, hostRef);
    }
    Flex.prototype.render = function () {
        var cls = {
            expanded: this.expanded,
        };
        var styles = Object.assign({ 'flex-direction': this.direction, 'justify-content': this.justify, 'align-items': this.alignItems, 'flex-wrap': this.wrap, 'flex': this.flex }, this.styles);
        return (h(Host, { class: cls, style: styles }, h("slot", null)));
    };
    return Flex;
}());
Flex.style = flexCss;
var headerCss = ":host{-ms-flex-align:center;align-items:center;background-color:var(--default-bg);-webkit-box-shadow:1px 2px 4px rgba(3, 3, 3, 0.2);box-shadow:1px 2px 4px rgba(3, 3, 3, 0.2);-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;min-height:64px;padding:0 1.5em;width:100%}:host(.no-shadow){-webkit-box-shadow:0 0 0 transparent;box-shadow:0 0 0 transparent}:host(.primary){background-color:var(--primary-color);color:var(--primary-text-color)}:host(.secondary){background-color:var(--secondary-color);color:var(--secondary-text-color)}:host(.success){background-color:var(--success-color);color:var(--success-text-color)}:host(.warning){background-color:var(--warning-color);color:var(--warning-text-color)}:host(.danger){background-color:var(--danger-color);color:var(--danger-text-color)}:host(.dark){background-color:var(--dark-color);color:var(--dark-text-color)}:host(.light){background-color:var(--light-color);color:var(--light-text-color)}:host(.sticky){position:-webkit-sticky;position:sticky}:host(.fixed){position:fixed}:host(.absolute){position:absolute}:host(.relative){position:relative}";
var Header = /** @class */ (function () {
    function Header(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Position of the header
         */
        this.position = 'static';
    }
    Header.prototype.render = function () {
        var cls = Object.assign(Object.assign(Object.assign({}, generateAttrValue(this.color)), generateAttrValue(this.position)), { 'no-shadow': this.noShadow });
        return (h(Host, { class: cls }, h("slot", null)));
    };
    return Header;
}());
Header.style = headerCss;
var iconCss = ".material-icons{font-family:var(--icon-font-family, 'Material Icons');font-weight:normal;font-style:normal;font-size:var(--icon-size);line-height:1rem;letter-spacing:normal;text-transform:none;display:block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased;color:var(--icon-color);-webkit-transition:all 0.3s;transition:all 0.3s}:host{display:block}.small{font-size:0.8rem;line-height:0.8rem}.large{font-size:2rem;line-height:2rem}.primary{color:var(--primary-color)}.secondary{color:var(--secondary-color)}.warning{color:var(--warning-color)}.success{color:var(--success-color)}.danger{color:var(--danger-color)}.light{color:var(--light-color)}.dark{color:var(--dark-color)}";
var Icon = /** @class */ (function () {
    function Icon(hostRef) {
        registerInstance(this, hostRef);
    }
    Icon.prototype.render = function () {
        var rootCls = Object.assign(Object.assign({ 'material-icons': true }, generateAttrValue(this.color)), generateAttrValue(this.size));
        return (h("span", { style: this.styles, class: rootCls }, this.icon));
    };
    return Icon;
}());
Icon.style = iconCss;
var inputCss = ":host,.control,#input{-webkit-box-sizing:border-box;box-sizing:border-box}:host(.row){-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}:host(.hasIcon) #input{padding:0 1.5em 0 2.5em}:host(.row) label{margin:0 1em}:host(.flex){display:-ms-flexbox;display:flex}#input{background-color:var(--default-bg);border-color:var(--default-highlight);border-radius:var(--radius);border-style:solid;border-width:2px;color:var(--font-color);font-size:1rem;line-height:2.5em;outline:none;padding:0 1.5em;-webkit-transition:all 0.3s;transition:all 0.3s}#input:hover,#input:focus{border-color:var(--default-shade)}#input:focus{background-color:var(--default-shade)}:host(.primary) #input:hover,:host(.primary) #input:focus{border-color:var(--primary-color)}:host(.secondary) #input:hover,:host(.secondary) #input:focus{border-color:var(--secondary-color)}:host(.success) #input:hover,:host(.success) #input:focus{border-color:var(--success-color)}:host(.warning) #input:hover,:host(.warning) #input:focus{border-color:var(--warning-color)}:host(.danger) #input:hover,:host(.danger) #input:focus{border-color:var(--danger-color)}:host(.light) #input:hover,:host(.light) #input:focus{border-color:var(--light-color)}:host(.dark) #input:hover,:host(.dark) #input:focus{border-color:var(--dark-color)}label{display:block;line-height:2.5em}.control{position:relative}arv-icon{position:absolute;top:12px;left:12px}#input:disabled{cursor:not-allowed;background-color:var(--disabled-color) !important;color:var(--disabled-text-color);border-color:var(--disabled-color) !important}:host(.small) #input{font-size:0.8rem}:host(.small) arv-icon{--icon-size:0.8rem;top:10px}:host(.small) label{font-size:0.8rem}:host(.large) #input{font-size:1.2rem}:host(.large) arv-icon{--icon-size:1.2rem;top:16px}:host(.large) label{font-size:1.2rem}:host(.full),:host(.full) .control,:host(.full) #input{width:100%}";
var Input = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        /**
         * Sets autocomplete for the input.
         */
        this.autocomplete = 'off';
        /**
         * Activates autocorrect for the input.
         */
        this.autocorrect = 'off';
        /**
         * Sets autofocus once the input loads.
         */
        this.autofocus = false;
        /**
         * type of input element.
         */
        this.type = 'text';
        /**
         * Value of the input element.
         */
        this.value = '';
        this.input = function () {
            _this.value = _this.inputEl.value;
        };
        this.blur = function (event) {
            _this.arvBlur.emit(event);
        };
        this.focus = function (event) {
            _this.arvFocus.emit(event);
        };
        this.keydown = function (event) {
            _this.arvKeydown.emit(event);
        };
        this.arvBlur = createEvent(this, "arvBlur", 7);
        this.arvChange = createEvent(this, "arvChange", 7);
        this.arvFocus = createEvent(this, "arvFocus", 7);
        this.arvKeydown = createEvent(this, "arvKeydown", 7);
    }
    class_1.prototype.valueChanged = function () {
        this.arvChange.emit(this.value);
        if (this.inputChange) {
            this.inputChange(this.value);
        }
    };
    /**
     * Public api that returns the input element.
     */
    class_1.prototype.getInputElement = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.inputEl];
            });
        });
    };
    class_1.prototype.inputFocus = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.inputEl) {
                    this.inputEl.focus();
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        var cls = Object.assign(Object.assign(Object.assign({}, generateAttrValue(this.color)), generateAttrValue(this.size)), { hasIcon: Boolean(this.icon), row: this.flexDirection && this.flexDirection.indexOf('row') > -1, flex: this.flexDirection === 'column-reverse', full: this.full });
        var labelStyle = {};
        if (this.labelWidth) {
            Object.assign(labelStyle, {
                width: this.labelWidth,
                minWidth: this.labelWidth
            });
        }
        var rootStyles = {};
        if (this.flexDirection) {
            rootStyles.flexDirection = this.flexDirection;
        }
        var props = {
            id: 'input',
            autoComplete: this.autocomplete,
            autoCorrect: this.autocorrect,
            autoFocus: this.autofocus,
            disabled: this.disabled,
            min: this.min,
            max: this.max,
            minLength: this.minlength,
            maxLength: this.maxlength,
            name: this.name,
            placeholder: this.placeholder,
            value: this.value,
            onInput: this.input,
            onBlur: this.blur,
            onFocus: this.focus,
            onKeyDown: this.keydown,
        };
        return (h(Host, { style: rootStyles, class: cls }, h("label", { style: labelStyle, htmlFor: "input", class: "label" }, this.label), h("div", { class: "control" }, this.icon && (h("arv-icon", { icon: this.icon })), !Boolean(this.rows) && (h("input", Object.assign({ type: this.type, ref: function (input) { return _this.inputEl = input; } }, props))), Boolean(this.rows) && (h("textarea", Object.assign({ ref: function (input) { return _this.inputEl = input; } }, props))))));
    };
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "value": ["valueChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
Input.style = inputCss;
var listCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;width:100%}";
var List = /** @class */ (function () {
    function List(hostRef) {
        registerInstance(this, hostRef);
    }
    List.prototype.render = function () {
        return (h("slot", null));
    };
    return List;
}());
List.style = listCss;
var listItemCss = ":host{-ms-flex-align:center;align-items:center;background-color:var(--default-bg);-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:-ms-flexbox;display:flex;min-height:36px;padding:0 1em;-webkit-transition:background-color 0.3s;transition:background-color 0.3s;width:100%}:host(:hover){background-color:var(--default-highlight)}:host(.primary-active.active){background-color:var(--primary-color);color:var(--primary-text-color)}:host(.secondary-active.active){background-color:var(--secondary-color);color:var(--secondary-text-color)}:host(.dark-active.active){background-color:var(--dark-color);color:var(--dark-text-color)}:host(.light-active.active){background-color:var(--light-color);color:var(--light-text-color)}";
var ListItem = /** @class */ (function () {
    function ListItem(hostRef) {
        registerInstance(this, hostRef);
    }
    ListItem.prototype.render = function () {
        var _a;
        var cls = Object.assign(Object.assign({}, generateAttrValue(this.color)), (_a = {}, _a[this.activeColor + "-active"] = Boolean(this.activeColor), _a.active = this.isActive, _a));
        return (h(Host, { class: cls }, h("slot", null)));
    };
    return ListItem;
}());
ListItem.style = listItemCss;
var menuItemCss = ":host{background-color:var(--default-bg);cursor:pointer;display:block;line-height:2.5em;padding:0 1em;-webkit-transition:background-color 0.3s;transition:background-color 0.3s}:host(:hover){background-color:var(--default-highlight)}";
var MenuItem = /** @class */ (function () {
    function MenuItem(hostRef) {
        registerInstance(this, hostRef);
        this.arvMenuSelect = createEvent(this, "arvMenuSelect", 7);
    }
    MenuItem.prototype.render = function () {
        var _this = this;
        return (h(Host, { onClick: function () { return _this.arvMenuSelect.emit(_this.value); } }, !this.hideValue && (h("arv-text", { wrap: "nowrap" }, h("slot", { name: "value" }))), h("slot", null)));
    };
    return MenuItem;
}());
MenuItem.style = menuItemCss;
var paperCss = ":host{-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:var(--radius);background-color:var(--default-bg);display:block}:host(.shadow-2){-webkit-box-shadow:1px 1px 3px 1px rgba(3, 3, 3, 0.3);box-shadow:1px 1px 3px 1px rgba(3, 3, 3, 0.3)}:host(.shadow-1){-webkit-box-shadow:1px 1px 3px rgba(3, 3, 3, 0.2);box-shadow:1px 1px 3px rgba(3, 3, 3, 0.2)}:host(.shadow-0){-webkit-box-shadow:0px 1px 2px rgba(3, 3, 3, 0.05);box-shadow:0px 1px 2px rgba(3, 3, 3, 0.05)}:host(.outlined){-webkit-box-shadow:0px 0px 0px rgba(0, 0, 0, 0);box-shadow:0px 0px 0px rgba(0, 0, 0, 0);border-width:1px;border-color:var(--default-highlight);border-style:solid}";
var Paper = /** @class */ (function () {
    function Paper(hostRef) {
        registerInstance(this, hostRef);
        /**
         * How much shadow to be applied.
         */
        this.shadowLevel = 1;
    }
    Paper.prototype.render = function () {
        var cls = {
            'shadow-0': this.shadowLevel === 0,
            'shadow-1': this.shadowLevel === 1,
            'shadow-2': this.shadowLevel === 2,
            outlined: this.outlined,
        };
        return (h(Host, { class: cls }, h("slot", null)));
    };
    return Paper;
}());
Paper.style = paperCss;
var selectCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host(.full){width:100%;display:-ms-flexbox;display:flex}:host(.full) .control{width:100%}:host(.row){-ms-flex-align:center;align-items:center}:host(.disabled) .select{background-color:var(---disabled-color);cursor:not-allowed}:host(.disabled) .value{color:var(--disabled-text-color)}:host(.disabled) arv-icon{--icon-color:var(--disabled-text-color)}.items{border-radius:var(--radius);-webkit-box-shadow:0px 2px 2px rgba(3, 3, 3, 0.2);box-shadow:0px 2px 2px rgba(3, 3, 3, 0.2);-webkit-box-sizing:border-box;box-sizing:border-box;display:none;margin-bottom:2em;max-height:300px;min-width:100%;outline:none;overflow-y:scroll;position:absolute;z-index:99}:host(.isOpen) .items{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host(.row) label{margin:0 1em}.select{-ms-flex-align:center;align-items:center;border-color:var(--default-highlight);border-radius:var(--radius);border-style:solid;border-width:1px;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;background-color:var(--default-bg);display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:0 0 0 1.5em;-webkit-transition:all 0.3s;transition:all 0.3s}label,.value{line-height:2.5em;min-height:2.5em}.control{position:relative}arv-icon{margin:0 8px}:host(.primary.isOpen) .select,:host(.primary) .select:hover{border-color:var(--primary-color)}:host(.secondary.isOpen) .select,:host(.secondary) .select:hover{border-color:var(--secondary-color)}:host(.success.isOpen) .select,:host(.success) .select:hover{border-color:var(--success-color)}:host(.warning.isOpen) .select,:host(.warning) .select:hover{border-color:var(--warning-color)}:host(.danger.isOpen) .select,:host(.danger) .select:hover{border-color:var(--danger-color)}:host(.dark.isOpen) .select,:host(.dark) .select:hover{border-color:var(--dark-color)}:host(.light.isOpen) .select,:host(.light) .select:hover{border-color:var(--light-color)}";
var Select = /** @class */ (function () {
    function class_2(hostRef) {
        registerInstance(this, hostRef);
        this.arvSelectChange = createEvent(this, "arvSelectChange", 7);
    }
    /**
     * Listens to a arvMenuSelect event from MenuItem
     * component to fire the close function. The
     * value received will be included in
     * arvSelectChange event.
     *
     * @param value - value from MenuItem component
     */
    class_2.prototype.onMenuSelect = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = this.valueWithEvent ? value : value.detail;
                        return [4 /*yield*/, this.close()];
                    case 1:
                        _a.sent();
                        this.arvSelectChange.emit(data);
                        if (this.selectChange) {
                            this.selectChange(data);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.open = function () {
        if (this.disabled) {
            return false;
        }
        this.isOpen = true;
        var el = this.el.shadowRoot.querySelector('.items');
        setTimeout(function () {
            // Try block to bypass jest error
            try {
                el.focus();
            }
            catch (e) { }
        }, 100);
    };
    class_2.prototype.blur = function () {
        this.close();
    };
    class_2.prototype.render = function () {
        var _this = this;
        var hostCls = Object.assign(Object.assign({ full: this.full, isOpen: this.isOpen }, generateAttrValue(this.color)), { row: false, disabled: this.disabled });
        var styles = {
            flexDirection: this.flexDirection
        };
        var labelStyle = {};
        if (this.labelWidth) {
            Object.assign(labelStyle, {
                width: this.labelWidth,
                minWidth: this.labelWidth
            });
        }
        if (this.flexDirection && this.flexDirection.indexOf('row') > -1) {
            hostCls.row = true;
        }
        return (h(Host, { class: hostCls, style: styles }, h("label", { style: labelStyle }, this.label), h("div", { class: "control" }, h("div", { onClick: function () { return _this.open(); }, class: "select" }, h("span", { class: "value" }, this.value || this.placeholder), h("slot", { name: "value" }), h("arv-icon", { icon: "keyboard_arrow_down" })), h("div", { onBlur: function () { return _this.blur(); }, tabIndex: -1, class: "items" }, h("slot", null)))));
    };
    class_2.prototype.close = function () {
        var _this = this;
        return delay(function () {
            _this.isOpen = false;
        }, 300);
    };
    Object.defineProperty(class_2.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return class_2;
}());
Select.style = selectCss;
var sidePaneCss = ":host{border-right-color:var(--default-highlight);border-right-width:1px;border-right-style:solid;height:100vh;min-width:240px;overflow-y:scroll}";
var SidePane = /** @class */ (function () {
    function SidePane(hostRef) {
        registerInstance(this, hostRef);
    }
    SidePane.prototype.render = function () {
        return (h(Host, null, h("slot", { name: "header" }), h("slot", null), h("slot", { name: "footer" })));
    };
    return SidePane;
}());
SidePane.style = sidePaneCss;
var spacerCss = ":host{height:var(--spacer-height)}:host(.vertical){height:0px;width:var(--spacer-width)}";
var Spacer = /** @class */ (function () {
    function Spacer(hostRef) {
        registerInstance(this, hostRef);
    }
    Spacer.prototype.render = function () {
        var cls = {
            vertical: this.vertical
        };
        return h(Host, { class: cls });
    };
    return Spacer;
}());
Spacer.style = spacerCss;
var switchCss = ".root{cursor:pointer;height:24px;min-width:38px;width:38px;position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:0 4px}.bar{background-color:var(--default-darker);border-radius:20px;width:100%;height:16px}.circle{-webkit-transition:all 0.3s;transition:all 0.3s;background-color:var(--default-highlight);border-radius:12px;height:24px;width:24px;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;top:0px;left:0px;border-color:var(--default-shade);border-width:1px;border-style:solid}.circle,.bar{-webkit-box-shadow:0px 1px 1px rgba(3,3,3,0.2);box-shadow:0px 1px 1px rgba(3,3,3,0.2)}.active .circle{left:14px;background-color:#fff;border-color:var(--default-highlight);border-width:9px}.active .bar{background-color:var(--default-shade)}.active.primary .circle{border-color:var(--primary-highlight)}.active.primary .bar{background-color:var(--primary-shade)}.active.secondary .circle{border-color:var(--secondary-highlight)}.active.secondary .bar{background-color:var(--secondary-shade)}.active.success .circle{border-color:var(--success-highlight)}.active.success .bar{background-color:var(--success-shade)}.active.warning .circle{border-color:var(--warning-highlight)}.active.warning .bar{background-color:var(--warning-shade)}.active.danger .circle{border-color:var(--danger-highlight)}.active.danger .bar{background-color:var(--danger-shade)}.active.dark .circle{border-color:var(--dark-highlight)}.active.dark .bar{background-color:var(--dark-shade)}.active.light .circle{border-color:var(--light-highlight)}.active.light .bar{background-color:var(--light-shade)}.disabled .circle{background-color:var(--disabled-color) !important;border-color:var(--disabled-highlight) !important}.disabled .bar{background-color:var(--disabled-shade) !important}.disabled{cursor:not-allowed}";
var Switch = /** @class */ (function () {
    function Switch(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.click = function () {
            if (_this.disabled) {
                return false;
            }
            _this.value = !_this.value;
        };
    }
    Switch.prototype.render = function () {
        var _this = this;
        var classNames = Object.assign(Object.assign({ root: true, active: this.value }, generateAttrValue(this.color)), { disabled: this.disabled });
        var cls = {
            col: this.flexDirection && this.flexDirection.indexOf('column') > -1
        };
        var styles = (function () {
            if (_this.flexDirection) {
                return {
                    flexDirection: _this.flexDirection
                };
            }
            return {};
        })();
        return (h(Host, { style: styles, class: cls }, this.label && (h("span", { class: "label" }, this.label)), h("slot", { name: "label" }), h("div", { onClick: this.click, class: classNames }, h("div", { class: "bar" }), h("div", { class: "circle" }))));
    };
    return Switch;
}());
Switch.style = switchCss;
var textCss = ":host{color:var(--text-color)}:host(.primary){color:var(--primary-color)}:host(.secondary){color:var(--secondary-color)}:host(.light){color:var(--light-text-color)}:host(.dark){color:var(--dark-text-color)}:host(.warning){color:var(--warning-color)}:host(.danger){color:var(--danger-color)}:host(.success){color:var(--success-color)}:host(.textShadow){text-shadow:1px 1px 1px rgba(3, 3, 3, 0.8)}:host(.truncate){white-space:nowrap}";
var Text = /** @class */ (function () {
    function Text(hostRef) {
        registerInstance(this, hostRef);
    }
    Text.prototype.render = function () {
        var cls = Object.assign(Object.assign({}, generateAttrValue(this.color)), { truncate: this.truncate, shadow: this.shadow });
        if (this.truncate && this.el.children.length) {
            var node = this.el.children[0];
            node.style.textOverflow = 'ellipsis';
            node.style.width = '100%';
            node.style.overflow = 'hidden';
        }
        if (this.wrap && this.el.children.length) {
            var node = this.el.children[0];
            node.style.whiteSpace = this.wrap;
        }
        return (h(Host, { class: cls }, h("slot", null)));
    };
    Object.defineProperty(Text.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return Text;
}());
Text.style = textCss;
var Accordion = {
    element: 'arv-accordion',
    slot: "\n    <arv-accordion-item>\n      <p slot=\"title\">First Item</p>\n      <p>\n        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi facere nisi tenetur ullam cumque. Provident dolor, neque laboriosam nesciunt labore sit quam at molestias quasi, nisi eveniet animi dolorum. Fugiat!\n      </p>\n    </arv-accordion-item>\n    <arv-accordion-item>\n      <p slot=\"title\">Second Item</p>\n      <p>\n        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi facere nisi tenetur ullam cumque. Provident dolor, neque laboriosam nesciunt labore sit quam at molestias quasi, nisi eveniet animi dolorum. Fugiat!\n      </p>\n    </arv-accordion-item>\n  ",
    props: [{
            name: 'color',
            type: 'color',
            value: ''
        }]
};
var AlertText = {
    element: 'arv-alert-text',
    slot: '<p>Hello World</p>',
    props: [
        {
            name: 'color',
            type: 'color'
        }
    ]
};
var Avatar = {
    name: 'Avatar',
    element: 'arv-avatar',
    slot: false,
    props: [
        {
            name: 'img-src',
            type: 'string',
            value: 'https://scitechdaily.com/images/Universe-Expansion.jpg',
            description: 'Image url'
        },
        {
            name: 'size',
            type: 'size',
            value: 'normal'
        },
    ]
};
var imageUrl = 'https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg';
var imageUrl2 = 'https://scitechdaily.com/images/Universe-Expansion.jpg';
var AvatarGroup = {
    element: 'arv-avatar-group',
    slot: "\n    <arv-avatar img-src=\"" + imageUrl + "\"></arv-avatar>\n    <arv-avatar img-src=\"" + imageUrl2 + "\"></arv-avatar>\n    <arv-avatar img-src=\"" + imageUrl + "\"></arv-avatar>\n  ",
    props: [
        {
            name: 'max',
            type: 'string',
            value: '2'
        },
        {
            name: 'size',
            type: 'size'
        }
    ]
};
var Badge = {
    element: 'arv-badge',
    slot: "\n    <arv-button>Hello</arv-button>\n  ",
    props: [
        {
            name: 'value',
            type: 'string',
            value: '1'
        }, {
            name: 'invisible',
            type: 'boolean',
            description: 'Will hide the badge'
        }, {
            name: 'disable-comma',
            type: 'boolean',
            description: 'Will not render a number with commas.'
        }
    ]
};
var Button = {
    name: 'Button',
    element: 'arv-button',
    slot: 'Test Button',
    props: [
        {
            name: 'icon',
            type: 'string'
        },
        {
            name: 'flex-direction',
            type: 'oneOf',
            data: ['row', 'row-reverse', 'column', 'column-reverse'],
            description: 'Layout direction of label and select element.'
        },
        {
            name: 'color',
            type: 'color'
        },
        {
            name: 'disabled',
            type: 'boolean',
            value: 'false',
            description: 'Disabled state of the button.'
        },
        {
            name: 'full',
            type: 'boolean',
            value: 'false',
            description: 'Occupies the available width.'
        },
        {
            name: 'size',
            type: 'size',
        },
        {
            name: 'variant',
            type: 'oneOf',
            data: ['raised', 'ghost'],
            value: 'raised',
            description: 'Button ui variant.'
        },
        {
            name: 'loading-color',
            type: 'color',
            description: 'color of the circular progress.'
        },
        {
            name: 'loading',
            type: 'boolean',
            description: 'shows a circular progress.'
        },
        {
            name: 'loading-text',
            type: 'string',
            description: 'shows a loading text'
        }
    ],
};
var Checkbox = {
    element: 'arv-checkbox',
    slot: false,
    props: [
        {
            name: 'label',
            type: 'string',
            description: 'Label of the checkbox',
            value: 'Label'
        }, {
            name: 'flex-direction',
            type: 'oneOf',
            data: ['row', 'row-reverse', 'column', 'column-reverse'],
            description: 'Layout direction of label and select element.'
        },
        {
            name: 'color',
            type: 'color'
        },
        {
            name: 'size',
            type: 'size'
        },
        {
            name: 'disabled',
            type: 'boolean',
            description: 'Disabled state of the element.'
        }
    ]
};
var Chip = {
    element: 'arv-chip',
    slot: 'HelloWorld!',
    props: [{
            name: 'color',
            type: 'color'
        }, {
            name: 'size',
            type: 'size'
        }]
};
var Dialog = {
    element: 'arv-dialog',
    slot: "\n    <p slot=\"header\">Header from slot</p>\n    <div style=\"width: 300px;\">\n      <h1>Hello World!</h1>\n      <p>\n        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, accusamus tempora inventore delectus impedit quisquam ratione? Ab architecto exercitationem deserunt reprehenderit eligendi, sunt nihil eos quo praesentium sed dolores laudantium?\n      </p>\n      <arv-select value=\"select\">\n        <arv-menu-item>\n          <span slot=\"value\">Menu 1</span>\n        </arv-menu-item>\n        <arv-menu-item>\n          <span slot=\"value\">Menu 2</span>\n        </arv-menu-item>\n        <arv-menu-item>\n          <span slot=\"value\">Menu 3</span>\n        </arv-menu-item>\n      </arv-select>\n    </div>\n  ",
    containerContent: "\n    <arv-button color=\"secondary\" size=\"large\">Open Dialog</arv-button>\n  ",
    onLoad: function (el) {
        var button = el.querySelector('arv-button');
        var dialog = el.querySelector('arv-dialog');
        button.addEventListener('click', function () {
            dialog.setAttribute('is-open', 'true');
        });
    },
    props: [
        {
            name: 'dialog-title',
            type: 'string',
            value: 'Title',
            description: 'Title at the header of the dialog box.'
        },
        {
            name: 'is-open',
            type: 'boolean',
            value: 'false',
            disabled: true,
            description: 'Opens the dialog box.'
        },
        {
            name: 'disable-bg-close',
            type: 'boolean',
            description: 'Disables closing of dialog box on background(backdrop) click.'
        },
        {
            name: 'scrollable',
            type: 'boolean',
            description: 'Scrollable dialog box.'
        }
    ],
};
var Flex$1 = {
    name: 'Flex',
    element: 'arv-flex',
    slot: "\n    <arv-button color=\"primary\">Primary</arv-button>\n    <arv-button color=\"secondary\">Secondary</arv-button>\n    <arv-button color=\"danger\">Danger</arv-button>\n  ",
    props: [{
            name: 'expanded',
            type: 'boolean',
            value: 'true',
            description: 'Occupies 100% of height and width of the parent element.'
        }, {
            name: 'align-items',
            type: 'oneOf',
            value: '',
            data: ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'],
            description: 'Aligns flex items along the cross axis of the current line of the flex container.'
        }, {
            name: 'direction',
            type: 'oneOf',
            value: '',
            data: ['row', 'row-reverse', 'column', 'column-reverse'],
            description: 'Specifies how flex items are placed in the flex container, by setting the direction of the flex container’s main axis.'
        }, {
            name: 'justify',
            type: 'oneOf',
            value: '',
            data: ['center', 'space-between', 'space-around', 'flex-start', 'flex-end'],
            description: 'Aligns flex items along the main axis of the current line of the flex container.'
        }, {
            name: 'wrap',
            type: 'oneOf',
            data: ['wrap', 'no-wrap', 'wrap-reverse'],
            value: '',
            description: 'Controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.'
        }]
};
var Header$1 = {
    element: 'arv-header',
    slot: '<arv-flex>Hello World</arv-flex>',
    props: [
        {
            name: 'color',
            type: 'color'
        },
        {
            name: 'position',
            type: 'oneOf',
            data: ['static', 'absolute', 'relative', 'fixed', 'sticky', 'inherit'],
            value: 'static',
            description: 'Position of the header'
        },
        {
            name: 'no-shadow',
            type: 'boolean',
            description: 'Will not add a drop shadow to the header'
        }
    ],
};
var Icon$1 = {
    element: 'arv-icon',
    slot: false,
    description: [
        'Renders a material icon from https://material.io/tools/icons/?style=baseline'
    ],
    props: [
        {
            name: 'icon',
            type: 'string',
            value: 'event',
            description: 'material icon from https://material.io/tools/icons/?style=baseline'
        },
        {
            name: 'size',
            type: 'size'
        }
    ]
};
var Input$1 = {
    element: 'arv-input',
    slot: false,
    props: [
        {
            name: 'icon',
            type: 'string',
            value: 'edit',
            description: 'Material Icon to add at the left side of the input.'
        },
        {
            name: 'label',
            type: 'string',
            value: 'Username',
            description: 'Text to be put in the label element.'
        },
        {
            name: 'placeholder',
            type: 'string',
            value: 'Username',
            description: 'Input placeholder'
        }, {
            name: 'rows',
            type: 'string',
            value: '',
            description: 'Rows for the textarea. Automatically renders a textarea element.'
        }, {
            name: 'flex-direction',
            type: 'oneOf',
            data: ['row', 'row-reverse', 'column', 'column-reverse'],
            description: 'Layout direction of label and input element.'
        }, {
            name: 'color',
            type: 'color'
        },
        {
            name: 'size',
            type: 'size'
        },
        {
            name: 'full',
            type: 'boolean',
            description: 'Will occupy a full width style.'
        },
        {
            name: 'disabled',
            type: 'boolean',
            description: 'Disables the input element.'
        },
    ]
};
var Menu = {
    element: 'arv-menu',
    slot: "\n    <arv-button is-icon><arv-icon icon=\"account_box\"></arv-icon></arv-button>\n    <div slot=\"content\">\n      <h1>Hello</h1>\n    </div>\n    <div slot=\"menu-list\">\n      <arv-menu-item>\n        <span slot=\"value\">Menu Item 1</span>\n      </arv-menu-item>\n      <arv-menu-item>\n        <span slot=\"value\">Menu Item 2</span>\n      </arv-menu-item>\n      <arv-menu-item>\n        <span slot=\"value\">Menu Item 3</span>\n      </arv-menu-item>\n    </div>\n  ",
    props: [
        {
            name: 'x-position',
            type: 'oneOf',
            data: ['left', 'right'],
            value: 'left'
        },
        {
            name: 'y-position',
            type: 'oneOf',
            data: ['top', 'bottom'],
            value: 'bottom'
        },
    ]
};
var Paper$1 = {
    element: 'arv-paper',
    slot: '<h1>Paper Content</h1>',
    props: [
        {
            name: 'shadow-level',
            type: 'oneOf',
            data: [0, 1, 2],
            value: 1,
            description: 'Thickness of the drop shadow from 0 to 2.'
        }, {
            name: 'outlined',
            type: 'boolean',
            description: 'Border only, will not add drop shadow.'
        }
    ]
};
var ProgressCircular = {
    element: 'arv-progress-circular',
    slot: 'Loading',
    props: [
        {
            name: 'color',
            type: 'color'
        },
        {
            name: 'size',
            type: 'size'
        }
    ]
};
var ProgressLinear = {
    element: 'arv-progress-linear',
    slot: 'Loading',
    props: [
        {
            name: 'color',
            type: 'color'
        }
    ]
};
var Radio = {
    element: 'arv-radio',
    slot: false,
    props: [
        {
            name: 'label',
            type: 'string',
            description: 'Label of the input radio element.',
            value: 'Label'
        }, {
            name: 'flex-direction',
            type: 'oneOf',
            data: ['row', 'row-reverse', 'column', 'column-reverse'],
            description: 'Layout direction of label and select element.'
        },
        {
            name: 'color',
            type: 'color'
        },
        {
            name: 'size',
            type: 'size'
        },
        {
            name: 'disabled',
            type: 'boolean',
            description: 'Disabled state of the element.'
        }
    ]
};
var Select$1 = {
    element: 'arv-select',
    slot: "\n    <arv-menu-item>\n      <span slot=\"value\">Menu Item 1</span>\n    </arv-menu-item>\n    <arv-menu-item>\n      <span slot=\"value\">Menu Item 2</span>\n    </arv-menu-item>\n    <arv-menu-item hide-value>\n      <span slot=\"value\">Menu Item 3</span>\n    </arv-menu-item>\n  ",
    props: [{
            name: 'label',
            type: 'string',
            description: 'Label of the input select component.',
            value: 'Label'
        }, {
            name: 'value',
            type: 'string',
            value: 'My Value',
            description: 'Explicitly set the value of the select element.'
        }, {
            name: 'flex-direction',
            type: 'oneOf',
            data: ['row', 'row-reverse', 'column', 'column-reverse'],
            description: 'Layout direction of label and select element.'
        }, {
            name: 'color',
            type: 'color'
        }, {
            name: 'size',
            type: 'size'
        }, {
            name: 'full',
            type: 'boolean',
            description: 'Occupies a full width select element.'
        }, {
            name: 'disabled',
            type: 'boolean',
            description: 'Disabled state of the element.'
        }]
};
var Snackbar = {
    element: 'arv-snackbar',
    containerContent: "\n    <arv-button color=\"warning\">Open Snackbar</arv-button>\n  ",
    onLoad: function (el) {
        var button = el.querySelector('arv-button');
        var snackbar = el.querySelector('arv-snackbar');
        button.addEventListener('click', function () {
            snackbar.open();
        });
    },
    slot: "\n    <arv-spacer vertical></arv-spacer>\n    <span>Slot content</span>\n  ",
    props: [{
            name: 'icon',
            type: 'string',
            value: 'check',
            description: 'Icon of the snackbar.'
        }, {
            name: 'message',
            type: 'string',
            value: 'Hello World!',
            description: 'Snackbar text content.'
        }, {
            name: 'duration',
            type: 'string',
            value: 3000,
            description: 'duration in millis to show the snackbar.'
        }, {
            name: 'color',
            type: 'color'
        }, {
            name: 'x-position',
            type: 'oneOf',
            data: ['left', 'right', 'center'],
            description: 'horizontal position of the snackbar.'
        }, {
            name: 'y-position',
            type: 'oneOf',
            data: ['top', 'bottom', 'center'],
            description: 'vertical position of the snackbar.'
        }, {
            name: 'hide-close',
            type: 'boolean',
            description: 'Will hide the close button.'
        }]
};
var steps = [{
        "done": true,
        "title": "StepOne"
    }, {
        "done": false,
        "title": "StepTwo"
    }, {
        "done": false,
        "title": "StepThree"
    }];
var Stepper = {
    element: 'arv-stepper',
    slot: false,
    containerContent: "\n    <arv-button\n      class=\"back\"\n      color=\"secondary\"\n      icon=\"chevron_left\"\n    >Back</arv-button>\n    <arv-spacer vertical></arv-spacer>\n    <arv-button\n      class=\"next\"\n      color=\"secondary\"\n      icon=\"chevron_right\"\n      flex-direction=\"row-reverse\"\n    >Next</arv-button>\n  ",
    onLoad: function (el) {
        var nextBtn = el.querySelector('.next');
        var backBtn = el.querySelector('.back');
        var stepper = el.querySelector('arv-stepper');
        nextBtn.addEventListener('click', function () {
            stepper.next();
        });
        backBtn.addEventListener('click', function () {
            stepper.back();
        });
    },
    props: [
        {
            name: 'steps',
            type: 'string',
            value: JSON.stringify(steps)
        }, {
            name: 'active-index',
            type: 'string',
            value: '0'
        }, {
            name: 'color',
            type: 'color'
        }
    ],
};
var Switch$1 = {
    element: 'arv-switch',
    slot: false,
    props: [
        {
            name: 'label',
            type: 'string',
            description: 'Label of the input radio element.',
            value: 'Label'
        }, {
            name: 'flex-direction',
            type: 'oneOf',
            data: ['row', 'row-reverse', 'column', 'column-reverse'],
            description: 'Layout direction of label and select element.'
        },
        {
            name: 'color',
            type: 'color'
        },
        {
            name: 'size',
            type: 'size',
        },
        {
            name: 'disabled',
            type: 'boolean',
            description: 'Disabled state'
        }
    ]
};
var Tabs = {
    name: 'Tabs',
    element: 'arv-tabs',
    slot: "\n    <arv-tab-panel>\n      <h2>Item 1</h2>\n    </arv-tab-panel>\n    <arv-tab-panel>\n      <h2>Item 2</h2>\n    </arv-tab-panel>\n    <arv-tab-panel>\n      <h2>Item 3</h2>\n    </arv-tab-panel>\n  ",
    props: [
        {
            name: 'tab-names',
            type: 'string',
            value: JSON.stringify([{ "icon": "favorite", "name": "One" }, { "icon": "explore", "name": "Two" }, { "icon": "stars", "name": "Three" }])
        },
        {
            name: 'color',
            type: 'color'
        },
        {
            name: 'tab-alignment',
            type: 'oneOf',
            data: ['right', 'center', 'left']
        }
    ]
};
var data = [
    [1, 'John', 'The quick brown,fox jumps over,the lazy dog'.split(',')],
    [2, 'Jane', 'Doe'],
];
var headers = [
    'FirstName', 'LastName'
];
var Table = {
    name: 'Table',
    element: 'arv-table',
    slot: "\n    <arv-flex align-items=\"center\" style=\"padding: 0.5em\" slot=\"header\">\n      <arv-icon icon=\"favorite\"></arv-icon>\n      <arv-spacer vertical></arv-spacer>\n      <span>Header from slot</span>\n    </arv-flex>\n    <span style=\"padding: 0.5em\" slot=\"footer\">\n      Footer from slot\n    </span>\n  ",
    onLoad: function (el) {
        var tableEl = el.querySelector('arv-table');
        tableEl.controls = [
            {
                icon: 'create',
                fn: function (data) { return alert(JSON.stringify(data)); },
            }
        ];
    },
    props: [
        {
            name: 'table-title',
            type: 'string',
            value: '',
            description: 'Title of the table'
        },
        {
            name: 'table-data',
            type: 'string',
            value: JSON.stringify(data),
            description: 'table data, the first element of the child array is not visible, serves as a placeholder for the ID'
        },
        {
            name: 'table-headers',
            type: 'string',
            value: JSON.stringify(headers),
            description: 'Table header'
        },
        {
            name: 'controls',
            type: 'code',
            description: 'Adds button controls to the right side of the table row.',
            data: "\nconst tableEl = document.querySelector('arv-table');\ntableEl.controls = [\n  {\n    icon: 'create',\n    fn: data => alert(JSON.stringify(data)),\n  }\n];\n      "
        },
        {
            name: 'color',
            type: 'color'
        }
    ]
};
var Tooltip = {
    name: 'Tooltip',
    element: 'arv-tooltip',
    slot: "\n    <arv-button variant=\"raised\">Hello</arv-button>\n    <arv-text slot=\"tooltip\" wrap=\"nowrap\">\n      <p>Custom content</p>\n    </arv-text>\n  ",
    props: [
        {
            name: 'message',
            type: 'string',
            value: 'hello'
        },
        {
            name: 'color',
            type: 'color'
        },
        {
            name: 'position',
            type: 'oneOf',
            data: ['top', 'bottom', 'right', 'left'],
            value: 'top',
        }
    ]
};
var comps = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    Accordion: Accordion,
    AlertText: AlertText,
    Avatar: Avatar,
    AvatarGroup: AvatarGroup,
    Badge: Badge,
    Button: Button,
    Checkbox: Checkbox,
    Chip: Chip,
    Dialog: Dialog,
    Flex: Flex$1,
    Header: Header$1,
    Icon: Icon$1,
    Input: Input$1,
    Menu: Menu,
    Paper: Paper$1,
    ProgressCircular: ProgressCircular,
    ProgressLinear: ProgressLinear,
    Radio: Radio,
    Select: Select$1,
    Snackbar: Snackbar,
    Stepper: Stepper,
    Switch: Switch$1,
    Tabs: Tabs,
    Table: Table,
    Tooltip: Tooltip
});
var contentCss = "@-webkit-keyframes show{from{opacity:0}to{opacity:1}}@keyframes show{from{opacity:0}to{opacity:1}}:host{-webkit-animation:show 0.3s;animation:show 0.3s;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;height:100%;overflow:hidden;position:relative;width:100%}#sample{-ms-flex-align:center;align-items:center;background-color:var(--darker);border-radius:var(--radius);-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;height:100%;-ms-flex-pack:center;justify-content:center;min-height:180px;padding:2em}.sample-wrapper{position:-webkit-sticky;position:sticky;top:-30px;z-index:9}footer{margin-top:64px;min-height:1px}.root{overflow-y:scroll;padding:0 1em}";
var DocContent = /** @class */ (function () {
    function DocContent(hostRef) {
        registerInstance(this, hostRef);
    }
    DocContent.prototype.applyHtmlSample = function (item) {
        this.settings = comps[item].props;
        this.addComponent(item);
    };
    DocContent.prototype.settingsChanged = function (value) {
        var settings = value.detail;
        this.settings = settings.settings;
        this.demoComponent.setAttribute(settings.item.name, settings.item.value);
    };
    DocContent.prototype.componentWillLoad = function () {
        this.settings = comps[this.selectedComponent].props;
    };
    DocContent.prototype.componentDidLoad = function () {
        this.addComponent(this.selectedComponent);
    };
    DocContent.prototype.addComponent = function (item) {
        var _a = comps[item], slot = _a.slot, props = _a.props, containerContent = _a.containerContent, element = _a.element, wrapper = _a.wrapper, onLoad = _a.onLoad;
        var container = this.el.shadowRoot.getElementById('sample');
        var wrapperEl = document.createElement('div');
        var compEl = document.createElement(element);
        compEl.setAttribute('id', 'demoComponent');
        if (slot) {
            compEl.innerHTML = slot;
        }
        props.forEach(function (d) {
            if (d.value) {
                compEl.setAttribute(d.name, d.value);
            }
        });
        if (containerContent) {
            container.innerHTML = containerContent;
        }
        else {
            container.innerHTML = '';
        }
        if (!wrapper) {
            container.appendChild(compEl);
        }
        else {
            wrapperEl.innerHTML = wrapper;
            wrapperEl.children[0].appendChild(compEl);
            container.appendChild(wrapperEl);
        }
        this.demoComponent = compEl;
        if (onLoad) {
            onLoad(container);
        }
    };
    DocContent.prototype.render = function () {
        if (!this.selectedComponent) {
            return null;
        }
        var selectedComp = comps[this.selectedComponent];
        return (h("arv-flex", { class: "root", direction: "column", expanded: true }, h("h1", null, this.selectedComponent), h("arv-divider", null), h("p", null), h("arv-paper", { class: "sample-wrapper", "shadow-level": "0" }, h("div", { id: "sample" })), h("doc-control", { settings: selectedComp.props }), h("doc-html", { isDark: this.isDark, config: selectedComp, settings: this.settings }), h("footer", null)));
    };
    Object.defineProperty(DocContent.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocContent, "watchers", {
        get: function () {
            return {
                "selectedComponent": ["applyHtmlSample"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return DocContent;
}());
DocContent.style = contentCss;
var controlCss = ".control-description{margin-left:2.5em}pre{background-color:var(--default-highlight);border-radius:var(--radius);overflow-x:scroll;color:var(--font-color)}";
var DocControl = /** @class */ (function () {
    function DocControl(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'dark', 'light'];
        this.settings = [];
        this.generateField = function (item, index) {
            var labelWidth = '100px';
            var control = (function () {
                if (item.type === 'color') {
                    return (h("arv-select", { label: item.name || 'color', labelWidth: labelWidth, "flex-direction": "row", value: item.value || 'Select', selectChange: function (data) {
                            _this.dataChange(data, index);
                        }, full: true }, h("arv-menu-item", { value: "" }, "None"), _this.colors.map(function (color) { return (h("arv-menu-item", { value: color }, color)); })));
                }
                if (item.type === 'boolean') {
                    var dataArray = ['true', 'false'];
                    return (h("arv-select", { label: item.name, labelWidth: labelWidth, "flex-direction": "row", value: item.value || 'Select', selectChange: function (data) {
                            _this.dataChange(data, index);
                        }, full: true }, dataArray.map(function (d) { return (h("arv-menu-item", { value: d }, d)); })));
                }
                if (item.type === 'size') {
                    var dataArray = ['small', 'normal', 'large'];
                    return (h("arv-select", { label: item.name, labelWidth: labelWidth, "flex-direction": "row", value: item.value || 'Select', selectChange: function (data) {
                            _this.dataChange(data, index);
                        }, full: true }, dataArray.map(function (d) { return (h("arv-menu-item", { value: d }, d)); })));
                }
                if (item.type === 'oneOf') {
                    return (h("arv-select", { label: item.name, labelWidth: labelWidth, "flex-direction": "row", value: item.value || 'Select', selectChange: function (data) {
                            _this.dataChange(data, index);
                        }, full: true }, h("arv-menu-item", { value: "" }, "None"), item.data.map(function (d) { return (h("arv-menu-item", { value: d }, d)); })));
                }
                if (item.type === 'string') {
                    return (h("arv-input", { inputChange: function (data) {
                            _this.dataChange(data, index);
                        }, labelWidth: labelWidth, label: item.name, value: item.value }));
                }
                if (item.type === 'code') {
                    return [
                        h("span", null, item.name),
                        h("pre", null, h("code", null, item.data))
                    ];
                }
            })();
            var description = (function () {
                if (item.description) {
                    return item.description;
                }
                if (item.type === 'size') {
                    return 'Size variant to set.';
                }
                if (item.type === 'color') {
                    return 'Color variant to set.';
                }
            })();
            var controlWidth = (function () {
                if (item.type === 'code') {
                    return { width: '500px', minWidth: '500px' };
                }
                return { width: '300px', minWidth: '300px' };
            })();
            return [
                h("arv-flex", { "align-items": "center" }, h("div", { style: controlWidth }, control), h("p", { class: "control-description" }, description)),
                h("arv-spacer", null)
            ];
        };
        this.docSettingsChange = createEvent(this, "docSettingsChange", 7);
    }
    DocControl.prototype.render = function () {
        return (h("arv-flex", { direction: "column" }, h("h2", null, "Props"), h("arv-divider", null), h("arv-spacer", null), h("arv-flex", { direction: "column", wrap: "wrap", expanded: true }, this.settings.map(this.generateField))));
    };
    DocControl.prototype.dataChange = function (data, index) {
        this.settings[index].value = data;
        this.settings = this.settings.concat();
        this.docSettingsChange.emit({
            settings: this.settings,
            item: this.settings[index]
        });
    };
    return DocControl;
}());
DocControl.style = controlCss;
var homeCss = ":host{display:block;height:100vh}svg{cursor:pointer;fill:#fff}";
var Home = /** @class */ (function () {
    function Home(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.isDark = false;
        this.selectedComponent = 'Accordion';
        this.changeMode = function () {
            document.body.classList.toggle('dark');
            _this.isDark = !_this.isDark;
        };
    }
    Home.prototype.docSelectComponentHandler = function (event) {
        var _this = this;
        var componentName = event.detail;
        this.selectedComponent = null;
        setTimeout(function () {
            _this.selectedComponent = componentName;
        }, 100);
    };
    Home.prototype.render = function () {
        var cls = {
            dark: this.isDark
        };
        return (h(Host, { class: cls }, h("arv-flex", { expanded: true }, h("doc-nav", { class: cls }), h("arv-flex", { direction: "column", expanded: true }, h("arv-header", { color: "primary", position: "sticky" }, h("arv-flex", { justify: "space-between", "align-items": "center", expanded: true }, h("h2", null, "Arv UI"), h("arv-spacer", { vertical: true }), h("arv-switch", { onClick: this.changeMode }), h("arv-flex", { "align-items": "center" }, h("p", null, "v.1.0.1"), h("arv-spacer", { vertical: true }), h("a", { href: "https://github.com/jeric17/arv" }, h("svg", { height: "32", class: "octicon octicon-mark-github", viewBox: "0 0 16 16", version: "1.1", width: "32", "aria-hidden": "true" }, h("path", { "fill-rule": "evenodd", d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" })))))), Boolean(this.selectedComponent) && (h("doc-content", { isDark: this.isDark, selectedComponent: this.selectedComponent }))))));
    };
    return Home;
}());
Home.style = homeCss;
var prism = createCommonjsModule(function (module) {
    /* **********************************************
         Begin prism-core.js
    ********************************************** */
    var _self = (typeof window !== 'undefined')
        ? window // if in browser
        : ((typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
            ? self // if in worker
            : {} // if in node js
        );
    /**
     * Prism: Lightweight, robust, elegant syntax highlighting
     * MIT license http://www.opensource.org/licenses/mit-license.php/
     * @author Lea Verou http://lea.verou.me
     */
    var Prism = (function (_self) {
        // Private helper vars
        var lang = /\blang(?:uage)?-([\w-]+)\b/i;
        var uniqueId = 0;
        var _ = {
            manual: _self.Prism && _self.Prism.manual,
            disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
            util: {
                encode: function encode(tokens) {
                    if (tokens instanceof Token) {
                        return new Token(tokens.type, encode(tokens.content), tokens.alias);
                    }
                    else if (Array.isArray(tokens)) {
                        return tokens.map(encode);
                    }
                    else {
                        return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
                    }
                },
                type: function (o) {
                    return Object.prototype.toString.call(o).slice(8, -1);
                },
                objId: function (obj) {
                    if (!obj['__id']) {
                        Object.defineProperty(obj, '__id', { value: ++uniqueId });
                    }
                    return obj['__id'];
                },
                // Deep clone a language definition (e.g. to extend it)
                clone: function deepClone(o, visited) {
                    var clone, id, type = _.util.type(o);
                    visited = visited || {};
                    switch (type) {
                        case 'Object':
                            id = _.util.objId(o);
                            if (visited[id]) {
                                return visited[id];
                            }
                            clone = {};
                            visited[id] = clone;
                            for (var key in o) {
                                if (o.hasOwnProperty(key)) {
                                    clone[key] = deepClone(o[key], visited);
                                }
                            }
                            return clone;
                        case 'Array':
                            id = _.util.objId(o);
                            if (visited[id]) {
                                return visited[id];
                            }
                            clone = [];
                            visited[id] = clone;
                            o.forEach(function (v, i) {
                                clone[i] = deepClone(v, visited);
                            });
                            return clone;
                        default:
                            return o;
                    }
                },
                /**
                 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
                 *
                 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
                 *
                 * @param {Element} element
                 * @returns {string}
                 */
                getLanguage: function (element) {
                    while (element && !lang.test(element.className)) {
                        element = element.parentElement;
                    }
                    if (element) {
                        return (element.className.match(lang) || [, 'none'])[1].toLowerCase();
                    }
                    return 'none';
                },
                /**
                 * Returns the script element that is currently executing.
                 *
                 * This does __not__ work for line script element.
                 *
                 * @returns {HTMLScriptElement | null}
                 */
                currentScript: function () {
                    if (typeof document === 'undefined') {
                        return null;
                    }
                    if ('currentScript' in document) {
                        return document.currentScript;
                    }
                    // IE11 workaround
                    // we'll get the src of the current script by parsing IE11's error stack trace
                    // this will not work for inline scripts
                    try {
                        throw new Error();
                    }
                    catch (err) {
                        // Get file src url from stack. Specifically works with the format of stack traces in IE.
                        // A stack will look like this:
                        //
                        // Error
                        //    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
                        //    at Global code (http://localhost/components/prism-core.js:606:1)
                        var src = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(err.stack) || [])[1];
                        if (src) {
                            var scripts = document.getElementsByTagName('script');
                            for (var i in scripts) {
                                if (scripts[i].src == src) {
                                    return scripts[i];
                                }
                            }
                        }
                        return null;
                    }
                }
            },
            languages: {
                extend: function (id, redef) {
                    var lang = _.util.clone(_.languages[id]);
                    for (var key in redef) {
                        lang[key] = redef[key];
                    }
                    return lang;
                },
                /**
                 * Insert a token before another token in a language literal
                 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
                 * we cannot just provide an object, we need an object and a key.
                 * @param inside The key (or language id) of the parent
                 * @param before The key to insert before.
                 * @param insert Object with the key/value pairs to insert
                 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
                 */
                insertBefore: function (inside, before, insert, root) {
                    root = root || _.languages;
                    var grammar = root[inside];
                    var ret = {};
                    for (var token in grammar) {
                        if (grammar.hasOwnProperty(token)) {
                            if (token == before) {
                                for (var newToken in insert) {
                                    if (insert.hasOwnProperty(newToken)) {
                                        ret[newToken] = insert[newToken];
                                    }
                                }
                            }
                            // Do not insert token which also occur in insert. See #1525
                            if (!insert.hasOwnProperty(token)) {
                                ret[token] = grammar[token];
                            }
                        }
                    }
                    var old = root[inside];
                    root[inside] = ret;
                    // Update references in other language definitions
                    _.languages.DFS(_.languages, function (key, value) {
                        if (value === old && key != inside) {
                            this[key] = ret;
                        }
                    });
                    return ret;
                },
                // Traverse a language definition with Depth First Search
                DFS: function DFS(o, callback, type, visited) {
                    visited = visited || {};
                    var objId = _.util.objId;
                    for (var i in o) {
                        if (o.hasOwnProperty(i)) {
                            callback.call(o, i, o[i], type || i);
                            var property = o[i], propertyType = _.util.type(property);
                            if (propertyType === 'Object' && !visited[objId(property)]) {
                                visited[objId(property)] = true;
                                DFS(property, callback, null, visited);
                            }
                            else if (propertyType === 'Array' && !visited[objId(property)]) {
                                visited[objId(property)] = true;
                                DFS(property, callback, i, visited);
                            }
                        }
                    }
                }
            },
            plugins: {},
            highlightAll: function (async, callback) {
                _.highlightAllUnder(document, async, callback);
            },
            highlightAllUnder: function (container, async, callback) {
                var env = {
                    callback: callback,
                    container: container,
                    selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                };
                _.hooks.run('before-highlightall', env);
                env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
                _.hooks.run('before-all-elements-highlight', env);
                for (var i = 0, element; element = env.elements[i++];) {
                    _.highlightElement(element, async === true, env.callback);
                }
            },
            highlightElement: function (element, async, callback) {
                // Find language
                var language = _.util.getLanguage(element);
                var grammar = _.languages[language];
                // Set language on the element, if not present
                element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
                // Set language on the parent, for styling
                var parent = element.parentNode;
                if (parent && parent.nodeName.toLowerCase() === 'pre') {
                    parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
                }
                var code = element.textContent;
                var env = {
                    element: element,
                    language: language,
                    grammar: grammar,
                    code: code
                };
                function insertHighlightedCode(highlightedCode) {
                    env.highlightedCode = highlightedCode;
                    _.hooks.run('before-insert', env);
                    env.element.innerHTML = env.highlightedCode;
                    _.hooks.run('after-highlight', env);
                    _.hooks.run('complete', env);
                    callback && callback.call(env.element);
                }
                _.hooks.run('before-sanity-check', env);
                if (!env.code) {
                    _.hooks.run('complete', env);
                    callback && callback.call(env.element);
                    return;
                }
                _.hooks.run('before-highlight', env);
                if (!env.grammar) {
                    insertHighlightedCode(_.util.encode(env.code));
                    return;
                }
                if (async && _self.Worker) {
                    var worker = new Worker(_.filename);
                    worker.onmessage = function (evt) {
                        insertHighlightedCode(evt.data);
                    };
                    worker.postMessage(JSON.stringify({
                        language: env.language,
                        code: env.code,
                        immediateClose: true
                    }));
                }
                else {
                    insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
                }
            },
            highlight: function (text, grammar, language) {
                var env = {
                    code: text,
                    grammar: grammar,
                    language: language
                };
                _.hooks.run('before-tokenize', env);
                env.tokens = _.tokenize(env.code, env.grammar);
                _.hooks.run('after-tokenize', env);
                return Token.stringify(_.util.encode(env.tokens), env.language);
            },
            tokenize: function (text, grammar) {
                var rest = grammar.rest;
                if (rest) {
                    for (var token in rest) {
                        grammar[token] = rest[token];
                    }
                    delete grammar.rest;
                }
                var tokenList = new LinkedList();
                addAfter(tokenList, tokenList.head, text);
                matchGrammar(text, tokenList, grammar, tokenList.head, 0);
                return toArray(tokenList);
            },
            hooks: {
                all: {},
                add: function (name, callback) {
                    var hooks = _.hooks.all;
                    hooks[name] = hooks[name] || [];
                    hooks[name].push(callback);
                },
                run: function (name, env) {
                    var callbacks = _.hooks.all[name];
                    if (!callbacks || !callbacks.length) {
                        return;
                    }
                    for (var i = 0, callback; callback = callbacks[i++];) {
                        callback(env);
                    }
                }
            },
            Token: Token
        };
        _self.Prism = _;
        function Token(type, content, alias, matchedStr, greedy) {
            this.type = type;
            this.content = content;
            this.alias = alias;
            // Copy of the full string this token was created from
            this.length = (matchedStr || '').length | 0;
            this.greedy = !!greedy;
        }
        Token.stringify = function stringify(o, language) {
            if (typeof o == 'string') {
                return o;
            }
            if (Array.isArray(o)) {
                var s = '';
                o.forEach(function (e) {
                    s += stringify(e, language);
                });
                return s;
            }
            var env = {
                type: o.type,
                content: stringify(o.content, language),
                tag: 'span',
                classes: ['token', o.type],
                attributes: {},
                language: language
            };
            var aliases = o.alias;
            if (aliases) {
                if (Array.isArray(aliases)) {
                    Array.prototype.push.apply(env.classes, aliases);
                }
                else {
                    env.classes.push(aliases);
                }
            }
            _.hooks.run('wrap', env);
            var attributes = '';
            for (var name in env.attributes) {
                attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
            }
            return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
        };
        /**
         * @param {string} text
         * @param {LinkedList<string | Token>} tokenList
         * @param {any} grammar
         * @param {LinkedListNode<string | Token>} startNode
         * @param {number} startPos
         * @param {boolean} [oneshot=false]
         * @param {string} [target]
         */
        function matchGrammar(text, tokenList, grammar, startNode, startPos, oneshot, target) {
            for (var token in grammar) {
                if (!grammar.hasOwnProperty(token) || !grammar[token]) {
                    continue;
                }
                var patterns = grammar[token];
                patterns = Array.isArray(patterns) ? patterns : [patterns];
                for (var j = 0; j < patterns.length; ++j) {
                    if (target && target == token + ',' + j) {
                        return;
                    }
                    var pattern = patterns[j], inside = pattern.inside, lookbehind = !!pattern.lookbehind, greedy = !!pattern.greedy, lookbehindLength = 0, alias = pattern.alias;
                    if (greedy && !pattern.pattern.global) {
                        // Without the global flag, lastIndex won't work
                        var flags = pattern.pattern.toString().match(/[imsuy]*$/)[0];
                        pattern.pattern = RegExp(pattern.pattern.source, flags + 'g');
                    }
                    pattern = pattern.pattern || pattern;
                    for ( // iterate the token list and keep track of the current token/string position
                    var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
                        var str = currentNode.value;
                        if (tokenList.length > text.length) {
                            // Something went terribly wrong, ABORT, ABORT!
                            return;
                        }
                        if (str instanceof Token) {
                            continue;
                        }
                        var removeCount = 1; // this is the to parameter of removeBetween
                        if (greedy && currentNode != tokenList.tail.prev) {
                            pattern.lastIndex = pos;
                            var match = pattern.exec(text);
                            if (!match) {
                                break;
                            }
                            var from = match.index + (lookbehind && match[1] ? match[1].length : 0);
                            var to = match.index + match[0].length;
                            var p = pos;
                            // find the node that contains the match
                            p += currentNode.value.length;
                            while (from >= p) {
                                currentNode = currentNode.next;
                                p += currentNode.value.length;
                            }
                            // adjust pos (and p)
                            p -= currentNode.value.length;
                            pos = p;
                            // the current node is a Token, then the match starts inside another Token, which is invalid
                            if (currentNode.value instanceof Token) {
                                continue;
                            }
                            // find the last node which is affected by this match
                            for (var k = currentNode; k !== tokenList.tail && (p < to || (typeof k.value === 'string' && !k.prev.value.greedy)); k = k.next) {
                                removeCount++;
                                p += k.value.length;
                            }
                            removeCount--;
                            // replace with the new match
                            str = text.slice(pos, p);
                            match.index -= pos;
                        }
                        else {
                            pattern.lastIndex = 0;
                            var match = pattern.exec(str);
                        }
                        if (!match) {
                            if (oneshot) {
                                break;
                            }
                            continue;
                        }
                        if (lookbehind) {
                            lookbehindLength = match[1] ? match[1].length : 0;
                        }
                        var from = match.index + lookbehindLength, match = match[0].slice(lookbehindLength), to = from + match.length, before = str.slice(0, from), after = str.slice(to);
                        var removeFrom = currentNode.prev;
                        if (before) {
                            removeFrom = addAfter(tokenList, removeFrom, before);
                            pos += before.length;
                        }
                        removeRange(tokenList, removeFrom, removeCount);
                        var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);
                        currentNode = addAfter(tokenList, removeFrom, wrapped);
                        if (after) {
                            addAfter(tokenList, currentNode, after);
                        }
                        if (removeCount > 1)
                            matchGrammar(text, tokenList, grammar, currentNode.prev, pos, true, token + ',' + j);
                        if (oneshot)
                            break;
                    }
                }
            }
        }
        /**
         * @typedef LinkedListNode
         * @property {T} value
         * @property {LinkedListNode<T> | null} prev The previous node.
         * @property {LinkedListNode<T> | null} next The next node.
         * @template T
         */
        /**
         * @template T
         */
        function LinkedList() {
            /** @type {LinkedListNode<T>} */
            var head = { value: null, prev: null, next: null };
            /** @type {LinkedListNode<T>} */
            var tail = { value: null, prev: head, next: null };
            head.next = tail;
            /** @type {LinkedListNode<T>} */
            this.head = head;
            /** @type {LinkedListNode<T>} */
            this.tail = tail;
            this.length = 0;
        }
        /**
         * Adds a new node with the given value to the list.
         * @param {LinkedList<T>} list
         * @param {LinkedListNode<T>} node
         * @param {T} value
         * @returns {LinkedListNode<T>} The added node.
         * @template T
         */
        function addAfter(list, node, value) {
            // assumes that node != list.tail && values.length >= 0
            var next = node.next;
            var newNode = { value: value, prev: node, next: next };
            node.next = newNode;
            next.prev = newNode;
            list.length++;
            return newNode;
        }
        /**
         * Removes `count` nodes after the given node. The given node will not be removed.
         * @param {LinkedList<T>} list
         * @param {LinkedListNode<T>} node
         * @param {number} count
         * @template T
         */
        function removeRange(list, node, count) {
            var next = node.next;
            for (var i = 0; i < count && next !== list.tail; i++) {
                next = next.next;
            }
            node.next = next;
            next.prev = node;
            list.length -= i;
        }
        /**
         * @param {LinkedList<T>} list
         * @returns {T[]}
         * @template T
         */
        function toArray(list) {
            var array = [];
            var node = list.head.next;
            while (node !== list.tail) {
                array.push(node.value);
                node = node.next;
            }
            return array;
        }
        if (!_self.document) {
            if (!_self.addEventListener) {
                // in Node.js
                return _;
            }
            if (!_.disableWorkerMessageHandler) {
                // In worker
                _self.addEventListener('message', function (evt) {
                    var message = JSON.parse(evt.data), lang = message.language, code = message.code, immediateClose = message.immediateClose;
                    _self.postMessage(_.highlight(code, _.languages[lang], lang));
                    if (immediateClose) {
                        _self.close();
                    }
                }, false);
            }
            return _;
        }
        //Get current script and highlight
        var script = _.util.currentScript();
        if (script) {
            _.filename = script.src;
            if (script.hasAttribute('data-manual')) {
                _.manual = true;
            }
        }
        function highlightAutomaticallyCallback() {
            if (!_.manual) {
                _.highlightAll();
            }
        }
        if (!_.manual) {
            // If the document state is "loading", then we'll use DOMContentLoaded.
            // If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
            // DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
            // might take longer one animation frame to execute which can create a race condition where only some plugins have
            // been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
            // See https://github.com/PrismJS/prism/issues/2102
            var readyState = document.readyState;
            if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
                document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
            }
            else {
                if (window.requestAnimationFrame) {
                    window.requestAnimationFrame(highlightAutomaticallyCallback);
                }
                else {
                    window.setTimeout(highlightAutomaticallyCallback, 16);
                }
            }
        }
        return _;
    })(_self);
    if (module.exports) {
        module.exports = Prism;
    }
    // hack for components to work correctly in node.js
    if (typeof commonjsGlobal !== 'undefined') {
        commonjsGlobal.Prism = Prism;
    }
    /* **********************************************
         Begin prism-markup.js
    ********************************************** */
    Prism.languages.markup = {
        'comment': /<!--[\s\S]*?-->/,
        'prolog': /<\?[\s\S]+?\?>/,
        'doctype': {
            pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,
            greedy: true
        },
        'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
        'tag': {
            pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
            greedy: true,
            inside: {
                'tag': {
                    pattern: /^<\/?[^\s>\/]+/i,
                    inside: {
                        'punctuation': /^<\/?/,
                        'namespace': /^[^\s>\/:]+:/
                    }
                },
                'attr-value': {
                    pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
                    inside: {
                        'punctuation': [
                            /^=/,
                            {
                                pattern: /^(\s*)["']|["']$/,
                                lookbehind: true
                            }
                        ]
                    }
                },
                'punctuation': /\/?>/,
                'attr-name': {
                    pattern: /[^\s>\/]+/,
                    inside: {
                        'namespace': /^[^\s>\/:]+:/
                    }
                }
            }
        },
        'entity': /&#?[\da-z]{1,8};/i
    };
    Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
        Prism.languages.markup['entity'];
    // Plugin to make entity title show the real entity, idea by Roman Komarov
    Prism.hooks.add('wrap', function (env) {
        if (env.type === 'entity') {
            env.attributes['title'] = env.content.replace(/&amp;/, '&');
        }
    });
    Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
        /**
         * Adds an inlined language to markup.
         *
         * An example of an inlined language is CSS with `<style>` tags.
         *
         * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
         * case insensitive.
         * @param {string} lang The language key.
         * @example
         * addInlined('style', 'css');
         */
        value: function addInlined(tagName, lang) {
            var includedCdataInside = {};
            includedCdataInside['language-' + lang] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: true,
                inside: Prism.languages[lang]
            };
            includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
            var inside = {
                'included-cdata': {
                    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                    inside: includedCdataInside
                }
            };
            inside['language-' + lang] = {
                pattern: /[\s\S]+/,
                inside: Prism.languages[lang]
            };
            var def = {};
            def[tagName] = {
                pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () { return tagName; }), 'i'),
                lookbehind: true,
                greedy: true,
                inside: inside
            };
            Prism.languages.insertBefore('markup', 'cdata', def);
        }
    });
    Prism.languages.xml = Prism.languages.extend('markup', {});
    Prism.languages.html = Prism.languages.markup;
    Prism.languages.mathml = Prism.languages.markup;
    Prism.languages.svg = Prism.languages.markup;
    /* **********************************************
         Begin prism-css.js
    ********************************************** */
    (function (Prism) {
        var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
        Prism.languages.css = {
            'comment': /\/\*[\s\S]*?\*\//,
            'atrule': {
                pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
                inside: {
                    'rule': /^@[\w-]+/,
                    'selector-function-argument': {
                        pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
                        lookbehind: true,
                        alias: 'selector'
                    }
                    // See rest below
                }
            },
            'url': {
                pattern: RegExp('url\\((?:' + string.source + '|[^\n\r()]*)\\)', 'i'),
                greedy: true,
                inside: {
                    'function': /^url/i,
                    'punctuation': /^\(|\)$/
                }
            },
            'selector': RegExp('[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'),
            'string': {
                pattern: string,
                greedy: true
            },
            'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
            'important': /!important\b/i,
            'function': /[-a-z0-9]+(?=\()/i,
            'punctuation': /[(){};:,]/
        };
        Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
        var markup = Prism.languages.markup;
        if (markup) {
            markup.tag.addInlined('style', 'css');
            Prism.languages.insertBefore('inside', 'attr-value', {
                'style-attr': {
                    pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
                    inside: {
                        'attr-name': {
                            pattern: /^\s*style/i,
                            inside: markup.tag.inside
                        },
                        'punctuation': /^\s*=\s*['"]|['"]\s*$/,
                        'attr-value': {
                            pattern: /.+/i,
                            inside: Prism.languages.css
                        }
                    },
                    alias: 'language-css'
                }
            }, markup.tag);
        }
    }(Prism));
    /* **********************************************
         Begin prism-clike.js
    ********************************************** */
    Prism.languages.clike = {
        'comment': [
            {
                pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                lookbehind: true
            },
            {
                pattern: /(^|[^\\:])\/\/.*/,
                lookbehind: true,
                greedy: true
            }
        ],
        'string': {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: true
        },
        'class-name': {
            pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: true,
            inside: {
                'punctuation': /[.\\]/
            }
        },
        'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
        'boolean': /\b(?:true|false)\b/,
        'function': /\w+(?=\()/,
        'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
        'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
        'punctuation': /[{}[\];(),.:]/
    };
    /* **********************************************
         Begin prism-javascript.js
    ********************************************** */
    Prism.languages.javascript = Prism.languages.extend('clike', {
        'class-name': [
            Prism.languages.clike['class-name'],
            {
                pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
                lookbehind: true
            }
        ],
        'keyword': [
            {
                pattern: /((?:^|})\s*)(?:catch|finally)\b/,
                lookbehind: true
            },
            {
                pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                lookbehind: true
            },
        ],
        'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
        // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
        'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        'operator': /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/
    });
    Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
    Prism.languages.insertBefore('javascript', 'keyword', {
        'regex': {
            pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
            lookbehind: true,
            greedy: true
        },
        // This must be declared before keyword because we use "function" inside the look-forward
        'function-variable': {
            pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
            alias: 'function'
        },
        'parameter': [
            {
                pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
                lookbehind: true,
                inside: Prism.languages.javascript
            },
            {
                pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
                inside: Prism.languages.javascript
            },
            {
                pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
                lookbehind: true,
                inside: Prism.languages.javascript
            },
            {
                pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
                lookbehind: true,
                inside: Prism.languages.javascript
            }
        ],
        'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    });
    Prism.languages.insertBefore('javascript', 'string', {
        'template-string': {
            pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
            greedy: true,
            inside: {
                'template-punctuation': {
                    pattern: /^`|`$/,
                    alias: 'string'
                },
                'interpolation': {
                    pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                    lookbehind: true,
                    inside: {
                        'interpolation-punctuation': {
                            pattern: /^\${|}$/,
                            alias: 'punctuation'
                        },
                        rest: Prism.languages.javascript
                    }
                },
                'string': /[\s\S]+/
            }
        }
    });
    if (Prism.languages.markup) {
        Prism.languages.markup.tag.addInlined('script', 'javascript');
    }
    Prism.languages.js = Prism.languages.javascript;
    /* **********************************************
         Begin prism-file-highlight.js
    ********************************************** */
    (function () {
        if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
            return;
        }
        /**
         * @param {Element} [container=document]
         */
        self.Prism.fileHighlight = function (container) {
            container = container || document;
            var Extensions = {
                'js': 'javascript',
                'py': 'python',
                'rb': 'ruby',
                'ps1': 'powershell',
                'psm1': 'powershell',
                'sh': 'bash',
                'bat': 'batch',
                'h': 'c',
                'tex': 'latex'
            };
            Array.prototype.slice.call(container.querySelectorAll('pre[data-src]')).forEach(function (pre) {
                // ignore if already loaded
                if (pre.hasAttribute('data-src-loaded')) {
                    return;
                }
                // load current
                var src = pre.getAttribute('data-src');
                var language, parent = pre;
                var lang = /\blang(?:uage)?-([\w-]+)\b/i;
                while (parent && !lang.test(parent.className)) {
                    parent = parent.parentNode;
                }
                if (parent) {
                    language = (pre.className.match(lang) || [, ''])[1];
                }
                if (!language) {
                    var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
                    language = Extensions[extension] || extension;
                }
                var code = document.createElement('code');
                code.className = 'language-' + language;
                pre.textContent = '';
                code.textContent = 'Loading…';
                pre.appendChild(code);
                var xhr = new XMLHttpRequest();
                xhr.open('GET', src, true);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        if (xhr.status < 400 && xhr.responseText) {
                            code.textContent = xhr.responseText;
                            Prism.highlightElement(code);
                            // mark as loaded
                            pre.setAttribute('data-src-loaded', '');
                        }
                        else if (xhr.status >= 400) {
                            code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
                        }
                        else {
                            code.textContent = '✖ Error: File does not exist or is empty';
                        }
                    }
                };
                xhr.send(null);
            });
        };
        document.addEventListener('DOMContentLoaded', function () {
            // execute inside handler, for dropping Event as argument
            self.Prism.fileHighlight();
        });
    })();
});
var prismCoyCss = "code[class*=\"language-\"],pre[class*=\"language-\"]{color:black;background:none;font-family:Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=\"language-\"]{position:relative;margin:.5em 0;overflow:visible;padding:0}pre[class*=\"language-\"]>code{position:relative;border-left:10px solid #358ccb;-webkit-box-shadow:-1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf;box-shadow:-1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf;background-color:#fdfdfd;background-image:-webkit-gradient(linear, left top, left bottom, color-stop(50%, transparent), color-stop(50%, rgba(69, 142, 209, 0.04)));background-image:linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%);background-size:3em 3em;background-origin:content-box;background-attachment:local}code[class*=\"language\"]{max-height:inherit;height:inherit;padding:0 1em;display:block;overflow:auto}:not(pre)>code[class*=\"language-\"],pre[class*=\"language-\"]{background-color:#fdfdfd;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin-bottom:1em}:not(pre)>code[class*=\"language-\"]{position:relative;padding:.2em;border-radius:0.3em;color:#c92c2c;border:1px solid rgba(0, 0, 0, 0.1);display:inline;white-space:normal}pre[class*=\"language-\"]:before,pre[class*=\"language-\"]:after{content:'';z-index:-2;display:block;position:absolute;bottom:0.75em;left:0.18em;width:40%;height:20%;max-height:13em;-webkit-box-shadow:0px 13px 8px #979797;box-shadow:0px 13px 8px #979797;-webkit-transform:rotate(-2deg);-moz-transform:rotate(-2deg);-ms-transform:rotate(-2deg);-o-transform:rotate(-2deg);transform:rotate(-2deg)}:not(pre)>code[class*=\"language-\"]:after,pre[class*=\"language-\"]:after{right:0.75em;left:auto;-webkit-transform:rotate(2deg);-moz-transform:rotate(2deg);-ms-transform:rotate(2deg);-o-transform:rotate(2deg);transform:rotate(2deg)}.token.comment,.token.block-comment,.token.prolog,.token.doctype,.token.cdata{color:#7D8B99}.token.punctuation{color:#5F6364}.token.property,.token.tag,.token.boolean,.token.number,.token.function-name,.token.constant,.token.symbol,.token.deleted{color:#c92c2c}.token.selector,.token.attr-name,.token.string,.token.char,.token.function,.token.builtin,.token.inserted{color:#2f9c0a}.token.operator,.token.entity,.token.url,.token.variable{color:#a67f59;background:rgba(255, 255, 255, 0.5)}.token.atrule,.token.attr-value,.token.keyword,.token.class-name{color:#1990b8}.token.regex,.token.important{color:#e90}.language-css .token.string,.style .token.string{color:#a67f59;background:rgba(255, 255, 255, 0.5)}.token.important{font-weight:normal}.token.bold{font-weight:bold}.token.italic{font-style:italic}.token.entity{cursor:help}.token.namespace{opacity:.7}@media screen and (max-width: 767px){pre[class*=\"language-\"]:before,pre[class*=\"language-\"]:after{bottom:14px;-webkit-box-shadow:none;box-shadow:none}}.token.tab:not(:empty):before,.token.cr:before,.token.lf:before{color:#e0d7d1}pre[class*=\"language-\"].line-numbers.line-numbers{padding-left:0}pre[class*=\"language-\"].line-numbers.line-numbers code{padding-left:3.8em}pre[class*=\"language-\"].line-numbers.line-numbers .line-numbers-rows{left:0}pre[class*=\"language-\"][data-line]{padding-top:0;padding-bottom:0;padding-left:0}pre[data-line] code{position:relative;padding-left:4em}pre .line-highlight{margin-top:0}";
var prismTomorrowCss = "code[class*=\"language-\"],pre[class*=\"language-\"]{color:#ccc;background:none;font-family:Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=\"language-\"]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=\"language-\"],pre[class*=\"language-\"]{background:#2d2d2d}:not(pre)>code[class*=\"language-\"]{padding:.1em;border-radius:.3em;white-space:normal}.token.comment,.token.block-comment,.token.prolog,.token.doctype,.token.cdata{color:#999}.token.punctuation{color:#ccc}.token.tag,.token.attr-name,.token.namespace,.token.deleted{color:#e2777a}.token.function-name{color:#6196cc}.token.boolean,.token.number,.token.function{color:#f08d49}.token.property,.token.class-name,.token.constant,.token.symbol{color:#f8c555}.token.selector,.token.important,.token.atrule,.token.keyword,.token.builtin{color:#cc99cd}.token.string,.token.char,.token.attr-value,.token.regex,.token.variable{color:#7ec699}.token.operator,.token.entity,.token.url{color:#67cdcc}.token.important,.token.bold{font-weight:bold}.token.italic{font-style:italic}.token.entity{cursor:help}.token.inserted{color:green}";
var htmlCss = "code{background-color:var(--darker);white-space:pre-wrap !important}pre{background-color:var(--darker);border-radius:var(--radius);-webkit-box-sizing:border-box;box-sizing:border-box;padding:1em}";
var DocHtml = /** @class */ (function () {
    function DocHtml(hostRef) {
        registerInstance(this, hostRef);
        this.config = {};
        this.settings = [];
    }
    DocHtml.prototype.settingsHandler = function () {
        this.init();
    };
    Object.defineProperty(DocHtml.prototype, "htmlCode", {
        get: function () {
            var _a = this.config, element = _a.element, slot = _a.slot;
            return "\n    <" + element + " " + this.propsString + ">\n         " + (slot || '') + "\n    </" + element + ">\n";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocHtml.prototype, "propsString", {
        get: function () {
            return this.settings.map(function (d) {
                if (!d.value) {
                    return '';
                }
                return d.name + "=\"" + d.value + "\"";
            }).filter(function (d) { return d; }).join(" ");
        },
        enumerable: true,
        configurable: true
    });
    DocHtml.prototype.componentDidLoad = function () {
        this.init();
    };
    DocHtml.prototype.render = function () {
        return (h(Host, null, this.isDark && (h("style", null, prismTomorrowCss)), !this.isDark && (h("style", null, prismCoyCss)), h("arv-flex", { direction: "column" }, h("arv-spacer", null), h("h2", null, "Html"), h("arv-divider", null), h("arv-spacer", null), h("pre", null, h("code", { class: "language-html" })))));
    };
    DocHtml.prototype.init = function () {
        var html = prism.highlight(this.htmlCode, prism.languages.html, 'html');
        this.el.shadowRoot.querySelector('code').innerHTML = html;
    };
    Object.defineProperty(DocHtml.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocHtml, "watchers", {
        get: function () {
            return {
                "settings": ["settingsHandler"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return DocHtml;
}());
DocHtml.style = htmlCss;
var DocNav = /** @class */ (function () {
    function DocNav(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.items = [
            'Accordion',
            'AlertText',
            'Avatar',
            'AvatarGroup',
            'Badge',
            'Button',
            'Checkbox',
            'Chip',
            'Dialog',
            'Flex',
            'Header',
            'Icon',
            'Input',
            'Menu',
            'Paper',
            'ProgressCircular',
            'Radio',
            'Select',
            'Snackbar',
            'Stepper',
            'Switch',
            'Table',
            'Tabs',
            'Tooltip'
        ];
        this.selectedItem = 'Accordion';
        this.click = function (itemName) {
            _this.docSelectComponent.emit(itemName);
            _this.selectedItem = itemName;
        };
        this.docSelectComponent = createEvent(this, "docSelectComponent", 7);
    }
    DocNav.prototype.render = function () {
        var _this = this;
        return (h("arv-side-pane", null, h("arv-list", null, this.items.map(function (item) { return (h("arv-list-item", { "active-color": "light", isActive: _this.selectedItem === item, onClick: function () { return _this.click(item); } }, item)); }))));
    };
    return DocNav;
}());
export { Divider as arv_divider, Flex as arv_flex, Header as arv_header, Icon as arv_icon, Input as arv_input, List as arv_list, ListItem as arv_list_item, MenuItem as arv_menu_item, Paper as arv_paper, Select as arv_select, SidePane as arv_side_pane, Spacer as arv_spacer, Switch as arv_switch, Text as arv_text, DocContent as doc_content, DocControl as doc_control, Home as doc_home, DocHtml as doc_html, DocNav as doc_nav };
