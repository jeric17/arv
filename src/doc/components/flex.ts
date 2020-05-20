export const Flex = {
  name: 'Flex',
  element: 'arv-flex',
  slot: `
    <arv-button color="primary">Primary</arv-button>
    <arv-button color="secondary">Secondary</arv-button>
    <arv-button color="danger">Danger</arv-button>
  `,
  props: [{
    name: 'expanded',
    type: 'boolean',
    value: 'true',
    description: 'Occupies 100% of height and width of the parent element.'
  }, {
    name: 'align-items',
    type: 'oneOf',
    value: '',
    data: ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'],
    description: 'Aligns flex items along the cross axis of the current line of the flex container.'
  }, {
    name: 'direction',
    type: 'oneOf',
    value: '',
    data: ['row', 'row-reverse', 'column', 'column-reverse'],
    description: 'Specifies how flex items are placed in the flex container, by setting the direction of the flex container’s main axis.'
  }, {
    name: 'justify',
    type: 'oneOf',
    value: '',
    data: ['center', 'space-between', 'space-around', 'flex-start', 'flex-end'],
    description: 'Aligns flex items along the main axis of the current line of the flex container.'
  }, {
    name: 'wrap',
    type: 'oneOf',
    data: ['wrap', 'no-wrap', 'wrap-reverse'],
    value: '',
    description: 'Controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.'
  }]
};
