import { Badge } from './badge';
import { createSpec, getShadowEl } from '../../utils/testing/utils';

const specComponent = createSpec(Badge);

it('loads', async () => {
  const page = await specComponent(`
    <arv-badge value="1000000"></arv-badge>
  `);
  const value = getShadowEl(page, '.value');
  expect(value.textContent).toBe('1,000,000');
});

it('hidden', async () => {
  const page = await specComponent(`
    <arv-badge invisible></arv-badge>
  `);
  expect(page.root.classList.contains('arv-invisible')).toBeTruthy();
});

it('disable comma', async () => {
  const page = await specComponent(`
    <arv-badge value="300000" disable-comma></arv-badge>
  `);
  const value = getShadowEl(page, '.value');
  expect(value.textContent).toBe('300000');
});
