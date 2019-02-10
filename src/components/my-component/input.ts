export const Input = {
  name: 'Input',
  element: 'arv-input',
  props: [
    {
      name: 'label',
      type: 'string',
      value: 'Username'
    },
    {
      name: 'placeholder',
      type: 'string',
      value: 'Username'
    },
    {
      name: 'layout',
      type: 'oneOf',
      data: ['row', 'column'],
      value: 'row'
    },
    {
      name: 'full',
      type: 'boolean',
      value: 'false'
    },
  ]
};
