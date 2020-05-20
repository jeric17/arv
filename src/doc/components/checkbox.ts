export const Checkbox = {
  name: 'Checkbox',
  element: 'arv-checkbox',
  slot: false,
  props: [
    {
      name: 'value',
      type: 'boolean',
      value: true,
    },
    {
      name: 'color',
      type: 'oneOf',
      data: ['primary', 'secondary'],
      value: 'primary'
    },
  ]
};
