export const Section = {
  name: 'Section',
  element: 'arv-section',
  slot: '<arv-text variant="heading1">Hello World!</arv-text>',
  props: [
    {
      name: 'sectionTitle',
      displayName: 'section-title',
      type: 'string',
      value: 'My Section'
    },
    {
      name: 'icon',
      type: 'string',
      value: 'event'
    },
    {
      name: 'titleColor',
      displayName: 'title-color',
      type: 'oneOf',
      data: ['default', 'primary', 'secondary'],
      value: 'secondary'
    },
    {
      name: 'titleVariant',
      displayName: 'title-variant',
      type: 'oneOf',
      data: ['heading1', 'heading2', 'heading3', 'heading4', 'body1', 'body2', 'caption', 'subtle'],
      value: 'body1'
    },
  ]
};
