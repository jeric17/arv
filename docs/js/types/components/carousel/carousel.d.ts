import { ImageItem } from './carousel.model';
export declare class Carousel {
    touchX: number;
    imageSource: ImageItem[];
    transitioning: boolean;
    currentIndex: number;
    direction: any;
    externalUrl: string;
    images: any;
    handleImages(): void;
    loading: boolean;
    target: string;
    handleTouchStart(event: TouchEvent): void;
    handleTouchEnd(event: TouchEvent): void;
    componentWillLoad(): void;
    load(): boolean;
    _componentDidLoad(): void;
    clickRight(): void;
    clickLeft(): void;
    render(): any;
}
