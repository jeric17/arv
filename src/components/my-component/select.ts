export const Select = {
  name: 'Select',
  element: 'arv-select',
  slot: '<arv-select-option>Option 1</arv-select-option><arv-select-option>Option 1</arv-select-option><arv-select-option>Option 1</arv-select-option><arv-select-option>Option 1</arv-select-option><arv-select-option>Option 1</arv-select-option><arv-select-option>Option 1</arv-select-option><arv-select-option>Option 1</arv-select-option><arv-select-option>Option 1</arv-select-option>',
  description: [
    'Use the <arv-select-option> component for the options',
  ],
  wrapper: '<arv-container id="selectWrapper" width="400px"></arv-container>',
  events: [
    {
      name: 'selectChange',
      type: 'function',
      description: 'Fires an event when an option is selected. Data is available in the detail field of the CustomEvent'
    },

    {
      name: 'arvInput',
      type: 'function',
      description: 'Fires if the input from the select component emits an input event'
    }
  ],
  eventsData: [
    {
      name: 'arvSelectChange',
      fn: (evt) => {
        if (evt.detail === null) {
          return false;
        }
        // comp.value = comp.value.concat(evt.detail);
      }
    },
    {
      name: 'arvRemoveItem',
      fn: params => console.log(params.detail)
    }
  ],
  propsDescription: [
    {
      name: 'icon',
      type: 'string',
      description: 'Use the material icons from https://material.io/tools/icons'
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
      name: 'arvInputChange',
      type: 'function',
      description: 'Fires if the input from the select component emits a change event'
    }
  ],
  props: [
    {
      name: 'removeItem',
      type: 'function',
      value: i => console.log(i)
    },
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
      value: 'false'
    },
    {
      name: 'full',
      type: 'boolean',
      value: 'true'
    },
    {
      name: 'layout',
      type: 'oneOf',
      data: ['row', 'column'],
      value: 'column'
    },
    {
      name: 'label',
      type: 'string',
      value: 'Label'
    },
    {
      name: 'multiple',
      type: 'boolean',
      value: 'false'
    },
    {
      name: 'position',
      type: 'oneOf',
      data: ['top', 'bottom'],
      value: 'bottom'
    },
  ]
};
