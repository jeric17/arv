import { Component, Element, Prop, State } from '@stencil/core';

@Component({
  tag: 'arv-tabs',
  styleUrl: 'arv-tabs.css',
  shadow: true
})
export class Tabs {

  rootWidth: number;
  tabChildren: any;
  tabChildrenLength: number; 

  @Element() el: HTMLElement;    

  @State() currentIndex = 0;

  @State() loaded: boolean;

  @Prop() color: string;  

  @Prop() selectedTab: string;    

  @Prop() tabs: string[];

  componentDidLoad() {
    this.loaded = true;
    this.tabChildren = this.el.children;
    this.tabChildrenLength = this.tabChildren.length;

    this.init();
    this.showTab();
  }

  private init() {
    const { width } = this.el.getBoundingClientRect();
    const tabBody:HTMLElement = this.el.shadowRoot.querySelector('.tabBody');

    this.rootWidth = width;

    tabBody.style.left = '0px';
    tabBody.style.width = `${width * this.tabChildrenLength}px`;

    Array.from(this.el.children).forEach((element: HTMLElement) => {
      element.style.width = `${width}px`;
    });    
  }

  tabClick(index: number) {
    if (index === this.currentIndex) {
      return false
    }
    this.currentIndex = index;
    this.showTab();
  }

  showTab() {
    const tabBody:HTMLElement = this.el.shadowRoot.querySelector('.tabBody');

    tabBody.style.left = `${(this.currentIndex * this.rootWidth) * -1}px`;
  }

  render() {       
    const rootClassNames = {
      root: true,
      primary: this.color === 'primary',
      secondary: this.color === 'secondary'
    };

    return(
      <div class={rootClassNames}>
        <div class="tabHeader">
            <arv-flex>
            {this.tabs.map((tabItem, index) => (
                <div
                onClick={this.tabClick.bind(this, index)}
                class={{
                    tabItem: true,
                    active: this.currentIndex === index
                }}>
                {tabItem}
                </div>    
            ))}
            </arv-flex>
        </div>
        <div class={{
          tabBody: true,
          loaded: this.loaded    
        }}>         
          <slot />
        </div>
      </div>    
    );    
  }    
}
