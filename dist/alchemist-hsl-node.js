module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports) {

/*
 * Alchemist-hsl
 *
 * Author: Michael C. Mullins
 * License: MIT
 *
 * Even though I am technically the author of this module, these conversions
 * were blatantly copied form harthor's color-convert project. Many thanks
 * to her and all of that project's contributers!
 *
 * You can find color-convert here: https://github.com/harthur/color-convert
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = hsl;

function hsl() {
  return {
    name: 'hsl',
    limits: {
      max: [360, 1, 1],
      min: [0, 0, 0]
    },
    to: {
      'rgb': function hsl2rgb(h, s, l) {
        var t1, t2, t3, rgb, val;

        h /= 360;

        if (s == 0) {
          val = l * 255;
          return [val, val, val];
        }

        if (l < 0.5) t2 = l * (1 + s);else t2 = l + s - l * s;
        t1 = 2 * l - t2;

        rgb = [0, 0, 0];

        for (var i = 0; i < 3; i++) {
          t3 = h + 1 / 3 * -(i - 1);
          t3 < 0 && t3++;
          t3 > 1 && t3--;
          if (6 * t3 < 1) val = t1 + (t2 - t1) * 6 * t3;else if (2 * t3 < 1) val = t2;else if (3 * t3 < 2) val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;else val = t1;

          rgb[i] = val * 255;
        }
        return rgb;
      }
    },

    from: {
      'rgb': function rgb2hsl(r, g, b) {
        var h, s, l, min, max, delta;

        r /= 255;
        g /= 255;
        b /= 255;

        min = Math.min(r, g, b);
        max = Math.max(r, g, b);
        delta = max - min;

        if (max == min) h = 0;else if (r == max) h = (g - b) / delta;else if (g == max) h = 2 + (b - r) / delta;else if (b == max) h = 4 + (r - g) / delta;
        h = Math.min(h * 60, 360);

        if (h < 0) h += 360;
        l = (min + max) / 2;
        if (max == min) s = 0;else if (l <= 0.5) s = delta / (max + min);else s = delta / (2 - max - min);

        return [h, s, l];
      }
    }
  };
}

module.exports = exports['default'];

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzVhM2YxYjczMzgyOGMwZmU0OWYiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ3pCd0IsR0FBRzs7QUFBWixTQUFTLEdBQUcsR0FBSTtBQUM3QixTQUFPO0FBQ0wsUUFBSSxFQUFFLEtBQUs7QUFDWCxVQUFNLEVBQUU7QUFDTixTQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNoQixTQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNmO0FBQ0QsTUFBRSxFQUFFO0FBQ0YsV0FBSyxFQUFFLFNBQVMsT0FBTyxDQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ2hDLFlBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQzs7QUFFekIsU0FBQyxJQUFJLEdBQUc7O0FBRVIsWUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ1YsYUFBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDZCxpQkFBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDeEI7O0FBRUQsWUFBSSxDQUFDLEdBQUcsR0FBRyxFQUNULEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBRWpCLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFD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QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztPQUNsQjtLQUNGO0dBQ0Y7Q0FDRiIsImZpbGUiOiJhbGNoZW1pc3QtaHNsLW5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGM1YTNmMWI3MzM4MjhjMGZlNDlmXG4gKiovIiwiLypcbiAqIEFsY2hlbWlzdC1oc2xcbiAqXG4gKiBBdXRob3I6IE1pY2hhZWwgQy4gTXVsbGluc1xuICogTGljZW5zZTogTUlUXG4gKlxuICogRXZlbiB0aG91Z2ggSSBhbSB0ZWNobmljYWxseSB0aGUgYXV0aG9yIG9mIHRoaXMgbW9kdWxlLCB0aGVzZSBjb252ZXJzaW9uc1xuICogd2VyZSBibGF0YW50bHkgY29waWVkIGZvcm0gaGFydGhvcidzIGNvbG9yLWNvbnZlcnQgcHJvamVjdC4gTWFueSB0aGFua3NcbiAqIHRvIGhlciBhbmQgYWxsIG9mIHRoYXQgcHJvamVjdCdzIGNvbnRyaWJ1dGVycyFcbiAqXG4gKiBZb3UgY2FuIGZpbmQgY29sb3ItY29udmVydCBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vaGFydGh1ci9jb2xvci1jb252ZXJ0XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaHNsICgpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnaHNsJyxcbiAgICBsaW1pdHM6IHtcbiAgICAgIG1heDogWzM2MCwgMSwgMV0sXG4gICAgICBtaW46IFswLCAwLCAwXVxuICAgIH0sXG4gICAgdG86IHtcbiAgICAgICdyZ2InOiBmdW5jdGlvbiBoc2wycmdiIChoLCBzLCBsKSB7XG4gICAgICAgIHZhciB0MSwgdDIsIHQzLCByZ2IsIHZhbDtcblxuICAgICAgICBoIC89IDM2MFxuXG4gICAgICAgIGlmIChzID09IDApIHtcbiAgICAgICAgICB2YWwgPSBsICogMjU1O1xuICAgICAgICAgIHJldHVybiBbdmFsLCB2YWwsIHZhbF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobCA8IDAuNSlcbiAgICAgICAgICB0MiA9IGwgKiAoMSArIHMpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgdDIgPSBsICsgcyAtIGwgKiBzO1xuICAgICAgICB0MSA9IDIgKiBsIC0gdDI7XG5cbiAgICAgICAgcmdiID0gWzAsIDAsIDBdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgdDMgPSBoICsgMSAvIDMgKiAtKGkgLSAxKTtcbiAgICAgICAgICB0MyA8IDAgJiYgdDMrKztcbiAgICAgICAgICB0MyA+IDEgJiYgdDMtLTtcbiAgICAgICAgICBpZiAoNiAqIHQzIDwgMSlcbiAgICAgICAgICAgIHZhbCA9IHQxICsgKHQyIC0gdDEpICogNiAqIHQzO1xuICAgICAgICAgIGVsc2UgaWYgKDIgKiB0MyA8IDEpXG4gICAgICAgICAgICB2YWwgPSB0MjtcbiAgICAgICAgICBlbHNlIGlmICgzICogdDMgPCAyKVxuICAgICAgICAgICAgdmFsID0gdDEgKyAodDIgLSB0MSkgKiAoMiAvIDMgLSB0MykgKiA2O1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHZhbCA9IHQxO1xuXG4gICAgICAgICAgcmdiW2ldID0gdmFsICogMjU1O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZ2I7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGZyb206IHtcbiAgICAgICdyZ2InOiBmdW5jdGlvbiByZ2IyaHNsIChyLCBnLCBiKSB7XG4gICAgICAgIHZhciBoLCBzLCBsLCBtaW4sIG1heCwgZGVsdGE7XG5cbiAgICAgICAgciAvPSAyNTVcbiAgICAgICAgZyAvPSAyNTVcbiAgICAgICAgYiAvPSAyNTVcblxuICAgICAgICBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKVxuICAgICAgICBtYXggPSBNYXRoLm1heChyLCBnLCBiKVxuICAgICAgICBkZWx0YSA9IG1heCAtIG1pblxuXG4gICAgICAgIGlmIChtYXggPT0gbWluKVxuICAgICAgICAgIGggPSAwO1xuICAgICAgICBlbHNlIGlmIChyID09IG1heClcbiAgICAgICAgICBoID0gKGcgLSBiKSAvIGRlbHRhO1xuICAgICAgICBlbHNlIGlmIChnID09IG1heClcbiAgICAgICAgICBoID0gMiArIChiIC0gcikgLyBkZWx0YTtcbiAgICAgICAgZWxzZSBpZiAoYiA9PSBtYXgpXG4gICAgICAgICAgaCA9IDQgKyAociAtIGcpIC8gZGVsdGE7XG4gICAgICAgIGggPSBNYXRoLm1pbihoICogNjAsIDM2MCk7XG5cbiAgICAgICAgaWYgKGggPCAwKVxuICAgICAgICAgIGggKz0gMzYwO1xuICAgICAgICBsID0gKG1pbiArIG1heCkgLyAyO1xuICAgICAgICBpZiAobWF4ID09IG1pbilcbiAgICAgICAgICBzID0gMDtcbiAgICAgICAgZWxzZSBpZiAobCA8PSAwLjUpXG4gICAgICAgICAgcyA9IGRlbHRhIC8gKG1heCArIG1pbik7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBzID0gZGVsdGEgLyAoMiAtIG1heCAtIG1pbik7XG5cbiAgICAgICAgcmV0dXJuIFtoLCBzLCBsXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaW5kZXguanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9