import { SpecPage } from '@stencil/core/testing';
/**
 * Creates a curry function of newSpecPage.
 * @param component - A component or array of components to specify in newSpecPage.
 */
export declare const createSpec: (component: any) => (html: any) => Promise<SpecPage>;
/**
 * Returns an element from the shadow root
 * @param page - Spec page
 * @param selector - css selector
 */
export declare const getShadowEl: (page: SpecPage, selector: string) => Element;
/**
 * Sets time delay
 * @param t - time delay in millis
 */
export declare const tick: (t?: number) => Promise<unknown>;
/**
 * checks if class name is in the host's class list.
 * @param page - Spec page
 * @param cls - class name
 */
export declare const clsContains: (page: SpecPage, cls: string) => boolean;
