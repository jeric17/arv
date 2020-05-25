export const Input = {
  element: 'arv-input',
  slot: false,
  props: [
    {
      name: 'icon',
      type: 'string',
      value: 'edit',
      description: 'Material Icon to add at the left side of the input.'
    },
    {
      name: 'label',
      type: 'string',
      value: 'Username',
      description: 'Text to be put in the label element.'
    },
    {
      name: 'placeholder',
      type: 'string',
      value: 'Username',
      description: 'Input placeholder'
    }, {
      name: 'rows',
      type: 'string',
      value: '',
      description: 'Rows for the textarea. Automatically renders a textarea element.'
    }, {
      name: 'flex-direction',
      type: 'oneOf',
      data: ['row', 'row-reverse', 'column', 'column-reverse'],
      description: 'Layout direction of label and input element.'
    }, {
      name: 'color',
      type: 'color'
    },
    {
      name: 'size',
      type: 'size'
    },
    {
      name: 'full',
      type: 'boolean',
      description: 'Will occupy a full width style.'
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Disables the input element.'
    },
  ]
};
