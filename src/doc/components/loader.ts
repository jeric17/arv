export const Loader = {
  name: 'Loader',
  element: 'arv-loader',
  slot: false,
  props: [
    {
      name: 'color',
      type: 'oneOf',
      data: ['default', 'primary', 'secondary'],
      value: 'primary'
    },
    {
      name: 'size',
      type: 'oneOf',
      data: ['xsmall', 'small', 'large'],
      value: 'small'
    }
  ]
};
