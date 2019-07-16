export const Input = {
  name: 'Input',
  element: 'arv-input',
  slot: false,
  propsDescription: [
    {
      name: 'input',
      description: 'Fires the input event'
    },
    {
      name: 'inputBlur',
      description: 'Fires the blur event'
    },
    {
      name: 'inputFocus',
      description: 'Fires the focus event'
    },
    {
      name: 'inputChange',
      description: 'Fires the change event'
    },
    {
      name: 'inputEnter',
      description: 'Fires on keydown enter'
    },
  ],
  events: [
    {
      name: 'arvInput',
      description: 'Fires the input event'
    },
    {
      name: 'arvBlur',
      description: 'Fires the blur event'
    },
    {
      name: 'arvFocus',
      description: 'Fires the focus event'
    },
    {
      name: 'arvInputChange',
      description: 'Fires the change event'
    },
    {
      name: 'arvInputEnter',
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
