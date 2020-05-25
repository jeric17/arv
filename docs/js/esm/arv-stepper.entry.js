import { r as registerInstance, c as createEvent, h, H as Host } from './index-8fd6d07a.js';
import { g as generateAttrValue } from './helpers-5034f609.js';

const stepperCss = ":host{width:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.divider{background-color:var(--default-shade);height:2px;width:100%;margin:0 8px}.item{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;width:100%}.index{-ms-flex-align:center;align-items:center;background-color:var(--default-bg);border-radius:100%;color:var(--font-color);display:-ms-flexbox;display:flex;height:26px;-ms-flex-pack:center;justify-content:center;margin:0 8px;min-width:26px;width:26px}.item.active .title,.item.done .title{font-weight:bold}.item.active .index,.item.done .index{background-color:var(--default-shade)}:host(.primary) .done .index,:host(.primary) .active .index{background-color:var(--primary-color);color:var(--primary-text-color)}:host(.primary) .done .index,:host(.primary) .active .index{background-color:var(--primary-color);color:var(--primary-text-color)}:host(.secondary) .done .index,:host(.secondary) .active .index{background-color:var(--secondary-color);color:var(--secondary-text-color)}:host(.success) .done .index,:host(.success) .active .index{background-color:var(--success-color);color:var(--success-text-color)}:host(.warning) .done .index,:host(.warning) .active .index{background-color:var(--warning-color);color:var(--warning-text-color)}:host(.danger) .done .index,:host(.danger) .active .index{background-color:var(--danger-color);color:var(--danger-text-color)}:host(.dark) .done .index,:host(.dark) .active .index{background-color:var(--dark-color);color:var(--dark-text-color)}:host(.light) .done .index,:host(.light) .active .index{background-color:var(--light-color);color:var(--light-text-color)}";

const Stepper = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Handles step item click.
         */
        this.itemClick = (index) => {
            this.arvItemClick.emit(index);
        };
        this.arvItemClick = createEvent(this, "arvItemClick", 7);
    }
    /**
     * Will parse again the steps attr on update.
     */
    stepsChange() {
        this.init();
    }
    /**
     * Public api to trigger next step.
     */
    async next() {
        if (this.activeIndex === this.stepperSteps.length) {
            return false;
        }
        const stepsClone = this.cloneSteps();
        stepsClone[this.activeIndex].done = true;
        this.stepperSteps = stepsClone;
        this.activeIndex++;
    }
    /**
     * Public api to trigger back.
     */
    async back() {
        if (this.activeIndex === 0) {
            return false;
        }
        const stepsClone = this.cloneSteps();
        stepsClone[this.activeIndex - 1].done = false;
        this.stepperSteps = stepsClone;
        this.activeIndex--;
    }
    componentWillLoad() {
        this.init();
    }
    cloneSteps() {
        return JSON.parse(JSON.stringify(this.stepperSteps));
    }
    /**
     * Converts the steps string to array.
     */
    init() {
        try {
            this.stepperSteps = JSON.parse(this.steps);
        }
        catch (e) {
            this.stepperSteps = this.steps;
        }
    }
    render() {
        const hostCls = Object.assign({}, generateAttrValue(this.color));
        const stepsLength = this.stepperSteps.length - 1;
        return (h(Host, { class: hostCls }, this.stepperSteps.map((step, index) => {
            const stepIndex = index + 1;
            /**
             * Line separator between steps.
             */
            const divider = h("div", { class: "divider" });
            /**
             * Will be visible if the step item is tag done.
             */
            const checkItem = (h("div", { class: "index" }, h("arv-icon", { icon: "check" })));
            /**
             * Step item classList.
             */
            const stepperCls = {
                item: true,
                done: step.done,
                active: this.activeIndex === index
            };
            /**
             * Step number ui.
             */
            const indexItem = h("div", { class: "index" }, stepIndex);
            return (h("div", { class: stepperCls, onClick: () => this.itemClick(index) }, step.done ? checkItem : indexItem, h("div", { class: "title" }, step.title), (index < stepsLength) && divider));
        })));
    }
    static get watchers() { return {
        "steps": ["stepsChange"]
    }; }
};
Stepper.style = stepperCss;

export { Stepper as arv_stepper };
