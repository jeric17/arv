export const Tabs = {
  name: 'Tabs',
  element: 'arv-tabs',
  slot: `
    <arv-tab-panel>
      <h2>Item 1</h2>
    </arv-tab-panel>
    <arv-tab-panel>
      <h2>Item 2</h2>
    </arv-tab-panel>
    <arv-tab-panel>
      <h2>Item 3</h2>
    </arv-tab-panel>
  `,
  props: [
    {
      name: 'tab-names',
      type: 'string',
      value: JSON.stringify([{ "icon": "favorite", "name": "One" }, { "icon": "explore", "name": "Two" }, { "icon": "stars", "name": "Three" }])
    },
    {
      name: 'color',
      type: 'color'
    },
    {
      name: 'tab-alignment',
      type: 'oneOf',
      data: ['right', 'center', 'left']
    }
  ]
};
