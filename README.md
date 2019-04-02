# disable-react-devtools

A simple method to disable the React Developer Tools addon to access your application

## Support

If you use and like this library, feel free to support my Open Source projects.

[![donate](https://www.paypalobjects.com/en_US/BE/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=JZ26X897M9V9L&currency_code=EUR)

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
