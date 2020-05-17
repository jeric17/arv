import { Switch } from './switch';
import { createSpec, getShadowEl } from '../../utils/testing/utils';

const specComponent = createSpec(Switch);

it('loads', async () => {
  const page = await specComponent(`
    <arv-switch></arv-switch>
  `);
  expect(page.root.shadowRoot).toBeTruthy();
});

it('set the color', async () => {
  const page = await specComponent(`
    <arv-switch color="secondary"></arv-switch>
  `);

  const switchEl = getShadowEl(page, '.root');
  expect(switchEl.classList.contains('secondary')).toBeTruthy();
});

it('handle click', async () => {
  const page = await specComponent(`
    <arv-switch color="secondary"></arv-switch>
  `);
  const switchEl: any = getShadowEl(page, '.root');
  switchEl.click();
  await page.waitForChanges();
  expect(page.root.value).toBeTruthy();
});