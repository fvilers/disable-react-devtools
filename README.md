# disable-react-devtools

A simple method to disable the React Developer Tools addon to access your application

## How to install

```
npm i @fvilers/disable-react-devtools
```

or

```
yarn add @fvilers/disable-react-devtools
```

## How to use

Call the `disableReactDevTools()` method before React is loaded, in your main file.

```
import React from 'react';
import ReactDOM from 'react-dom';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import App from './App';

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

ReactDOM.render(<App />, document.getElementById('root'));

```

## How it works

The `disableReactDevTools()` method will look for the React Developer Tools global hook and replace its properties and methods to prevent the plugin registration process.
