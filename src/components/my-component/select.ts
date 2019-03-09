export const Select = {
  name: 'Select',
  element: 'arv-select',
  slot: '<arv-select-option>Option 1</arv-select-option>',
  description: [
    'Use the <arv-select-option> component for the options',
  ],
  events: [
    {
      name: 'selectChange',
      type: 'function',
      description: 'Fires an event when an option is selected. Data is available in the detail field of the CustomEvent'
    },

    {
      name: 'onInput',
      type: 'function',
      description: 'Fires if the input from the select component emits an input event'
    }
  ],
  eventsData: [
    {
      name: 'selectChange',
      fn: params => alert(params)
    }
  ],
  propsDescription: [
    {
      name: 'icon',
      type: 'string',
      description: 'Visible only if the variant is set to input. Use the material icons from https://material.io/tools/icons'
    },
    {
      name: 'toggle',
      type: 'function',
      description: 'Explicitly toggle the dropdown'
    },
    {
      name: 'variant',
      type: 'string',
      description: 'values can be "select" or "input". Input variant allows the user to input a character'
    },
    {
      name: 'inputChange',
      type: 'function',
      description: 'Fires if the input from the select component emits a change event'
    }
  ],
  props: [
    {
      name: 'value',
      type: 'string',
      value: 'Option 1'
    },
    {
      name: 'icon',
      type: 'string',
      value: 'search'
    },
    {
      name: 'variant',
      type: 'oneOf',
      data: ['select', 'input'],
      value: 'select'
    },
    {
      name: 'loading',
      type: 'boolean',
      value: false
    },
    {
      name: 'full',
      type: 'boolean',
      value: false
    },
    {
      name: 'layout',
      type: 'oneOf',
      data: ['row', 'column'],
      value: 'row'
    },
    {
      name: 'label',
      type: 'string',
      value: 'Label'
    }
  ]
};
