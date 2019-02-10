export const Input = {
  name: 'Input',
  element: 'arv-input',
  slot: false,
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
    {
      name: 'rows',
      type: 'string',
      value: 0
    },
    {
      name: 'has-error',
      type: 'boolean',
      value: 'false'
    },
    {
      name: 'required',
      type: 'boolean',
      value: 'false'
    },
    {
      name: 'disabled',
      type: 'boolean',
      value: 'false'
    },
  ]
};
