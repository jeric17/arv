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
import { r as registerInstance, c as createEvent, h, H as Host } from './index-8fd6d07a.js';
import { g as generateAttrValue } from './helpers-5034f609.js';
var stepperCss = ":host{width:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.divider{background-color:var(--default-shade);height:2px;width:100%;margin:0 8px}.item{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;width:100%}.index{-ms-flex-align:center;align-items:center;background-color:var(--default-bg);border-radius:100%;color:var(--font-color);display:-ms-flexbox;display:flex;height:26px;-ms-flex-pack:center;justify-content:center;margin:0 8px;min-width:26px;width:26px}.item.active .title,.item.done .title{font-weight:bold}.item.active .index,.item.done .index{background-color:var(--default-shade)}:host(.primary) .done .index,:host(.primary) .active .index{background-color:var(--primary-color);color:var(--primary-text-color)}:host(.primary) .done .index,:host(.primary) .active .index{background-color:var(--primary-color);color:var(--primary-text-color)}:host(.secondary) .done .index,:host(.secondary) .active .index{background-color:var(--secondary-color);color:var(--secondary-text-color)}:host(.success) .done .index,:host(.success) .active .index{background-color:var(--success-color);color:var(--success-text-color)}:host(.warning) .done .index,:host(.warning) .active .index{background-color:var(--warning-color);color:var(--warning-text-color)}:host(.danger) .done .index,:host(.danger) .active .index{background-color:var(--danger-color);color:var(--danger-text-color)}:host(.dark) .done .index,:host(.dark) .active .index{background-color:var(--dark-color);color:var(--dark-text-color)}:host(.light) .done .index,:host(.light) .active .index{background-color:var(--light-color);color:var(--light-text-color)}";
var Stepper = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        /**
         * Handles step item click.
         */
        this.itemClick = function (index) {
            _this.arvItemClick.emit(index);
        };
        this.arvItemClick = createEvent(this, "arvItemClick", 7);
    }
    /**
     * Will parse again the steps attr on update.
     */
    class_1.prototype.stepsChange = function () {
        this.init();
    };
    /**
     * Public api to trigger next step.
     */
    class_1.prototype.next = function () {
        return __awaiter(this, void 0, void 0, function () {
            var stepsClone;
            return __generator(this, function (_a) {
                if (this.activeIndex === this.stepperSteps.length) {
                    return [2 /*return*/, false];
                }
                stepsClone = this.cloneSteps();
                stepsClone[this.activeIndex].done = true;
                this.stepperSteps = stepsClone;
                this.activeIndex++;
                return [2 /*return*/];
            });
        });
    };
    /**
     * Public api to trigger back.
     */
    class_1.prototype.back = function () {
        return __awaiter(this, void 0, void 0, function () {
            var stepsClone;
            return __generator(this, function (_a) {
                if (this.activeIndex === 0) {
                    return [2 /*return*/, false];
                }
                stepsClone = this.cloneSteps();
                stepsClone[this.activeIndex - 1].done = false;
                this.stepperSteps = stepsClone;
                this.activeIndex--;
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.componentWillLoad = function () {
        this.init();
    };
    class_1.prototype.cloneSteps = function () {
        return JSON.parse(JSON.stringify(this.stepperSteps));
    };
    /**
     * Converts the steps string to array.
     */
    class_1.prototype.init = function () {
        try {
            this.stepperSteps = JSON.parse(this.steps);
        }
        catch (e) {
            this.stepperSteps = this.steps;
        }
    };
    class_1.prototype.render = function () {
        var _this = this;
        var hostCls = Object.assign({}, generateAttrValue(this.color));
        var stepsLength = this.stepperSteps.length - 1;
        return (h(Host, { class: hostCls }, this.stepperSteps.map(function (step, index) {
            var stepIndex = index + 1;
            /**
             * Line separator between steps.
             */
            var divider = h("div", { class: "divider" });
            /**
             * Will be visible if the step item is tag done.
             */
            var checkItem = (h("div", { class: "index" }, h("arv-icon", { icon: "check" })));
            /**
             * Step item classList.
             */
            var stepperCls = {
                item: true,
                done: step.done,
                active: _this.activeIndex === index
            };
            /**
             * Step number ui.
             */
            var indexItem = h("div", { class: "index" }, stepIndex);
            return (h("div", { class: stepperCls, onClick: function () { return _this.itemClick(index); } }, step.done ? checkItem : indexItem, h("div", { class: "title" }, step.title), (index < stepsLength) && divider));
        })));
    };
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "steps": ["stepsChange"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
Stepper.style = stepperCss;
export { Stepper as arv_stepper };
