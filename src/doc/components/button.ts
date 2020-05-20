export const Button = {
  name: 'Button',
  element: 'arv-button',
  slot: 'Test Button',
  props: [
    {
      name: 'color',
      type: 'color'
    },
    {
      name: 'disabled',
      type: 'boolean',
      value: 'false',
      description: 'Disabled state of the button.'
    },
    {
      name: 'full',
      type: 'boolean',
      value: 'false',
      description: 'Occupies the available width.'
    },
    {
      name: 'size',
      type: 'size',
    },
    {
      name: 'variant',
      type: 'oneOf',
      data: ['raised', 'ghost'],
      value: 'raised',
      description: 'Button ui variant.'
    }
  ],
};
