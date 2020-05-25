export const Select = {
    element: 'arv-select',
    slot: `
    <arv-menu-item>
      <span slot="value">Menu Item 1</span>
    </arv-menu-item>
    <arv-menu-item>
      <span slot="value">Menu Item 2</span>
    </arv-menu-item>
    <arv-menu-item hide-value>
      <span slot="value">Menu Item 3</span>
    </arv-menu-item>
  `,
    props: [{
            name: 'label',
            type: 'string',
            description: 'Label of the input select component.',
            value: 'Label'
        }, {
            name: 'value',
            type: 'string',
            value: 'My Value',
            description: 'Explicitly set the value of the select element.'
        }, {
            name: 'flex-direction',
            type: 'oneOf',
            data: ['row', 'row-reverse', 'column', 'column-reverse'],
            description: 'Layout direction of label and select element.'
        }, {
            name: 'color',
            type: 'color'
        }, {
            name: 'size',
            type: 'size'
        }, {
            name: 'full',
            type: 'boolean',
            description: 'Occupies a full width select element.'
        }, {
            name: 'disabled',
            type: 'boolean',
            description: 'Disabled state of the element.'
        }]
};
