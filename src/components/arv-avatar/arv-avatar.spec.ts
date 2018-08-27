import { TestWindow } from '@stencil/core/testing';
import { Avatar } from './arv-avatar';

describe('arv-flex', () => {
  it('should build', () => {
    expect(new Avatar()).toBeTruthy();
  });

  describe('rendering', () => {

    let element: HTMLAvatarElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Avatar],
        html: '<arv-avatar></arv-avatar>'
      });
    });

    it('should work with size', async () => {
      element.size = 'large';
      await testWindow.flush();
      expect(element.lastElementChild.classList.value).toEqual('arv-avatar large');
    });

    it('should work with alt', async () => {
      element.alt = 'alt_here';
      await testWindow.flush();
      expect(element.lastElementChild.querySelector('img').alt).toEqual('alt_here');
    });

    it('should work with imgSrc', async () => {
      element.imgSrc = 'image_source';
      await testWindow.flush();
      expect(element.lastElementChild.querySelector('img').src).toEqual('http://testwindow.stenciljs.com/image_source');
    });
  });
});
