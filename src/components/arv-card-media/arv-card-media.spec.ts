import { TestWindow } from '@stencil/core/testing';
import { CardMedia } from './arv-card-media';

describe('arv-card', () => {
  it('should build', () => {
    expect(new CardMedia()).toBeTruthy();
  });

  describe('rendering', () => {

    let element: HTMLCardMediaElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [CardMedia],
        html: '<arv-card-media></arv-card-media>'
      });
    });

    it('should work without parameters', async () => {
      await testWindow.flush();
      const target = element.querySelector('.arv-card-media');
      expect(target).toBeTruthy();
    });

    it('should work with imageSrc', async () => {
      element.imageSrc = 'imagesrc';
      await testWindow.flush();
      const target = element.querySelector('.arv-card-media');
      expect(target.style.backgroundImage).toEqual('url(imagesrc)');
    });
  });
});
