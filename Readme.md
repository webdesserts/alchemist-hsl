HSL
===

The official HSL color-space plugin for alchemist.js.

Usage
-----

### Node

By default alchemist-hsl is included in `alchemist.common`.

```js
  var alchemist = require('alchemist-js')
  alchemist.use(alchemist.common())
  var color = alchemize.hsl(255,255,255)
```

If you are not using alchemist.common you can instead use this library directly.

```js
  var alchemist = require('alchemist-js')
  var hsl = require('alchemist-hsl')
  alchemist.use(hsl)
```

### Web

[coming soon]
