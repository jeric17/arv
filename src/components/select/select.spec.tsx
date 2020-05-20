import { Select } from './select';
import { createSpec, getShadowEl, tick } from '../../utils/testing/utils';

const specComponent = createSpec(Select);

it('loads the component', async () => {
  const page = await specComponent(`
    <arv-select></arv-select>
  `);

  expect(page.root.shadowRoot).toBeTruthy();
});

it('select element click will show content', async () => {
  const page = await specComponent(`
    <arv-select></arv-select>
  `);
  const selectEl: any = getShadowEl(page, '.select');
  selectEl.click();
  await page.waitForChanges();
  expect(page.root.classList.contains('isOpen')).toBeTruthy();
});

it('menu item click will hide the content', async () => {
  const page = await specComponent(`
    <arv-select></arv-select>
  `);
  const selectEl: any = getShadowEl(page, '.select');
  selectEl.click();
  await page.waitForChanges();
  page.root.dispatchEvent(new CustomEvent('arvMenuSelect'));
  await tick(300);
  await page.waitForChanges();
  expect(page.root.classList.contains('isOpen')).toBeFalsy();
});

it('display label', async () => {
  const page = await specComponent(`
    <arv-select label="My Label"></arv-select>
  `);
  const label = getShadowEl(page, 'label');
  expect(label.textContent).toBe('My Label');
});

it('display value', async () => {
  const page = await specComponent(`
    <arv-select value="Value"></arv-select>
  `);
  const value = getShadowEl(page, '.value');
  expect(value.textContent).toBe('Value');
});

it('apply color variant', async () => {
  const page = await specComponent(`
    <arv-select color="primary"></arv-select>
  `);
  expect(page.root.classList.contains('primary')).toBeTruthy();
});

it('flex style to use', async () => {
  const page = await specComponent(`
    <arv-select flex-direction="column"></arv-select>
  `);
  const s = page.root.style.flexDirection;
  expect(s).toBe('column');
});

it('dispatch arvSelectChange event', async () => {
  const page = await specComponent(`
    <arv-select>
      <arv-menu-item></arv-menu-item>
    </arv-select>
  `);
  const menuItem = page.root.querySelector('arv-menu-item');
  const selectSpy = jest.fn();
  page.win.addEventListener('arvSelectChange', selectSpy);
  const d = {
    detail: 'selected value',
    composed: true,
    bubbles: true
  };
  const evt = new CustomEvent('arvMenuSelect', d);
  menuItem.dispatchEvent(evt);
  await tick(300);
  expect(selectSpy).toHaveBeenCalled();
});

it('label min-width', async () => {
  const page = await specComponent(`
    <arv-select label-width="300px">
      <arv-menu-item></arv-menu-item>
    </arv-select>
  `);
  const label: any = getShadowEl(page, 'label');
  expect(label.style.minWidth).toBe('300px');
  expect(label.style.width).toBe('300px');
});