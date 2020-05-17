import { Divider } from './divider';
import { createSpec, clsContains } from '../../utils/testing/utils';

const specComponent = createSpec(Divider);

it('loads', async () => {
  const page = await specComponent(`
    <arv-divider></arv-divider>
  `);
  expect(page.root.shadowRoot).toBeTruthy();
});

it('handle vertical style', async () => {
  const page = await specComponent(`
    <arv-divider is-vertical></arv-divider>
  `);
  expect(clsContains(page, 'arv-vertical')).toBeTruthy();
});
