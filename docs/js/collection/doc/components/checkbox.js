export const Checkbox = {
    element: 'arv-checkbox',
    slot: false,
    props: [
        {
            name: 'label',
            type: 'string',
            description: 'Label of the checkbox',
            value: 'Label'
        }, {
            name: 'flex-direction',
            type: 'oneOf',
            data: ['row', 'row-reverse', 'column', 'column-reverse'],
            description: 'Layout direction of label and select element.'
        },
        {
            name: 'color',
            type: 'color'
        },
        {
            name: 'size',
            type: 'size'
        },
        {
            name: 'disabled',
            type: 'boolean',
            description: 'Disabled state of the element.'
        }
    ]
};
