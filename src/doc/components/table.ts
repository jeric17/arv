const data = [
  [1, 'John', 'The quick brown,fox jumps over,the lazy dog'.split(',')],
  [2, 'Jane', 'Doe'],
];
const headers = [
  'FirstName', 'LastName'
];

export const Table = {
  name: 'Table',
  element: 'arv-table',
  slot: `
    <arv-flex align-items="center" style="padding: 0.5em" slot="header">
      <arv-icon icon="favorite"></arv-icon>
      <arv-spacer vertical></arv-spacer>
      <span>Header from slot</span>
    </arv-flex>
    <span style="padding: 0.5em" slot="footer">
      Footer from slot
    </span>
  `,
  onLoad: (el: HTMLElement) => {
    const tableEl = el.querySelector('arv-table');
    tableEl.controls = [
      {
        icon: 'create',
        fn: data => alert(JSON.stringify(data)),
      }
    ];
  },
  props: [
    {
      name: 'table-title',
      type: 'string',
      value: '',
      description: 'Title of the table'
    },
    {
      name: 'table-data',
      type: 'string',
      value: JSON.stringify(data),
      description: 'table data, the first element of the child array is not visible, serves as a placeholder for the ID'
    },
    {
      name: 'table-headers',
      type: 'string',
      value: JSON.stringify(headers),
      description: 'Table header'
    },
    {
      name: 'controls',
      type: 'code',
      description: 'Adds button controls to the right side of the table row.',
      data: `
const tableEl = document.querySelector('arv-table');
tableEl.controls = [
  {
    icon: 'create',
    fn: data => alert(JSON.stringify(data)),
  }
];
      `
    },
    {
      name: 'color',
      type: 'color'
    }
  ]
};
