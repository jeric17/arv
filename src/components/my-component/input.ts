export const Input = {
  name: 'Input',
  element: 'arv-input',
  slot: false,
  events: [
    {
      name: 'onInput',
      description: 'Fires the input event'
    },
    {
      name: 'onBlur',
      description: 'Fires the blur event'
    },
    {
      name: 'onFocus',
      description: 'Fires the focus event'
    },
    {
      name: 'onInputChange',
      description: 'Fires the change event'
    },
    {
      name: 'onInputEnter',
      description: 'Fires on keydown enter'
    },
  ],
  props: [
    {
      name: 'icon',
      type: 'string',
      value: 'edit'
    },
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
      name: 'size',
      type: 'oneOf',
      data: ['medium', 'large'],
      value: 'medium'
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
