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
  --primary-color: #5b19b1;
  --primary-shade: #5317a1;
  --primary-highlight: #631bc2;
  --primary-text-color: #ffffff;

  --secondary-color: #1ddc4f;
  --secondary-shade: #1cca49;
  --secondary-highlight: #2df061;
  --secondary-text-color: #ffffff;

  --danger-color: #f44336;
  --danger-highlight: #ff7961;
  --danger-shade: #ba000d;
  --danger-text-color: #000000;

  --warning-color: #ff9800;
  --warning-highlight: #ffc947;
  --warning-shade: #c66900;
  --warning-text-color: #000000;

  --success-color: #8bc34a;
  --success-highlight: #bef67a;
  --success-shade: #5a9216;
  --success-text-color: #000000;

  --light-color: #efefef;
  --light-text-color: #565656;
  --light-highlight: #f5f5f5;
  --light-shade: #cdcdcd;

  --dark-color: #263238;
  --dark-text-color: #f1f1f1;
  --dark-highlight: #454545;
  --dark-shade: #121212;

  --disabled-color: #cdcdcd;
  --disabled-shade: #aeaeae;
  --disabled-highlight: #efefef;
  --disabled-text-color: #aeaeae;

  --default-bg: #ffffff;
  --default-highlight: #efefef;
  --default-shade: #e0e0e0;
  --default-darker: #cdcdcd;

  --radius: 4px;
  --padding: 1em;
  --card-media-height: 56%;
  --transition: all 0.3s ease-in-out;
  --icon-font-family: 'Material Icons';
  --font-family: 'Source Sans Pro', Arial, sans-serif;
  --font-size: 15px;
  --font-color: #343434;
  --spacer-height: 1em;
  --spacer-width: 1em;
  --avatar-normal: 80px;
  --avatar-small: 50px;
  --avatar-large: 120px;
  --badge-color: rgb(224, 32, 32);
  --badge-text-color: #f5f5f5;
  --icon-size: 1.15rem;
  --darker: #cdcdcd;
  --backdrop-color: rgba(3, 3, 3, 0.4);
  --lighter: #fff;
  --radio-border-width: 3px;
  --radio-padding: 3px;
  --tooltip-bg: rgba(3, 3, 3, 0.5);
  --tooltip-text: #fff;
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
