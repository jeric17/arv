import { Chip } from './chip';
import { createSpec, clsContains } from '../../utils/testing/utils';

const specComponent = createSpec(Chip);

it('loads', async () => {
  const page = await specComponent(`<arv-chip></arv-chip>`);

  expect(page.root.shadowRoot).toBeTruthy();
});

it('sets color', async () => {
  const page = await specComponent(`
    <arv-chip color="primary"></arv-chip>
  `);
  expect(clsContains(page, 'primary')).toBeTruthy();
});

it('sets the size', async () => {
  const page = await specComponent(`
    <arv-chip size="small"></arv-chip>
  `);
  expect(clsContains(page, 'small')).toBeTruthy();
});
