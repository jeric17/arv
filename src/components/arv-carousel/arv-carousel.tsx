import { Component, Listen, Prop, State, Watch } from '@stencil/core';
import { ImageItem } from './arv-carousel.model';

@Component({
  tag: 'arv-carousel',
  styleUrl: 'arv-carousel.css',
  shadow: true
})
export class Carousel {
  touchX: number;

  @State() imageSource: ImageItem[] = [];

  @State() transitioning = true;

  @State() currentIndex = 0;

  // oneOf [left, right]
  @State() direction;

  @Prop() externalUrl: string;

  @Prop() images: any;

  @Watch('images')
  handleImages() {
    this.load();
  }

  @Prop() loading: boolean;

  @Prop() target: string;

  @Listen('touchstart')
  handleTouchStart(event: TouchEvent) {
    const touch = event.changedTouches[0];
    this.touchX = touch.clientX;
  }

  @Listen('touchend')
  handleTouchEnd(event: TouchEvent) {
    const touch = event.changedTouches[0];
    const { clientX } = touch;
    if (this.touchX < clientX) {
      this.clickLeft();
    } else {
      this.clickRight();
    }
    this.touchX = 0;
  }

  componentWillLoad() {
    this.load();
  }

  load() {
    if (!this.images) {
      this.imageSource = [];
      return false;
    }
    if (typeof this.images !== 'string') {
      this.imageSource = this.images;
      return false;
    }

    try {
      const images = JSON.parse(this.images);
      this.imageSource = images;
    } catch (e) {
      console.error(e);
    }
  }

  _componentDidLoad() {
    setTimeout(() => {
      this.transitioning = false;
      this.direction = '';
    }, 300);
  }

  clickRight() {
    let index = this.currentIndex;

    if (index >= this.imageSource.length - 1) {
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
      index = this.imageSource.length - 1;
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
        const _c = this.imageSource.slice(this.currentIndex, this.currentIndex + 2);
        const l = this.imageSource.length;

        if (this.direction === 'left' && this.currentIndex === l - 1) {
          return [this.imageSource[l - 1], this.imageSource[0], this.imageSource[l - 1]];
        }

        if (this.direction === 'left') {
          return _c;          
        }        

        if (this.currentIndex === 0) {
          return [this.imageSource[l - 1]].concat(_c);
        }

        if (this.currentIndex === (l - 1)) {
          return this.imageSource.slice(l - 2, l).concat(this.imageSource[0]);
        }

        if (this.currentIndex > (l - 1)) {
          return [this.imageSource[l - 1], this.imageSource[0], this.imageSource[l - 1]];
        }

        const sliced = this.imageSource.slice(this.currentIndex - 1, this.currentIndex + 2);
        
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
          {Boolean(this.imageSource.length) && <ImageContent />}
          {!Boolean(this.imageSource.length) && (
             <arv-flex justify="center" items="center">
               <arv-icon icon="image" />
             </arv-flex>  
          )}
        </div>

        <div class="control">
          <arv-flex justify="between" items="center">
            {this.imageSource.length > 1 && (
               <div onClick={this.clickLeft.bind(this)} class="control-item control-item__left">
                 <arv-flex justify="center" items="center">
                   <arv-button
                     color="light"
                     size="large"
                     icon="chevron_left" 
                     variant="ghost-icon" />
                 </arv-flex>
               </div>  
            )}
            {Boolean(this.externalUrl) && (
               <a href={this.externalUrl} target={this.target} aria-hidden="true" class="middle"></a>  
            )}
            {this.imageSource.length > 1 && (
               <div onClick={this.clickRight.bind(this)} class="control-item control-item__right">
                 <arv-flex justify="center" items="center">
                   <arv-button
                     color="light"
                     size="large"
                     icon="chevron_right"
                     variant="ghost-icon" />
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
