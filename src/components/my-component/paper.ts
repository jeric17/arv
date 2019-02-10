export const Paper = {
  name: 'Paper',
  element: 'arv-paper',
  slot: 'Hello World!',
  props: [
    {
      name: 'height',
      type: 'string',
      value: ''
    },
    {
      name: 'width',
      type: 'string',
      value: ''
    },
    {
      name: 'padded',
      type: 'boolean',
      value: 'true'
    },
    {
      name: 'transparent',
      type: 'boolean',
      value: 'false'
    },
    {
      name: 'weight',
      type: 'oneOf',
      data: [0, 1, 2],
      value: '1'
    }
  ]
};
