export function isFunction(obj) {
  return typeof obj == 'function' || false;
}

export function isObject(obj) {
  var type = typeof obj;
  return type === 'function' || (type === 'object' && !!obj);
}
