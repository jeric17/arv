export const Dialog = {
  name: 'Dialog',
  element: 'arv-dialog',
  slot: '<arv-container width="400px" height="200px"><arv-text>Hello World!</arv-text></arv-container>',
  props: [
    {
      name: 'show',
      type: 'boolean',
      value: 'true'
    },
    {
      name: 'scrollable',
      type: 'boolean',
      value: 'true'
    },
    {
      name: 'dialog-title',
      type: 'string',
      value: 'Title'
    }
  ],
};
