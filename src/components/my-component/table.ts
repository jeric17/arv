const data = [
  [1, 'John', ['Doe', 'Strange']],
  [2, 'Jane', 'Doe'],
];
const headers = [
  'FirstName', 'LastName'
];
const controls = [
  {
    icon: 'create',
    fn: data => alert(JSON.stringify(data)),
  }
];

export const Table = {
  name: 'Table',
  element: 'arv-table',
  slot: false,
  propsDescription: [
    {
      name: 'table-title',
      type: 'string',
      description: 'Title of the table'
    },
    {
      name: 'title-variant',
      type: 'string',
      description: 'Text variant of the title'
    },
    {
      name: 'table-headers',
      type: 'string[]',
      description: 'Table headers'
    },
    {
      name: 'table-data',
      type: 'string[][]',
      description: 'table data, the first element of the child array is not visible, serves as a placeholder for the ID'
    },
    {
      name: 'controls',
      type: 'TableControl[]',
      description: 'TableControl - composed of icon and fn fields. E.g. [{ icon: "create", fn: data => alert(data) }]'
    },
  ],
  props: [
    // {
    //   name: 'multiSelectable',
    //   displayName: 'multi-selectable',
    //   type: 'boolean',
    //   value: false
    // },
    {
      name: 'tableTitle',
      displayName: 'table-title',
      type: 'string',
      value: ''
    },
    {
      name: 'titleVariant',
      displayName: 'title-variant',
      type: 'oneOf',
      data: ['heading1', 'heading2', 'heading3', 'heading4', 'body1', 'body2', 'caption', 'subtle'],
      value: 'body1'
    },
    {
      name: 'tableData',
      displayName: 'table-data',
      type: 'string',
      value: JSON.stringify(data),
    },
    {
      name: 'tableHeaders',
      displayName: 'table-headers',
      type: 'string',
      value: JSON.stringify(headers),
    },
    {
      name: 'controls',
      type: 'object2',
      value: controls,
      displayValue: `{icon:'create',fn:data---alert(JSON.stringify(data))}`
    }
  ]
};
