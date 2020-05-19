import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'arv',
  globalStyle: 'src/globals/app.css',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
