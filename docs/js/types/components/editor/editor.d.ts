import { EventEmitter } from '../../stencil-public-runtime';
export declare class Editor {
    el: HTMLElement;
    disabled: boolean;
    disabledTools: string[];
    handleImage: (editor: any) => void;
    editorOnBlur: EventEmitter;
    setValue(value: string): Promise<void>;
    getValue(): Promise<string>;
    blur: () => void;
    formatBlock(block: string): void;
    imageGet(): void;
    getImage(): void;
    showLink(): void;
    size(s: any): void;
    comm(c: any, v?: any): void;
    render(): any;
}
