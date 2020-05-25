export const Switch = {
    element: 'arv-switch',
    slot: false,
    props: [
        {
            name: 'label',
            type: 'string',
            description: 'Label of the input radio element.',
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
            type: 'size',
        },
        {
            name: 'disabled',
            type: 'boolean',
            description: 'Disabled state'
        }
    ]
};
