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
eval("\n\n(function () {\n\n  var parallax = function () {\n    var bg = document.querySelector('.js_hero__bg');\n    var bgText = document.querySelector('.js_hero__title');\n    var user = document.querySelector('.js_hero__content');\n\n    return {\n      move: function move(block, windowScroll, strafeAmount) {\n        var strafe = windowScroll / -strafeAmount + '%';\n        var style = block.style;\n        var transformString = 'translate3d(0,' + strafe + ', 0)';\n\n        style.transform = transformString;\n        style.webkitTransform = transformString;\n      },\n\n      init: function init(wScroll) {\n        this.move(bg, wScroll, 100);\n        this.move(bgText, wScroll, 40);\n        this.move(user, wScroll, 5);\n      }\n    };\n  }();\n\n  window.onscroll = function () {\n    var wScroll = window.pageYOffset;\n\n    parallax.init(wScroll);\n  };\n})();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9oZXJvUGFyYWxsYXguanM/NDNjZCJdLCJuYW1lcyI6WyJwYXJhbGxheCIsImJnIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYmdUZXh0IiwidXNlciIsIm1vdmUiLCJibG9jayIsIndpbmRvd1Njcm9sbCIsInN0cmFmZUFtb3VudCIsInN0cmFmZSIsInN0eWxlIiwidHJhbnNmb3JtU3RyaW5nIiwidHJhbnNmb3JtIiwid2Via2l0VHJhbnNmb3JtIiwiaW5pdCIsIndTY3JvbGwiLCJ3aW5kb3ciLCJvbnNjcm9sbCIsInBhZ2VZT2Zmc2V0Il0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsWUFBWTs7QUFFWCxNQUFJQSxXQUFZLFlBQVk7QUFDMUIsUUFBSUMsS0FBS0MsU0FBU0MsYUFBVCxDQUF1QixjQUF2QixDQUFUO0FBQ0EsUUFBSUMsU0FBU0YsU0FBU0MsYUFBVCxDQUF1QixpQkFBdkIsQ0FBYjtBQUNBLFFBQUlFLE9BQU9ILFNBQVNDLGFBQVQsQ0FBdUIsbUJBQXZCLENBQVg7O0FBRUEsV0FBTztBQUNMRyxZQUFNLGNBQVVDLEtBQVYsRUFBaUJDLFlBQWpCLEVBQStCQyxZQUEvQixFQUE2QztBQUNqRCxZQUFJQyxTQUFTRixlQUFlLENBQUNDLFlBQWhCLEdBQStCLEdBQTVDO0FBQ0EsWUFBSUUsUUFBUUosTUFBTUksS0FBbEI7QUFDQSxZQUFJQyxrQkFBa0IsbUJBQW1CRixNQUFuQixHQUEyQixNQUFqRDs7QUFFQUMsY0FBTUUsU0FBTixHQUFrQkQsZUFBbEI7QUFDQUQsY0FBTUcsZUFBTixHQUF3QkYsZUFBeEI7QUFDRCxPQVJJOztBQVVMRyxZQUFNLGNBQVVDLE9BQVYsRUFBbUI7QUFDdkIsYUFBS1YsSUFBTCxDQUFVTCxFQUFWLEVBQWNlLE9BQWQsRUFBdUIsR0FBdkI7QUFDQSxhQUFLVixJQUFMLENBQVVGLE1BQVYsRUFBa0JZLE9BQWxCLEVBQTJCLEVBQTNCO0FBQ0EsYUFBS1YsSUFBTCxDQUFVRCxJQUFWLEVBQWdCVyxPQUFoQixFQUF5QixDQUF6QjtBQUNEO0FBZEksS0FBUDtBQWdCRCxHQXJCYyxFQUFmOztBQXVCQUMsU0FBT0MsUUFBUCxHQUFrQixZQUFZO0FBQzVCLFFBQUlGLFVBQVVDLE9BQU9FLFdBQXJCOztBQUVBbkIsYUFBU2UsSUFBVCxDQUFjQyxPQUFkO0FBQ0QsR0FKRDtBQUtELENBOUJEIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvaGVyb1BhcmFsbGF4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcblxuICBsZXQgcGFyYWxsYXggPSAoZnVuY3Rpb24gKCkge1xuICAgIGxldCBiZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qc19oZXJvX19iZycpO1xuICAgIGxldCBiZ1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanNfaGVyb19fdGl0bGUnKTtcbiAgICBsZXQgdXNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qc19oZXJvX19jb250ZW50Jyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbW92ZTogZnVuY3Rpb24gKGJsb2NrLCB3aW5kb3dTY3JvbGwsIHN0cmFmZUFtb3VudCkge1xuICAgICAgICBsZXQgc3RyYWZlID0gd2luZG93U2Nyb2xsIC8gLXN0cmFmZUFtb3VudCArICclJztcbiAgICAgICAgbGV0IHN0eWxlID0gYmxvY2suc3R5bGU7XG4gICAgICAgIGxldCB0cmFuc2Zvcm1TdHJpbmcgPSAndHJhbnNsYXRlM2QoMCwnICsgc3RyYWZlICsnLCAwKSdcblxuICAgICAgICBzdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgICAgIHN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcbiAgICAgIH0sXG5cbiAgICAgIGluaXQ6IGZ1bmN0aW9uICh3U2Nyb2xsKSB7XG4gICAgICAgIHRoaXMubW92ZShiZywgd1Njcm9sbCwgMTAwKTtcbiAgICAgICAgdGhpcy5tb3ZlKGJnVGV4dCwgd1Njcm9sbCwgNDApO1xuICAgICAgICB0aGlzLm1vdmUodXNlciwgd1Njcm9sbCwgNSk7XG4gICAgICB9XG4gICAgfVxuICB9KSgpO1xuXG4gIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblxuICAgIHBhcmFsbGF4LmluaXQod1Njcm9sbCk7XG4gIH07XG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/heroParallax.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/menu.js":
/*!********************************************!*\
  !*** ./src/assets/scripts/modules/menu.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function () {\n  var btn = document.getElementById('js_menuBtn');\n  var menu = document.getElementById('js_menu');\n  var body = document.body;\n\n  btn.addEventListener('click', function () {\n    btn.classList.toggle('burger-btn--active');\n    menu.classList.toggle('nav--active');\n\n    body.classList.toggle('noscroll');\n  });\n})();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9tZW51LmpzP2JiMmYiXSwibmFtZXMiOlsiYnRuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1lbnUiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLFlBQVk7QUFDWCxNQUFNQSxNQUFNQyxTQUFTQyxjQUFULENBQXdCLFlBQXhCLENBQVo7QUFDQSxNQUFNQyxPQUFPRixTQUFTQyxjQUFULENBQXdCLFNBQXhCLENBQWI7QUFDQSxNQUFNRSxPQUFPSCxTQUFTRyxJQUF0Qjs7QUFFQUosTUFBSUssZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsWUFBVztBQUN2Q0wsUUFBSU0sU0FBSixDQUFjQyxNQUFkLENBQXFCLG9CQUFyQjtBQUNBSixTQUFLRyxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsYUFBdEI7O0FBRUFILFNBQUtFLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixVQUF0QjtBQUNELEdBTEQ7QUFPRCxDQVpEIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvbWVudS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqc19tZW51QnRuJyk7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanNfbWVudScpO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBidG4uY2xhc3NMaXN0LnRvZ2dsZSgnYnVyZ2VyLWJ0bi0tYWN0aXZlJyk7XG4gICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCduYXYtLWFjdGl2ZScpO1xuXG4gICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdub3Njcm9sbCcpXG4gIH0pO1xuXG59KSgpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/menu.js\n");

/***/ })

/******/ });