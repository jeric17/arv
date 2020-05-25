import { r as registerInstance, c as createEvent, h, g as getElement } from './index-8fd6d07a.js';
var dialogCss = ":host{display:none}";
var Dialog = /** @class */ (function () {
    function Dialog(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Disables background click to close.
         */
        this.disableBgClose = false;
        this.arvDialogClose = createEvent(this, "arvDialogClose", 7);
    }
    Dialog.prototype.isOpenChanged = function (value) {
        if (value) {
            this.open();
        }
    };
    Dialog.prototype.componentWillLoad = function () {
        this.dialogId = Math.ceil(Math.random() * 1000000000);
    };
    Dialog.prototype.componentDidLoad = function () {
        if (this.isOpen) {
            this.open();
        }
    };
    /**
     * Handle close
     */
    Dialog.prototype.close = function () {
        this.isOpen = false;
        this.arvDialogClose.emit();
    };
    Dialog.prototype.render = function () {
        return (h("slot", null));
    };
    /**
     * Will append the dialog content to document and
     * add event listener to virtual component.
     */
    Dialog.prototype.open = function () {
        var el = this.el;
        var arvVirtual = document.createElement('arv-virtual');
        var elChildren = Array.from(this.el.children);
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
        arvVirtual.addEventListener('arvVirtualClose', function () {
            el.setAttribute('is-open', 'false');
            elChildren.forEach(function (node) {
                el.appendChild(node);
            });
            document.body.removeChild(arvVirtual);
        });
        /**
         * Transfer children to arv-virtual component.
         */
        elChildren.forEach(function (node) {
            arvVirtual.appendChild(node);
        });
        /**
         * Add the arv-virtual component to document body.
         */
        document.body.appendChild(arvVirtual);
    };
    Object.defineProperty(Dialog.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dialog, "watchers", {
        get: function () {
            return {
                "isOpen": ["isOpenChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return Dialog;
}());
Dialog.style = dialogCss;
export { Dialog as arv_dialog };
