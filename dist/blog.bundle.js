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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/blog.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/blog.js":
/*!************************************!*\
  !*** ./src/assets/scripts/blog.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/menu */ \"./src/assets/scripts/modules/menu.js\");\n\n__webpack_require__(/*! ./modules/heroParallax */ \"./src/assets/scripts/modules/heroParallax.js\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcz82OWU5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9tb2R1bGVzL21lbnUnXG5pbXBvcnQgJy4vbW9kdWxlcy9oZXJvUGFyYWxsYXgnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/blog.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/heroParallax.js":
/*!****************************************************!*\
  !*** ./src/assets/scripts/modules/heroParallax.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function () {\n\n  var parallax = function () {\n    var bg = document.querySelector('.hero__bg');\n    var bgText = document.querySelector('.hero__title');\n    var user = document.querySelector('.hero__content');\n\n    return {\n      move: function move(block, windowScroll, strafeAmount) {\n        var strafe = windowScroll / -strafeAmount + '%';\n        var style = block.style;\n        var transformString = 'translate3d(0,' + strafe + ', 0)';\n\n        style.transform = transformString;\n        style.webkitTransform = transformString;\n      },\n\n      init: function init(wScroll) {\n        this.move(bg, wScroll, 100);\n        this.move(bgText, wScroll, 40);\n        this.move(user, wScroll, 5);\n      }\n    };\n  }();\n\n  window.onscroll = function () {\n    var wScroll = window.pageYOffset;\n\n    parallax.init(wScroll);\n  };\n})();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9oZXJvUGFyYWxsYXguanM/NDNjZCJdLCJuYW1lcyI6WyJwYXJhbGxheCIsImJnIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYmdUZXh0IiwidXNlciIsIm1vdmUiLCJibG9jayIsIndpbmRvd1Njcm9sbCIsInN0cmFmZUFtb3VudCIsInN0cmFmZSIsInN0eWxlIiwidHJhbnNmb3JtU3RyaW5nIiwidHJhbnNmb3JtIiwid2Via2l0VHJhbnNmb3JtIiwiaW5pdCIsIndTY3JvbGwiLCJ3aW5kb3ciLCJvbnNjcm9sbCIsInBhZ2VZT2Zmc2V0Il0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsWUFBWTs7QUFFWCxNQUFJQSxXQUFZLFlBQVk7QUFDMUIsUUFBSUMsS0FBS0MsU0FBU0MsYUFBVCxDQUF1QixXQUF2QixDQUFUO0FBQ0EsUUFBSUMsU0FBU0YsU0FBU0MsYUFBVCxDQUF1QixjQUF2QixDQUFiO0FBQ0EsUUFBSUUsT0FBT0gsU0FBU0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBWDs7QUFFQSxXQUFPO0FBQ0xHLFlBQU0sY0FBVUMsS0FBVixFQUFpQkMsWUFBakIsRUFBK0JDLFlBQS9CLEVBQTZDO0FBQ2pELFlBQUlDLFNBQVNGLGVBQWUsQ0FBQ0MsWUFBaEIsR0FBK0IsR0FBNUM7QUFDQSxZQUFJRSxRQUFRSixNQUFNSSxLQUFsQjtBQUNBLFlBQUlDLGtCQUFrQixtQkFBbUJGLE1BQW5CLEdBQTJCLE1BQWpEOztBQUVBQyxjQUFNRSxTQUFOLEdBQWtCRCxlQUFsQjtBQUNBRCxjQUFNRyxlQUFOLEdBQXdCRixlQUF4QjtBQUNELE9BUkk7O0FBVUxHLFlBQU0sY0FBVUMsT0FBVixFQUFtQjtBQUN2QixhQUFLVixJQUFMLENBQVVMLEVBQVYsRUFBY2UsT0FBZCxFQUF1QixHQUF2QjtBQUNBLGFBQUtWLElBQUwsQ0FBVUYsTUFBVixFQUFrQlksT0FBbEIsRUFBMkIsRUFBM0I7QUFDQSxhQUFLVixJQUFMLENBQVVELElBQVYsRUFBZ0JXLE9BQWhCLEVBQXlCLENBQXpCO0FBQ0Q7QUFkSSxLQUFQO0FBZ0JELEdBckJjLEVBQWY7O0FBdUJBQyxTQUFPQyxRQUFQLEdBQWtCLFlBQVk7QUFDNUIsUUFBSUYsVUFBVUMsT0FBT0UsV0FBckI7O0FBRUFuQixhQUFTZSxJQUFULENBQWNDLE9BQWQ7QUFDRCxHQUpEO0FBS0QsQ0E5QkQiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9oZXJvUGFyYWxsYXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuXG4gIGxldCBwYXJhbGxheCA9IChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm9fX2JnJyk7XG4gICAgbGV0IGJnVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvX190aXRsZScpO1xuICAgIGxldCB1c2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm9fX2NvbnRlbnQnKTtcblxuICAgIHJldHVybiB7XG4gICAgICBtb3ZlOiBmdW5jdGlvbiAoYmxvY2ssIHdpbmRvd1Njcm9sbCwgc3RyYWZlQW1vdW50KSB7XG4gICAgICAgIGxldCBzdHJhZmUgPSB3aW5kb3dTY3JvbGwgLyAtc3RyYWZlQW1vdW50ICsgJyUnO1xuICAgICAgICBsZXQgc3R5bGUgPSBibG9jay5zdHlsZTtcbiAgICAgICAgbGV0IHRyYW5zZm9ybVN0cmluZyA9ICd0cmFuc2xhdGUzZCgwLCcgKyBzdHJhZmUgKycsIDApJ1xuXG4gICAgICAgIHN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcbiAgICAgICAgc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyaW5nO1xuICAgICAgfSxcblxuICAgICAgaW5pdDogZnVuY3Rpb24gKHdTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5tb3ZlKGJnLCB3U2Nyb2xsLCAxMDApO1xuICAgICAgICB0aGlzLm1vdmUoYmdUZXh0LCB3U2Nyb2xsLCA0MCk7XG4gICAgICAgIHRoaXMubW92ZSh1c2VyLCB3U2Nyb2xsLCA1KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pKCk7XG5cbiAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCB3U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuXG4gICAgcGFyYWxsYXguaW5pdCh3U2Nyb2xsKTtcbiAgfTtcbn0pKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/heroParallax.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/menu.js":
/*!********************************************!*\
  !*** ./src/assets/scripts/modules/menu.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function () {\n  var btn = document.getElementById('js_menuBtn');\n  var menu = document.getElementById('js_menu');\n\n  btn.addEventListener('click', function () {\n    btn.classList.toggle('burger-btn--active');\n    menu.classList.toggle('nav--active');\n  });\n})();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9tZW51LmpzP2JiMmYiXSwibmFtZXMiOlsiYnRuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1lbnUiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsWUFBWTtBQUNYLE1BQU1BLE1BQU1DLFNBQVNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBWjtBQUNBLE1BQU1DLE9BQU9GLFNBQVNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBYjs7QUFFQUYsTUFBSUksZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsWUFBVztBQUN2Q0osUUFBSUssU0FBSixDQUFjQyxNQUFkLENBQXFCLG9CQUFyQjtBQUNBSCxTQUFLRSxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsYUFBdEI7QUFDRCxHQUhEO0FBS0QsQ0FURCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL21lbnUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanNfbWVudUJ0bicpO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzX21lbnUnKTtcblxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBidG4uY2xhc3NMaXN0LnRvZ2dsZSgnYnVyZ2VyLWJ0bi0tYWN0aXZlJyk7XG4gICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCduYXYtLWFjdGl2ZScpO1xuICB9KTtcblxufSkoKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/menu.js\n");

/***/ })

/******/ });