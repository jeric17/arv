export const Container = {
    name: 'Container',
    element: 'arv-container',
    slot: 'Hello World!',
    props: [
        {
            name: 'color',
            type: 'oneOf',
            data: ['default', 'primary', 'secondary', 'warning'],
            value: 'primary'
        },
        {
            name: 'height',
            type: 'string',
            value: '100px'
        },
        {
            name: 'width',
            type: 'string',
            value: '100px'
        },
        {
            name: 'margin',
            type: 'string',
            value: ''
        },
        {
            name: 'padding',
            type: 'string',
            value: ''
        },
        {
            name: 'scrollable',
            type: 'boolean',
            value: false
        },
        {
            name: 'hidden',
            type: 'boolean',
            value: false
        },
    ]
};
