import { AvatarGroup } from './avatar-group';
import { createSpec, getShadowEl, clsContains } from '../../utils/testing/utils';

const specComponent = createSpec(AvatarGroup);

it('loads', async () => {
  const page = await specComponent(`
    <arv-avatar-group></arv-avatar-group>
  `);

  expect(page.root.shadowRoot).toBeTruthy();
});

it('max, should hide others', async () => {
  const page = await specComponent(`
    <arv-avatar-group max="2">
     <div class="one"></div>
     <div class="two"></div>
     <div class="three"></div>
     <div class="four"></div>
    </arv-avatar-group>
  `);
  await page.waitForChanges();
  const more = getShadowEl(page, '.more');
  const three: HTMLElement = page.root.querySelector('.three');
  expect(three.style.display).toBe('none');
  expect(more.textContent).toBe('+2');
});

it('more', async () => {
  const page = await specComponent(`
    <arv-avatar-group max="2">
    <div class="one"></div>
    <div class="two"></div>
    <div class="three"></div>
    <div class="four"></div>
    </arv-avatar-group>
  `);
  const spy = jest.fn();
  page.root.addEventListener('arvMore', spy);
  const more: any = getShadowEl(page, '.more');
  more.click();
  expect(spy).toHaveBeenCalled();
});

it('set size', async () => {
  const page = await specComponent(`
    <arv-avatar-group max="2" size="large">
    <div class="one"></div>
    <div class="two"></div>
    <div class="three"></div>
    <div class="four"></div>
    </arv-avatar-group>
  `);
  expect(clsContains(page, 'large')).toBeTruthy();
});

it('add margins to overlap avatars', async () => {
  const page = await specComponent(`
    <arv-avatar-group max="2" size="large">
      <arv-avatar img-src="one"></arv-avatar>
      <arv-avatar img-src="two"></arv-avatar>
      <arv-avatar img-src="three"></arv-avatar>
      <arv-avatar img-src="four"></arv-avatar>
    </arv-avatar-group>
  `);

  await page.waitForChanges();

  const items = page.root.querySelectorAll('arv-avatar');

  expect(items[0].style.marginLeft).toBeFalsy();
  expect(items[2].style.marginLeft).toBeFalsy();
  expect(items[1].style.marginLeft).toBe('-15%');
});
