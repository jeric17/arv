export const Snackbar = {
  element: 'arv-snackbar',
  containerContent: `
    <arv-button color="warning">Open Snackbar</arv-button>
  `,
  onLoad: (el: HTMLElement) => {
    const button = el.querySelector('arv-button');
    const snackbar = el.querySelector('arv-snackbar');

    button.addEventListener('click', () => {
      snackbar.open();
    });
  },
  props: [{
    name: 'message',
    type: 'string',
    value: 'Hello World!',
    description: 'Snackbar text content'
  }, {
    name: 'duration',
    type: 'string',
    value: 3000,
    description: 'duration in millis to show the snackbar'
  }, {
    name: 'color',
    type: 'color'
  }, {
    name: 'x-position',
    type: 'oneOf',
    data: ['left', 'right', 'center']
  }, {
    name: 'y-position',
    type: 'oneOf',
    data: ['top', 'bottom', 'center']
  }]
};
