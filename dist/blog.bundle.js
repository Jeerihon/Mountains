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
eval("\n\n(function () {\n\n  var parallax = function () {\n    var bg = document.querySelector('.js_hero__bg');\n    var bgText = document.querySelector('.js_hero__title');\n    var user = document.querySelector('.js_hero__content');\n\n    return {\n      move: function move(block, windowScroll, strafeAmount) {\n        var strafe = windowScroll / -strafeAmount + '%';\n        var style = block.style;\n        var transformString = 'translate3d(0, ' + strafe + ', 0)';\n\n        style.transform = transformString;\n        style.webkitTransform = transformString;\n      },\n      init: function init(wScroll) {\n        this.move(bg, wScroll, 100);\n        this.move(bgText, wScroll, 40);\n        this.move(user, wScroll, 5);\n      }\n    };\n  }();\n\n  window.onscroll = function () {\n    var wScroll = window.pageYOffset;\n\n    parallax.init(wScroll);\n  };\n})();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9oZXJvUGFyYWxsYXguanM/NDNjZCJdLCJuYW1lcyI6WyJwYXJhbGxheCIsImJnIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYmdUZXh0IiwidXNlciIsIm1vdmUiLCJibG9jayIsIndpbmRvd1Njcm9sbCIsInN0cmFmZUFtb3VudCIsInN0cmFmZSIsInN0eWxlIiwidHJhbnNmb3JtU3RyaW5nIiwidHJhbnNmb3JtIiwid2Via2l0VHJhbnNmb3JtIiwiaW5pdCIsIndTY3JvbGwiLCJ3aW5kb3ciLCJvbnNjcm9sbCIsInBhZ2VZT2Zmc2V0Il0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsWUFBWTs7QUFFWCxNQUFJQSxXQUFZLFlBQVk7QUFDMUIsUUFBSUMsS0FBS0MsU0FBU0MsYUFBVCxDQUF1QixjQUF2QixDQUFUO0FBQ0EsUUFBSUMsU0FBU0YsU0FBU0MsYUFBVCxDQUF1QixpQkFBdkIsQ0FBYjtBQUNBLFFBQUlFLE9BQU9ILFNBQVNDLGFBQVQsQ0FBdUIsbUJBQXZCLENBQVg7O0FBRUEsV0FBTztBQUNMRyxVQURLLGdCQUNBQyxLQURBLEVBQ09DLFlBRFAsRUFDcUJDLFlBRHJCLEVBQ21DO0FBQ3RDLFlBQUlDLFNBQVNGLGVBQWUsQ0FBQ0MsWUFBaEIsR0FBK0IsR0FBNUM7QUFDQSxZQUFJRSxRQUFRSixNQUFNSSxLQUFsQjtBQUNBLFlBQUlDLHNDQUFvQ0YsTUFBcEMsU0FBSjs7QUFFQUMsY0FBTUUsU0FBTixHQUFrQkQsZUFBbEI7QUFDQUQsY0FBTUcsZUFBTixHQUF3QkYsZUFBeEI7QUFDRCxPQVJJO0FBVUxHLFVBVkssZ0JBVUFDLE9BVkEsRUFVUztBQUNaLGFBQUtWLElBQUwsQ0FBVUwsRUFBVixFQUFjZSxPQUFkLEVBQXVCLEdBQXZCO0FBQ0EsYUFBS1YsSUFBTCxDQUFVRixNQUFWLEVBQWtCWSxPQUFsQixFQUEyQixFQUEzQjtBQUNBLGFBQUtWLElBQUwsQ0FBVUQsSUFBVixFQUFnQlcsT0FBaEIsRUFBeUIsQ0FBekI7QUFDRDtBQWRJLEtBQVA7QUFnQkQsR0FyQmMsRUFBZjs7QUF1QkFDLFNBQU9DLFFBQVAsR0FBa0IsWUFBWTtBQUM1QixRQUFJRixVQUFVQyxPQUFPRSxXQUFyQjs7QUFFQW5CLGFBQVNlLElBQVQsQ0FBY0MsT0FBZDtBQUNELEdBSkQ7QUFLRCxDQTlCRCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2hlcm9QYXJhbGxheC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgbGV0IHBhcmFsbGF4ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanNfaGVyb19fYmcnKTtcbiAgICBsZXQgYmdUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzX2hlcm9fX3RpdGxlJyk7XG4gICAgbGV0IHVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanNfaGVyb19fY29udGVudCcpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1vdmUoYmxvY2ssIHdpbmRvd1Njcm9sbCwgc3RyYWZlQW1vdW50KSB7XG4gICAgICAgIGxldCBzdHJhZmUgPSB3aW5kb3dTY3JvbGwgLyAtc3RyYWZlQW1vdW50ICsgJyUnO1xuICAgICAgICBsZXQgc3R5bGUgPSBibG9jay5zdHlsZTtcbiAgICAgICAgbGV0IHRyYW5zZm9ybVN0cmluZyA9IGB0cmFuc2xhdGUzZCgwLCAke3N0cmFmZX0sIDApYDtcblxuICAgICAgICBzdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgICAgIHN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcbiAgICAgIH0sXG5cbiAgICAgIGluaXQod1Njcm9sbCkge1xuICAgICAgICB0aGlzLm1vdmUoYmcsIHdTY3JvbGwsIDEwMCk7XG4gICAgICAgIHRoaXMubW92ZShiZ1RleHQsIHdTY3JvbGwsIDQwKTtcbiAgICAgICAgdGhpcy5tb3ZlKHVzZXIsIHdTY3JvbGwsIDUpO1xuICAgICAgfVxuICAgIH1cbiAgfSkoKTtcblxuICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHdTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cbiAgICBwYXJhbGxheC5pbml0KHdTY3JvbGwpO1xuICB9O1xufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/heroParallax.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/menu.js":
/*!********************************************!*\
  !*** ./src/assets/scripts/modules/menu.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function () {\n  var btn = document.getElementById('js_menuBtn');\n  var menu = document.getElementById('js_menu');\n  var body = document.body;\n\n  var menuPromise = new Promise(function (resolve) {\n    if (btn) {\n      resolve();\n    }\n  });\n\n  menuPromise.then(function () {\n\n    btn.addEventListener('click', function () {\n      btn.classList.toggle('burger-btn--active');\n      menu.classList.toggle('nav--active');\n\n      body.classList.toggle('noscroll');\n    });\n  });\n})();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9tZW51LmpzP2JiMmYiXSwibmFtZXMiOlsiYnRuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1lbnUiLCJib2R5IiwibWVudVByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsWUFBWTtBQUNYLE1BQU1BLE1BQU1DLFNBQVNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBWjtBQUNBLE1BQU1DLE9BQU9GLFNBQVNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBYjtBQUNBLE1BQU1FLE9BQU9ILFNBQVNHLElBQXRCOztBQUVBLE1BQU1DLGNBQWMsSUFBSUMsT0FBSixDQUFZLFVBQVVDLE9BQVYsRUFBbUI7QUFDakQsUUFBSVAsR0FBSixFQUFTO0FBQ1BPO0FBQ0Q7QUFDRixHQUptQixDQUFwQjs7QUFNQUYsY0FBWUcsSUFBWixDQUFpQixZQUFZOztBQUUzQlIsUUFBSVMsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsWUFBWTtBQUN4Q1QsVUFBSVUsU0FBSixDQUFjQyxNQUFkLENBQXFCLG9CQUFyQjtBQUNBUixXQUFLTyxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsYUFBdEI7O0FBRUFQLFdBQUtNLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixVQUF0QjtBQUNELEtBTEQ7QUFPRCxHQVREO0FBVUQsQ0FyQkQiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9tZW51LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzX21lbnVCdG4nKTtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqc19tZW51Jyk7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXG4gIGNvbnN0IG1lbnVQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICBpZiAoYnRuKSB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfVxuICB9KTtcblxuICBtZW51UHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcblxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdidXJnZXItYnRuLS1hY3RpdmUnKTtcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2LS1hY3RpdmUnKTtcblxuICAgICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdub3Njcm9sbCcpXG4gICAgfSk7XG5cbiAgfSk7XG59KSgpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/menu.js\n");

/***/ })

/******/ });