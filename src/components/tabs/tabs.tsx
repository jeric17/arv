import { Component, h, Element, Prop, State, Watch, Listen } from '@stencil/core';

@Component({
  tag: 'arv-tabs',
  styleUrl: 'tabs.css',
  shadow: true
})
export class Tabs {
  counter = 0;
  rootWidth: number;
  tabChildren: any;
  tabChildrenLength: number;
  resizing = false;

  @Element() el: HTMLElement;

  @State() tabsData: string[];

  @State() currentIndex = 0;

  @State() loaded: boolean;

  @Prop() color: string;

  @Prop() selectedTab: string;

  @Prop() selectedIndex: number;
  @Watch('selectedIndex')
  handleSelectedTab(index) {
    this.currentIndex = index;
  }

  @Prop() animated = true;

  @Prop() tabChange: (index: number) => void;

  @Prop() tabs: any | string[];

  @Prop() isDefault = true;

  @Prop() fullHeaderWidth = true;

  @Watch('tabs')
  handleTabs() {
    this.loadTabs();
  }

  @Listen('resize', { target: 'window' })
  handleResize() {
    if (this.resizing) {
      return false;
    }
    setTimeout(() => {
      this.init();
      this.resizing = false;
    }, 100);
  }

  componentWillLoad() {
    if (this.selectedIndex) {
      this.currentIndex = this.selectedIndex;
    }
    this.loadTabs();
  }

  componentDidLoad() {
    this.loaded = true;
    this.tabChildren = this.el.children;
    this.tabChildrenLength = this.tabChildren.length;

    this.init();
    this.showTab();
  }

  loadTabs() {
    if (!this.tabs) {
      this.tabsData = [];
      return false;
    }
    if (typeof this.tabs !== 'string') {
      this.tabsData = this.tabs;
      return false;
    }
    const tabs = JSON.parse(this.tabs);
    this.tabsData = tabs;
  }

  private init() {
    const { width } = this.el.getBoundingClientRect();

    if (!this.isDefault) {
      return false;
    }

    if (!width && this.counter < 10) {
      setTimeout(() => {
        this.counter += 1;
        this.init();
      }, 100);
      return false;
    }
    const tabBody: HTMLElement = this.el.shadowRoot.querySelector('.tabBody');

    this.rootWidth = width;

    tabBody.style.left = `${width * this.currentIndex * -1}px`
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
    if (this.tabChange) {
      this.tabChange(index);
    }
  }

  showTab() {
    if (!this.isDefault) {
      return false;
    }
    Array.from(this.el.children).forEach((tabItem: HTMLElement, index: number) => {
      if (index !== this.currentIndex) {
        tabItem.style.visibility = 'hidden';
        return false;
      }
      tabItem.style.visibility = 'visible';
    });
    const tabBody: HTMLElement = this.el.shadowRoot.querySelector('.tabBody');

    tabBody.style.left = `${(this.currentIndex * this.rootWidth) * -1}px`;
  }

  render() {
    const rootClassNames = {
      root: true,
      primary: this.color === 'primary',
      secondary: this.color === 'secondary',
      fullHeaderWidth: this.fullHeaderWidth
    };

    return (
      <div class={rootClassNames}>
        <div class="tabHeader">
          <arv-flex>
            {this.tabsData.map((tabItem, index) => (
              <div
                onClick={this.tabClick.bind(this, index)}
                class={{
                  tabItem: true,
                  active: this.currentIndex === index
                }}>
                {tabItem}
              </div>
            ))}
            <div class="filler"></div>
          </arv-flex>
        </div>
        <div class={{
          tabBody: true,
          loaded: this.loaded,
          animate: this.animated
        }}>
          <slot />
        </div>
      </div>
    );
  }
}
