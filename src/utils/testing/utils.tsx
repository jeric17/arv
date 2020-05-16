import { newSpecPage, SpecPage } from '@stencil/core/testing';

export const createSpec = component => html => {
  const components = Array.isArray(component) ? component : [component];
  return newSpecPage({
    components,
    html,
  });
}

export const getShadowEl = (page: SpecPage, selector: string) => page.root.shadowRoot.querySelector(selector);

export const tick = (t = 100) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, t);
  });
}
