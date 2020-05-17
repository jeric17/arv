import { MenuItem } from './menu-item';
import { createSpec, getShadowEl } from '../../utils/testing/utils';

const specComponent = createSpec(MenuItem);

it('loads', async () => {
  const page = await specComponent(`
    <arv-menu-item></arv-menu-item>
  `);

  expect(page.root.shadowRoot).toBeTruthy();
});

it('should emit arvMenuSelect event with value', async () => {
  const page = await specComponent(`
    <arv-menu-item value="1"></arv-menu-item>
  `);
  const spy = jest.fn();
  page.root.addEventListener('arvMenuSelect', spy);
  page.root.click();
  expect(spy).toHaveBeenCalled();
});
