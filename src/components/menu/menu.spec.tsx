import { Menu } from './menu';
import { createSpec, getShadowEl, tick } from '../../utils/testing/utils';

const specComponent = createSpec(Menu);

const el = `
<arv-menu y-position="top" x-position="left">
  <arv-button icon="list" is-icon>
  </arv-button>
  <div slot="content">
    <arv-menu-item>
      Item One
    </arv-menu-item>
    <arv-menu-item>
      Item Two
    </arv-menu-item>
  </div>
</arv-menu>
`;

it('render the component', async () => {
  const page = await specComponent(el);

  expect(page.root.shadowRoot).toBeTruthy();
});

it('click menu will show contents', async () => {
  const page = await specComponent(el);
  const menuTriggerEl: any = getShadowEl(page, '.menu-trigger');

  menuTriggerEl.click();
  await page.waitForChanges();
  const contentEl = getShadowEl(page, '.content');
  expect(contentEl.classList.contains('isOpen')).toBeTruthy();
});

it('x and y position', async () => {
  const page = await specComponent(el);
  const contentEl = getShadowEl(page, '.content');
  expect(contentEl.classList.contains('top')).toBeTruthy();
  expect(contentEl.classList.contains('left')).toBeTruthy();
});

it('click menu list item will close the menu', async () => {
  const page = await specComponent(el);
  const menuItem: any = getShadowEl(page, '.menu-list');
  const menuTriggerEl: any = getShadowEl(page, '.menu-trigger');
  menuTriggerEl.click();
  await page.waitForChanges();
  menuItem.click();
  await tick(300);
  await page.waitForChanges();

  const contentEl = getShadowEl(page, '.content');
  expect(contentEl.classList.contains('isOpen')).toBeFalsy();
});
