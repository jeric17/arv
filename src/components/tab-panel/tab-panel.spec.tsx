import { TabPanel } from './tab-panel';
import { createSpec, clsContains } from '../../utils/testing/utils';

const specComponent = createSpec(TabPanel);

it('loads tab-panel', async () => {
  const page = await specComponent(`
    <arv-tab-panel is-active>
      <div>One</div>
    </arv-tab-panel>
  `);

  expect(page.root.shadowRoot).toBeTruthy();
  expect(clsContains(page, 'isActive')).toBeTruthy();
});
