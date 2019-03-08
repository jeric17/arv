export const Icon = {
  name: 'Icon',
  element: 'arv-icon',
  slot: false,
  description: [
    'Renders a material icon from https://material.io/tools/icons/?style=baseline'
  ],
  props: [
    {
      name: 'icon',
      type: 'string',
      value: 'event'
    },
    {
      name: 'size',
      type: 'oneOf',
      data: ['small', 'medium', 'large', 'xlarge', 'xxlarge'],
      value: 'large'
    }
  ]
};
