import { Component, Prop, State } from '@stencil/core';
import { ImageItem } from './arv-carousel.model';

@Component({
  tag: 'arv-carousel',
  styleUrl: 'arv-carousel.css',
  shadow: true
})
export class Carousel {

  @State() transitioning = true;

  @State() currentIndex = 0;

  // oneOf [left, right]
  @State() direction;

  @Prop() externalUrl: string;

  @Prop() images: ImageItem[] = [];

  @Prop() loading: boolean;  

  @Prop() target: string;

  _componentDidLoad() {
    setTimeout(() => {
      this.transitioning = false;  
      this.direction = '';
    }, 300);
  }

  clickRight() {
    let index = this.currentIndex;
    if (index >= this.images.length - 1) {
      index = 0;
    } else {
      index += 1;      
    }

    this.currentIndex = index;
    this.direction = 'right';
    this.transitioning = true;
    setTimeout(() => {
      this.transitioning = false;  
      this.direction = '';
    }, 300);
  }

  clickLeft() {
    let index = this.currentIndex;
    if (!index) {
      index = this.images.length - 1;
    } else {
      index -= 1;      
    }
    this.currentIndex = index;
    this.direction = 'left';
    this.transitioning = true;
    setTimeout(() => {
      this.transitioning = false;  
      this.direction = '';
    }, 300);
  }

  render() {

    const ImageContent = () => {
      const classNames = {
        imageContent: true,  
        right: this.direction === 'right',
        left: this.direction === 'left',
      };

      const startIndex = (() => {
        if (this.direction === 'right') {
          return this.currentIndex - 1;
        }
        return this.currentIndex;
      })();

      const content = this.images.slice(startIndex, startIndex + 2);

      return (
        <div class={classNames}>
          {content.map(d => {
            const bg = `url(${d.imageUrl})`;
            return (
              <div class="imageContentItem" style={{'background-image': bg}}></div>
            );
          })}
        </div>
      );
    };

    return (
      <div class="root">

        <div class="content">
          <ImageContent />
        </div>

        <div class="control">
            <arv-flex justify="between" items="center">
                {this.images.length > 1 && (
                <div class="control-item control-item__left">
                  <arv-flex justify="center" items="center">
                    <arv-button
                      size="large"
                      buttonClick={this.clickLeft.bind(this)}
                      icon="chevron_left" 
                      variant="flat-icon" />
                  </arv-flex>
                </div>  
                )}
                <a href={this.externalUrl} target={this.target} aria-hidden="true" class="middle"></a>
                {this.images.length > 1 && (
                <div class="control-item control-item__right">
                  <arv-flex justify="center" items="center">
                    <arv-button
                      size="large"
                      buttonClick={this.clickRight.bind(this)}
                      icon="chevron_right"
                      variant="flat-icon" />
                  </arv-flex>
                </div>  
                )}
            </arv-flex>
          </div>  
        {/* control */}
      </div>
    );
  }
}
