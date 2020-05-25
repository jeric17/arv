import { EventEmitter } from '../../stencil-public-runtime';
export declare class ImageUpload {
    el: HTMLElement;
    disabled: boolean;
    hashKey: number;
    size: string;
    imgSrc: string;
    uploadImage: (e: any) => void;
    removeImage: () => void;
    arvUploadImage: EventEmitter;
    arvRemoveImage: EventEmitter;
    change(evt: any): void;
    removeItem(): void;
    render(): any;
}
