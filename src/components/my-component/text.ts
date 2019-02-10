export const Text = {
  name: 'Text',
  element: 'arv-text',
  slot: 'Hello World!',
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
      data: ['default', 'primary', 'primary-dark', 'secondary', 'secondary-dark', 'light', 'dark'],
      value: 'default'
    },
    {
      name: 'strong',
      type: 'boolean',
      value: 'false'
    },
  ]
};
