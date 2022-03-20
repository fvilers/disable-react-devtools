import { isFunction, isObject, hasWindowObject } from './helpers';

export function disableReactDevTools() {
  if (hasWindowObject()) {
    // Ensure the React Developer Tools global hook exists
    if (!isObject(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)) {
      return;
    }

    // Replace all global hook properties with a no-op function or a null value
    for (const prop in window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
      if (prop === 'renderers') {
        // prevents console error when dev tools try to iterate of renderers
        window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] = new Map();
        continue;
      }
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] = isFunction(
        window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop]
      )
        ? Function.prototype
        : null;
    }
  }
}
