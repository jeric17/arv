import { Checkbox } from './checkbox';
import { createSpec, clsContains, getShadowEl } from '../../utils/testing/utils';

const specComponent = createSpec(Checkbox);

it('loads', async () => {
  const page = await specComponent(`
    <arv-checkbox></arv-checkbox>
  `);

  expect(page.root.shadowRoot).toBeTruthy();
});

it('sets color', async () => {
  const page = await specComponent(`
    <arv-checkbox color="primary"></arv-checkbox>
  `);
  const input = getShadowEl(page, 'input');
  expect(input.classList.contains('primary')).toBeTruthy();
});

it('renders label', async () => {
  const page = await specComponent(`
    <arv-checkbox label="My Label"></arv-checkbox>
  `);
  const label = getShadowEl(page, '.label');
  expect(label.textContent).toBe('My Label');
});

it('flex direction', async () => {
  const page = await specComponent(`
    <arv-checkbox flex-direction="row-reverse"></arv-checkbox>
  `);
  expect(page.root.style.flexDirection).toBe('row-reverse');
  expect(clsContains(page, 'flex-row-reverse')).toBeTruthy();
});

it('no flex direction should not add flex class', async () => {
  const page = await specComponent(`
    <arv-checkbox></arv-checkbox>
  `);
  const clsList = page.root.classList.toString();
  expect(clsList.indexOf('flex')).toBe(-1);
});
