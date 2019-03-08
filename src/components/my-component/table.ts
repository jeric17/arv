const data = [
  [1, 'John', 'Doe'],
  [2, 'Jane', 'Doe'],
];
const headers = [
  'FirstName', 'LastName'
];
const controls = [
  {
    icon: 'create',
    fn: () => {},
  }
];

export const Table = {
  name: 'Table',
  element: 'arv-table',
  slot: false,
  props: [
    {
      name: 'table-data',
      type: 'object',
      value: JSON.stringify(data),
    },
    {
      name: 'table-headers',
      type: 'object',
      value: JSON.stringify(headers),
    },
    {
      name: 'controls',
      type: 'object',
      value: JSON.stringify(controls)
    }
  ]
};
