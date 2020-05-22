export const Header = {
  element: 'arv-header',
  slot: '<arv-flex>Hello World</arv-flex>',
  props: [
    {
      name: 'color',
      type: 'color'
    },
    {
      name: 'position',
      type: 'oneOf',
      data: ['static', 'absolute', 'relative', 'fixed', 'sticky', 'inherit'],
      value: 'static',
      description: 'Position of the header'
    },
    {
      name: 'no-shadow',
      type: 'boolean',
      description: 'Will not add a drop shadow to the header'
    }
  ],
};
