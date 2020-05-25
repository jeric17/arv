import { EventEmitter } from '../../stencil-public-runtime';
export declare class MultipleInput {
    el: HTMLElement;
    add: (e: any) => void;
    inputChange: (e: any) => void;
    inputEnter: (e: any) => void;
    removeValue: (e: any) => void;
    update: (e: any) => void;
    disabled: boolean;
    values: string[];
    placeholder: string;
    arvAdd: EventEmitter;
    arvUpdate: EventEmitter;
    arvInputChange: EventEmitter;
    arvInputEnter: EventEmitter;
    arvRemove: EventEmitter;
    triggerUpdate(data: any): void;
    change(index: any, event: any): void;
    enter(index: any, event: any): void;
    addItem(event: any): void;
    removeItem(index: any): void;
    render(): any;
}
