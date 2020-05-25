import { r as registerInstance, c as createEvent, h, g as getElement } from './index-8fd6d07a.js';

const dialogCss = ":host{display:none}";

const Dialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Disables background click to close.
         */
        this.disableBgClose = false;
        this.arvDialogClose = createEvent(this, "arvDialogClose", 7);
    }
    isOpenChanged(value) {
        if (value) {
            this.open();
        }
    }
    componentWillLoad() {
        this.dialogId = Math.ceil(Math.random() * 1000000000);
    }
    componentDidLoad() {
        if (this.isOpen) {
            this.open();
        }
    }
    /**
     * Handle close
     */
    close() {
        this.isOpen = false;
        this.arvDialogClose.emit();
    }
    render() {
        return (h("slot", null));
    }
    /**
     * Will append the dialog content to document and
     * add event listener to virtual component.
     */
    open() {
        const el = this.el;
        const arvVirtual = document.createElement('arv-virtual');
        const elChildren = Array.from(this.el.children);
        /**
         * Apply dialog attributes to arv-virtual component.
         */
        arvVirtual.setAttribute('dialog-title', this.dialogTitle || '');
        arvVirtual.setAttribute('disable-bg-close', String(this.disableBgClose));
        arvVirtual.setAttribute('scrollable', String(this.scrollable));
        arvVirtual.setAttribute('dialog-id', String(this.dialogId));
        /**
         * Return the elements back to the arv-dialog element.
         */
        arvVirtual.addEventListener('arvVirtualClose', () => {
            el.setAttribute('is-open', 'false');
            elChildren.forEach(node => {
                el.appendChild(node);
            });
            document.body.removeChild(arvVirtual);
        });
        /**
         * Transfer children to arv-virtual component.
         */
        elChildren.forEach(node => {
            arvVirtual.appendChild(node);
        });
        /**
         * Add the arv-virtual component to document body.
         */
        document.body.appendChild(arvVirtual);
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "isOpen": ["isOpenChanged"]
    }; }
};
Dialog.style = dialogCss;

export { Dialog as arv_dialog };
