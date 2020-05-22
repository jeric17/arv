import { Dialog } from './dialog';
import { createSpec, getShadowEl } from '../../utils/testing/utils';
import { Virtual } from '../virtual/virtual';

const specComponent = createSpec([Dialog, Virtual]);

it('isOpen will append dialog content to dom', async () => {
  const page = await specComponent(`
    <arv-dialog is-open>
      <div id="content">My Content</div>
    </arv-dialog>
  `);

  await page.waitForChanges();

  expect(page.body.querySelector('arv-virtual')).toBeTruthy();
});

it('close event will put back content to dialog component', async () => {
  const page = await specComponent(`
    <arv-dialog is-open>
      <div id="content">My Content</div>
    </arv-dialog>
  `);
  await page.waitForChanges();

  const closeSpy = jest.fn();
  const virtual = page.doc.querySelector('arv-virtual');
  const closeBtn: any = virtual.shadowRoot.querySelector('.close-btn');

  virtual.addEventListener('arvVirtualClose', closeSpy);

  closeBtn.click();
  expect(closeSpy).toHaveBeenCalled();
});

it('disable background close', async () => {
  const page = await specComponent(`
    <arv-dialog disable-bg-close>
      <div id="content">My Content</div>
    </arv-dialog>
  `);
  const closeSpy = jest.fn();

  page.root.addEventListener('arvDialogClose', closeSpy);
  page.root.setAttribute('is-open', 'true');

  await page.waitForChanges();

  const virtual = page.body.querySelector('arv-virtual');

  const bd: HTMLElement = virtual.shadowRoot.querySelector('.backdrop');

  bd.click();

  expect(closeSpy).not.toHaveBeenCalled();
});

xit('display title', async () => {
  const page = await specComponent(`
    <arv-dialog dialog-title="Hello">
      <div id="content">My Content</div>
    </arv-dialog>
  `);
  const title = getShadowEl(page, '.title');
  expect(title.textContent).toBe('Hello');
});
