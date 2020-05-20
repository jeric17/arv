export const Radio = {
  name: 'Radio',
  element: 'arv-radio-button',
  slot: false,
  props: [
    {
      name: 'value',
      type: 'boolean',
      value: 'true',
    },
    {
      name: 'disabled',
      type: 'boolean',
      value: 'false',
    },
    {
      name: 'label',
      type: 'string',
      value: '',
    },
    {
      name: 'text-variant',
      type: 'string',
      value: '',
    },
    {
      name: 'color',
      type: 'oneOf',
      data: ['primary', 'secondary', 'error', 'success'],
      value: 'primary'
    },
    {
      name: 'size',
      type: 'oneOf',
      data: ['normal', 'large'],
      value: 'normal'
    },
  ]
};
