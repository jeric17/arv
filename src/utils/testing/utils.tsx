import { newSpecPage, SpecPage } from '@stencil/core/testing';

/**
 * Creates a curry function of newSpecPage.
 * @param component - A component or array of components to specify in newSpecPage.
 */
export const createSpec = component => html => {
  const components = Array.isArray(component) ? component : [component];
  return newSpecPage({
    components,
    html,
  });
}

/**
 * Returns an element from the shadow root
 * @param page - Spec page
 * @param selector - css selector
 */
export const getShadowEl = (page: SpecPage, selector: string) => page.root.shadowRoot.querySelector(selector);

/**
 * Sets time delay
 * @param t - time delay in millis
 */
export const tick = (t = 100) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, t);
  });
}

/**
 * checks if class name is in the host's class list.
 * @param page - Spec page
 * @param cls - class name
 */
export const clsContains = (page: SpecPage, cls: string) => {
  return page.root.classList.contains(cls);
}
