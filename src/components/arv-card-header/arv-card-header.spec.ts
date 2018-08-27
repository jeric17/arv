import { TestWindow } from '@stencil/core/testing';
import { CardHeader } from './arv-card-header';
import { Button } from '../arv-button/arv-button';

describe('arv-flex', () => {
  it('should build', () => {
    expect(new CardHeader()).toBeTruthy();
  });

  describe('rendering', () => {

    let element: HTMLCardHeaderElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [CardHeader],
        html: '<arv-card-header></arv-card-header>'
      });
    });

    it('should work with avatar', async () => {
      element.avatarImage = 'avatar';
      await testWindow.flush();
      const target = element.lastElementChild.querySelector('arv-avatar');
      expect(target).toBeTruthy();
    });

    it('should work with titleHeader', async () => {
      element.titleHeader = 'title_here';
      await testWindow.flush();
      const target = element.lastElementChild.querySelector('arv-text');
      expect(target.textContent).toEqual('title_here');
    });

    it('should work with subHeader', async () => {
      element.subHeader = 'title_here';
      await testWindow.flush();
      const target = element.lastElementChild.querySelector('arv-text');
      expect(target.textContent).toEqual('title_here');
    });

    it('should work with action', async () => {
      element.action = 'btn';
      await testWindow.flush();
      const target = element.lastElementChild;
      expect(target.textContent).toEqual('btn');
    });

  });
});
