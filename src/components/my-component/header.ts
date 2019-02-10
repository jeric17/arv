export const Header = {
  name: 'Header',
  element: 'arv-header',
  slot: '<arv-flex padded>Hello World</arv-flex>',
  props: [
    {
      name: 'color',
      type: 'oneOf',
      data: ['default', 'primary', 'secondary', 'inherit'],
      value: 'primary'
    },
    {
      name: 'position',
      type: 'oneOf',
      data: ['static', 'absolute', 'relative', 'fixed', 'inherit'],
      value: 'static'
    },
    {
      name: 'shadow',
      type: 'boolean',
      value: 'false'
    }
  ],
};
