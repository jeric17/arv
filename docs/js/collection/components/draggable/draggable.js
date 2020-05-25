import { Component, h, Element, Prop, Event, State } from '@stencil/core';
export class Draggable {
    constructor() {
        this.showIcon = true;
        this.color = 'default';
        this.disabled = false;
        this.direction = 'vertical';
        this.onDragOver = (evt) => {
            evt.preventDefault();
            this.isOver = true;
            this.applyEvent(evt, 'over', 'itemOver');
        };
        this.onDragStart = (evt) => {
            console.log('dragstart');
            evt.dataTransfer.dropEffect = 'copy';
            this.applyEvent(evt, 'start', 'itemStart');
        };
        this.onDragEnter = (evt) => {
            console.log('dragenter');
            this.applyEvent(evt, 'enter', 'itemEnter');
        };
        this.onDragLeave = (evt) => {
            this.applyEvent(evt, 'leave', 'itemLeave');
            this.isOver = false;
        };
        this.onDragEnd = (evt) => {
            this.applyEvent(evt, 'end', 'itemEnd');
        };
        this.onDragExit = (evt) => {
            this.applyEvent(evt, 'exit', 'itemExit');
        };
        this.onDrag = (evt) => {
            console.log('drag');
            this.applyEvent(evt, 'drag', 'itemDrag');
        };
        this.onDrop = (evt) => {
            console.log('draggable', evt);
            evt.preventDefault();
            const key = evt.dataTransfer.getData('Text');
            this.applyEvent(evt, 'drop', 'itemDrop', {
                target: key
            });
        };
        this.onDragTop = () => {
            if (this.isTopOver) {
                return false;
            }
            this.isTopOver = true;
        };
        this.onDragLeaveTop = () => {
            this.isTopOver = false;
        };
        this.onDropTop = (evt) => {
            evt.preventDefault();
            this.isTopOver = false;
            const key = evt.dataTransfer.getData('Text');
            this.applyEvent(evt, 'dropTop', 'itemDropTop', {
                target: key
            });
            this.applyEvent(evt, 'dropLeft', 'itemDropLeft', {
                target: key
            });
        };
        this.onDragBottom = () => {
            if (this.isBottomOver) {
                return false;
            }
            this.isBottomOver = true;
        };
        this.onDragLeaveBottom = () => {
            this.isBottomOver = false;
        };
        this.onDropBottom = (evt) => {
            evt.preventDefault();
            this.isBottomOver = false;
            const key = evt.dataTransfer.getData('Text');
            this.applyEvent(evt, 'dropBottom', 'itemDropBottom', {
                target: key
            });
            this.applyEvent(evt, 'dropRight', 'itemDropRight', {
                target: key
            });
        };
    }
    applyEvent(evt, propName, eventName, options = {}) {
        evt.dataTransfer.setData('text/plain', this.hashKey);
        if (this[propName]) {
            this[propName](evt, this.hashKey, options);
        }
        const data = {
            dragEvent: evt,
            key: this.hashKey
        };
        this[eventName].emit(Object.assign(Object.assign({}, data), options));
    }
    render() {
        const isVertical = this.direction === 'vertical';
        const rootClass = {
            draggable: true,
            isOver: this.isOver,
            primary: this.color === 'primary',
            secondary: this.color === 'secondary',
            disabled: this.disabled,
            horizontal: !isVertical
        };
        const topClass = {
            top: true,
            isTopOver: this.isTopOver,
            horizontalLine: !isVertical
        };
        const bottomClass = {
            bottom: true,
            isBottomOver: this.isBottomOver,
            horizontalLine: !isVertical
        };
        return (h("div", { class: rootClass, onDragEnd: this.onDragEnd, onDragExit: this.onDragExit, onDragEnter: this.onDragEnter, onDragLeave: this.onDragLeave, onDragOver: this.onDragOver, onDragStart: this.onDragStart, onDrop: this.onDrop, onDrag: this.onDrag, draggable: !this.disabled },
            h("div", { class: topClass, onDragEnter: this.onDragTop, onDragLeave: this.onDragLeaveTop, onDrop: this.onDropTop }),
            h("arv-flex", { class: "slotWrapper", items: "center" },
                this.showIcon && (h("arv-icon", { icon: "drag_indicator", noMargin: true })),
                h("slot", null)),
            h("slot", null),
            this.isLast && (h("div", { class: bottomClass, onDragEnter: this.onDragBottom, onDragLeave: this.onDragLeaveBottom, onDrop: this.onDropBottom }))));
    }
    static get is() { return "arv-draggable"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["draggable.css"]
    }; }
    static get styleUrls() { return {
        "$": ["draggable.css"]
    }; }
    static get properties() { return {
        "hashKey": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "hash-key",
            "reflect": false
        },
        "showIcon": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "show-icon",
            "reflect": false,
            "defaultValue": "true"
        },
        "color": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "color",
            "reflect": false,
            "defaultValue": "'default'"
        },
        "drag": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(evt: DragEvent, key: string) => void",
                "resolved": "(evt: DragEvent, key: string) => void",
                "references": {
                    "DragEvent": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "over": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(evt: DragEvent, key: string) => void",
                "resolved": "(evt: DragEvent, key: string) => void",
                "references": {
                    "DragEvent": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "start": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(evt: DragEvent, key: string) => void",
                "resolved": "(evt: DragEvent, key: string) => void",
                "references": {
                    "DragEvent": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "enter": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(evt: DragEvent, key: string) => void",
                "resolved": "(evt: DragEvent, key: string) => void",
                "references": {
                    "DragEvent": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "leave": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(evt: DragEvent, key: string) => void",
                "resolved": "(evt: DragEvent, key: string) => void",
                "references": {
                    "DragEvent": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "end": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(evt: DragEvent, key: string) => void",
                "resolved": "(evt: DragEvent, key: string) => void",
                "references": {
                    "DragEvent": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "exit": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(evt: DragEvent, key: string) => void",
                "resolved": "(evt: DragEvent, key: string) => void",
                "references": {
                    "DragEvent": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "drop": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(evt: DragEvent, k1: string, k2: string) => void",
                "resolved": "(evt: DragEvent, k1: string, k2: string) => void",
                "references": {
                    "DragEvent": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "dropTop": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(evt: DragEvent, k1: string, k2: string) => void",
                "resolved": "(evt: DragEvent, k1: string, k2: string) => void",
                "references": {
                    "DragEvent": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "dropBottom": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(evt: DragEvent, k1: string, k2: string) => void",
                "resolved": "(evt: DragEvent, k1: string, k2: string) => void",
                "references": {
                    "DragEvent": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "dropLeft": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(evt: DragEvent, k1: string, k2: string) => void",
                "resolved": "(evt: DragEvent, k1: string, k2: string) => void",
                "references": {
                    "DragEvent": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "dropRight": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(evt: DragEvent, k1: string, k2: string) => void",
                "resolved": "(evt: DragEvent, k1: string, k2: string) => void",
                "references": {
                    "DragEvent": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "disabled": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        },
        "isLast": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "is-last",
            "reflect": false
        },
        "direction": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'vertical' | 'horizontal'",
                "resolved": "\"horizontal\" | \"vertical\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "direction",
            "reflect": false,
            "defaultValue": "'vertical'"
        }
    }; }
    static get states() { return {
        "isOver": {},
        "isTopOver": {},
        "isBottomOver": {}
    }; }
    static get events() { return [{
            "method": "itemDrag",
            "name": "itemDrag",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "itemDrop",
            "name": "itemDrop",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "itemStart",
            "name": "itemStart",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "itemOver",
            "name": "itemOver",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "itemEnter",
            "name": "itemEnter",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "itemEnd",
            "name": "itemEnd",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "itemExit",
            "name": "itemExit",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "itemLeave",
            "name": "itemLeave",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "itemDropTop",
            "name": "itemDropTop",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "itemDropBottom",
            "name": "itemDropBottom",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "itemDropLeft",
            "name": "itemDropLeft",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "itemDropRight",
            "name": "itemDropRight",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
}
