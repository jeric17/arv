import { Input } from './input';
import { createSpec, getShadowEl, clsContains } from '../../utils/testing/utils';

const specComponent = createSpec(Input);

it('loads', async () => {
  const page = await specComponent(`
    <arv-input></arv-input>
  `);
  expect(page.root.shadowRoot).toBeTruthy();
});

it('sets the input type', async () => {
  const page = await specComponent(`
    <arv-input type="email"></arv-input>
  `);
  const inputEl = getShadowEl(page, 'input');
  expect(inputEl.getAttribute('type')).toBe('email');
});

it('sets the label', async () => {
  const page = await specComponent(`
    <arv-input label="My Label"></arv-input>
  `);
  const label = getShadowEl(page, '.label');
  expect(label.textContent).toBe('My Label');
});

it('sets the color', async () => {
  const page = await specComponent(`
    <arv-input color="primary"></arv-input>
  `);
  expect(clsContains(page, 'primary')).toBeTruthy();
});

it('sets the size', async () => {
  const page = await specComponent(`
    <arv-input size="large"></arv-input>
  `);
  expect(clsContains(page, 'large')).toBeTruthy();
});

it('sets the icon', async () => {
  const page = await specComponent(`
    <arv-input icon="clear"></arv-input>
  `);

  const icon = getShadowEl(page, 'arv-icon');
  expect(icon).toBeTruthy();
});

it('on change', async () => {
  const page = await specComponent(`
    <arv-input icon="clear"></arv-input>
  `);
  const inputEl: any = getShadowEl(page, 'input');
  const spy = jest.fn();
  page.root.addEventListener('arvChange', spy);
  inputEl.value = 'foo';
  await inputEl.dispatchEvent(new Event('input'))
  await page.waitForChanges();
  expect(spy).toHaveBeenCalled();
  const callItem = spy.mock.calls.pop()[0].detail;
  expect(callItem).toBe('foo');
});

it('on blur', async () => {
  const page = await specComponent(`
    <arv-input icon="clear"></arv-input>
  `);
  const inputEl: any = getShadowEl(page, 'input');
  const spy = jest.fn();
  page.root.addEventListener('arvBlur', spy);
  await inputEl.dispatchEvent(new Event('blur'));
  expect(spy).toHaveBeenCalled();
});

it('on keydown', async () => {
  const page = await specComponent(`
    <arv-input icon="clear"></arv-input>
  `);
  const inputEl: any = getShadowEl(page, 'input');
  const spy = jest.fn();
  page.root.addEventListener('arvKeydown', spy);
  await inputEl.dispatchEvent(new Event('keydown'));
  expect(spy).toHaveBeenCalled();
});

it('on focus', async () => {
  const page = await specComponent(`
    <arv-input icon="clear"></arv-input>
  `);
  const inputEl: any = getShadowEl(page, 'input');
  const spy = jest.fn();
  page.root.addEventListener('arvFocus', spy);
  await inputEl.dispatchEvent(new Event('focus'));
  expect(spy).toHaveBeenCalled();
});
