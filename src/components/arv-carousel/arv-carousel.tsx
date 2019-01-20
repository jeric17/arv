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
    }, 500);
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
    }, 500);
  }

  render() {

    const ImageContent = () => {
      const classNames = {
        imageContent: true,  
        right: this.direction === 'right',
        left: this.direction === 'left',
      };

      const content = (() => {
        const _c = this.images.slice(this.currentIndex, this.currentIndex + 2);
        const l = this.images.length;

        if (this.direction === 'left' && this.currentIndex === l - 1) {
          return [this.images[l - 1], this.images[0], this.images[l - 1]];
        }

        if (this.direction === 'left') {
          return _c;          
        }        

        if (this.currentIndex === 0) {
          return [this.images[l - 1]].concat(_c);
        }

        if (this.currentIndex === (l - 1)) {
          return this.images.slice(l - 2, l).concat(this.images[0]);
        }

        if (this.currentIndex > (l - 1)) {
          return [this.images[l - 1], this.images[0], this.images[l - 1]];
        }

        const sliced = this.images.slice(this.currentIndex - 1, this.currentIndex + 2);
        
        return sliced;
      })()

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
          {Boolean(this.images.length) && <ImageContent />}
          {!Boolean(this.images.length) && (
            <arv-flex justify="center" items="center">
              <arv-icon icon="image" />
            </arv-flex>  
          )}
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
