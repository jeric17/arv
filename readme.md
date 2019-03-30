![](https://badgen.net/bundlephobia/min/arv) ![](https://badgen.net/npm/v/arv)
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

**Step 2:** In "each" of your Module file
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
import React, { useRef, useEffect } from 'react';

function MyButton() {
  const el = useRef(null);
  
  useEffect(() => {
    el.current.buttonClick = props.onClick;
  });
  
  return (
    <arv-button
      ref={el}
      variant="raised"
      color="primary"
    >Hello World!</arv-button>
  );
}

export default MyButton;
```

```javascript
import React from 'react';

function Foo() {
  return (
    <arv-container
      width="100vw" 
      height="100vw"
    >
      <arv-flex
        items="center"
        justify="center"
        full-width
        full-height
      >
        <arv-text variant="heading1">
          Hello World
        </arv-text>
      </arv-flex>
    </arv-container>
  );
}

export default Foo;
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

```html
<arv-table [tableHeaders]="['First Name', 'Last Name']"></arv-table>
```

## Theming
Arv uses css variables to control the theme, can either be globally or per component. More about css variables at [Css Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)

```css
  --primary-color: #00e5ff;
  --primary-light-color: #6effff;
  --primary-dark-color: #00b2cc;
  --primary-text-color: #000000;

  --secondary-color: #7c4dff;
  --secondary-light-color: #b47cff;
  --secondary-dark-color: #3f1dcb;
  --secondary-text-color: #ffffff;

  --default-color: #fafafa;
  --default-light-color: #ffffff;
  --default-dark-color: #c7c7c7;
  --default-text-color: #000000;

  --light-color: #f5f5f5;
  --light-text-color: #c2c2c2;

  --dark-color: #263238;
  --dark-text-color: #102027;

  --error-color: #f44336;
  --error-light-color: #ff7961;
  --error-dark-color: #ba000d;
  --error-text-color: #000000;

  --warning-color: #ff9800;
  --warning-light-color: #ffc947;
  --warning-dark-color: #c66900;
  --warning-text-color: #000000;

  --success-color: #8bc34a;
  --success-light-color: #bef67a;
  --success-dark-color: #5a9216;
  --success-text-color: #000000;

  --radius: 2px;
  --padding: 1em;
  --card-media-height: 56%;
  --transition: all 0.3s ease-in-out;
  --icon-font-family: 'Material Icons';
  --font-family: 'Source Sans Pro', sans-serif;
```

### Overiding component theme

This will change the button's color to red

html
```html
  <arv-button color="primary">My Button</arv-button>
```

css
```css
  arv-button {
    --primary-color: #ff0000;
  }
```

Or if you want a global css, put it inside the body

```
  body {
    --primary-color: #ff0000
  }
```

This is now your new primary color
