export const Text = {
  name: 'Text',
  element: 'arv-text',
  slot: 'Hello World!',
  cssVariables: [
    {
      name: '--font-size',
      description: 'Font size of the text'
    },
    {
      name: '--font-family',
      description: 'font family of the text'
    },
    {
      name: '--font-weight',
      description: 'font weight of the text'
    },
    {
      name: '--line-height',
      description: 'Line height of the text'
    },
    {
      name: '--dark-text-color',
      description: 'The default color of the text. Does not work if variant is subtle. Does not work if color is specified'
    },
    {
      name: '--light-text-color',
      description: 'The color used if the variant is subtle. Does not work if color is specified'
    },
    {
      name: '--primary-color',
      description: 'The color used if color is primary.'
    },
    {
      name: '--primary-dark-color',
      description: 'The color used if color is primary-dark.'
    },
    {
      name: '--secondary-color',
      description: 'The color used if color is secondary'
    },
    {
      name: '--secondary-dark-color',
      description: 'The color used if color is secondary-dark'
    },
    {
      name: '--warning-color',
      description: 'The color used if color is warning.'
    },
    {
      name: '--error-color',
      description: 'The color used if color is error.'
    },
    {
      name: '--success-color',
      description: 'The color used if color is success.'
    },
  ],
  props: [
    {
      name: 'variant',
      type: 'oneOf',
      data: ['heading1', 'heading2', 'heading3', 'heading4', 'body1', 'body2', 'caption', 'subtle'],
      value: 'body1'
    },
    {
      name: 'weight',
      type: 'string',
      value: ''
    },
    {
      name: 'color',
      type: 'oneOf',
      data: ['default', 'primary', 'primary-dark', 'secondary', 'secondary-dark', 'light', 'dark', 'success', 'error', 'warning'],
      value: 'default'
    },
    {
      name: 'strong',
      type: 'boolean',
      value: 'false'
    },
    {
      name: 'strike',
      type: 'boolean',
      value: 'false'
    },
    {
      name: 'noWrap',
      displayName: 'no-wrap',
      type: 'boolean',
      value: 'false'
    },
    {
      name: 'preWrap',
      displayName: 'pre-wrap',
      type: 'boolean',
      value: 'false'
    },
    {
      name: 'textShadow',
      displayName: 'text-shadow',
      type: 'boolean',
      value: 'false'
    },
  ]
};
