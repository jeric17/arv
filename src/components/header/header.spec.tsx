import { Header } from './Header';
import { createSpec, clsContains } from '../../utils/testing/utils';

const specComponent = createSpec(Header);

it('render the component', async () => {
  const page = await specComponent(`
    <arv-header>Header</arv-header>
  `);

  expect(page.root.shadowRoot).toBeTruthy();
});

it('set the color', async () => {
  const page = await specComponent(`
    <arv-header color="secondary">Header</arv-header>
  `);
  expect(clsContains(page, 'secondary')).toBeTruthy();
});

it('set the position', async () => {
  const page = await specComponent(`
    <arv-header position="absolute">Header</arv-header>
  `);
  expect(clsContains(page, 'absolute')).toBeTruthy();
});

it('no-shadow', async () => {
  const page = await specComponent(`
    <arv-header no-shadow>Header</arv-header>
  `);
  expect(clsContains(page, 'no-shadow')).toBeTruthy();
});
