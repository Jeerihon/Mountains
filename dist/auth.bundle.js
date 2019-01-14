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
eval("\n\n__webpack_require__(/*! ./modules/authBtn */ \"./src/assets/scripts/modules/authBtn.js\");\n\n__webpack_require__(/*! ./modules/parallax */ \"./src/assets/scripts/modules/parallax.js\");\n\n__webpack_require__(/*! ./modules/menu */ \"./src/assets/scripts/modules/menu.js\");\n\n__webpack_require__(/*! ./modules/preloader */ \"./src/assets/scripts/modules/preloader.js\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz85ZWY0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0EiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbW9kdWxlcy9hdXRoQnRuXCI7XG5pbXBvcnQgXCIuL21vZHVsZXMvcGFyYWxsYXhcIjtcbmltcG9ydCAnLi9tb2R1bGVzL21lbnUnO1xuaW1wb3J0ICcuL21vZHVsZXMvcHJlbG9hZGVyJzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/auth.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/authBtn.js":
/*!***********************************************!*\
  !*** ./src/assets/scripts/modules/authBtn.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function () {\n  var container = document.querySelector('.js_welcome'),\n      authBtn = document.getElementById('js_authBtn'),\n      frontSide = document.querySelector('.js_side--front'),\n      backSide = document.querySelector('.js_side--back'),\n      toMainPageBtn = document.getElementById('js_toMainPageBtn');\n\n  var authbtnPromise = new Promise(function (resolve) {\n    if (container) {\n      resolve();\n    }\n  });\n\n  authbtnPromise.then(function () {\n\n    container.onclick = function (e) {\n      var target = e.target;\n\n      if (target === authBtn || target === toMainPageBtn) {\n        rotate();\n\n        if (target === authBtn) {\n          authBtn.style.display = 'none';\n        } else if (target === toMainPageBtn) {\n          authBtn.style.display = 'block';\n        }\n      }\n    };\n\n    var rotate = function rotate() {\n      frontSide.classList.toggle('rotate');\n      backSide.classList.toggle('rotate');\n    };\n  });\n})();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9hdXRoQnRuLmpzPzhiNDYiXSwibmFtZXMiOlsiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYXV0aEJ0biIsImdldEVsZW1lbnRCeUlkIiwiZnJvbnRTaWRlIiwiYmFja1NpZGUiLCJ0b01haW5QYWdlQnRuIiwiYXV0aGJ0blByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJvbmNsaWNrIiwiZSIsInRhcmdldCIsInJvdGF0ZSIsInN0eWxlIiwiZGlzcGxheSIsImNsYXNzTGlzdCIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLFlBQVk7QUFDWCxNQUFNQSxZQUFZQyxTQUFTQyxhQUFULENBQXVCLGFBQXZCLENBQWxCO0FBQUEsTUFDRUMsVUFBVUYsU0FBU0csY0FBVCxDQUF3QixZQUF4QixDQURaO0FBQUEsTUFFRUMsWUFBWUosU0FBU0MsYUFBVCxDQUF1QixpQkFBdkIsQ0FGZDtBQUFBLE1BR0VJLFdBQVdMLFNBQVNDLGFBQVQsQ0FBdUIsZ0JBQXZCLENBSGI7QUFBQSxNQUlFSyxnQkFBZ0JOLFNBQVNHLGNBQVQsQ0FBd0Isa0JBQXhCLENBSmxCOztBQU1BLE1BQU1JLGlCQUFpQixJQUFJQyxPQUFKLENBQVksVUFBVUMsT0FBVixFQUFtQjtBQUNwRCxRQUFJVixTQUFKLEVBQWU7QUFDYlU7QUFDRDtBQUNGLEdBSnNCLENBQXZCOztBQU1BRixpQkFBZUcsSUFBZixDQUFvQixZQUFZOztBQUU5QlgsY0FBVVksT0FBVixHQUFvQixVQUFVQyxDQUFWLEVBQWE7QUFDL0IsVUFBSUMsU0FBU0QsRUFBRUMsTUFBZjs7QUFFQSxVQUFJQSxXQUFXWCxPQUFYLElBQXNCVyxXQUFXUCxhQUFyQyxFQUFvRDtBQUNsRFE7O0FBRUEsWUFBSUQsV0FBV1gsT0FBZixFQUF3QjtBQUN0QkEsa0JBQVFhLEtBQVIsQ0FBY0MsT0FBZCxHQUF3QixNQUF4QjtBQUNELFNBRkQsTUFFTyxJQUFJSCxXQUFXUCxhQUFmLEVBQThCO0FBQ25DSixrQkFBUWEsS0FBUixDQUFjQyxPQUFkLEdBQXdCLE9BQXhCO0FBQ0Q7QUFDRjtBQUNGLEtBWkQ7O0FBY0EsUUFBTUYsU0FBUyxTQUFUQSxNQUFTLEdBQVk7QUFDekJWLGdCQUFVYSxTQUFWLENBQW9CQyxNQUFwQixDQUEyQixRQUEzQjtBQUNBYixlQUFTWSxTQUFULENBQW1CQyxNQUFuQixDQUEwQixRQUExQjtBQUNELEtBSEQ7QUFJRCxHQXBCRDtBQXNCRCxDQW5DRCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2F1dGhCdG4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanNfd2VsY29tZScpLFxuICAgIGF1dGhCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanNfYXV0aEJ0bicpLFxuICAgIGZyb250U2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qc19zaWRlLS1mcm9udCcpLFxuICAgIGJhY2tTaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzX3NpZGUtLWJhY2snKSxcbiAgICB0b01haW5QYWdlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzX3RvTWFpblBhZ2VCdG4nKTtcblxuICBjb25zdCBhdXRoYnRuUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgYXV0aGJ0blByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG5cbiAgICBjb250YWluZXIub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG5cbiAgICAgIGlmICh0YXJnZXQgPT09IGF1dGhCdG4gfHwgdGFyZ2V0ID09PSB0b01haW5QYWdlQnRuKSB7XG4gICAgICAgIHJvdGF0ZSgpO1xuXG4gICAgICAgIGlmICh0YXJnZXQgPT09IGF1dGhCdG4pIHtcbiAgICAgICAgICBhdXRoQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSB0b01haW5QYWdlQnRuKSB7XG4gICAgICAgICAgYXV0aEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCByb3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmcm9udFNpZGUuY2xhc3NMaXN0LnRvZ2dsZSgncm90YXRlJyk7XG4gICAgICBiYWNrU2lkZS5jbGFzc0xpc3QudG9nZ2xlKCdyb3RhdGUnKTtcbiAgICB9O1xuICB9KTtcblxufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/authBtn.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/menu.js":
/*!********************************************!*\
  !*** ./src/assets/scripts/modules/menu.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function () {\n  var btn = document.getElementById('js_menuBtn');\n  var menu = document.getElementById('js_menu');\n  var body = document.body;\n\n  var menuPromise = new Promise(function (resolve) {\n    if (btn) {\n      resolve();\n    }\n  });\n\n  menuPromise.then(function () {\n\n    btn.addEventListener('click', function () {\n      btn.classList.toggle('burger-btn--active');\n      menu.classList.toggle('nav--active');\n\n      body.classList.toggle('noscroll');\n    });\n  });\n})();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9tZW51LmpzP2JiMmYiXSwibmFtZXMiOlsiYnRuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1lbnUiLCJib2R5IiwibWVudVByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsWUFBWTtBQUNYLE1BQU1BLE1BQU1DLFNBQVNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBWjtBQUNBLE1BQU1DLE9BQU9GLFNBQVNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBYjtBQUNBLE1BQU1FLE9BQU9ILFNBQVNHLElBQXRCOztBQUVBLE1BQU1DLGNBQWMsSUFBSUMsT0FBSixDQUFZLFVBQVVDLE9BQVYsRUFBbUI7QUFDakQsUUFBSVAsR0FBSixFQUFTO0FBQ1BPO0FBQ0Q7QUFDRixHQUptQixDQUFwQjs7QUFNQUYsY0FBWUcsSUFBWixDQUFpQixZQUFZOztBQUUzQlIsUUFBSVMsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsWUFBWTtBQUN4Q1QsVUFBSVUsU0FBSixDQUFjQyxNQUFkLENBQXFCLG9CQUFyQjtBQUNBUixXQUFLTyxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsYUFBdEI7O0FBRUFQLFdBQUtNLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixVQUF0QjtBQUNELEtBTEQ7QUFPRCxHQVREO0FBVUQsQ0FyQkQiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9tZW51LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzX21lbnVCdG4nKTtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqc19tZW51Jyk7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXG4gIGNvbnN0IG1lbnVQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICBpZiAoYnRuKSB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfVxuICB9KTtcblxuICBtZW51UHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcblxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdidXJnZXItYnRuLS1hY3RpdmUnKTtcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2LS1hY3RpdmUnKTtcblxuICAgICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdub3Njcm9sbCcpXG4gICAgfSk7XG5cbiAgfSk7XG59KSgpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/menu.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/parallax.js":
/*!************************************************!*\
  !*** ./src/assets/scripts/modules/parallax.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar parallaxContainer = document.querySelector('.parallax'),\n    layers = Array.from(parallaxContainer.children);\n\nvar moveLayers = function moveLayers(e) {\n    var initialX = window.innerWidth / 2 - e.pageX;\n    var initialY = window.innerHeight / 2 - e.pageY;\n\n    layers.forEach(function (layer, i) {\n        var divider = i / 100;\n        var posX = initialX * divider;\n        var posY = initialY * divider;\n        var bottomPos = window.innerHeight / 2 * divider;\n        var image = layer.firstElementChild;\n\n        image.style.bottom = '-' + bottomPos + 'px';\n        layer.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';\n    });\n};\n\nwindow.addEventListener('mousemove', moveLayers, { passive: true });\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wYXJhbGxheC5qcz9jNjZkIl0sIm5hbWVzIjpbInBhcmFsbGF4Q29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibGF5ZXJzIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJtb3ZlTGF5ZXJzIiwiaW5pdGlhbFgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiZSIsInBhZ2VYIiwiaW5pdGlhbFkiLCJpbm5lckhlaWdodCIsInBhZ2VZIiwiZm9yRWFjaCIsImxheWVyIiwiaSIsImRpdmlkZXIiLCJwb3NYIiwicG9zWSIsImJvdHRvbVBvcyIsImltYWdlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJzdHlsZSIsImJvdHRvbSIsInRyYW5zZm9ybSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIl0sIm1hcHBpbmdzIjoiOztBQUNBLElBQU1BLG9CQUFvQkMsU0FBU0MsYUFBVCxDQUF1QixXQUF2QixDQUExQjtBQUFBLElBQ0lDLFNBQVNDLE1BQU1DLElBQU4sQ0FBV0wsa0JBQWtCTSxRQUE3QixDQURiOztBQUdBLElBQU1DLGFBQWEsU0FBYkEsVUFBYSxJQUFLO0FBQ3BCLFFBQU1DLFdBQVlDLE9BQU9DLFVBQVAsR0FBb0IsQ0FBckIsR0FBMEJDLEVBQUVDLEtBQTdDO0FBQ0EsUUFBTUMsV0FBWUosT0FBT0ssV0FBUCxHQUFxQixDQUF0QixHQUEyQkgsRUFBRUksS0FBOUM7O0FBRUFaLFdBQU9hLE9BQVAsQ0FBZSxVQUFDQyxLQUFELEVBQVFDLENBQVIsRUFBYztBQUN6QixZQUFNQyxVQUFVRCxJQUFJLEdBQXBCO0FBQ0EsWUFBTUUsT0FBT1osV0FBV1csT0FBeEI7QUFDQSxZQUFNRSxPQUFPUixXQUFXTSxPQUF4QjtBQUNBLFlBQU1HLFlBQWFiLE9BQU9LLFdBQVAsR0FBcUIsQ0FBdEIsR0FBMkJLLE9BQTdDO0FBQ0EsWUFBTUksUUFBUU4sTUFBTU8saUJBQXBCOztBQUVBRCxjQUFNRSxLQUFOLENBQVlDLE1BQVosU0FBeUJKLFNBQXpCO0FBQ0FMLGNBQU1RLEtBQU4sQ0FBWUUsU0FBWixrQkFBcUNQLElBQXJDLFlBQWdEQyxJQUFoRDtBQUNILEtBVEQ7QUFVSCxDQWREOztBQWdCQVosT0FBT21CLGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDckIsVUFBckMsRUFBa0QsRUFBQ3NCLFNBQVMsSUFBVixFQUFsRCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL3BhcmFsbGF4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBwYXJhbGxheENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheCcpLFxuICAgIGxheWVycyA9IEFycmF5LmZyb20ocGFyYWxsYXhDb250YWluZXIuY2hpbGRyZW4pO1xuXG5jb25zdCBtb3ZlTGF5ZXJzID0gZSA9PiB7XG4gICAgY29uc3QgaW5pdGlhbFggPSAod2luZG93LmlubmVyV2lkdGggLyAyKSAtIGUucGFnZVg7XG4gICAgY29uc3QgaW5pdGlhbFkgPSAod2luZG93LmlubmVySGVpZ2h0IC8gMikgLSBlLnBhZ2VZO1xuXG4gICAgbGF5ZXJzLmZvckVhY2goKGxheWVyLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdmlkZXIgPSBpIC8gMTAwO1xuICAgICAgICBjb25zdCBwb3NYID0gaW5pdGlhbFggKiBkaXZpZGVyO1xuICAgICAgICBjb25zdCBwb3NZID0gaW5pdGlhbFkgKiBkaXZpZGVyO1xuICAgICAgICBjb25zdCBib3R0b21Qb3MgPSAod2luZG93LmlubmVySGVpZ2h0IC8gMikgKiBkaXZpZGVyO1xuICAgICAgICBjb25zdCBpbWFnZSA9IGxheWVyLmZpcnN0RWxlbWVudENoaWxkO1xuXG4gICAgICAgIGltYWdlLnN0eWxlLmJvdHRvbSA9IGAtJHtib3R0b21Qb3N9cHhgO1xuICAgICAgICBsYXllci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7cG9zWH1weCwgJHtwb3NZfXB4KWA7XG4gICAgfSk7XG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW92ZUxheWVycywgIHtwYXNzaXZlOiB0cnVlfSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/parallax.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/preloader.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/modules/preloader.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// declarate variables\nvar preloader = document.querySelector('.js_preloader');\nvar rounds = document.querySelector('.js_preloader__img');\nvar progress = document.querySelector('.js_preloader__progress');\nvar images = Array.from(document.querySelectorAll(\"img\"));\nvar imagesCount = images.length;\nvar initStrokeDashOffset = 439;\nvar loadedImg = 0;\n\n// if container is exist get promise\nvar preloaderPromise = new Promise(function (resolve) {\n  if (preloader) {\n    resolve();\n  }\n});\n\npreloaderPromise.then(function () {\n\n  // images.forEach(imageLoaded);\n  for (var i = 0; i < images.length; i++) {\n    var img = images[i];\n    img = new Image();\n    img.src = images[i].src;\n    img.onload = imageLoaded;\n  }\n\n  function imageLoaded() {\n    loadedImg++;\n\n    var curStrokeDashArray = Math.round(initStrokeDashOffset / imagesCount * loadedImg);\n    rounds.style.strokeDashoffset = initStrokeDashOffset - curStrokeDashArray;\n\n    var percent = Math.round(100 / imagesCount * loadedImg);\n    progress.innerHTML = percent;\n\n    if (loadedImg >= imagesCount) {\n      setTimeout(function () {\n        if (!preloader.classList.contains('done')) {\n          preloader.classList.add('done');\n        }\n      }, 2000);\n      setTimeout(function () {\n        rounds.style.strokeDashoffset = initStrokeDashOffset;\n        progress.innerHTML = 0;\n      }, 3000);\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wcmVsb2FkZXIuanM/MGEwOSJdLCJuYW1lcyI6WyJwcmVsb2FkZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyb3VuZHMiLCJwcm9ncmVzcyIsImltYWdlcyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbWFnZXNDb3VudCIsImxlbmd0aCIsImluaXRTdHJva2VEYXNoT2Zmc2V0IiwibG9hZGVkSW1nIiwicHJlbG9hZGVyUHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsImkiLCJpbWciLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsImltYWdlTG9hZGVkIiwiY3VyU3Ryb2tlRGFzaEFycmF5IiwiTWF0aCIsInJvdW5kIiwic3R5bGUiLCJzdHJva2VEYXNob2Zmc2V0IiwicGVyY2VudCIsImlubmVySFRNTCIsInNldFRpbWVvdXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLElBQU1BLFlBQVlDLFNBQVNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbEI7QUFDQSxJQUFNQyxTQUFTRixTQUFTQyxhQUFULENBQXVCLG9CQUF2QixDQUFmO0FBQ0EsSUFBTUUsV0FBV0gsU0FBU0MsYUFBVCxDQUF1Qix5QkFBdkIsQ0FBakI7QUFDQSxJQUFNRyxTQUFTQyxNQUFNQyxJQUFOLENBQVdOLFNBQVNPLGdCQUFULENBQTBCLEtBQTFCLENBQVgsQ0FBZjtBQUNBLElBQU1DLGNBQWNKLE9BQU9LLE1BQTNCO0FBQ0EsSUFBTUMsdUJBQXVCLEdBQTdCO0FBQ0EsSUFBSUMsWUFBWSxDQUFoQjs7QUFHQTtBQUNBLElBQU1DLG1CQUFtQixJQUFJQyxPQUFKLENBQVksVUFBVUMsT0FBVixFQUFtQjtBQUN0RCxNQUFJZixTQUFKLEVBQWU7QUFDYmU7QUFDRDtBQUNGLENBSndCLENBQXpCOztBQU1BRixpQkFBaUJHLElBQWpCLENBQXNCLFlBQVk7O0FBRWhDO0FBQ0EsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlaLE9BQU9LLE1BQTNCLEVBQW1DTyxHQUFuQyxFQUF3QztBQUN0QyxRQUFJQyxNQUFNYixPQUFPWSxDQUFQLENBQVY7QUFDQUMsVUFBTSxJQUFJQyxLQUFKLEVBQU47QUFDQUQsUUFBSUUsR0FBSixHQUFVZixPQUFPWSxDQUFQLEVBQVVHLEdBQXBCO0FBQ0FGLFFBQUlHLE1BQUosR0FBYUMsV0FBYjtBQUNEOztBQUdELFdBQVNBLFdBQVQsR0FBdUI7QUFDckJWOztBQUVBLFFBQU1XLHFCQUFxQkMsS0FBS0MsS0FBTCxDQUFXZCx1QkFBdUJGLFdBQXZCLEdBQXFDRyxTQUFoRCxDQUEzQjtBQUNBVCxXQUFPdUIsS0FBUCxDQUFhQyxnQkFBYixHQUFnQ2hCLHVCQUF1Qlksa0JBQXZEOztBQUVBLFFBQU1LLFVBQVVKLEtBQUtDLEtBQUwsQ0FBVyxNQUFNaEIsV0FBTixHQUFvQkcsU0FBL0IsQ0FBaEI7QUFDQVIsYUFBU3lCLFNBQVQsR0FBcUJELE9BQXJCOztBQUVBLFFBQUloQixhQUFhSCxXQUFqQixFQUE4QjtBQUM1QnFCLGlCQUFXLFlBQVk7QUFDckIsWUFBSSxDQUFDOUIsVUFBVStCLFNBQVYsQ0FBb0JDLFFBQXBCLENBQTZCLE1BQTdCLENBQUwsRUFBMkM7QUFDekNoQyxvQkFBVStCLFNBQVYsQ0FBb0JFLEdBQXBCLENBQXdCLE1BQXhCO0FBQ0Q7QUFDRixPQUpELEVBSUcsSUFKSDtBQUtBSCxpQkFBVyxZQUFZO0FBQ3JCM0IsZUFBT3VCLEtBQVAsQ0FBYUMsZ0JBQWIsR0FBZ0NoQixvQkFBaEM7QUFDQVAsaUJBQVN5QixTQUFULEdBQXFCLENBQXJCO0FBQ0QsT0FIRCxFQUdHLElBSEg7QUFJRDtBQUNGO0FBQ0YsQ0FoQ0QiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wcmVsb2FkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkZWNsYXJhdGUgdmFyaWFibGVzXG5jb25zdCBwcmVsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanNfcHJlbG9hZGVyJyk7XG5jb25zdCByb3VuZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanNfcHJlbG9hZGVyX19pbWcnKTtcbmNvbnN0IHByb2dyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzX3ByZWxvYWRlcl9fcHJvZ3Jlc3MnKTtcbmNvbnN0IGltYWdlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKSk7XG5jb25zdCBpbWFnZXNDb3VudCA9IGltYWdlcy5sZW5ndGg7XG5jb25zdCBpbml0U3Ryb2tlRGFzaE9mZnNldCA9IDQzOTtcbmxldCBsb2FkZWRJbWcgPSAwO1xuXG5cbi8vIGlmIGNvbnRhaW5lciBpcyBleGlzdCBnZXQgcHJvbWlzZVxuY29uc3QgcHJlbG9hZGVyUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gIGlmIChwcmVsb2FkZXIpIHtcbiAgICByZXNvbHZlKCk7XG4gIH1cbn0pO1xuXG5wcmVsb2FkZXJQcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuXG4gIC8vIGltYWdlcy5mb3JFYWNoKGltYWdlTG9hZGVkKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgaW1nID0gaW1hZ2VzW2ldO1xuICAgIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSBpbWFnZXNbaV0uc3JjO1xuICAgIGltZy5vbmxvYWQgPSBpbWFnZUxvYWRlZDtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gaW1hZ2VMb2FkZWQoKSB7XG4gICAgbG9hZGVkSW1nKys7XG4gICAgXG4gICAgY29uc3QgY3VyU3Ryb2tlRGFzaEFycmF5ID0gTWF0aC5yb3VuZChpbml0U3Ryb2tlRGFzaE9mZnNldCAvIGltYWdlc0NvdW50ICogbG9hZGVkSW1nKTtcbiAgICByb3VuZHMuc3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9IGluaXRTdHJva2VEYXNoT2Zmc2V0IC0gY3VyU3Ryb2tlRGFzaEFycmF5O1xuXG4gICAgY29uc3QgcGVyY2VudCA9IE1hdGgucm91bmQoMTAwIC8gaW1hZ2VzQ291bnQgKiBsb2FkZWRJbWcpO1xuICAgIHByb2dyZXNzLmlubmVySFRNTCA9IHBlcmNlbnQ7XG4gICAgXG4gICAgaWYgKGxvYWRlZEltZyA+PSBpbWFnZXNDb3VudCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghcHJlbG9hZGVyLmNsYXNzTGlzdC5jb250YWlucygnZG9uZScpKSB7XG4gICAgICAgICAgcHJlbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcbiAgICAgICAgfVxuICAgICAgfSwgMjAwMCk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcm91bmRzLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSBpbml0U3Ryb2tlRGFzaE9mZnNldDtcbiAgICAgICAgcHJvZ3Jlc3MuaW5uZXJIVE1MID0gMDtcbiAgICAgIH0sIDMwMDApO1xuICAgIH1cbiAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/preloader.js\n");

/***/ })

/******/ });