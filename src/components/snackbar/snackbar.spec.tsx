import { Snackbar } from './snackbar';
import { createSpec } from '../../utils/testing/utils';

const specComponent = createSpec(Snackbar);

it('append snackbar', async () => {
  const page = await specComponent(`
    <arv-snackbar
      color="primary"
      message="hello"
      duration="5000"
      x-position="right"
      y-position="bottom"
    ></arv-snackbar>
  `);
  await page.root.open();
  await page.waitForChanges();
  const virtualSnackbar = page.doc.querySelector('arv-virtual-snackbar');

  expect(virtualSnackbar).toBeTruthy();
  expect(virtualSnackbar.getAttribute('color')).toBe('primary');
  expect(virtualSnackbar.getAttribute('message')).toBe('hello');
  expect(virtualSnackbar.getAttribute('duration')).toBe('5000');
  expect(virtualSnackbar.getAttribute('counter')).toBe('0');
  expect(virtualSnackbar.getAttribute('x-position')).toBe('right');
  expect(virtualSnackbar.getAttribute('y-position')).toBe('bottom');

  await page.root.open();
  expect(virtualSnackbar.getAttribute('counter')).toBe('1');
});

xit('closeable snackbar', async () => { });