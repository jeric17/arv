export const Snackbar = {
    element: 'arv-snackbar',
    containerContent: `
    <arv-button color="warning">Open Snackbar</arv-button>
  `,
    onLoad: (el) => {
        const button = el.querySelector('arv-button');
        const snackbar = el.querySelector('arv-snackbar');
        button.addEventListener('click', () => {
            snackbar.open();
        });
    },
    slot: `
    <arv-spacer vertical></arv-spacer>
    <span>Slot content</span>
  `,
    props: [{
            name: 'icon',
            type: 'string',
            value: 'check',
            description: 'Icon of the snackbar.'
        }, {
            name: 'message',
            type: 'string',
            value: 'Hello World!',
            description: 'Snackbar text content.'
        }, {
            name: 'duration',
            type: 'string',
            value: 3000,
            description: 'duration in millis to show the snackbar.'
        }, {
            name: 'color',
            type: 'color'
        }, {
            name: 'x-position',
            type: 'oneOf',
            data: ['left', 'right', 'center'],
            description: 'horizontal position of the snackbar.'
        }, {
            name: 'y-position',
            type: 'oneOf',
            data: ['top', 'bottom', 'center'],
            description: 'vertical position of the snackbar.'
        }, {
            name: 'hide-close',
            type: 'boolean',
            description: 'Will hide the close button.'
        }]
};
