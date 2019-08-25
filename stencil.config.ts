import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'arv',
  globalStyle: 'src/globals/app.css',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: {
        swSrc: 'src/sw.js'
      }
    }
  ]
};
