import { TestWindow } from '@stencil/core/testing';
import { Text } from './arv-text';

describe('arv-text', () => {
  it('should build', () => {
    expect(new Text()).toBeTruthy();
  });

  describe('rendering', () => {

    let element: any;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Text],
        html: '<arv-text></arv-text>'
      });
    });

    it('should work with heading1', async () => {
      element.variant = 'heading1';
      await testWindow.flush();
      const target = element.lastElementChild.classList.value;;
      expect(target).toEqual('arv-text heading1');
    });

    it('should work with heading2', async () => {
      element.variant = 'heading2';
      await testWindow.flush();
      const target = element.lastElementChild.classList.value;;
      expect(target).toEqual('arv-text heading2');
    });

    it('should work with heading3', async () => {
      element.variant = 'heading3';
      await testWindow.flush();
      const target = element.lastElementChild.classList.value;;
      expect(target).toEqual('arv-text heading3');
    });

    it('should work with heading4', async () => {
      element.variant = 'heading4';
      await testWindow.flush();
      const target = element.lastElementChild.classList.value;;
      expect(target).toEqual('arv-text heading4');
    });

    it('should work with body1', async () => {
      element.variant = 'body1';
      await testWindow.flush();
      const target = element.lastElementChild.classList.value;;
      expect(target).toEqual('arv-text body1');
    });

    it('should work with body2', async () => {
      element.variant = 'body2';
      await testWindow.flush();
      const target = element.lastElementChild.classList.value;;
      expect(target).toEqual('arv-text body2');
    });

  });
});
