import { Icon } from './icon';
import { createSpec, getShadowEl } from '../../utils/testing/utils';

const specComponent = createSpec(Icon);

it('loads the components', async () => {
  const page = await specComponent(`
    <arv-icon></arv-icon>
  `);

  expect(page.root.shadowRoot).toBeTruthy();
});

it('set color', async () => {
  const page = await specComponent(`
    <arv-icon color="primary"></arv-icon>
  `);
  expect(getShadowEl(page, 'span').classList.contains('primary')).toBeTruthy();
});

it('set size', async () => {
  const page = await specComponent(`
    <arv-icon size="large"></arv-icon>
  `);
  expect(getShadowEl(page, 'span').classList.contains('large')).toBeTruthy();
});

it('sets the icon', async () => {
  const page = await specComponent(`
    <arv-icon icon="home"></arv-icon>
  `);
  expect(getShadowEl(page, 'span').textContent).toBe('home');
});
