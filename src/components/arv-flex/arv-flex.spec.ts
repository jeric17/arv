import { TestWindow } from '@stencil/core/testing';
import { Flex } from './arv-flex';

describe('arv-flex', () => {
  it('should build', () => {
    expect(new Flex()).toBeTruthy();
  });

  describe('rendering', () => {

    let element: HTMLFlexElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Flex],
        html: '<arv-flex></arv-flex>'
      });
    });

    it('should work without parameters', async () => {
      await testWindow.flush();
      expect(element.lastElementChild.classList.value).toEqual('arv-flex layout-row justify-start items-start content-start');
    });

    it('should work layout', async () => {
      element.layout = 'column';
      await testWindow.flush();
      expect(element.lastElementChild.classList.value).toEqual('arv-flex justify-start items-start content-start layout-column');
    });

    it('should work justify', async () => {
      element.justify = 'center';
      await testWindow.flush();
      expect(element.lastElementChild.classList.value).toEqual('arv-flex layout-row items-start content-start justify-center');
    });

    it('should work items', async () => {
      element.items = 'center';
      await testWindow.flush();
      expect(element.lastElementChild.classList.value).toEqual('arv-flex layout-row justify-start content-start items-center');
    });

    it('should work self', async () => {
      element.self = 'stretch';
      await testWindow.flush();
      expect(element.lastElementChild.classList.value).toEqual('arv-flex layout-row justify-start items-start content-start self-stretch');
    });

    it('should work content', async () => {
      element.content = 'center';
      await testWindow.flush();
      expect(element.lastElementChild.classList.value).toEqual('arv-flex layout-row justify-start items-start content-center');
    });

    it('should work with multiple parameters: layout, justify, items, and content', async () => {
      element.layout = 'row-reverse';
      element.justify = 'between';
      element.items = 'end';
      element.content = 'stretch';
      await testWindow.flush();
      expect(element.lastElementChild.classList.value).toEqual('arv-flex layout-row-reverse justify-between items-end content-stretch');
    });
  });
});
