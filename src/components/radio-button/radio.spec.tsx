import { Radio } from './radio';
import { createSpec, clsContains, getShadowEl } from '../../utils/testing/utils';

const specComponent = createSpec(Radio);

it('loads', async () => {
  const page = await specComponent(`
    <arv-radio></arv-radio>
  `);

  expect(page.root.shadowRoot).toBeTruthy();
});

it('sets color', async () => {
  const page = await specComponent(`
    <arv-radio color="primary"></arv-radio>
  `);
  expect(clsContains(page, 'primary')).toBeTruthy();
});

it('renders label', async () => {
  const page = await specComponent(`
    <arv-radio label="My Label"></arv-radio>
  `);
  const label = getShadowEl(page, '.label');
  expect(label.textContent).toBe('My Label');
});

it('flex direction', async () => {
  const page = await specComponent(`
    <arv-radio flex-direction="row-reverse"></arv-radio>
  `);
  expect(page.root.style.flexDirection).toBe('row-reverse');
  expect(clsContains(page, 'flex-row-reverse')).toBeTruthy();
});

it('no flex direction should not add flex class', async () => {
  const page = await specComponent(`
    <arv-radio></arv-radio>
  `);
  const clsList = page.root.classList.toString();
  expect(clsList.indexOf('flex')).toBe(-1);
});

it('emit arvChange', async () => {
  const page = await specComponent(`
    <arv-radio></arv-radio>
  `);
  const spy = jest.fn();
  page.root.addEventListener('arvChange', spy);
  page.root.click();
  expect(spy).toHaveBeenCalled();
});

it('set size', async () => {
  const page = await specComponent(`
    <arv-radio size="large"></arv-radio>
  `);
  expect(clsContains(page, 'large')).toBeTruthy();
});