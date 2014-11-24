(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["alchemist_hsl"] = factory();
	else
		root["alchemist_hsl"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

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
    to: {
      'rgb': function hsl2rgb (h, s, l) {
        var t1, t2, t3, rgb, val;

        h /= 360
        s /= 100
        l /= 100

        if (s == 0) {
          val = l * 255;
          return [val, val, val];
        }

        if (l < 0.5)
          t2 = l * (1 + s);
        else
          t2 = l + s - l * s;
        t1 = 2 * l - t2;

        rgb = [0, 0, 0];

        for (var i = 0; i < 3; i++) {
          t3 = h + 1 / 3 * - (i - 1);
          t3 < 0 && t3++;
          t3 > 1 && t3--;
          if (6 * t3 < 1)
            val = t1 + (t2 - t1) * 6 * t3;
          else if (2 * t3 < 1)
            val = t2;
          else if (3 * t3 < 2)
            val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
          else
            val = t1;

          rgb[i] = val * 255;
        }
        return rgb;
      }
    },

    from: {
      'rgb': function rgb2hsl (r, g, b) {
        var min = Math.min(r, g, b),
            max = Math.max(r, g, b),
            delta = max - min,
            h, s, l;

        r /= 255
        g /= 255
        b /= 255

        if (max == min)
          h = 0;
        else if (r == max)
          h = (g - b) / delta;
        else if (g == max)
          h = 2 + (b - r) / delta;
        else if (b == max)
          h = 4 + (r - g)/ delta;
        h = Math.min(h * 60, 360);

        if (h < 0)
          h += 360;
        l = (min + max) / 2;
        if (max == min)
          s = 0;
        else if (l <= 0.5)
          s = delta / (max + min);
        else
          s = delta / (2 - max - min);

        return [h, s * 100, l * 100];
      }
    }
  }
}


/***/ }
/******/ ])
});