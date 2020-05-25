import { EventEmitter } from '../../stencil-public-runtime';
export declare class Paginator {
    color: string;
    currentPage: number;
    itemsPerPage: number;
    select: (index: number) => void;
    totalItems: number;
    arvChange: EventEmitter;
    onNext(): void;
    onPrev(): void;
    numberLoop(max: any, x: any, i?: number, arr?: any[]): any;
    onPageClick(d: any): void;
    render(): any;
}
