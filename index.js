import { isFunction, isObject } from './helpers';

export function disableReactDevTools() {
  // Ensure the React Developer Tools global hook exists
  if (!isObject(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)) {
    return;
  }

  // Replace all global hook properties with a no-op function or a null value
  for (const prop in window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] = isFunction(
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop]
    )
      ? Function.prototype
      : null;
  }
}
