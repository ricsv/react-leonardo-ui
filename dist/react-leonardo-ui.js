(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom")) : factory(root["react"], root["react-dom"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_67__) {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 68);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export camelToKebabCase */
/* harmony export (immutable) */ __webpack_exports__["a"] = luiClassName;
/* harmony export (immutable) */ __webpack_exports__["b"] = filterProps;

function camelToKebabCase(value) {
  return value.replace(/([A-Z])/g, '-$1').toLowerCase();
}

function luiClassName(name, opts) {
  var _opts$props = opts.props,
      props = _opts$props === undefined ? {} : _opts$props,
      _opts$modifiers = opts.modifiers,
      modifiers = _opts$modifiers === undefined ? [] : _opts$modifiers,
      _opts$states = opts.states,
      states = _opts$states === undefined ? [] : _opts$states;


  var baseClass = 'lui-' + name;
  var className = baseClass;

  var isModifier = function isModifier(key) {
    return modifiers.some(function (modifier) {
      return modifier === key;
    });
  };
  var isState = function isState(key) {
    return states.some(function (state) {
      return state === key;
    });
  };

  var keys = Object.keys(props);
  keys.forEach(function (key) {
    if (isModifier(key)) {
      // Modifiers can be booleans or key-value pair of strings
      if (typeof props[key] === 'boolean') {
        if (props[key]) {
          className += ' ' + baseClass + '--' + key;
        }
      } else if (props[key]) {
        className += ' ' + baseClass + '--' + props[key];
      }
    }
  });
  keys.forEach(function (key) {
    if (isState(key) && props[key]) {
      // States are always booleans
      className += ' lui-' + key;
    }
  });
  if (props.className) {
    className += ' ' + props.className;
  }

  return className;
}

function filterProps() {
  for (var _len = arguments.length, filter = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    filter[_key - 1] = arguments[_key];
  }

  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var defaultFilter = ['children', 'ref', 'key', 'className'];

  var shouldFilter = function shouldFilter(prop) {
    var res = false;

    var shouldFilterKey = function shouldFilterKey(key) {
      if (Array.isArray(key)) {
        return key.some(shouldFilterKey);
      } else if (key instanceof RegExp) {
        return key.test(prop);
      }
      return key === prop;
    };

    var filterKeys = filter.concat(defaultFilter);
    for (var i = 0; i < filterKeys.length; i++) {
      res = res || shouldFilterKey(filterKeys[i]);
    }

    return res;
  };

  var newProps = {};
  Object.keys(props).forEach(function (key) {
    if (!shouldFilter(key)) {
      newProps[key] = props[key];
    }
  });

  return newProps;
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button_icon__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_text__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_caret__ = __webpack_require__(15);





__WEBPACK_IMPORTED_MODULE_0__button__["a" /* default */].Icon = __WEBPACK_IMPORTED_MODULE_1__button_icon__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__button__["a" /* default */].Text = __WEBPACK_IMPORTED_MODULE_2__button_text__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__button__["a" /* default */].Caret = __WEBPACK_IMPORTED_MODULE_3__button_caret__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__button__["a" /* default */];

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var modifiers = ['size', 'name'];

var Icon = function Icon(props) {
  var className = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* luiClassName */])('icon', {
    props: props,
    modifiers: modifiers
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', _extends({ className: className, 'aria-hidden': 'true' }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* filterProps */])(props, modifiers)));
};

/* harmony default export */ __webpack_exports__["a"] = Icon;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Portal = function (_Component) {
  _inherits(Portal, _Component);

  function Portal(props) {
    _classCallCheck(this, Portal);

    var _this = _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).call(this, props));

    _this.portalElement = null;
    return _this;
  }

  _createClass(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var p = this.props.portalId && document.getElementById(this.props.portalId);
      if (!p) {
        p = document.createElement('div');
        p.id = this.props.portalId;
        document.body.appendChild(p);
      }
      this.portalElement = p;
      this.componentDidUpdate();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        this.props.children
      ), this.portalElement);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.removeChild(this.portalElement);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Portal;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = Portal;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input__ = __webpack_require__(37);


/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__input__["a" /* default */];

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




var PopoverBody = function PopoverBody(props) {
  var className = 'lui-popover__body ' + (props.className ? props.className : '');
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    _extends({ className: className }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* filterProps */])(props)),
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = PopoverBody;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




var PopoverFooter = function PopoverFooter(props) {
  var className = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* luiClassName */])('popover__footer', { props: props });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    _extends({ className: className }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* filterProps */])(props)),
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = PopoverFooter;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




var PopoverHeader = function PopoverHeader(props) {
  var className = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* luiClassName */])('popover__header', { props: props });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    _extends({ className: className }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* filterProps */])(props)),
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = PopoverHeader;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




var PopoverTitle = function PopoverTitle(props) {
  var className = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* luiClassName */])('popover__title', { props: props });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    _extends({ className: className }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* filterProps */])(props)),
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = PopoverTitle;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = oppositeDock;
/* unused harmony export getDocks */
/* unused harmony export addOffset */
/* unused harmony export createRect */
/* unused harmony export getDockCenterPoint */
/* unused harmony export tryPosition */
/* unused harmony export createTryRect */
/* unused harmony export tryDock */
/* unused harmony export positionToRect */
/* harmony export (immutable) */ __webpack_exports__["a"] = positionToElement;
/* unused harmony export positionToCoordinate */
var oppositeDockMap = {
  top: 'bottom',
  right: 'left',
  bottom: 'top',
  left: 'right'
};

function oppositeDock(dock) {
  return oppositeDockMap[dock];
}

function getDocks(dock) {
  var order = [dock];
  if (dock === 'top') {
    order = order.concat(['bottom', 'right', 'left']);
  } else if (dock === 'right') {
    order = order.concat(['bottom', 'left', 'top']);
  } else if (dock === 'left') {
    order = order.concat(['bottom', 'right', 'top']);
  } else {
    order = order.concat(['top', 'right', 'left']);
  }
  return order;
}

function addOffset(dock) {
  var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var top = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  if (dock === 'top') {
    return {
      top: top - offset,
      left: left
    };
  } else if (dock === 'right') {
    return {
      top: top,
      left: left + offset
    };
  } else if (dock === 'left') {
    return {
      top: top,
      left: left - offset
    };
  }
  return {
    top: top + offset,
    left: left
  };
}

function createRect() {
  var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  return {
    top: top,
    right: left + width,
    bottom: top + height,
    left: left,
    width: width,
    height: height
  };
}

function getDockCenterPoint(rect, dock) {
  var top = void 0;
  var left = void 0;
  if (dock === 'top') {
    top = rect.top;
    left = rect.left + rect.width / 2;
  } else if (dock === 'right') {
    top = rect.top + rect.height / 2;
    left = rect.right;
  } else if (dock === 'left') {
    top = rect.top + rect.height / 2;
    left = rect.left;
  } else {
    top = rect.bottom;
    left = rect.left + rect.width / 2;
  }
  return {
    top: top,
    left: left
  };
}

function tryPosition(rect, withinRect) {
  var left = rect.left >= withinRect.left;
  var right = rect.right <= withinRect.right;
  var top = rect.top >= withinRect.top;
  var bottom = rect.bottom <= withinRect.bottom;

  return {
    left: left,
    right: right,
    top: top,
    bottom: bottom
  };
}

function createTryRect(elemRect, toPosition, dock, offset) {
  var top = void 0;
  var left = void 0;
  if (dock === 'top') {
    top = toPosition.top - elemRect.height - offset;
    left = toPosition.left - elemRect.width / 2;
  } else if (dock === 'right') {
    top = toPosition.top - elemRect.height / 2;
    left = toPosition.left + offset;
  } else if (dock === 'left') {
    top = toPosition.top - elemRect.height / 2;
    left = toPosition.left - elemRect.width - offset;
  } else {
    top = toPosition.top + offset;
    left = toPosition.left - elemRect.width / 2;
  }

  return createRect(top, left, elemRect.width, elemRect.height);
}

function tryDock(elemRect, alignToRect, windowRect, dock) {
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var _options$offset = options.offset,
      offset = _options$offset === undefined ? 0 : _options$offset,
      _options$minWindowOff = options.minWindowOffset,
      minWindowOffset = _options$minWindowOff === undefined ? 0 : _options$minWindowOff,
      _options$minEdgeOffse = options.minEdgeOffset,
      minEdgeOffset = _options$minEdgeOffse === undefined ? 0 : _options$minEdgeOffse;


  var windowOffsetRect = createRect(windowRect.top + minWindowOffset, windowRect.left + minWindowOffset, windowRect.width - minWindowOffset * 2, windowRect.height - minWindowOffset * 2);

  var toPosition = getDockCenterPoint(alignToRect, dock);
  var tryRect = createTryRect(elemRect, toPosition, dock, offset);
  var fitResult = tryPosition(tryRect, windowOffsetRect);
  if (dock === 'top' || dock === 'bottom') {
    if (!fitResult.left) {
      tryRect.left = Math.min(windowOffsetRect.left, toPosition.left - minEdgeOffset);
      tryRect.right = tryRect.left + tryRect.width;
      fitResult = tryPosition(tryRect, windowOffsetRect);
    }
    if (!fitResult.right) {
      tryRect.right = Math.max(windowOffsetRect.right, toPosition.left + minEdgeOffset);
      tryRect.left = tryRect.right - tryRect.width;
      fitResult = tryPosition(tryRect, windowOffsetRect);
    }
  } else {
    if (!fitResult.top) {
      tryRect.top = Math.min(windowOffsetRect.top, toPosition.top - minEdgeOffset);
      tryRect.bottom = tryRect.top + tryRect.height;
      fitResult = tryPosition(tryRect, windowOffsetRect);
    }
    if (!fitResult.bottom) {
      tryRect.bottom = Math.max(windowOffsetRect.bottom, toPosition.top + minWindowOffset);
      tryRect.top = tryRect.bottom - tryRect.height;
      fitResult = tryPosition(tryRect, windowOffsetRect);
    }
  }

  return {
    fits: fitResult.top && fitResult.right && fitResult.bottom && fitResult.left,
    dock: dock,
    position: {
      left: tryRect.left,
      top: tryRect.top
    },
    toPosition: getDockCenterPoint(alignToRect, dock)
  };
}

function positionToRect(element, rect) {
  var dock = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'bottom';
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var elemRect = element.getBoundingClientRect();
  var pageYOffset = window.pageYOffset;
  var pageXOffset = window.pageXOffset;
  var windowRect = createRect(0, 0, document.body.clientWidth, document.body.clientHeight);

  var getOffset = function getOffset(fromElement) {
    var parent = fromElement.offsetParent;
    if (parent) {
      var parentOffset = getOffset(parent);
      return {
        top: parent.offsetTop + parentOffset.top,
        left: parent.offsetLeft + parentOffset.left
      };
    }
    return {
      top: 0,
      left: 0
    };
  };

  var docks = getDocks(dock);
  var firstResult = null;
  for (var i = 0; i < docks.length; i++) {
    var result = tryDock(elemRect, rect, windowRect, docks[i], options);
    result.position.top += pageYOffset;
    result.toPosition.top += pageYOffset;
    result.position.left += pageXOffset;
    result.toPosition.left += pageXOffset;

    if (options.containerElement) {
      var offset = getOffset(options.containerElement);
      result.position.left -= offset.left;
      result.position.top -= offset.top;
      result.toPosition.left -= offset.left;
      result.toPosition.top -= offset.top;
    }

    if (result.fits) {
      return result;
    }
    if (i === 0) {
      firstResult = result;
    }
  }
  // If no fit is found - return the first position
  return firstResult;
}

function positionToElement(element, alignToElement) {
  var dock = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'bottom';
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var rect = alignToElement.getBoundingClientRect();
  return positionToRect(element, rect, dock, options);
}

function positionToCoordinate(element, x, y) {
  var dock = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'bottom';
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var rect = {
    top: y,
    bottom: y,
    left: x,
    right: x,
    width: 0,
    height: 0
  };
  return positionToRect(element, rect, dock, options);
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button_group__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkbox__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialog__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fade_button__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__icon__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__input__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__input_group__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__list__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__popover__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__radio_button__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__select__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__search__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__switch__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tab__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tabset__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__textarea__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__tooltip__ = __webpack_require__(64);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return __WEBPACK_IMPORTED_MODULE_0__button__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return __WEBPACK_IMPORTED_MODULE_1__button_group__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return __WEBPACK_IMPORTED_MODULE_2__checkbox__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return __WEBPACK_IMPORTED_MODULE_3__dialog__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FadeButton", function() { return __WEBPACK_IMPORTED_MODULE_4__fade_button__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return __WEBPACK_IMPORTED_MODULE_5__icon__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return __WEBPACK_IMPORTED_MODULE_6__input__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroup", function() { return __WEBPACK_IMPORTED_MODULE_7__input_group__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return __WEBPACK_IMPORTED_MODULE_8__list__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return __WEBPACK_IMPORTED_MODULE_9__popover__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButton", function() { return __WEBPACK_IMPORTED_MODULE_10__radio_button__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return __WEBPACK_IMPORTED_MODULE_12__search__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return __WEBPACK_IMPORTED_MODULE_11__select__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return __WEBPACK_IMPORTED_MODULE_13__switch__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return __WEBPACK_IMPORTED_MODULE_14__tab__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Tabset", function() { return __WEBPACK_IMPORTED_MODULE_15__tabset__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return __WEBPACK_IMPORTED_MODULE_16__textarea__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return __WEBPACK_IMPORTED_MODULE_17__tooltip__["a"]; });





















/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






var ButtonGroupButton = function ButtonGroupButton(props) {
  var className = 'lui-buttongroup__button  ' + (props.className || '');
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__button__["a" /* default */],
    _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* filterProps */])(props), { className: className }),
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = ButtonGroupButton;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var ButtonGroup = function ButtonGroup(props) {
  var className = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* luiClassName */])('buttongroup', {
    props: props
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* filterProps */])(props), { className: className }),
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = ButtonGroup;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button_group__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button_group_button__ = __webpack_require__(12);



__WEBPACK_IMPORTED_MODULE_0__button_group__["a" /* default */].Button = __WEBPACK_IMPORTED_MODULE_1__button_group_button__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__button_group__["a" /* default */];

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var ButtonDropdown = function ButtonDropdown() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "lui-button__caret  lui-caret" });
};

/* harmony default export */ __webpack_exports__["a"] = ButtonDropdown;

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon_icon__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




var ButtonIcon = function ButtonIcon(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__icon_icon__["a" /* default */], _extends({ className: 'lui-button__icon' }, props));
};

/* harmony default export */ __webpack_exports__["a"] = ButtonIcon;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var ButtonText = function ButtonText(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "span",
    { className: "lui-button__text" },
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = ButtonText;

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var modifiers = ['variant', 'size', 'block', 'rounded'];
var states = ['active', 'disabled'];

var Button = function Button(props) {
  var className = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* luiClassName */])('button', {
    props: props,
    modifiers: modifiers,
    states: states
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'button',
    _extends({ className: className }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* filterProps */])(props, modifiers, states)),
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = Button;

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




var states = ['active', 'disabled'];
var modifiers = ['variant'];

var Checkbox = function Checkbox(props) {
  var attributes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* filterProps */])(props, states, modifiers, 'title', 'type');

  var className = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* luiClassName */])('checkbox', {
    props: props,
    states: states,
    modifiers: modifiers
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'label',
    { htmlFor: props.htmlFor, title: props.title, className: className },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', _extends({ className: 'lui-checkbox__input', type: 'checkbox' }, attributes)),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'lui-checkbox__check-wrap' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'lui-checkbox__check' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: 'lui-checkbox__check-text' },
        props.children
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = Checkbox;

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checkbox__ = __webpack_require__(19);


/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__checkbox__["a" /* default */];

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




var DialogBody = function DialogBody(props) {
  var className = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* luiClassName */])('dialog__body', { props: props });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    _extends({ className: className }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* filterProps */])(props)),
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = DialogBody;

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




var DialogFooter = function DialogFooter(props) {
  var className = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* luiClassName */])('dialog__footer', { props: props });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    _extends({ className: className }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* filterProps */])(props)),
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = DialogFooter;

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




var DialogHeader = function DialogHeader(props) {
  var className = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* luiClassName */])('dialog__header', { props: props });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    _extends({ className: className }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* filterProps */])(props)),
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = DialogHeader;

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




var DialogTitle = function DialogTitle(props) {
  var className = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* luiClassName */])('dialog__title', { props: props });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    _extends({ className: className }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* filterProps */])(props)),
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = DialogTitle;

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portal__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var FADE_DURATION = 200;

var DIALOG_STATE = {
  opening: 0,
  open: 1,
  closing: 2,
  closed: 3
};

var modifiers = ['variant'];

var currentId = 0;

var Dialog = function (_Component) {
  _inherits(Dialog, _Component);

  function Dialog(props) {
    _classCallCheck(this, Dialog);

    var _this = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));

    _this.portalId = 'rlui-dialog-' + currentId;
    _this.state = {
      dialogState: props.show ? DIALOG_STATE.opening : DIALOG_STATE.closed
    };
    currentId++;

    _this.keyUpListener = _this.keyUpListener.bind(_this);
    _this.transitionToOpen = _this.transitionToOpen.bind(_this);
    _this.transitionToClosed = _this.transitionToClosed.bind(_this);
    return _this;
  }

  _createClass(Dialog, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.state.dialogState === DIALOG_STATE.opening) {
        this.transitionToOpen();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!this.props.show && nextProps.show) {
        this.setState({
          dialogState: DIALOG_STATE.opening
        });
      } else if (this.props.show && !nextProps.show) {
        this.setState({
          dialogState: DIALOG_STATE.closing
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.state.dialogState === DIALOG_STATE.opening) {
        this.transitionToOpen();
      } else if (this.state.dialogState === DIALOG_STATE.closing) {
        this.transitionToClosed();
      }
    }
  }, {
    key: 'keyUpListener',
    value: function keyUpListener(e) {
      if (e.keyCode === 27) {
        this.props.onEscape();
      }
    }
  }, {
    key: 'transitionToOpen',
    value: function transitionToOpen() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({ dialogState: DIALOG_STATE.open });
        if (typeof _this2.props.onEscape === 'function') {
          window.addEventListener('keyup', _this2.keyUpListener);
        }
        if (typeof _this2.props.onOpen === 'function') {
          _this2.props.onOpen();
        }
      }, 0);
    }
  }, {
    key: 'transitionToClosed',
    value: function transitionToClosed() {
      var _this3 = this;

      setTimeout(function () {
        _this3.setState({ dialogState: DIALOG_STATE.closed });
        if (typeof _this3.props.onEscape === 'function') {
          window.removeEventListener('keyup', _this3.keyUpListener);
        }
        if (typeof _this3.props.onClose === 'function') {
          _this3.props.onClose();
        }
      }, FADE_DURATION);
    }
  }, {
    key: 'render',
    value: function render() {
      var dialogState = this.state.dialogState;

      var className = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* luiClassName */])('dialog', {
        props: this.props,
        modifiers: modifiers
      });
      var backgroundClassName = 'lui-modal-background';
      if (dialogState === DIALOG_STATE.opening || dialogState === DIALOG_STATE.closing) {
        className += ' lui-fade';
        backgroundClassName += ' lui-fade';
      }

      var passProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* filterProps */])(this.props, modifiers, 'onEscape', 'show', 'onOpen', 'onClose');

      return dialogState !== DIALOG_STATE.closed ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__portal__["a" /* default */],
        { portalId: this.portalId },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'lui-dialog-container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: backgroundClassName }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            _extends({ className: className, tabIndex: '-1' }, passProps),
            this.props.children
          )
        )
      ) : null;
    }
  }]);

  return Dialog;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = Dialog;

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialog__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialog_body__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_footer__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialog_header__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialog_title__ = __webpack_require__(24);






__WEBPACK_IMPORTED_MODULE_0__dialog__["a" /* default */].Header = __WEBPACK_IMPORTED_MODULE_3__dialog_header__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__dialog__["a" /* default */].Title = __WEBPACK_IMPORTED_MODULE_4__dialog_title__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__dialog__["a" /* default */].Body = __WEBPACK_IMPORTED_MODULE_1__dialog_body__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__dialog__["a" /* default */].Footer = __WEBPACK_IMPORTED_MODULE_2__dialog_footer__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__dialog__["a" /* default */];

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var FadeButtonCaret = function FadeButtonCaret() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "lui-button__caret  lui-caret" });
};

/* harmony default export */ __webpack_exports__["a"] = FadeButtonCaret;

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon_icon__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




var FadeButtonIcon = function FadeButtonIcon(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__icon_icon__["a" /* default */], _extends({ className: 'lui-button__icon' }, props));
};

/* harmony default export */ __webpack_exports__["a"] = FadeButtonIcon;

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var FadeButtonText = function FadeButtonText(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "span",
    { className: "lui-button__text" },
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = FadeButtonText;

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




var states = ['active', 'disabled'];
var modifiers = ['variant', 'block', 'rounded', 'size'];

var FadeButton = function FadeButton(props) {
  var className = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* luiClassName */])('fade-button', {
    props: props,
    states: states,
    modifiers: modifiers
  });

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'button',
    _extends({ className: className }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* filterProps */])(props, modifiers, states)),
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = FadeButton;

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fade_button__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fade_button_icon__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fade_button_text__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fade_button_caret__ = __webpack_require__(27);





__WEBPACK_IMPORTED_MODULE_0__fade_button__["a" /* default */].Icon = __WEBPACK_IMPORTED_MODULE_1__fade_button_icon__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__fade_button__["a" /* default */].Text = __WEBPACK_IMPORTED_MODULE_2__fade_button_text__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__fade_button__["a" /* default */].Caret = __WEBPACK_IMPORTED_MODULE_3__fade_button_caret__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__fade_button__["a" /* default */];

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icon__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__icon__["a" /* default */];

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input_group__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input_group_button__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_group_input__ = __webpack_require__(35);




__WEBPACK_IMPORTED_MODULE_0__input_group__["a" /* default */].Button = __WEBPACK_IMPORTED_MODULE_1__input_group_button__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__input_group__["a" /* default */].Input = __WEBPACK_IMPORTED_MODULE_2__input_group_input__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__input_group__["a" /* default */];

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






var InputGroupButton = function InputGroupButton(props) {
  var className = 'lui-input-group__item  lui-input-group__button  ' + (props.className || '');
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__button__["a" /* default */],
    _extends({ className: className }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* filterProps */])(props)),
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = InputGroupButton;

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






var InputGroupInput = function InputGroupInput(props) {
  var className = 'lui-input-group__item  lui-input-group__input  ' + (props.className || '');
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__input__["a" /* default */], _extends({ className: className }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* filterProps */])(props)));
};

/* harmony default export */ __webpack_exports__["a"] = InputGroupInput;

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var modifiers = ['variant'];

var InputGroup = function InputGroup(props) {
  var className = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* luiClassName */])('input-group', {
    props: props,
    modifiers: modifiers
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    _extends({ className: className }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* filterProps */])(props, modifiers)),
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = InputGroup;

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




var modifiers = ['variant', 'size'];

var states = ['invalid', 'disabled'];

var Input = function Input(props) {
  var className = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* luiClassName */])('input', {
    props: props,
    states: states,
    modifiers: modifiers
  });
  var attributes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* filterProps */])(props, modifiers, states, 'type');
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', _extends({ className: className }, attributes));
};

/* harmony default export */ __webpack_exports__["a"] = Input;

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_item__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_header__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_text__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_aside__ = __webpack_require__(39);






__WEBPACK_IMPORTED_MODULE_0__list__["a" /* default */].Item = __WEBPACK_IMPORTED_MODULE_1__list_item__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__list__["a" /* default */].Header = __WEBPACK_IMPORTED_MODULE_2__list_header__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__list__["a" /* default */].Text = __WEBPACK_IMPORTED_MODULE_3__list_text__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__list__["a" /* default */].Aside = __WEBPACK_IMPORTED_MODULE_4__list_aside__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__list__["a" /* default */];

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




var ListAside = function ListAside(props) {
  var className = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* luiClassName */])('list__aside', { props: props });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    _extends({ className: className }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* filterProps */])(props)),
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = ListAside;

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




var ListAside = function ListAside(props) {
  var className = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* luiClassName */])('list__header', { props: props });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'li',
    _extends({ className: className }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* filterProps */])(props)),
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = ListAside;

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




var ListItem = function ListItem(props) {
  var className = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* luiClassName */])('list__item', { props: props });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'li',
    _extends({ className: className }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* filterProps */])(props)),
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = ListItem;

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




var ListText = function ListText(props) {
  var className = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* luiClassName */])('list__text', { props: props });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    _extends({ className: className }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* filterProps */])(props)),
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = ListText;

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var modifiers = ['variant'];

var List = function List(props) {
  var className = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* luiClassName */])('list', {
    props: props,
    modifiers: modifiers
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'ul',
    _extends({ className: className }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* filterProps */])(props, modifiers)),
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = List;

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popover__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover_body__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_button__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_footer__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popover_header__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popover_title__ = __webpack_require__(9);







__WEBPACK_IMPORTED_MODULE_0__popover__["a" /* default */].Header = __WEBPACK_IMPORTED_MODULE_4__popover_header__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__popover__["a" /* default */].Title = __WEBPACK_IMPORTED_MODULE_5__popover_title__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__popover__["a" /* default */].Body = __WEBPACK_IMPORTED_MODULE_1__popover_body__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__popover__["a" /* default */].Button = __WEBPACK_IMPORTED_MODULE_2__popover_button__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__popover__["a" /* default */].Footer = __WEBPACK_IMPORTED_MODULE_3__popover_footer__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__popover__["a" /* default */];

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






var PopoverButton = function PopoverButton(props) {
  var className = 'lui-popover__button  ' + (props.className || '');
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__button__["a" /* default */],
    _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* filterProps */])(props), { className: className }),
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = PopoverButton;

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__positioner__ = __webpack_require__(10);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var DEFAULT_DOCK = 'bottom';
var OFFSET = 10;

var PopoverContent = function (_Component) {
  _inherits(PopoverContent, _Component);

  function PopoverContent(props) {
    _classCallCheck(this, PopoverContent);

    var _this = _possibleConstructorReturn(this, (PopoverContent.__proto__ || Object.getPrototypeOf(PopoverContent)).call(this, props));

    _this.state = {
      positionResult: null
    };
    _this.reposition = _this.reposition.bind(_this);
    return _this;
  }

  _createClass(PopoverContent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.reposition(this.props.dock, this.props.alignTo);
    }
  }, {
    key: 'reposition',
    value: function reposition(dock, alignTo) {
      var positionResult = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__positioner__["a" /* positionToElement */])(this.popoverElem, alignTo, dock, {
        containerElement: this.props.inline ? this.popoverElem : null,
        dock: this.props.dock || DEFAULT_DOCK,
        offset: OFFSET,
        minWindowOffset: 10,
        minEdgeOffset: 5
      });

      this.setState({
        positionResult: positionResult
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var res = this.state.positionResult;
      var style = {
        visibility: 'hidden',
        position: 'absolute',
        maxWidth: '500px',
        top: res ? res.position.top + 'px' : '-99999px',
        left: res ? res.position.left + 'px' : '-99999px'
      };
      var arrow = {
        dock: '',
        style: {}
      };
      if (res) {
        style.visibility = 'visible';
        arrow.dock = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__positioner__["b" /* oppositeDock */])(res.dock);
        if (arrow.dock === 'top' || arrow.dock === 'bottom') {
          arrow.style.left = res.toPosition.left - res.position.left + 'px';
        } else {
          arrow.style.top = res.toPosition.top - res.position.top + 'px';
        }
      }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          ref: function ref(elem) {
            _this2.popoverElem = elem;
          },
          role: 'dialog',
          className: this.props.className,
          style: style,
          id: this.state.id
        },
        this.props.children,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: 'lui-popover__arrow  lui-popover__arrow--' + arrow.dock,
          style: arrow.style
        })
      );
    }
  }]);

  return PopoverContent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = PopoverContent;

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover_content__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_body__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_footer__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popover_header__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popover_title__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__portal__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var FADE_DURATION = 100;

var POPOVER_STATE = {
  opening: 0,
  open: 1,
  closing: 2,
  closed: 3
};

var modifiers = ['variant'];

var currentId = 0;

var Popover = function (_Component) {
  _inherits(Popover, _Component);

  function Popover(props) {
    _classCallCheck(this, Popover);

    var _this = _possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).call(this, props));

    _this.portalId = 'rlui-popover-' + currentId;
    _this.state = {
      popoverState: props.show ? POPOVER_STATE.opening : POPOVER_STATE.closed
    };
    currentId++;

    _this.outsideListener = _this.outsideListener.bind(_this);
    _this.transitionToOpen = _this.transitionToOpen.bind(_this);
    _this.transitionToClosed = _this.transitionToClosed.bind(_this);
    return _this;
  }

  _createClass(Popover, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.state.popoverState === POPOVER_STATE.opening) {
        this.transitionToOpen();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!this.props.show && nextProps.show) {
        this.setState({
          popoverState: POPOVER_STATE.opening
        });
      } else if (this.props.show && !nextProps.show) {
        this.setState({
          popoverState: POPOVER_STATE.closing
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.state.popoverState === POPOVER_STATE.opening) {
        this.transitionToOpen();
      } else if (this.state.popoverState === POPOVER_STATE.closing) {
        this.transitionToClosed();
      }
    }
  }, {
    key: 'outsideListener',
    value: function outsideListener(e) {
      if (!this.element.contains(e.target)) {
        this.props.onOutside();
      }
    }
  }, {
    key: 'transitionToOpen',
    value: function transitionToOpen() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({ popoverState: POPOVER_STATE.open });
        if (typeof _this2.props.onOutside === 'function') {
          document.addEventListener('click', _this2.outsideListener);
        }
        if (typeof _this2.props.onOpen === 'function') {
          _this2.props.onOpen();
        }
      });
    }
  }, {
    key: 'transitionToClosed',
    value: function transitionToClosed() {
      var _this3 = this;

      if (typeof this.props.onOutside === 'function') {
        document.removeEventListener('click', this.outsideListener);
      }
      setTimeout(function () {
        _this3.setState({ popoverState: POPOVER_STATE.closed });
        if (typeof _this3.props.onClose === 'function') {
          _this3.props.onClose();
        }
      }, FADE_DURATION);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var popoverState = this.state.popoverState;

      var props = this.props;
      var className = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__util__["a" /* luiClassName */])('popover', {
        props: props,
        modifiers: modifiers
      });
      if (popoverState === POPOVER_STATE.opening || popoverState === POPOVER_STATE.closing) {
        className += ' lui-fade';
      }

      if (popoverState === POPOVER_STATE.closed) {
        return null;
      } else if (this.props.inline) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { ref: function ref(el) {
              _this4.element = el;
            } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1__popover_content__["a" /* default */],
            _extends({ className: className, inline: true }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__util__["b" /* filterProps */])(props)),
            props.children
          )
        );
      }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_6__portal__["a" /* default */],
        { portalId: this.portalId },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { ref: function ref(el) {
              _this4.element = el;
            } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1__popover_content__["a" /* default */],
            _extends({ className: className }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__util__["b" /* filterProps */])(props)),
            props.children
          )
        )
      );
    }
  }]);

  return Popover;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Popover.Header = __WEBPACK_IMPORTED_MODULE_4__popover_header__["a" /* default */];
Popover.Title = __WEBPACK_IMPORTED_MODULE_5__popover_title__["a" /* default */];
Popover.Body = __WEBPACK_IMPORTED_MODULE_2__popover_body__["a" /* default */];
Popover.Footer = __WEBPACK_IMPORTED_MODULE_3__popover_footer__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = Popover;

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__radio_button__ = __webpack_require__(49);


/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__radio_button__["a" /* default */];

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var modifiers = ['variant'];
var states = ['active', 'disabled'];

var RadioButton = function RadioButton(props) {
  var className = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* luiClassName */])('radiobutton', {
    props: props,
    modifiers: modifiers,
    states: states
  });

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'label',
    { htmlFor: props.htmlFor, className: className },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', _extends({ className: 'lui-radiobutton__input', type: 'radio' }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* filterProps */])(props, modifiers, states, 'type'))),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'lui-radiobutton__radio-wrap' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'lui-radiobutton__radio' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: 'lui-radiobutton__radio-text' },
        props.children
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = RadioButton;

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search__ = __webpack_require__(51);


/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__search__["a" /* default */];

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var modifiers = ['variant'];
var states = ['disabled'];

// TODO handle outside updates of value

var Search = function (_Component) {
  _inherits(Search, _Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.state = {
      value: null
    };
    return _this;
  }

  _createClass(Search, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.element.addEventListener('input', function (e) {
        _this2.setState({
          value: e.target.value
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var props = this.props;

      var className = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* luiClassName */])('search', {
        props: props,
        states: states,
        modifiers: modifiers
      });
      var attributes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* filterProps */])(props, modifiers, states, 'type');

      var onMouseDown = function onMouseDown(e) {
        e.preventDefault();
        _this3.element.value = '';
        _this3.setState({
          value: ''
        });
      };

      /* eslint-disable jsx-a11y/no-static-element-interactions */
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: className },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'lui-search__search-icon' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', _extends({
          ref: function ref(elem) {
            _this3.element = elem;
          },
          type: 'text',
          className: 'lui-search__input'
        }, attributes)),
        this.state.value ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'lui-search__clear-icon', onMouseDown: onMouseDown }) : null
      );
    }
  }]);

  return Search;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = Search;

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__select__ = __webpack_require__(53);


/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__select__["a" /* default */];

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




var modifiers = ['variant'];
var states = ['active', 'disabled'];

var Select = function Select(props) {
  var className = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* luiClassName */])('select', {
    props: props,
    states: states,
    modifiers: modifiers
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'select',
    _extends({ className: className }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* filterProps */])(props, states, modifiers)),
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = Select;

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__switch__ = __webpack_require__(55);


/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__switch__["a" /* default */];

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




var modifiers = ['variant'];
var states = ['active', 'disabled'];

var Switch = function Switch(props) {
  var className = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* luiClassName */])('switch', {
    props: props,
    states: states,
    modifiers: modifiers
  });

  var attributes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* filterProps */])(props, modifiers, states, 'title', 'type');
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: className, title: props.title },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'label',
      { htmlFor: props.htmlFor, className: 'lui-switch__label' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', _extends({ className: 'lui-switch__checkbox', type: 'checkbox' }, attributes)),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: 'lui-switch__wrap' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'lui-switch__inner' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'lui-switch__switch' })
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = Switch;

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tab__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab_aside__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_text__ = __webpack_require__(58);




__WEBPACK_IMPORTED_MODULE_0__tab__["a" /* default */].Text = __WEBPACK_IMPORTED_MODULE_2__tab_text__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__tab__["a" /* default */].Aside = __WEBPACK_IMPORTED_MODULE_1__tab_aside__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__tab__["a" /* default */];

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var TabAside = function TabAside(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    { className: "lui-tab__aside" },
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = TabAside;

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var TabText = function TabText(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    { className: "lui-tab__text" },
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = TabText;

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var modifiers = ['variant'];
var states = ['active', 'disabled'];

var Tab = function Tab(props) {
  var className = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* luiClassName */])('tab', {
    props: props,
    states: states,
    modifiers: modifiers
  });
  var attributes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* filterProps */])(props, modifiers, states);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'li',
    _extends({ className: className }, attributes),
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = Tab;

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabset__ = __webpack_require__(61);


/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__tabset__["a" /* default */];

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var modifiers = ['variant', 'fill'];

var Tabset = function Tabset(props) {
  var className = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* luiClassName */])('tabset', {
    props: props,
    modifiers: modifiers
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'ul',
    _extends({ className: className }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* filterProps */])(props, modifiers)),
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = Tabset;

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__textarea__ = __webpack_require__(63);


/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__textarea__["a" /* default */];

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




var modifiers = ['variant'];

var states = ['invalid', 'disabled'];

var Textarea = function Textarea(props) {
  var className = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* luiClassName */])('textarea', {
    props: props,
    states: states,
    modifiers: modifiers
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', _extends({ className: className }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* filterProps */])(props, modifiers, states)));
};

/* harmony default export */ __webpack_exports__["a"] = Textarea;

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tooltip__ = __webpack_require__(66);


/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__tooltip__["a" /* default */];

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__positioner__ = __webpack_require__(10);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var DEFAULT_DOCK = 'top';
var OFFSET = 10;

var TooltipContent = function (_Component) {
  _inherits(TooltipContent, _Component);

  function TooltipContent(props) {
    _classCallCheck(this, TooltipContent);

    var _this = _possibleConstructorReturn(this, (TooltipContent.__proto__ || Object.getPrototypeOf(TooltipContent)).call(this, props));

    _this.state = {
      positionResult: null
    };
    _this.reposition = _this.reposition.bind(_this);
    return _this;
  }

  _createClass(TooltipContent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.reposition(this.props.dock, this.props.alignTo);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.dock !== this.props.dock || nextProps.alignTo !== this.props.alignTo) {
        this.reposition(nextProps.dock, nextProps.alignTo);
      }
    }
  }, {
    key: 'reposition',
    value: function reposition(dock, alignTo) {
      var positionResult = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__positioner__["a" /* positionToElement */])(this.element, alignTo, dock, {
        containerElement: this.props.inline ? this.element : null,
        dock: dock || DEFAULT_DOCK,
        offset: OFFSET,
        minWindowOffset: 10,
        minEdgeOffset: 5
      });

      this.setState({
        positionResult: positionResult
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var res = this.state.positionResult;
      var style = {
        position: 'absolute',
        top: res ? res.position.top + 'px' : '-99999px',
        left: res ? res.position.left + 'px' : '-99999px'
      };
      var arrow = {
        dock: '',
        style: {}
      };
      if (res) {
        arrow.style.position = 'absolute';
        arrow.dock = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__positioner__["b" /* oppositeDock */])(res.dock);
        if (arrow.dock === 'top' || arrow.dock === 'bottom') {
          arrow.style.left = res.toPosition.left - res.position.left + 'px';
        } else {
          arrow.style.top = res.toPosition.top - res.position.top + 'px';
        }
      }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          ref: function ref(elem) {
            _this2.element = elem;
          },
          role: 'tooltip',
          className: this.props.className,
          style: style,
          id: this.state.id
        },
        this.props.children,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: 'lui-tooltip__arrow  lui-tooltip__arrow--' + arrow.dock,
          style: arrow.style
        })
      );
    }
  }]);

  return TooltipContent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = TooltipContent;

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portal__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_content__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var currentId = 0;

var FADE_DURATION = 50;

var TOOLTIP_STATE = {
  opening: 0,
  open: 1,
  closing: 2,
  closed: 3
};

var Tooltip = function (_Component) {
  _inherits(Tooltip, _Component);

  function Tooltip(props) {
    _classCallCheck(this, Tooltip);

    var _this = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

    _this.state = {
      tooltipState: props.show ? TOOLTIP_STATE.opening : TOOLTIP_STATE.closed
    };
    _this.portalId = 'rlui-tooltip-' + currentId;
    currentId++;

    _this.transitionToOpen = _this.transitionToOpen.bind(_this);
    _this.transitionToClosed = _this.transitionToClosed.bind(_this);
    return _this;
  }

  _createClass(Tooltip, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.state.tooltipState === TOOLTIP_STATE.opening) {
        this.transitionToOpen();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!this.props.show && nextProps.show) {
        this.setState({
          tooltipState: TOOLTIP_STATE.opening
        });
      } else if (this.props.show && !nextProps.show) {
        this.setState({
          tooltipState: TOOLTIP_STATE.closing
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.state.tooltipState === TOOLTIP_STATE.opening) {
        this.transitionToOpen();
      } else if (this.state.tooltipState === TOOLTIP_STATE.closing) {
        this.transitionToClosed();
      }
    }
  }, {
    key: 'transitionToOpen',
    value: function transitionToOpen() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({ tooltipState: TOOLTIP_STATE.open });
        if (typeof _this2.props.onOpen === 'function') {
          _this2.props.onOpen();
        }
      });
    }
  }, {
    key: 'transitionToClosed',
    value: function transitionToClosed() {
      var _this3 = this;

      setTimeout(function () {
        _this3.setState({ tooltipState: TOOLTIP_STATE.closed });
        if (typeof _this3.props.onClose === 'function') {
          _this3.props.onClose();
        }
      }, FADE_DURATION);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var tooltipState = this.state.tooltipState;
      var className = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* luiClassName */])('tooltip', { props: props });
      if (tooltipState === TOOLTIP_STATE.opening || tooltipState === TOOLTIP_STATE.closing) {
        className += ' lui-fade';
      }

      if (tooltipState === TOOLTIP_STATE.closed) {
        return null;
      } else if (this.props.inline) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2__tooltip_content__["a" /* default */],
          _extends({ inline: true, className: className }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* filterProps */])(props)),
          props.children
        );
      }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__portal__["a" /* default */],
        { portalId: this.portalId },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2__tooltip_content__["a" /* default */],
          _extends({ className: className }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* filterProps */])(props)),
          props.children
        )
      );
    }
  }]);

  return Tooltip;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = Tooltip;

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_67__;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ })
/******/ ]);
});
//# sourceMappingURL=react-leonardo-ui.js.map