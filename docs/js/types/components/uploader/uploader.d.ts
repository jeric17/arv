import { EventEmitter } from '../../stencil-public-runtime';
export declare class Uploader {
    isDragging: boolean;
    hideUploadButton: boolean;
    placeholder: string;
    uploadText: string;
    uploadTextVariant: string;
    arvFilesChange: EventEmitter<FileList>;
    onDragEnd: (e: DragEvent) => void;
    onDragEnter: (e: DragEvent) => void;
    onDragExit: (e: DragEvent) => void;
    onDragLeave: (e: DragEvent) => void;
    onDragOver: (e: DragEvent) => void;
    onDrop: (e: DragEvent) => void;
    inputChange: (e: any) => void;
    prevent: (e: DragEvent) => void;
    dragging: () => void;
    get uploadButton(): any;
    render(): any;
}
