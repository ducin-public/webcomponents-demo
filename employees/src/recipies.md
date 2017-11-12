https://alligator.io/web-components/attributes-properties/

## Reflecting properties to attributes in Custom Elements

```js
get value() {
  return this.getAttribute('value');
}

set value(newValue) {
  this.setAttribute('value', newValue);
}
```

Or, if you have a boolean property, like, say hidden:

```js
get hidden() {
  return this.hasAttribute('hidden');
}

set hidden(isHidden) {
  if (isHidden) {
    this.setAttribute('hidden', '');
  } else {
    this.removeAttribute('hidden');
  }
}
```
