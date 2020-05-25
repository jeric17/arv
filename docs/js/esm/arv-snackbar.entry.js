import { r as registerInstance, h, H as Host, g as getElement } from './index-8fd6d07a.js';

const snackbarCss = ":host{display:none}";

const Snackbar = class {
    constructor(hostRef) {
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
    async open() {
        this.initOpen();
    }
    initOpen() {
        const el = this.el;
        /**
         * If the snackbar is arealy opened. Update the counter attribute
         * to notify the virtual snackbar and let it handle
         * updating the duration.
         */
        if (this.isOPen) {
            const virtual = document.body.querySelector('arv-virtual-snackbar');
            virtual.setAttribute('counter', String(this.counter));
            this.counter++;
            return this.el;
        }
        /**
         * Create element.
         */
        const virtual = document.createElement('arv-virtual-snackbar');
        const elChildren = Array.from(this.el.children);
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
        virtual.addEventListener('arvVirtualSnackbarClose', () => {
            elChildren.forEach(node => {
                el.appendChild(node);
            });
            document.body.removeChild(virtual);
            this.isOPen = false;
        });
        /**
         * Transfer children to arv-virtual component.
         */
        elChildren.forEach(node => {
            virtual.appendChild(node);
        });
        document.body.appendChild(virtual);
        this.counter++;
        this.isOPen = true;
        /**
         * Just return the host element.
         */
        return this.el;
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    get el() { return getElement(this); }
};
Snackbar.style = snackbarCss;

export { Snackbar as arv_snackbar };
