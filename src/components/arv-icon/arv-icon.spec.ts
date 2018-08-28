import { TestWindow } from '@stencil/core/testing';
import { Icon } from './arv-icon';

describe('arv-flex', () => {
  it('should build', () => {
    expect(new Icon()).toBeTruthy();
  });

  describe('rendering', () => {

    let element: HTMLIconElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Icon],
        html: '<arv-icon></arv-icon>'
      });
    });

    it('should work without parameters', async () => {
      await testWindow.flush();
      expect(element).toBeTruthy();
    });

    it('should work with color', async () => {
      element.size = 'small';
      await testWindow.flush();
      expect(element.lastElementChild.classList.value).toEqual('material-icons arv-icon small');
    });

    it('should work with color', async () => {
      element.icon = 'foo';
      await testWindow.flush();
      expect(element.textContent).toEqual('foo');
    });

  });
});
