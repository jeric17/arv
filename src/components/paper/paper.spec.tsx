import { Paper } from './paper';
import { createSpec, clsContains } from '../../utils/testing/utils';

const specComponent = createSpec(Paper);

it('loads', async () => {
  const page = await specComponent(`
    <arv-paper></arv-paper>
  `);

  expect(page.root.shadowRoot).toBeTruthy();
});

it('shadow level', async () => {
  const page = await specComponent(`
    <arv-paper shadow-level="2"></arv-paper>
  `);

  expect(clsContains(page, 'shadow-2')).toBeTruthy();
});

it('outlined', async () => {
  const page = await specComponent(`
    <arv-paper outlined></arv-paper>
  `);

  expect(clsContains(page, 'outlined')).toBeTruthy();
});