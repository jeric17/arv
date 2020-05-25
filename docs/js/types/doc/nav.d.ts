import { EventEmitter } from '../stencil-public-runtime';
export declare class DocNav {
    items: string[];
    selectedItem: string;
    docSelectComponent: EventEmitter<string>;
    click: (itemName: string) => void;
    render(): any;
}
