import { AvatarGroup } from './avatar-group';
import { createSpec, getShadowEl } from '../../utils/testing/utils';

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
  const more = getShadowEl(page, '.more');
  const three: HTMLElement = page.root.querySelector('.three');
  expect(three.style.display).toBe('none !important');
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
