# Arv - A custom-element(shadowdom) UI library

### Inspired by 💪 [Material-ui library](https://material-ui.com/)
### Made with ❤️ using [Stencil](https://stenciljs.com)

A UI library that is framework agnostic, same ui kit to any framework

## Getting Started 🔥🔥🔥

### React

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { defineCustomElements } from 'arv/dist/loader';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
defineCustomElements(window);
```

### Angular

**Step 1:** In your **main.ts** file
```javascript
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { defineCustomElements } from 'arv/dist/loader';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
defineCustomElements(window);
```

**Step 2:** In each of your Module file
```javascript
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, SharedModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

More about installation at Stencil's documentation [here](https://stenciljs.com/docs/overview)

## Usage

### React
```javascript
import React from 'react';

function MyButton() {
  el = React.createRef();
  
  componentDidMount() {
    this.el.current.buttonClick = this.click;
  }
  
  click = () => {
    alert('Hello!');
  }
  
  return (
    <arv-button
      variant="raised"
      color="primary"
    >Hello World!</arv-button>
  );
}

export default MyButton;
```

### Angular

```html
<arv-button 
  variant="raised"
  (click)="greet()"
>
  Hello World!
</arv-button>
```
