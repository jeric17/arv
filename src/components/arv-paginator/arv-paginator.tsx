import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'arv-paginator',
  styleUrl: 'arv-paginator.css',
  shadow: true
})
export class Paginator {

  @Prop() currentPage: number;

  @Prop() itemsPerPage: number;

  @Prop() onSelect: (index: number) => void;

  @Prop() totalItems: number;

  onNext() {
    this.onSelect(this.currentPage + 1);
  }

  onPrev() {
    this.onSelect(this.currentPage - 1);
  } 

  numberLoop(max, x, i = 1, arr = []) {
    if(i > x) {
      return arr;
    }

    if (i > max) {
      return arr;
    }

    arr.push(i);

    return this.numberLoop(max, x, i+1, arr); 
  }

  render() {
    // const diameter = 2;
    const maxVisiblePages = 5;
    const numberOfPages = Math.ceil(this.totalItems / this.itemsPerPage);
    const pageArray = this.numberLoop(numberOfPages, numberOfPages);

    const visiblePages = (()=>{
      if (numberOfPages < maxVisiblePages) {
        return pageArray;
      }

      if (this.currentPage >= (numberOfPages - 3)) {
        return this.numberLoop(numberOfPages, numberOfPages, numberOfPages - 4);
      }      

      if (this.currentPage >= 4) {
        return this.numberLoop(numberOfPages, this.currentPage + 2, this.currentPage - 2);
      }

      return this.numberLoop(numberOfPages, 5, this.currentPage);
    })();

    const l = visiblePages.length;    

    const result = (() => {
      if (l < 3) {
        return visiblePages;
      }
      if (visiblePages[0] === 1 &&
        (visiblePages[l - 1] === numberOfPages - 1) &&
        visiblePages[l - 1] !== numberOfPages) {
        visiblePages.pop();
        return visiblePages.concat([null, numberOfPages]);
      }
      if (visiblePages[0] === 1 &&
        visiblePages[l - 1] === numberOfPages - 1) {
        return visiblePages.concat(numberOfPages);
      }
      if (visiblePages[0] === 2 && 
        visiblePages[l - 1] !== numberOfPages) {
        visiblePages.pop();
        return [1].concat(visiblePages).concat([null, numberOfPages]);
      }
      if (
        visiblePages[0] !== 1 &&
        visiblePages[0] !== 2 &&
        visiblePages[l - 1] !== numberOfPages
        ) {
        return [1, null].concat(visiblePages).concat([null, numberOfPages]);
      }
      if (visiblePages[0] === 2 && 
        visiblePages[1] !== 3 &&
        visiblePages[l - 1] === numberOfPages) {
        visiblePages.shift();
        return [1, null].concat(visiblePages);
      }
      if (visiblePages[0] === 2) {
        return [1].concat(visiblePages);
      }
      if (
        visiblePages[0] !== 2 &&
        visiblePages[0] !== 1
      ) {
        return [1, null].concat(visiblePages);
      }
      if (visiblePages[0] === 1 &&
        visiblePages[l - 1] !== numberOfPages - 1 &&
        visiblePages[l - 1] !== numberOfPages
      ) {
        return visiblePages.concat([null, numberOfPages]);
      }
      if (visiblePages[0] === 1 &&
        visiblePages[l - 1] !== numberOfPages
      ) {
        return visiblePages.concat(numberOfPages);
      }

      return visiblePages;
    })();

    return (
      <div class="root">
        {this.currentPage !== 1 && (
          <div class="pageItem prev">
            <arv-button 
              buttonClick={this.onPrev.bind(this)}
              styles={{backgroundColor: 'transparent'}}
              icon="chevron_left" 
              variant="flat-icon" 
              padded={false} />
          </div>
        )}
        {result.map(d => {
          const value = (() => {
            if (!d) {
              return '...'
            }
            return d;
          })();
          return (
            <div 
              onClick={() => {
                if (value !== '...') {
                  this.onSelect(d);
                }
              }}
              class={{
                pageItem: true,
                noBorder: value === '...',
                active: this.currentPage === d
              }}>
              {value}
            </div>
          );
        })}
        {this.currentPage !== numberOfPages && (
          <div class="pageItem next">
            <arv-button 
              buttonClick={this.onNext.bind(this)}
              styles={{backgroundColor: 'transparent'}}
              icon="chevron_right" 
              variant="flat-icon" 
              padded={false} />
          </div>
        )}
      </div>
    );
  }
}