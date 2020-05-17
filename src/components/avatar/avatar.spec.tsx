import { Avatar } from './avatar';
import { createSpec, clsContains, getShadowEl } from '../../utils/testing/utils';

const specComponent = createSpec(Avatar);

it('loads', async () => {
  const page = await specComponent(`
    <arv-avatar></arv-avatar>
  `);

  expect(page.root.shadowRoot).toBeTruthy();
});

it('size', async () => {
  const page = await specComponent(`
    <arv-avatar size="large"></arv-avatar>
  `);
  expect(clsContains(page, 'large')).toBeTruthy();
});

it('image src and alt', async () => {
  const page = await specComponent(`
    <arv-avatar img-src="http://foo/bar" alt="foo"></arv-avatar>
  `);
  const img = getShadowEl(page, 'img');
  expect(img.getAttribute('src')).toBe('http://foo/bar');
  expect(img.getAttribute('alt')).toBe('foo');
});
