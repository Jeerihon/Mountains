/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/auth.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/auth.js":
/*!************************************!*\
  !*** ./src/assets/scripts/auth.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/authBtn */ \"./src/assets/scripts/modules/authBtn.js\");\n\n__webpack_require__(/*! ./modules/parallax */ \"./src/assets/scripts/modules/parallax.js\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz85ZWY0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbW9kdWxlcy9hdXRoQnRuXCI7XG5pbXBvcnQgXCIuL21vZHVsZXMvcGFyYWxsYXhcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/auth.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/authBtn.js":
/*!***********************************************!*\
  !*** ./src/assets/scripts/modules/authBtn.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function () {\n    var container = document.querySelector('.js_welcome__container'),\n        authBtn = document.getElementById('js_authBtn'),\n        frontSide = document.querySelector('.js_side--front'),\n        backSide = document.querySelector('.js_side--back'),\n        toMainPageBtn = document.getElementById('js_toMainPageBtn');\n\n    container.onclick = function (e) {\n        var target = e.target;\n\n        if (target === authBtn || target === toMainPageBtn) {\n            rotate();\n\n            if (target === authBtn) {\n                authBtn.style.display = 'none';\n            } else if (target === toMainPageBtn) {\n                authBtn.style.display = 'block';\n            }\n        }\n    };\n\n    var rotate = function rotate() {\n        frontSide.classList.toggle('rotate');\n        backSide.classList.toggle('rotate');\n    };\n})();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9hdXRoQnRuLmpzPzhiNDYiXSwibmFtZXMiOlsiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYXV0aEJ0biIsImdldEVsZW1lbnRCeUlkIiwiZnJvbnRTaWRlIiwiYmFja1NpZGUiLCJ0b01haW5QYWdlQnRuIiwib25jbGljayIsImUiLCJ0YXJnZXQiLCJyb3RhdGUiLCJzdHlsZSIsImRpc3BsYXkiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7O0FBQ0EsQ0FBQyxZQUFZO0FBQ1QsUUFBTUEsWUFBWUMsU0FBU0MsYUFBVCxDQUF1Qix3QkFBdkIsQ0FBbEI7QUFBQSxRQUNJQyxVQUFVRixTQUFTRyxjQUFULENBQXdCLFlBQXhCLENBRGQ7QUFBQSxRQUVJQyxZQUFZSixTQUFTQyxhQUFULENBQXVCLGlCQUF2QixDQUZoQjtBQUFBLFFBR0lJLFdBQVdMLFNBQVNDLGFBQVQsQ0FBdUIsZ0JBQXZCLENBSGY7QUFBQSxRQUlJSyxnQkFBZ0JOLFNBQVNHLGNBQVQsQ0FBd0Isa0JBQXhCLENBSnBCOztBQU1BSixjQUFVUSxPQUFWLEdBQW9CLFVBQVVDLENBQVYsRUFBYTtBQUM3QixZQUFJQyxTQUFTRCxFQUFFQyxNQUFmOztBQUVBLFlBQUlBLFdBQVdQLE9BQVgsSUFBc0JPLFdBQVdILGFBQXJDLEVBQW9EO0FBQ2hESTs7QUFFQSxnQkFBSUQsV0FBV1AsT0FBZixFQUF3QjtBQUNwQkEsd0JBQVFTLEtBQVIsQ0FBY0MsT0FBZCxHQUF3QixNQUF4QjtBQUNILGFBRkQsTUFFTyxJQUFJSCxXQUFXSCxhQUFmLEVBQThCO0FBQ2pDSix3QkFBUVMsS0FBUixDQUFjQyxPQUFkLEdBQXdCLE9BQXhCO0FBQ0g7QUFDSjtBQUNKLEtBWkQ7O0FBY0EsUUFBTUYsU0FBUyxTQUFUQSxNQUFTLEdBQVk7QUFDdkJOLGtCQUFVUyxTQUFWLENBQW9CQyxNQUFwQixDQUEyQixRQUEzQjtBQUNBVCxpQkFBU1EsU0FBVCxDQUFtQkMsTUFBbkIsQ0FBMEIsUUFBMUI7QUFDSCxLQUhEO0FBS0gsQ0ExQkQiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9hdXRoQnRuLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4oZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qc193ZWxjb21lX19jb250YWluZXInKSxcbiAgICAgICAgYXV0aEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqc19hdXRoQnRuJyksXG4gICAgICAgIGZyb250U2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qc19zaWRlLS1mcm9udCcpLFxuICAgICAgICBiYWNrU2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qc19zaWRlLS1iYWNrJyksXG4gICAgICAgIHRvTWFpblBhZ2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanNfdG9NYWluUGFnZUJ0bicpO1xuXG4gICAgY29udGFpbmVyLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG5cbiAgICAgICAgaWYgKHRhcmdldCA9PT0gYXV0aEJ0biB8fCB0YXJnZXQgPT09IHRvTWFpblBhZ2VCdG4pIHtcbiAgICAgICAgICAgIHJvdGF0ZSgpO1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09PSBhdXRoQnRuKSB7XG4gICAgICAgICAgICAgICAgYXV0aEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgPT09IHRvTWFpblBhZ2VCdG4pIHtcbiAgICAgICAgICAgICAgICBhdXRoQnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHJvdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnJvbnRTaWRlLmNsYXNzTGlzdC50b2dnbGUoJ3JvdGF0ZScpO1xuICAgICAgICBiYWNrU2lkZS5jbGFzc0xpc3QudG9nZ2xlKCdyb3RhdGUnKTtcbiAgICB9O1xuXG59KSgpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/authBtn.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/parallax.js":
/*!************************************************!*\
  !*** ./src/assets/scripts/modules/parallax.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar parallaxContainer = document.querySelector('.parallax'),\n    layers = Array.from(parallaxContainer.children);\n\nvar moveLayers = function moveLayers(e) {\n    var initialX = window.innerWidth / 2 - e.pageX;\n    var initialY = window.innerHeight / 2 - e.pageY;\n\n    layers.forEach(function (layer, i) {\n        var divider = i / 100;\n        var posX = initialX * divider;\n        var posY = initialY * divider;\n        var bottomPos = window.innerHeight / 2 * divider;\n        var image = layer.firstElementChild;\n\n        image.style.bottom = '-' + bottomPos + 'px';\n        layer.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';\n    });\n};\n\nwindow.addEventListener('mousemove', moveLayers);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wYXJhbGxheC5qcz9jNjZkIl0sIm5hbWVzIjpbInBhcmFsbGF4Q29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibGF5ZXJzIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJtb3ZlTGF5ZXJzIiwiaW5pdGlhbFgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiZSIsInBhZ2VYIiwiaW5pdGlhbFkiLCJpbm5lckhlaWdodCIsInBhZ2VZIiwiZm9yRWFjaCIsImxheWVyIiwiaSIsImRpdmlkZXIiLCJwb3NYIiwicG9zWSIsImJvdHRvbVBvcyIsImltYWdlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJzdHlsZSIsImJvdHRvbSIsInRyYW5zZm9ybSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBTUEsb0JBQW9CQyxTQUFTQyxhQUFULENBQXVCLFdBQXZCLENBQTFCO0FBQUEsSUFDSUMsU0FBU0MsTUFBTUMsSUFBTixDQUFXTCxrQkFBa0JNLFFBQTdCLENBRGI7O0FBR0EsSUFBTUMsYUFBYSxTQUFiQSxVQUFhLElBQUs7QUFDcEIsUUFBTUMsV0FBWUMsT0FBT0MsVUFBUCxHQUFvQixDQUFyQixHQUEwQkMsRUFBRUMsS0FBN0M7QUFDQSxRQUFNQyxXQUFZSixPQUFPSyxXQUFQLEdBQXFCLENBQXRCLEdBQTJCSCxFQUFFSSxLQUE5Qzs7QUFFQVosV0FBT2EsT0FBUCxDQUFlLFVBQUNDLEtBQUQsRUFBUUMsQ0FBUixFQUFjO0FBQ3pCLFlBQU1DLFVBQVVELElBQUksR0FBcEI7QUFDQSxZQUFNRSxPQUFPWixXQUFXVyxPQUF4QjtBQUNBLFlBQU1FLE9BQU9SLFdBQVdNLE9BQXhCO0FBQ0EsWUFBTUcsWUFBYWIsT0FBT0ssV0FBUCxHQUFxQixDQUF0QixHQUEyQkssT0FBN0M7QUFDQSxZQUFNSSxRQUFRTixNQUFNTyxpQkFBcEI7O0FBRUFELGNBQU1FLEtBQU4sQ0FBWUMsTUFBWixTQUF5QkosU0FBekI7QUFDQUwsY0FBTVEsS0FBTixDQUFZRSxTQUFaLGtCQUFxQ1AsSUFBckMsWUFBZ0RDLElBQWhEO0FBQ0gsS0FURDtBQVVILENBZEQ7O0FBZ0JBWixPQUFPbUIsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUNyQixVQUFyQyIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL3BhcmFsbGF4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBwYXJhbGxheENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheCcpLFxuICAgIGxheWVycyA9IEFycmF5LmZyb20ocGFyYWxsYXhDb250YWluZXIuY2hpbGRyZW4pO1xuXG5jb25zdCBtb3ZlTGF5ZXJzID0gZSA9PiB7XG4gICAgY29uc3QgaW5pdGlhbFggPSAod2luZG93LmlubmVyV2lkdGggLyAyKSAtIGUucGFnZVg7XG4gICAgY29uc3QgaW5pdGlhbFkgPSAod2luZG93LmlubmVySGVpZ2h0IC8gMikgLSBlLnBhZ2VZO1xuXG4gICAgbGF5ZXJzLmZvckVhY2goKGxheWVyLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdmlkZXIgPSBpIC8gMTAwO1xuICAgICAgICBjb25zdCBwb3NYID0gaW5pdGlhbFggKiBkaXZpZGVyO1xuICAgICAgICBjb25zdCBwb3NZID0gaW5pdGlhbFkgKiBkaXZpZGVyO1xuICAgICAgICBjb25zdCBib3R0b21Qb3MgPSAod2luZG93LmlubmVySGVpZ2h0IC8gMikgKiBkaXZpZGVyO1xuICAgICAgICBjb25zdCBpbWFnZSA9IGxheWVyLmZpcnN0RWxlbWVudENoaWxkO1xuXG4gICAgICAgIGltYWdlLnN0eWxlLmJvdHRvbSA9IGAtJHtib3R0b21Qb3N9cHhgO1xuICAgICAgICBsYXllci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7cG9zWH1weCwgJHtwb3NZfXB4KWA7XG4gICAgfSk7XG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW92ZUxheWVycyk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/parallax.js\n");

/***/ })

/******/ });