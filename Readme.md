HSL
===

The official HSL color-space plugin for alchemist.js.

Usage
-----

### Node

By default alchemist-hsl is included in `alchemist.common`.

```js
  var alchemist = require('alchemist-js').create()
  alchemist.use(alchemist.common())
  var color = alchemize.hsl(210,30,70)
```

If you are not using alchemist.common you can instead use this library directly.

```js
  var alchemist = require('alchemist-js').create()
  var hsl = require('alchemist-hsl')
  alchemist.use(hsl())
```

### Web

[coming soon]

Special Thanks
--------------

These conversions (and many of the other conversions in alchemist-common) were
for the most part taken as-is from [harthor](https://github.com/harthur)'s
[color-convert](https://github.com/harthur/color-convert) project. Many thanks
to her and all of her project's contributors.

Other than Heather, many people and projects inspired alchemist as a whole. They
are listed here:

- [Bruce Lindbloom](http://www.brucelindbloom.com/)
- [chroma.js](https://github.com/gka/chroma.js)
- [colormine](https://github.com/colormine/colormine)
- [d3.js](https://github.com/mbostock/d3/wiki/Colors)
- and many more...

Thanks to all of you!
