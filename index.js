module.exports = function hsl () {
  var hue2rgb = function hue2rgb (m1, m2, h) {
    if (h < 0) h += 1;
    else if (h > 1) h -= 1;
    if (h * 6 < 1) return m1 + (m2 - m1) * h * 6;
    if (h * 2 < 1) return m2;
    if (h * 3 < 2) return m2 + (m2 - m1) * (2 / 3 - h) * 6;
    return m1
  }

  return {
    name: 'hsl',
    to: { 'rgb': function hsl2rgb (h, s, l) {
      h /= 360
      var m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s
      var m1 = l * 2 - m2
      r = hue2rgb(m1, m2, h + 1 / 3) * 255
      g = hue2rgb(m1, m2, h) * 255
      b = hue2rgb(m1, m2, h - 1 / 3) * 255
      return [r, g, b]
    } },
    from: { 'rgb': function rgb2hsl (r, g, b) {
      var min, max, d, h, s, l;
      min = Math.min(r /= 255, g /= 255, b /= 255)
      max = Math.max(r, g, b)
      d = max - min
      l = (max + min) / 2

      if (d) {
        s = l < .5 ? d / (max + min) : d / (2 - max - min);
        if (r == max) h = (g - b) / d + (g < b ? 6 : 0);
        else if (g == max) h = (b - r) / d + 2;
        else h = (r - g) / d + 4;
        h *= 60;
      } else {
        // d3 what does this doooooooooo?
        h = NaN;
        s = l > 0 && l < 1 ? 0 : h;
      }
      return [h, s, l]
    } }
  }
}

