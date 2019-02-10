export const Icon = {
  name: 'Icon',
  element: 'arv-icon',
  slot: false,
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
