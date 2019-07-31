/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./js/app.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_BouncyCircle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/BouncyCircle */ \"./js/modules/BouncyCircle.js\");\n/* harmony import */ var _modules_Burst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Burst */ \"./js/modules/Burst.js\");\n/* harmony import */ var _modules_ChainAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ChainAnimation */ \"./js/modules/ChainAnimation.js\");\n/* harmony import */ var _modules_CustomShape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/CustomShape */ \"./js/modules/CustomShape.js\");\n/* harmony import */ var _modules_DrawShapes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/DrawShapes */ \"./js/modules/DrawShapes.js\");\n/* harmony import */ var _modules_ShapeSwirl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/ShapeSwirl */ \"./js/modules/ShapeSwirl.js\");\n/* harmony import */ var _modules_Stagger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/Stagger */ \"./js/modules/Stagger.js\");\n/* harmony import */ var _modules_Timeline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/Timeline */ \"./js/modules/Timeline.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\n\n\n\n\n\n\nvar App = function App() {\n  _classCallCheck(this, App);\n\n  Object(_modules_BouncyCircle__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  Object(_modules_Burst__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  Object(_modules_ChainAnimation__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  Object(_modules_CustomShape__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  Object(_modules_DrawShapes__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  Object(_modules_ShapeSwirl__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  Object(_modules_Stagger__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n  Object(_modules_Timeline__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n};\n\nnew App();\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/modules/BouncyCircle.js":
/*!************************************!*\
  !*** ./js/modules/BouncyCircle.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(mojs) {/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var SHAPE = new mojs.Shape({\n    parent: '#bouncy-circle',\n    shape: 'circle',\n    fill: {\n      '#F64040': '#FC46AD'\n    },\n    radius: {\n      20: 80\n    },\n    duration: 2000,\n    isYoyo: true,\n    isShowStart: true,\n    easing: 'elastic.inout',\n    repeat: 1,\n    onRepeatComplete: function onRepeatComplete(isForward, isYoyo) {\n      if (isYoyo) this.replay();\n    }\n  });\n  SHAPE.play();\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @mojs/core */ \"./node_modules/@mojs/core/build/mo.js\")))\n\n//# sourceURL=webpack:///./js/modules/BouncyCircle.js?");

/***/ }),

/***/ "./js/modules/Burst.js":
/*!*****************************!*\
  !*** ./js/modules/Burst.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(mojs) {/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var $WRAPPER = document.querySelector('#burst');\n  var BURST = new mojs.Burst({\n    parent: $WRAPPER,\n    left: 0,\n    top: 0,\n    radius: {\n      8: 64\n    },\n    angle: {\n      0: 180\n    },\n    count: 14,\n    children: {\n      radius: 5,\n      fill: '#FD7932',\n      scale: {\n        1: 0\n      },\n      pathScale: [.8, null],\n      degreeShift: [13, null],\n      duration: [500, 700],\n      easing: 'quint.out'\n    }\n  });\n  $WRAPPER.addEventListener('click', function (event) {\n    console.log(event, event.offsetX, event.offsetY);\n    BURST.tune({\n      x: event.layerX,\n      y: event.layerY\n    }).replay();\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @mojs/core */ \"./node_modules/@mojs/core/build/mo.js\")))\n\n//# sourceURL=webpack:///./js/modules/Burst.js?");

/***/ }),

/***/ "./js/modules/ChainAnimation.js":
/*!**************************************!*\
  !*** ./js/modules/ChainAnimation.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(mojs) {function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  new mojs.Shape({\n    parent: '#chain-animation',\n    shape: 'rect',\n    fill: 'none',\n    stroke: '#FC46AD',\n    radius: 10,\n    strokeWidth: 20,\n    angle: _defineProperty({}, -180, 0),\n    duration: 900,\n    easing: mojs.easing.bounce.out\n  }).then({\n    strokeWidth: 0,\n    scale: 2,\n    duration: 800,\n    easing: mojs.easing.sin.in,\n    onComplete: function onComplete() {\n      var _this = this;\n\n      setTimeout(function () {\n        _this.replay();\n      }, 500);\n    }\n  }).play();\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @mojs/core */ \"./node_modules/@mojs/core/build/mo.js\")))\n\n//# sourceURL=webpack:///./js/modules/ChainAnimation.js?");

/***/ }),

/***/ "./js/modules/CustomShape.js":
/*!***********************************!*\
  !*** ./js/modules/CustomShape.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(mojs) {/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ \"./node_modules/core-js/modules/es.symbol.iterator.js\");\n/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ \"./node_modules/core-js/modules/es.object.get-prototype-of.js\");\n/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var Heart =\n  /*#__PURE__*/\n  function (_mojs$CustomShape) {\n    _inherits(Heart, _mojs$CustomShape);\n\n    function Heart() {\n      _classCallCheck(this, Heart);\n\n      return _possibleConstructorReturn(this, _getPrototypeOf(Heart).apply(this, arguments));\n    }\n\n    _createClass(Heart, [{\n      key: \"getShape\",\n      value: function getShape() {\n        return '<path d=\"M92.6 7.4c-10-9.9-26-9.9-35.9 0l-4.4 4.3a3.4 3.4 0 0 1-4.7 0l-4.3-4.3c-10-9.9-26-9.9-35.9 0a25 25 0 0 0 0 35.5l22.4 22.2 13.5 13.4a9.5 9.5 0 0 0 13.4 0L70.2 65 92.6 43a25 25 0 0 0 0-35.5z\"/>';\n      }\n    }, {\n      key: \"getLength\",\n      value: function getLength() {\n        return 292.110107421875;\n      }\n    }]);\n\n    return Heart;\n  }(mojs.CustomShape);\n\n  mojs.addShape('heart', Heart);\n  var FADE_HEART = new mojs.Shape({\n    parent: '#custom-shape',\n    shape: 'heart',\n    fill: 'none',\n    stroke: 'red',\n    scale: {\n      0: 1\n    },\n    strokeWidth: {\n      50: 0\n    },\n    left: '25%',\n    duration: 1000,\n    onComplete: function onComplete() {\n      this.replay();\n    }\n  });\n  var OUTLINE_HEART = new mojs.Shape({\n    parent: '#custom-shape',\n    shape: 'heart',\n    fill: 'none',\n    stroke: 'deeppink',\n    strokeDasharray: '100%',\n    strokeDashoffset: {\n      '-100%': '100%'\n    },\n    left: '75%',\n    duration: 1000,\n    onComplete: function onComplete() {\n      this.replay();\n    }\n  });\n  FADE_HEART.play();\n  OUTLINE_HEART.play();\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @mojs/core */ \"./node_modules/@mojs/core/build/mo.js\")))\n\n//# sourceURL=webpack:///./js/modules/CustomShape.js?");

/***/ }),

/***/ "./js/modules/DrawShapes.js":
/*!**********************************!*\
  !*** ./js/modules/DrawShapes.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(mojs) {/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  new mojs.Shape({\n    parent: '#draw-shapes',\n    shape: 'circle',\n    radius: 10,\n    top: '25%',\n    left: '25%',\n    fill: 'deeppink',\n    isShowStart: true\n  });\n  new mojs.Shape({\n    parent: '#draw-shapes',\n    shape: 'rect',\n    radius: 15,\n    top: '25%',\n    left: '50%',\n    fill: 'cyan',\n    isShowStart: true\n  });\n  new mojs.Shape({\n    parent: '#draw-shapes',\n    shape: 'polygon',\n    radiusX: 10,\n    radiusY: 20,\n    top: '25%',\n    left: '75%',\n    fill: 'yellow',\n    isShowStart: true\n  });\n  new mojs.Shape({\n    parent: '#draw-shapes',\n    shape: 'zigzag',\n    points: 11,\n    radius: 25,\n    radiusY: 50,\n    top: '75%',\n    left: '25%',\n    fill: 'none',\n    stroke: 'deeppink',\n    isShowStart: true\n  });\n  new mojs.Shape({\n    parent: '#draw-shapes',\n    shape: 'curve',\n    points: 11,\n    radius: 25,\n    radiusY: 50,\n    scaleY: 1,\n    top: '75%',\n    left: '50%',\n    fill: 'none',\n    stroke: 'cyan',\n    isShowStart: true\n  });\n  new mojs.Shape({\n    parent: '#draw-shapes',\n    shape: 'cross',\n    points: 11,\n    radius: 25,\n    radiusX: 50,\n    top: '75%',\n    left: '75%',\n    fill: 'none',\n    stroke: 'yellow',\n    isShowStart: true,\n    y: -25\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @mojs/core */ \"./node_modules/@mojs/core/build/mo.js\")))\n\n//# sourceURL=webpack:///./js/modules/DrawShapes.js?");

/***/ }),

/***/ "./js/modules/ShapeSwirl.js":
/*!**********************************!*\
  !*** ./js/modules/ShapeSwirl.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(mojs) {/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ \"./node_modules/core-js/modules/es.number.constructor.js\");\n/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var $WRAPPER = document.querySelector('#shape-swirl');\n  var $CONTROLLER = $WRAPPER.querySelector('.controller');\n  var $INPUT_SWIRL_SIZE = $CONTROLLER.querySelector('.swirl-size');\n  var $INPUT_SWIRL_FREQUENCY = $CONTROLLER.querySelector('.swirl-frequency');\n  var $INPUT_DIRECTION = $CONTROLLER.querySelector('.direction');\n  var $INPUT_PATH_SCALE = $CONTROLLER.querySelector('.path-scale');\n  var $INPUT_DEGREE_SHIFT = $CONTROLLER.querySelector('.degree-shift');\n  var $INPUTS = [$INPUT_SWIRL_SIZE, $INPUT_SWIRL_FREQUENCY, $INPUT_DIRECTION, $INPUT_PATH_SCALE, $INPUT_DEGREE_SHIFT];\n  var $TEXT_SWIRL_SIZE = $CONTROLLER.querySelector('.js-swirl-size');\n  var $TEXT_SWIRL_FREQUENCY = $CONTROLLER.querySelector('.js-swirl-frequency');\n  var $TEXT_DIRECTION = $CONTROLLER.querySelector('.js-direction');\n  var $TEXT_PATH_SCALE = $CONTROLLER.querySelector('.js-path-scale');\n  var $TEXT_DEGREE_SHIFT = $CONTROLLER.querySelector('.js-degree-shift');\n  var SHAPE_SWIRL = new mojs.ShapeSwirl({\n    parent: $WRAPPER,\n    fill: '#F64040',\n    x: 0,\n    y: {\n      0: -150\n    },\n    top: '50%',\n    left: '60%',\n    duration: 1000\n  });\n\n  function update() {\n    $TEXT_SWIRL_SIZE.innerHTML = $INPUT_SWIRL_SIZE.value;\n    $TEXT_SWIRL_FREQUENCY.innerHTML = $INPUT_SWIRL_FREQUENCY.value;\n    $TEXT_DIRECTION.innerHTML = $INPUT_DIRECTION.value;\n    $TEXT_PATH_SCALE.innerHTML = $INPUT_PATH_SCALE.value;\n    $TEXT_DEGREE_SHIFT.innerHTML = $INPUT_DEGREE_SHIFT.value;\n  }\n\n  ;\n  $INPUTS.forEach(function ($input) {\n    $input.addEventListener('input', update);\n    $input.addEventListener('change', update);\n  });\n  $CONTROLLER.addEventListener('click', function (event) {\n    return event.stopPropagation();\n  });\n  $WRAPPER.addEventListener('click', function () {\n    SHAPE_SWIRL.tune({\n      swirlSize: Number($INPUT_SWIRL_SIZE.value),\n      swirlFrequency: Number($INPUT_SWIRL_FREQUENCY.value),\n      direction: Number($INPUT_DIRECTION.value),\n      pathScale: Number($INPUT_PATH_SCALE.value),\n      degreeShift: Number($INPUT_DEGREE_SHIFT.value)\n    }).generate().replay();\n  });\n  update();\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @mojs/core */ \"./node_modules/@mojs/core/build/mo.js\")))\n\n//# sourceURL=webpack:///./js/modules/ShapeSwirl.js?");

/***/ }),

/***/ "./js/modules/Stagger.js":
/*!*******************************!*\
  !*** ./js/modules/Stagger.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(mojs) {/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var STAGGER = mojs.stagger(mojs.Shape);\n  var SHAPES = new STAGGER({\n    parent: '#stag-sample',\n    quantifier: 3,\n    shape: ['circle', 'rect', 'polygon'],\n    radius: 30,\n    scale: {\n      0: 1\n    },\n    fill: 'none',\n    stroke: ['deeppink', 'cyan', 'yellow'],\n    strokeWidth: {\n      30: 0\n    },\n    x: 'rand(-50, 50)',\n    y: 'rand(-50, 50)',\n    duration: 300,\n    delay: 'stagger(150)',\n    onComplete: function onComplete() {\n      this.generate();\n    }\n  });\n  var TIMELINE = new mojs.Timeline({\n    onComplete: function onComplete() {\n      var _this = this;\n\n      setTimeout(function () {\n        _this.replay();\n      }, 500);\n    }\n  });\n  TIMELINE.add(SHAPES);\n  TIMELINE.play();\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @mojs/core */ \"./node_modules/@mojs/core/build/mo.js\")))\n\n//# sourceURL=webpack:///./js/modules/Stagger.js?");

/***/ }),

/***/ "./js/modules/Timeline.js":
/*!********************************!*\
  !*** ./js/modules/Timeline.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(mojs) {/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var CIRCLE = new mojs.Shape({\n    parent: '#timeline',\n    shape: 'circle',\n    radius: 30,\n    scale: {\n      0: 1\n    },\n    fill: 'none',\n    stroke: 'deeppink',\n    strokeWidth: {\n      30: 0\n    },\n    x: 'rand(-50, 50)',\n    y: 'rand(-50, 50)',\n    duration: 300,\n    onComplete: function onComplete() {\n      this.generate();\n    }\n  });\n  var RECT = new mojs.Shape({\n    parent: '#timeline',\n    shape: 'rect',\n    radius: 30,\n    scale: {\n      0: 1\n    },\n    fill: 'none',\n    stroke: 'cyan',\n    strokeWidth: {\n      30: 0\n    },\n    x: 'rand(-50, 50)',\n    y: 'rand(-50, 50)',\n    delay: 150,\n    duration: 300,\n    onComplete: function onComplete() {\n      this.generate();\n    }\n  });\n  var POLYGON = new mojs.Shape({\n    parent: '#timeline',\n    shape: 'polygon',\n    radius: 30,\n    points: 5,\n    scale: {\n      0: 1\n    },\n    fill: 'none',\n    stroke: 'yellow',\n    strokeWidth: {\n      30: 0\n    },\n    x: 'rand(-50, 50)',\n    y: 'rand(-50, 50)',\n    delay: 300,\n    duration: 300,\n    onComplete: function onComplete() {\n      this.generate();\n    }\n  });\n  var TIMELINE = new mojs.Timeline({\n    onComplete: function onComplete() {\n      var _this = this;\n\n      setTimeout(function () {\n        _this.replay();\n      }, 500);\n    }\n  });\n  TIMELINE.add(CIRCLE, RECT, POLYGON);\n  TIMELINE.play();\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @mojs/core */ \"./node_modules/@mojs/core/build/mo.js\")))\n\n//# sourceURL=webpack:///./js/modules/Timeline.js?");

/***/ })

/******/ });