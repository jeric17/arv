import { Badge } from './badge';
import { createSpec, getShadowEl } from '../../utils/testing/utils';

const specComponent = createSpec(Badge);

it('loads', async () => {
  const page = await specComponent(`
    <arv-badge value="1"></arv-badge>
  `);
  const value = getShadowEl(page, '.value');
  expect(value.textContent).toBe('1');
});

it('sets color', async () => {
  const page = await specComponent(`
    <arv-badge color="primary"></arv-badge>
  `);
  expect(page.root.classList.contains('primary')).toBeTruthy();
});

it('hidden', async () => {
  const page = await specComponent(`
    <arv-badge invisible></arv-badge>
  `);
  expect(page.root.classList.contains('arv-invisible')).toBeTruthy();
});
