export const Editor = {
  name: 'Editor',
  element: 'arv-editor',
  slot: false,
  events: [
    {
      name: 'editorOnBLur',
      description: 'fires the blur event. this is where you handle editor changes'
    }
  ],
  propsDescription: [
    {
      name: 'getValue',
      type: 'function',
      description: 'returns the value of the editor'
    },
    {
      name: 'setValue',
      type: 'function',
      description: 'sets the value of the editor'
    },
    {
      name: 'handleImage',
      type: 'function',
      description: 'Used if you have an alternate image uploader aside from the built in image handler'
    }
  ],
  props: [
    {
      name: 'disabled',
      type: 'boolean',
      value: false
    }
  ]
};
