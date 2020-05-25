import { EventEmitter } from '../stencil-public-runtime';
export declare class DocControl {
    colors: string[];
    settings: any;
    docSettingsChange: EventEmitter<any>;
    generateField: (item: any, index: number) => any[];
    render(): any;
    private dataChange;
}
