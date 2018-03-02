es2015-template-literals-reducer
==============

This plugin is a transform to remove unwantend empty spaces from ES2015 template
literals.

#### Example

Converts

```js
const literal = `
  first-item
    second-item
             third-item
`;
```

To

```js
const literal = `first-item second-item third-item`
```

### Usage

###### Via `.babelrc` (Recommended)

```json
{
  "plugins": ["es2015-template-literals-reducer"]
}
```

###### Via CLI

```sh
$ babel --plugins es2015-template-literals-reducer script.js
```
