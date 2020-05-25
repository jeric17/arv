import { EventEmitter } from '../../stencil-public-runtime';
import { Color } from '../../interface';
export declare class Stepper {
    /**
     * Array of steps.
     */
    stepperSteps: {
        done: boolean;
        title: string;
    }[];
    /**
     * The current step.
     */
    activeIndex: number;
    /**
     * Color variant to use.
     */
    color: Color;
    /**
     * Steps data
     */
    steps: any;
    /**
     * Will parse again the steps attr on update.
     */
    stepsChange(): void;
    /**
     * Emitted when an step item is clicked.
     */
    arvItemClick: EventEmitter<number>;
    /**
     * Public api to trigger next step.
     */
    next(): Promise<boolean>;
    /**
     * Public api to trigger back.
     */
    back(): Promise<boolean>;
    componentWillLoad(): void;
    /**
     * Handles step item click.
     */
    itemClick: (index: number) => void;
    private cloneSteps;
    /**
     * Converts the steps string to array.
     */
    private init;
    render(): any;
}
