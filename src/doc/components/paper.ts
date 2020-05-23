export const Paper = {
  element: 'arv-paper',
  slot: '<h1>Paper Content</h1>',
  props: [
    {
      name: 'shadow-level',
      type: 'oneOf',
      data: [0, 1, 2],
      value: 1,
      description: 'Thickness of the drop shadow from 0 to 2.'
    }, {
      name: 'outlined',
      type: 'boolean',
      description: 'Border only, will not add drop shadow.'
    }
  ]
};
