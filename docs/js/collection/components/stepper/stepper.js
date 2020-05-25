import { Component, Prop, Event, Method, State, Watch, Host, h } from '@stencil/core';
import { generateAttrValue } from '../../utils/helpers';
export class Stepper {
    constructor() {
        /**
         * Handles step item click.
         */
        this.itemClick = (index) => {
            this.arvItemClick.emit(index);
        };
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
            const checkItem = (h("div", { class: "index" },
                h("arv-icon", { icon: "check" })));
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
            return (h("div", { class: stepperCls, onClick: () => this.itemClick(index) },
                step.done ? checkItem : indexItem,
                h("div", { class: "title" }, step.title),
                (index < stepsLength) && divider));
        })));
    }
    static get is() { return "arv-stepper"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["stepper.css"]
    }; }
    static get styleUrls() { return {
        "$": ["stepper.css"]
    }; }
    static get properties() { return {
        "activeIndex": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The current step."
            },
            "attribute": "active-index",
            "reflect": false
        },
        "color": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "Color",
                "resolved": "string",
                "references": {
                    "Color": {
                        "location": "import",
                        "path": "../../interface"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Color variant to use."
            },
            "attribute": "color",
            "reflect": false
        },
        "steps": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Steps data"
            },
            "attribute": "steps",
            "reflect": false
        }
    }; }
    static get states() { return {
        "stepperSteps": {}
    }; }
    static get events() { return [{
            "method": "arvItemClick",
            "name": "arvItemClick",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when an step item is clicked."
            },
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "next": {
            "complexType": {
                "signature": "() => Promise<boolean>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<boolean>"
            },
            "docs": {
                "text": "Public api to trigger next step.",
                "tags": []
            }
        },
        "back": {
            "complexType": {
                "signature": "() => Promise<boolean>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<boolean>"
            },
            "docs": {
                "text": "Public api to trigger back.",
                "tags": []
            }
        }
    }; }
    static get watchers() { return [{
            "propName": "steps",
            "methodName": "stepsChange"
        }]; }
}
