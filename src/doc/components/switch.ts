export const Switch = {
  name: 'Switch',
  element: 'arv-switch',
  slot: false,
  props: [
    {
      name: 'color',
      type: 'oneOf',
      data: ['default', 'primary', 'secondary'],
      value: 'primary'
    },
    {
      name: 'value',
      type: 'boolean',
      value: 'true'
    }
  ]
};
