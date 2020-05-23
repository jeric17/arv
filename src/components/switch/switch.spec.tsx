import { Switch } from './switch';
import { createSpec, getShadowEl, clsContains } from '../../utils/testing/utils';

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

it('disabled state', async () => {
  const page = await specComponent(`
    <arv-switch disabled></arv-switch>
  `);
  const el = getShadowEl(page, '.disabled');
  expect(el).toBeTruthy();
});

it('label', async () => {
  const page = await specComponent(`
    <arv-switch label="My Label"></arv-switch>
  `);
  const el = getShadowEl(page, '.label');
  expect(el.textContent).toBe('My Label');
});

it('flex direction', async () => {
  const page = await specComponent(`
    <arv-switch flex-direction="column"></arv-switch>
  `);
  const { style } = page.root;
  expect(style.flexDirection).toBe('column');
});
