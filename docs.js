(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('react-dom')) :
	typeof define === 'function' && define.amd ? define(['react', 'react-dom'], factory) :
	(global.docsContainer = factory(global.React,global.ReactDOM));
}(this, (function (React,reactDom) { 'use strict';

var React__default = 'default' in React ? React['default'] : React;

function luiClassName(name) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var className = opts.className,
      _opts$modifiers = opts.modifiers,
      modifiers = _opts$modifiers === undefined ? {} : _opts$modifiers,
      _opts$states = opts.states,
      states = _opts$states === undefined ? {} : _opts$states;


  var baseClass = 'lui-' + name;
  var resClassName = baseClass;

  Object.keys(modifiers).forEach(function (key) {
    // Modifiers can be booleans or key-value pair of strings
    if (typeof modifiers[key] === 'boolean') {
      if (modifiers[key]) {
        resClassName += ' ' + baseClass + '--' + key;
      }
    } else if (modifiers[key]) {
      resClassName += ' ' + baseClass + '--' + modifiers[key];
    }
  });

  Object.keys(states).forEach(function (key) {
    // States are always booleans
    if (states[key]) {
      resClassName += ' lui-' + key;
    }
  });

  if (className) {
    resClassName += ' ' + className;
  }

  return resClassName;
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Button$1 = function (_Component) {
  inherits(Button, _Component);

  function Button(props) {
    classCallCheck(this, Button);

    var _this = possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this.focus = _this.focus.bind(_this);
    return _this;
  }

  createClass(Button, [{
    key: 'focus',
    value: function focus() {
      this.element.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          variant = _props.variant,
          size = _props.size,
          block = _props.block,
          rounded = _props.rounded,
          active = _props.active,
          extraProps = objectWithoutProperties(_props, ['children', 'className', 'variant', 'size', 'block', 'rounded', 'active']);


      var finalClassName = luiClassName('button', {
        className: className,
        modifiers: {
          variant: variant,
          size: size,
          block: block,
          rounded: rounded
        },
        states: { active: active }
      });

      return React__default.createElement(
        'button',
        _extends({
          ref: function ref(element) {
            _this2.element = element;
          },
          className: finalClassName
        }, extraProps),
        children
      );
    }
  }]);
  return Button;
}(React.Component);

var Icon = function Icon(_ref) {
  var className = _ref.className,
      name = _ref.name,
      size = _ref.size,
      extraProps = objectWithoutProperties(_ref, ['className', 'name', 'size']);

  var finalClassName = luiClassName('icon', {
    className: className,
    modifiers: { name: name, size: size }
  });
  return React__default.createElement('span', _extends({ className: finalClassName, 'aria-hidden': 'true' }, extraProps));
};

var ButtonIcon = function ButtonIcon(props) {
  return React__default.createElement(Icon, _extends({ className: 'lui-button__icon' }, props));
};

var ButtonText = function ButtonText(_ref) {
  var children = _ref.children;
  return React__default.createElement(
    "span",
    { className: "lui-button__text" },
    children
  );
};

var ButtonDropdown = function ButtonDropdown() {
  return React__default.createElement("span", { className: "lui-button__caret  lui-caret" });
};

Button$1.Icon = ButtonIcon;
Button$1.Text = ButtonText;
Button$1.Caret = ButtonDropdown;

var ButtonGroup$1 = function ButtonGroup(_ref) {
  var className = _ref.className,
      children = _ref.children,
      extraProps = objectWithoutProperties(_ref, ['className', 'children']);

  var finalClassName = luiClassName('buttongroup', {
    className: className,
    props: extraProps
  });
  return React__default.createElement(
    'div',
    _extends({}, extraProps, { className: finalClassName }),
    children
  );
};

var ButtonGroupButton = function ButtonGroupButton(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      children = _ref.children,
      extraProps = objectWithoutProperties(_ref, ['className', 'children']);

  var finalClassName = ('lui-buttongroup__button  ' + className).trim();
  return React__default.createElement(
    Button$1,
    _extends({}, extraProps, { className: finalClassName }),
    children
  );
};

ButtonGroup$1.Button = ButtonGroupButton;

var Checkbox$1 = function Checkbox(_ref) {
  var children = _ref.children,
      className = _ref.className,
      title = _ref.title,
      htmlFor = _ref.htmlFor,
      active = _ref.active,
      variant = _ref.variant,
      extraProps = objectWithoutProperties(_ref, ['children', 'className', 'title', 'htmlFor', 'active', 'variant']);

  var finalClassName = luiClassName('checkbox', {
    className: className,
    states: { active: active },
    modifiers: { variant: variant }
  });
  return React__default.createElement(
    'label',
    { htmlFor: htmlFor, title: title, className: finalClassName },
    React__default.createElement('input', _extends({ className: 'lui-checkbox__input', type: 'checkbox' }, extraProps)),
    React__default.createElement(
      'div',
      { className: 'lui-checkbox__check-wrap' },
      React__default.createElement('span', { className: 'lui-checkbox__check' }),
      React__default.createElement(
        'span',
        { className: 'lui-checkbox__check-text' },
        children
      )
    )
  );
};

var TOOLTIP_STATE = {
  opening: 0,
  open: 1,
  closing: 2,
  closed: 3
};

var FADE_DURATION = 200;
var currentId = 0;

var Dialog$1 = function (_Component) {
  inherits(Dialog, _Component);

  function Dialog(props) {
    classCallCheck(this, Dialog);

    var _this = possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));

    _this.portalId = 'rlui-dialog-' + currentId;
    _this.state = {
      dialogState: TOOLTIP_STATE.closed
    };
    currentId += 1;

    _this.keyUpListener = _this.keyUpListener.bind(_this);
    _this.openDialog = _this.openDialog.bind(_this);
    _this.closeDialog = _this.closeDialog.bind(_this);

    if (typeof document !== 'undefined') {
      _this.parentElement = props.parentElement || document.body;

      _this.containerElement = document.createElement('div');
      _this.containerElement.id = _this.portalId;
    }
    return _this;
  }

  createClass(Dialog, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.show) {
        this.openDialog();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!this.props.show && nextProps.show) {
        this.openDialog();
      } else if (this.props.show && !nextProps.show) {
        this.closeDialog();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this2 = this;

      var dialogState = this.state.dialogState;
      var _props = this.props,
          onEscape = _props.onEscape,
          onOpen = _props.onOpen,
          onClose = _props.onClose;


      if (dialogState === TOOLTIP_STATE.opening) {
        setTimeout(function () {
          _this2.setState(function () {
            return {
              dialogState: TOOLTIP_STATE.open
            };
          });
          if (typeof onEscape === 'function') {
            window.addEventListener('keyup', _this2.keyUpListener);
          }
          if (typeof onOpen === 'function') {
            onOpen();
          }
        });
      } else if (dialogState === TOOLTIP_STATE.closing) {
        if (typeof onEscape === 'function') {
          window.removeEventListener('keyup', this.keyUpListener);
        }
        setTimeout(function () {
          _this2.setState(function () {
            return {
              dialogState: TOOLTIP_STATE.closed
            };
          });
          if (typeof onClose === 'function') {
            onClose();
          }
          _this2.parentElement.removeChild(_this2.containerElement);
        }, FADE_DURATION);
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
    key: 'openDialog',
    value: function openDialog() {
      this.parentElement.appendChild(this.containerElement);

      this.setState(function () {
        return {
          dialogState: TOOLTIP_STATE.opening
        };
      });
    }
  }, {
    key: 'closeDialog',
    value: function closeDialog() {
      this.setState(function () {
        return {
          dialogState: TOOLTIP_STATE.closing
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          children = _props2.children,
          variant = _props2.variant,
          show = _props2.show,
          onEscape = _props2.onEscape,
          onOpen = _props2.onOpen,
          onClose = _props2.onClose,
          parentElement = _props2.parentElement,
          extraProps = objectWithoutProperties(_props2, ['className', 'children', 'variant', 'show', 'onEscape', 'onOpen', 'onClose', 'parentElement']);
      var dialogState = this.state.dialogState;


      if (dialogState === TOOLTIP_STATE.closed) {
        return null;
      }

      var dialogClassName = luiClassName('dialog', {
        className: className,
        modifiers: { variant: variant }
      });
      var backgroundClassName = 'lui-modal-background';

      if (dialogState === TOOLTIP_STATE.opening || dialogState === TOOLTIP_STATE.closing) {
        dialogClassName += ' lui-fade';
        backgroundClassName += ' lui-fade';
      }

      return reactDom.createPortal(React__default.createElement(
        'div',
        { className: 'lui-dialog-container' },
        React__default.createElement('div', { className: backgroundClassName }),
        React__default.createElement(
          'div',
          _extends({ className: dialogClassName, tabIndex: '-1' }, extraProps),
          children
        )
      ), this.containerElement);
    }
  }]);
  return Dialog;
}(React.Component);

var DialogBody = function DialogBody(_ref) {
  var className = _ref.className,
      children = _ref.children,
      nopad = _ref.nopad,
      extraProps = objectWithoutProperties(_ref, ['className', 'children', 'nopad']);

  var finalClassName = luiClassName('dialog__body', {
    className: className,
    states: { nopad: nopad }
  });
  return React__default.createElement(
    'div',
    _extends({ className: finalClassName }, extraProps),
    children
  );
};

var DialogFooter = function DialogFooter(_ref) {
  var className = _ref.className,
      children = _ref.children,
      nopad = _ref.nopad,
      extraProps = objectWithoutProperties(_ref, ['className', 'children', 'nopad']);

  var finalClassName = luiClassName('dialog__footer', {
    className: className,
    states: { nopad: nopad }
  });
  return React__default.createElement(
    'div',
    _extends({ className: finalClassName }, extraProps),
    children
  );
};

var DialogHeader = function DialogHeader(_ref) {
  var className = _ref.className,
      children = _ref.children,
      nopad = _ref.nopad,
      extraProps = objectWithoutProperties(_ref, ['className', 'children', 'nopad']);

  var finalClassName = luiClassName('dialog__header', {
    className: className,
    states: { nopad: nopad }
  });
  return React__default.createElement(
    'div',
    _extends({ className: finalClassName }, extraProps),
    children
  );
};

var DialogTitle = function DialogTitle(_ref) {
  var className = _ref.className,
      children = _ref.children,
      extraProps = objectWithoutProperties(_ref, ['className', 'children']);

  var finalClassName = luiClassName('dialog__title', { className: className });
  return React__default.createElement(
    'div',
    _extends({ className: finalClassName }, extraProps),
    children
  );
};

Dialog$1.Header = DialogHeader;
Dialog$1.Title = DialogTitle;
Dialog$1.Body = DialogBody;
Dialog$1.Footer = DialogFooter;

var Input$1 = function (_Component) {
  inherits(Input, _Component);

  function Input(props) {
    classCallCheck(this, Input);

    var _this = possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.focus = _this.focus.bind(_this);
    return _this;
  }

  createClass(Input, [{
    key: 'focus',
    value: function focus() {
      this.element.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          variant = _props.variant,
          size = _props.size,
          invalid = _props.invalid,
          extraProps = objectWithoutProperties(_props, ['className', 'variant', 'size', 'invalid']);

      var finalClassName = luiClassName('input', {
        className: className,
        modifiers: { variant: variant, size: size },
        states: { invalid: invalid }
      });
      return React__default.createElement('input', _extends({
        ref: function ref(element) {
          _this2.element = element;
        },
        className: finalClassName
      }, extraProps));
    }
  }]);
  return Input;
}(React.Component);

var InputGroup$1 = function InputGroup(_ref) {
  var className = _ref.className,
      children = _ref.children,
      variant = _ref.variant,
      extraProps = objectWithoutProperties(_ref, ['className', 'children', 'variant']);

  var finalClassName = luiClassName('input-group', {
    className: className,
    modifiers: { variant: variant }
  });
  return React__default.createElement(
    'div',
    _extends({ className: finalClassName }, extraProps),
    children
  );
};

var InputGroupButton = function InputGroupButton(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      children = _ref.children,
      extraProps = objectWithoutProperties(_ref, ['className', 'children']);

  var finalClassName = ('lui-input-group__item  lui-input-group__button  ' + className).trim();
  return React__default.createElement(
    Button$1,
    _extends({ className: finalClassName }, extraProps),
    children
  );
};

var InputGroupInput = function InputGroupInput(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      extraProps = objectWithoutProperties(_ref, ['className']);

  var finalClassName = ('lui-input-group__item  lui-input-group__input  ' + className).trim();
  return React__default.createElement(Input$1, _extends({ className: finalClassName }, extraProps));
};

InputGroup$1.Button = InputGroupButton;
InputGroup$1.Input = InputGroupInput;

var List$1 = function List(_ref) {
  var className = _ref.className,
      children = _ref.children,
      variant = _ref.variant,
      extraProps = objectWithoutProperties(_ref, ['className', 'children', 'variant']);

  var finalClassName = luiClassName('list', {
    className: className,
    modifiers: { variant: variant }
  });
  return React__default.createElement(
    'ul',
    _extends({ className: finalClassName }, extraProps),
    children
  );
};

var ListItem = function ListItem(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      children = _ref.children,
      extraProps = objectWithoutProperties(_ref, ['className', 'children']);

  var finalClassName = ('lui-list__item  ' + className).trim();
  return React__default.createElement(
    'li',
    _extends({ className: finalClassName }, extraProps),
    children
  );
};

var ListHeader = function ListHeader(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      children = _ref.children,
      extraProps = objectWithoutProperties(_ref, ['className', 'children']);

  var finalClassName = ('lui-list__header  ' + className).trim();
  return React__default.createElement(
    'li',
    _extends({ className: finalClassName }, extraProps),
    children
  );
};

var ListText = function ListText(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      children = _ref.children,
      extraProps = objectWithoutProperties(_ref, ['className', 'children']);

  var finalClassName = ('lui-list__text  ' + className).trim();
  return React__default.createElement(
    'div',
    _extends({ className: finalClassName }, extraProps),
    children
  );
};

var ListAside = function ListAside(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      children = _ref.children,
      extraProps = objectWithoutProperties(_ref, ['className', 'children']);

  var finalClassName = ('lui-list__aside  ' + className).trim();
  return React__default.createElement(
    'div',
    _extends({ className: finalClassName }, extraProps),
    children
  );
};

List$1.Item = ListItem;
List$1.Header = ListHeader;
List$1.Text = ListText;
List$1.Aside = ListAside;

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
    top = rect.top; // eslint-disable-line prefer-destructuring
    left = rect.left + rect.width / 2;
  } else if (dock === 'right') {
    top = rect.top + rect.height / 2;
    left = rect.right;
  } else if (dock === 'left') {
    top = rect.top + rect.height / 2;
    left = rect.left; // eslint-disable-line prefer-destructuring
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
  var _window = window,
      pageXOffset = _window.pageXOffset,
      pageYOffset = _window.pageYOffset;

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
  for (var i = 0; i < docks.length; i += 1) {
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

var DEFAULT_DOCK = 'bottom';
var OFFSET = 10;

var PopoverContent = function (_Component) {
  inherits(PopoverContent, _Component);

  function PopoverContent(props) {
    classCallCheck(this, PopoverContent);

    var _this = possibleConstructorReturn(this, (PopoverContent.__proto__ || Object.getPrototypeOf(PopoverContent)).call(this, props));

    _this.state = {
      positionResult: null
    };
    _this.reposition = _this.reposition.bind(_this);
    return _this;
  }

  createClass(PopoverContent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.reposition(this.props.dock, this.props.alignTo);
    }
  }, {
    key: 'reposition',
    value: function reposition(dock, alignTo) {
      var positionResult = positionToElement(this.popoverElem, alignTo, dock, {
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
        arrow.dock = oppositeDock(res.dock);
        if (arrow.dock === 'top' || arrow.dock === 'bottom') {
          arrow.style.left = res.toPosition.left - res.position.left + 'px';
        } else {
          arrow.style.top = res.toPosition.top - res.position.top + 'px';
        }
      }
      return React__default.createElement(
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
        React__default.createElement('div', {
          className: 'lui-popover__arrow  lui-popover__arrow--' + arrow.dock,
          style: arrow.style
        })
      );
    }
  }]);
  return PopoverContent;
}(React.Component);

var FADE_DURATION$1 = 100;

var currentId$1 = 0;

var Popover$1 = function (_Component) {
  inherits(Popover, _Component);

  function Popover(props) {
    classCallCheck(this, Popover);

    var _this = possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).call(this, props));

    _this.portalId = 'rlui-popover-' + currentId$1;
    _this.state = {
      popoverState: TOOLTIP_STATE.closed
    };
    currentId$1 += 1;

    _this.outsideListener = _this.outsideListener.bind(_this);
    _this.keyUpListener = _this.keyUpListener.bind(_this);
    _this.openPopover = _this.openPopover.bind(_this);
    _this.closePopover = _this.closePopover.bind(_this);

    if (!props.inline && typeof document !== 'undefined') {
      _this.parentElement = props.parentElement || document.body;

      _this.containerElement = document.createElement('div');
      _this.containerElement.id = _this.props.portalId;
    }
    return _this;
  }

  createClass(Popover, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.show) {
        this.openPopover();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!this.props.show && nextProps.show) {
        this.openPopover();
      } else if (this.props.show && !nextProps.show) {
        this.closePopover();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this2 = this;

      var popoverState = this.state.popoverState;
      var _props = this.props,
          inline = _props.inline,
          onEscape = _props.onEscape,
          onOpen = _props.onOpen,
          onClose = _props.onClose,
          onOutside = _props.onOutside;


      if (popoverState === TOOLTIP_STATE.opening) {
        setTimeout(function () {
          _this2.setState(function () {
            return {
              popoverState: TOOLTIP_STATE.open
            };
          });
          if (typeof onEscape === 'function') {
            window.addEventListener('keyup', _this2.keyUpListener);
          }
          if (typeof onOutside === 'function') {
            document.addEventListener('click', _this2.outsideListener);
          }
          if (typeof onOpen === 'function') {
            onOpen();
          }
        });
      } else if (popoverState === TOOLTIP_STATE.closing) {
        if (typeof onEscape === 'function') {
          window.removeEventListener('keyup', this.keyUpListener);
        }
        if (typeof onOutside === 'function') {
          document.removeEventListener('click', this.outsideListener);
        }
        setTimeout(function () {
          _this2.setState(function () {
            return {
              popoverState: TOOLTIP_STATE.closed
            };
          });
          if (typeof onClose === 'function') {
            onClose();
          }
          if (!inline) {
            _this2.parentElement.removeChild(_this2.containerElement);
          }
        }, FADE_DURATION$1);
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
    key: 'outsideListener',
    value: function outsideListener(e) {
      if (!this.element.contains(e.target)) {
        this.props.onOutside();
      }
    }
  }, {
    key: 'openPopover',
    value: function openPopover() {
      if (!this.props.inline) {
        this.parentElement.appendChild(this.containerElement);
      }

      this.setState(function () {
        return {
          popoverState: TOOLTIP_STATE.opening
        };
      });
    }
  }, {
    key: 'closePopover',
    value: function closePopover() {
      this.setState(function () {
        return {
          popoverState: TOOLTIP_STATE.closing
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var popoverState = this.state.popoverState;


      if (popoverState === TOOLTIP_STATE.closed) {
        return null;
      }

      var _props2 = this.props,
          className = _props2.className,
          children = _props2.children,
          inline = _props2.inline,
          variant = _props2.variant,
          extraProps = objectWithoutProperties(_props2, ['className', 'children', 'inline', 'variant']);


      var popoverClassName = luiClassName('popover', {
        className: className,
        modifiers: { variant: variant }
      });
      if (popoverState === TOOLTIP_STATE.opening || popoverState === TOOLTIP_STATE.closing) {
        popoverClassName += ' lui-fade';
      }

      if (inline) {
        return React__default.createElement(
          'div',
          { ref: function ref(el) {
              _this3.element = el;
            } },
          React__default.createElement(
            PopoverContent,
            _extends({ className: popoverClassName, inline: true }, extraProps),
            children
          )
        );
      }

      return reactDom.createPortal(React__default.createElement(
        'div',
        { ref: function ref(el) {
            _this3.element = el;
          } },
        React__default.createElement(
          PopoverContent,
          _extends({ className: popoverClassName }, extraProps),
          children
        )
      ), this.containerElement);
    }
  }]);
  return Popover;
}(React.Component);

var PopoverBody = function PopoverBody(_ref) {
  var className = _ref.className,
      children = _ref.children,
      nopad = _ref.nopad,
      extraProps = objectWithoutProperties(_ref, ['className', 'children', 'nopad']);

  var finalClassName = luiClassName('popover__body', {
    className: className,
    states: { nopad: nopad }
  });
  return React__default.createElement(
    'div',
    _extends({ className: finalClassName }, extraProps),
    children
  );
};

var PopoverButton = function PopoverButton(_ref) {
  var className = _ref.className,
      children = _ref.children,
      extraProps = objectWithoutProperties(_ref, ['className', 'children']);

  var finalClassName = ('lui-popover__button ' + className).trim();
  return React__default.createElement(
    Button$1,
    _extends({ className: finalClassName }, extraProps),
    children
  );
};

var PopoverFooter = function PopoverFooter(_ref) {
  var className = _ref.className,
      children = _ref.children,
      nopad = _ref.nopad,
      extraProps = objectWithoutProperties(_ref, ['className', 'children', 'nopad']);

  var finalClassName = luiClassName('popover__footer', {
    className: className,
    states: { nopad: nopad }
  });
  return React__default.createElement(
    'div',
    _extends({ className: finalClassName }, extraProps),
    children
  );
};

var PopoverHeader = function PopoverHeader(_ref) {
  var className = _ref.className,
      children = _ref.children,
      nopad = _ref.nopad,
      extraProps = objectWithoutProperties(_ref, ['className', 'children', 'nopad']);

  var finalClassName = luiClassName('popover__header', {
    className: className,
    states: { nopad: nopad }
  });
  return React__default.createElement(
    'div',
    _extends({ className: finalClassName }, extraProps),
    children
  );
};

var PopoverTitle = function PopoverTitle(_ref) {
  var className = _ref.className,
      children = _ref.children,
      extraProps = objectWithoutProperties(_ref, ['className', 'children']);

  var finalClassName = luiClassName('popover__title', { className: className });
  return React__default.createElement(
    'div',
    _extends({ className: finalClassName }, extraProps),
    children
  );
};

Popover$1.Header = PopoverHeader;
Popover$1.Title = PopoverTitle;
Popover$1.Body = PopoverBody;
Popover$1.Button = PopoverButton;
Popover$1.Footer = PopoverFooter;

var RadioButton$1 = function RadioButton(_ref) {
  var children = _ref.children,
      className = _ref.className,
      title = _ref.title,
      htmlFor = _ref.htmlFor,
      active = _ref.active,
      variant = _ref.variant,
      extraProps = objectWithoutProperties(_ref, ['children', 'className', 'title', 'htmlFor', 'active', 'variant']);

  var finalClassName = luiClassName('radiobutton', {
    className: className,
    states: { active: active },
    modifiers: { variant: variant }
  });

  return React__default.createElement(
    'label',
    { htmlFor: htmlFor, className: finalClassName },
    React__default.createElement('input', _extends({ className: 'lui-radiobutton__input' }, extraProps, { type: 'radio' })),
    React__default.createElement(
      'div',
      { className: 'lui-radiobutton__radio-wrap' },
      React__default.createElement('span', { className: 'lui-radiobutton__radio' }),
      React__default.createElement(
        'span',
        { className: 'lui-radiobutton__radio-text' },
        children
      )
    )
  );
};

var Select$1 = function (_Component) {
  inherits(Select, _Component);

  function Select(props) {
    classCallCheck(this, Select);

    var _this = possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _this.focus = _this.focus.bind(_this);
    return _this;
  }

  createClass(Select, [{
    key: 'focus',
    value: function focus() {
      this.element.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          active = _props.active,
          variant = _props.variant,
          extraProps = objectWithoutProperties(_props, ['children', 'className', 'active', 'variant']);


      var finalClassName = luiClassName('select', {
        className: className,
        modifiers: { variant: variant },
        states: { active: active }
      });

      return React__default.createElement(
        'select',
        _extends({
          ref: function ref(element) {
            _this2.element = element;
          },
          className: finalClassName
        }, extraProps),
        children
      );
    }
  }]);
  return Select;
}(React.Component);

var Search$1 = function (_Component) {
  inherits(Search, _Component);

  function Search(props) {
    classCallCheck(this, Search);

    var _this = possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.focus = _this.focus.bind(_this);
    _this.onClearClick = _this.onClearClick.bind(_this);
    return _this;
  }

  createClass(Search, [{
    key: 'onClearClick',
    value: function onClearClick(e) {
      e.preventDefault();
      if (typeof this.props.onClear === 'function') {
        this.props.onClear();
      }
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.element.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          children = _props.children,
          variant = _props.variant,
          value = _props.value,
          onClear = _props.onClear,
          extraProps = objectWithoutProperties(_props, ['className', 'children', 'variant', 'value', 'onClear']);


      var finalClassName = luiClassName('search', {
        className: className,
        modifiers: { variant: variant }
      });

      return React__default.createElement(
        'div',
        { className: finalClassName },
        React__default.createElement('span', { className: 'lui-icon  lui-icon--search  lui-search__search-icon' }),
        React__default.createElement('input', _extends({
          ref: function ref(elem) {
            _this2.element = elem;
          },
          className: 'lui-search__input'
        }, extraProps, {
          type: 'text'
        })),
        value ? React__default.createElement(
          'button',
          {
            className: 'lui-search__clear-button',
            onClick: this.onClearClick
          },
          React__default.createElement('span', {
            className: 'lui-icon  lui-icon--small  lui-icon--close'
          })
        ) : null
      );
    }
  }]);
  return Search;
}(React.Component);

var Switch$1 = function (_Component) {
  inherits(Switch, _Component);

  function Switch(props) {
    classCallCheck(this, Switch);

    var _this = possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this, props));

    _this.focus = _this.focus.bind(_this);
    return _this;
  }

  createClass(Switch, [{
    key: 'focus',
    value: function focus() {
      this.element.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          title = _props.title,
          htmlFor = _props.htmlFor,
          active = _props.active,
          variant = _props.variant,
          extraProps = objectWithoutProperties(_props, ['children', 'className', 'title', 'htmlFor', 'active', 'variant']);


      var finalClassName = luiClassName('switch', {
        className: className,
        modifiers: { variant: variant },
        states: { active: active }
      });

      return React__default.createElement(
        'div',
        { className: finalClassName, title: title },
        React__default.createElement(
          'label',
          { htmlFor: htmlFor, className: 'lui-switch__label' },
          React__default.createElement('input', _extends({
            ref: function ref(element) {
              _this2.element = element;
            },
            className: 'lui-switch__checkbox'
          }, extraProps, {
            type: 'checkbox'
          })),
          React__default.createElement(
            'span',
            { className: 'lui-switch__wrap' },
            React__default.createElement('div', { className: 'lui-switch__inner' }),
            React__default.createElement('div', { className: 'lui-switch__switch' })
          )
        )
      );
    }
  }]);
  return Switch;
}(React.Component);

var Tab$1 = function Tab(_ref) {
  var className = _ref.className,
      children = _ref.children,
      variant = _ref.variant,
      active = _ref.active,
      disabled = _ref.disabled,
      extraProps = objectWithoutProperties(_ref, ['className', 'children', 'variant', 'active', 'disabled']);

  var finalClassName = luiClassName('tab', {
    className: className,
    modifiers: { variant: variant },
    states: { active: active, disabled: disabled }
  });

  return React__default.createElement(
    'li',
    _extends({ className: finalClassName }, extraProps),
    children
  );
};

var TabAside = function TabAside(props) {
  return React__default.createElement(
    "div",
    { className: "lui-tab__aside" },
    props.children
  );
};

var TabText = function TabText(props) {
  return React__default.createElement(
    "div",
    { className: "lui-tab__text" },
    props.children
  );
};

Tab$1.Text = TabText;
Tab$1.Aside = TabAside;

var Tabset$1 = function Tabset(_ref) {
  var className = _ref.className,
      children = _ref.children,
      variant = _ref.variant,
      fill = _ref.fill,
      extraProps = objectWithoutProperties(_ref, ['className', 'children', 'variant', 'fill']);

  var finalClassName = luiClassName('tabset', {
    className: className,
    modifiers: { variant: variant, fill: fill }
  });
  return React__default.createElement(
    'ul',
    _extends({ className: finalClassName }, extraProps),
    children
  );
};

var Textarea$1 = function (_Component) {
  inherits(Textarea, _Component);

  function Textarea(props) {
    classCallCheck(this, Textarea);

    var _this = possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this, props));

    _this.focus = _this.focus.bind(_this);
    return _this;
  }

  createClass(Textarea, [{
    key: 'focus',
    value: function focus() {
      this.element.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          children = _props.children,
          variant = _props.variant,
          invalid = _props.invalid,
          extraProps = objectWithoutProperties(_props, ['className', 'children', 'variant', 'invalid']);


      var finalClassName = luiClassName('textarea', {
        className: className,
        modifiers: { variant: variant },
        states: { invalid: invalid }
      });

      return React__default.createElement('textarea', _extends({
        ref: function ref(element) {
          _this2.element = element;
        },
        className: finalClassName
      }, extraProps));
    }
  }]);
  return Textarea;
}(React.Component);

var FADE_DURATION$2 = 200;
var currentId$2 = 0;

var getOrCreateContainer = function getOrCreateContainer(parentElement) {
  var element = document.getElementById('lui-toast-container');
  if (!element) {
    element = document.createElement('div');
    element.classList.add('lui-toast-container');
    element.id = 'lui-toast-container';
    parentElement.appendChild(element);
  }
  return element;
};

var Toast$1 = function (_Component) {
  inherits(Toast, _Component);

  function Toast(props) {
    classCallCheck(this, Toast);

    var _this = possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).call(this, props));

    currentId$2 += 1;
    _this.portalId = 'rlui-toast-' + currentId$2;
    _this.state = {
      toastState: TOOLTIP_STATE.closed
    };

    _this.openToast = _this.openToast.bind(_this);
    _this.closeToast = _this.closeToast.bind(_this);

    if (typeof document !== 'undefined') {
      _this.parentElement = props.parentElement || document.body;
    }
    return _this;
  }

  createClass(Toast, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.show) {
        this.openToast();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!this.props.show && nextProps.show) {
        this.openToast();
      } else if (this.props.show && !nextProps.show) {
        this.closeToast();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this2 = this;

      if (this.state.toastState === TOOLTIP_STATE.opening) {
        setTimeout(function () {
          _this2.setState(function () {
            return {
              toastState: TOOLTIP_STATE.open
            };
          });
          if (typeof _this2.props.onOutside === 'function') {
            document.addEventListener('click', _this2.outsideListener);
          }
          if (typeof _this2.props.onOpen === 'function') {
            _this2.props.onOpen();
          }
        });
      } else if (this.state.toastState === TOOLTIP_STATE.closing) {
        if (typeof this.props.onOutside === 'function') {
          document.removeEventListener('click', this.outsideListener);
        }
        setTimeout(function () {
          _this2.setState(function () {
            return {
              toastState: TOOLTIP_STATE.closed
            };
          });
          if (typeof _this2.props.onClose === 'function') {
            _this2.props.onClose();
          }
        }, FADE_DURATION$2);
      }
    }
  }, {
    key: 'openToast',
    value: function openToast() {
      this.setState(function () {
        return {
          toastState: TOOLTIP_STATE.opening
        };
      });
    }
  }, {
    key: 'closeToast',
    value: function closeToast() {
      this.setState(function () {
        return {
          toastState: TOOLTIP_STATE.closing
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var toastState = this.state.toastState;


      if (toastState === TOOLTIP_STATE.closed) {
        return null;
      }

      var _props = this.props,
          className = _props.className,
          children = _props.children,
          dock = _props.dock,
          alignTo = _props.alignTo,
          inline = _props.inline,
          variant = _props.variant,
          show = _props.show,
          onOpen = _props.onOpen,
          onClose = _props.onClose,
          parentElement = _props.parentElement,
          extraProps = objectWithoutProperties(_props, ['className', 'children', 'dock', 'alignTo', 'inline', 'variant', 'show', 'onOpen', 'onClose', 'parentElement']);


      var toastClassName = luiClassName('toast', {
        className: className,
        modifiers: { variant: variant }
      });

      var style = {
        bottom: '-50px'
      };
      if (toastState === TOOLTIP_STATE.opening || toastState === TOOLTIP_STATE.closing) {
        toastClassName += ' lui-fade';
      } else {
        style.bottom = '10px';
      }

      var containerElement = getOrCreateContainer(this.parentElement);
      return reactDom.createPortal(React__default.createElement(
        'div',
        _extends({
          ref: function ref(el) {
            _this3.toast = el;
          },
          className: toastClassName,
          style: style
        }, extraProps),
        children
      ), containerElement);
    }
  }]);
  return Toast;
}(React.Component);

var ToastAction = function ToastAction(_ref) {
  var className = _ref.className,
      children = _ref.children,
      extraProps = objectWithoutProperties(_ref, ['className', 'children']);

  var finalClassName = ('lui-toast__aside ' + className).trim();
  return React__default.createElement(
    'div',
    _extends({ className: finalClassName }, extraProps),
    children
  );
};

var ToastText = function ToastText(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      children = _ref.children,
      extraProps = objectWithoutProperties(_ref, ['className', 'children']);

  var finalClassName = ('lui-toast__text ' + className).trim();
  return React__default.createElement(
    'div',
    _extends({ className: finalClassName }, extraProps),
    children
  );
};

Toast$1.Action = ToastAction;
Toast$1.Text = ToastText;

var DEFAULT_DOCK$1 = 'top';
var OFFSET$1 = 10;

var TooltipContent = function (_Component) {
  inherits(TooltipContent, _Component);

  function TooltipContent(props) {
    classCallCheck(this, TooltipContent);

    var _this = possibleConstructorReturn(this, (TooltipContent.__proto__ || Object.getPrototypeOf(TooltipContent)).call(this, props));

    _this.state = {
      positionResult: null
    };
    _this.reposition = _this.reposition.bind(_this);
    return _this;
  }

  createClass(TooltipContent, [{
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
      var positionResult = positionToElement(this.element, alignTo, dock, {
        containerElement: this.props.inline ? this.element : null,
        dock: dock || DEFAULT_DOCK$1,
        offset: OFFSET$1,
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
        arrow.dock = oppositeDock(res.dock);
        if (arrow.dock === 'top' || arrow.dock === 'bottom') {
          arrow.style.left = res.toPosition.left - res.position.left + 'px';
        } else {
          arrow.style.top = res.toPosition.top - res.position.top + 'px';
        }
      }
      return React__default.createElement(
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
        React__default.createElement('div', {
          className: 'lui-tooltip__arrow  lui-tooltip__arrow--' + arrow.dock,
          style: arrow.style
        })
      );
    }
  }]);
  return TooltipContent;
}(React.Component);

var FADE_DURATION$3 = 50;
var currentId$3 = 0;

var Tooltip$1 = function (_Component) {
  inherits(Tooltip, _Component);

  function Tooltip(props) {
    classCallCheck(this, Tooltip);

    var _this = possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

    _this.state = {
      tooltipState: props.show ? TOOLTIP_STATE.opening : TOOLTIP_STATE.closed
    };
    _this.portalId = 'rlui-tooltip-' + currentId$3;
    currentId$3 += 1;

    _this.openTooltip = _this.openTooltip.bind(_this);
    _this.closeTooltip = _this.closeTooltip.bind(_this);

    if (!props.inline && typeof document !== 'undefined') {
      _this.parentElement = props.parentElement || document.body;

      _this.containerElement = document.createElement('div');
      _this.containerElement.id = _this.portalId;
    }
    return _this;
  }

  createClass(Tooltip, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.inline) {
        this.parentElement.appendChild(this.containerElement);
      }

      if (this.state.tooltipState === TOOLTIP_STATE.opening) {
        this.openTooltip();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!this.props.show && nextProps.show) {
        this.openTooltip();
      } else if (this.props.show && !nextProps.show) {
        this.closeTooltip();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this2 = this;

      var tooltipState = this.state.tooltipState;
      var _props = this.props,
          inline = _props.inline,
          onOpen = _props.onOpen,
          onClose = _props.onClose;


      if (tooltipState === TOOLTIP_STATE.opening) {
        setTimeout(function () {
          _this2.setState(function () {
            return {
              tooltipState: TOOLTIP_STATE.open
            };
          });
          if (typeof onOpen === 'function') {
            onOpen();
          }
        });
      } else if (tooltipState === TOOLTIP_STATE.closing) {
        setTimeout(function () {
          _this2.setState(function () {
            return {
              tooltipState: TOOLTIP_STATE.closed
            };
          });

          if (typeof onClose === 'function') {
            onClose();
          }

          if (!inline) {
            _this2.parentElement.removeChild(_this2.containerElement);
          }
        }, FADE_DURATION$3);
      }
    }
  }, {
    key: 'openTooltip',
    value: function openTooltip() {
      this.setState(function () {
        return {
          tooltipState: TOOLTIP_STATE.opening
        };
      });
    }
  }, {
    key: 'closeTooltip',
    value: function closeTooltip() {
      this.setState(function () {
        return {
          tooltipState: TOOLTIP_STATE.closing
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var tooltipState = this.state.tooltipState;


      if (tooltipState === TOOLTIP_STATE.closed) {
        return null;
      }

      var _props2 = this.props,
          className = _props2.className,
          children = _props2.children,
          inline = _props2.inline,
          variant = _props2.variant,
          extraProps = objectWithoutProperties(_props2, ['className', 'children', 'inline', 'variant']);


      var tooltipClassName = luiClassName('tooltip', {
        className: className,
        modifiers: { variant: variant }
      });
      if (tooltipState === TOOLTIP_STATE.opening || tooltipState === TOOLTIP_STATE.closing) {
        tooltipClassName += ' lui-fade';
      }

      if (inline) {
        return React__default.createElement(
          TooltipContent,
          _extends({ inline: true, className: tooltipClassName }, extraProps),
          children
        );
      }

      return reactDom.createPortal(React__default.createElement(
        TooltipContent,
        _extends({ className: tooltipClassName }, extraProps),
        children
      ), this.containerElement);
    }
  }]);
  return Tooltip;
}(React.Component);

var Section = function Section(props) {
  return React__default.createElement(
    'section',
    null,
    React__default.createElement(
      'h2',
      { id: props.title },
      React__default.createElement(
        'a',
        { href: '#' + props.title },
        props.title
      )
    ),
    props.children
  );
};

var InstallationSection = function (_Component) {
  inherits(InstallationSection, _Component);

  function InstallationSection() {
    classCallCheck(this, InstallationSection);
    return possibleConstructorReturn(this, (InstallationSection.__proto__ || Object.getPrototypeOf(InstallationSection)).apply(this, arguments));
  }

  createClass(InstallationSection, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.elem && window.hljs) {
        var codeElems = Array.prototype.slice.call(this.elem.querySelectorAll('.hljs'));
        codeElems.forEach(function (codeElem) {
          hljs.highlightBlock(codeElem); // eslint-disable-line no-undef
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React__default.createElement(
        Section,
        { title: 'Installation' },
        React__default.createElement(
          'div',
          { ref: function ref(el) {
              _this2.elem = el;
            } },
          React__default.createElement(
            'p',
            null,
            React__default.createElement(
              'b',
              null,
              'NPM'
            )
          ),
          React__default.createElement(
            'div',
            { className: 'example-code hljs' },
            React__default.createElement(
              'pre',
              null,
              React__default.createElement(
                'code',
                { className: 'bash' },
                'npm install --save react-leonardo-ui'
              )
            )
          )
        )
      );
    }
  }]);
  return InstallationSection;
}(React.Component);

var GetStartedSection = function (_Component) {
  inherits(GetStartedSection, _Component);

  function GetStartedSection() {
    classCallCheck(this, GetStartedSection);
    return possibleConstructorReturn(this, (GetStartedSection.__proto__ || Object.getPrototypeOf(GetStartedSection)).apply(this, arguments));
  }

  createClass(GetStartedSection, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.elem && window.hljs) {
        var codeElems = Array.prototype.slice.call(this.elem.querySelectorAll('.hljs'));
        codeElems.forEach(function (codeElem) {
          hljs.highlightBlock(codeElem); // eslint-disable-line no-undef
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React__default.createElement(
        Section,
        { title: 'Get started' },
        React__default.createElement(
          'div',
          { ref: function ref(el) {
              _this2.elem = el;
            } },
          React__default.createElement(
            'p',
            null,
            React__default.createElement(
              'b',
              null,
              'ES2015'
            )
          ),
          React__default.createElement(
            'div',
            { className: 'example-code hljs' },
            React__default.createElement(
              'pre',
              null,
              React__default.createElement(
                'code',
                { className: 'javascript' },
                'import { Button } from \'react-leonardo-ui\';'
              )
            )
          ),
          React__default.createElement(
            'p',
            null,
            React__default.createElement(
              'b',
              null,
              'CommonJS'
            )
          ),
          React__default.createElement(
            'div',
            { className: 'example-code hljs' },
            React__default.createElement(
              'pre',
              null,
              React__default.createElement(
                'code',
                { className: 'javascript' },
                'const Button = require(\'react-leonardo-ui\').Button;'
              )
            )
          ),
          React__default.createElement(
            'h3',
            null,
            'Props passing'
          ),
          React__default.createElement(
            'p',
            null,
            'Properties that are not recognized by a component are passed to the root element (of most components). This removes extra abstractions and helps keeping components small and manageable.'
          ),
          React__default.createElement(
            'div',
            { className: 'example-code hljs' },
            React__default.createElement(
              'pre',
              null,
              React__default.createElement(
                'code',
                { className: 'jsx' },
                '<Button active title="My title" onClick={clickHandler}>\n  My button\n</Button>'
              )
            )
          ),
          React__default.createElement(
            'p',
            null,
            'In the example above, the Button component will handle the active attribute and pass title and onClick to its button element.'
          )
        )
      );
    }
  }]);
  return GetStartedSection;
}(React.Component);

var Example = function (_Component) {
  inherits(Example, _Component);

  function Example() {
    classCallCheck(this, Example);
    return possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).apply(this, arguments));
  }

  createClass(Example, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.codeElem && window.hljs) {
        hljs.highlightBlock(this.codeElem); // eslint-disable-line no-undef
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.codeElem && window.hljs) {
        hljs.highlightBlock(this.codeElem); // eslint-disable-line no-undef
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;


      var exampleCode = void 0;
      if (props.code) {
        exampleCode = React__default.createElement(
          "div",
          {
            ref: function ref(elem) {
              _this2.codeElem = elem;
            },
            className: "example-code"
          },
          React__default.createElement(
            "pre",
            null,
            React__default.createElement(
              "code",
              { className: "jsx" },
              props.code
            )
          )
        );
      }

      var settingsTable = props.settings ? React__default.createElement(
        "table",
        null,
        React__default.createElement(
          "thead",
          null,
          React__default.createElement(
            "tr",
            null,
            React__default.createElement(
              "td",
              null,
              "Name"
            ),
            React__default.createElement(
              "td",
              null,
              "Type"
            ),
            React__default.createElement(
              "td",
              null,
              "Description"
            )
          )
        ),
        React__default.createElement(
          "tbody",
          null,
          props.settings.map(function (setting) {
            return React__default.createElement(
              "tr",
              null,
              React__default.createElement(
                "td",
                null,
                setting.name
              ),
              React__default.createElement(
                "td",
                null,
                setting.type
              ),
              React__default.createElement(
                "td",
                null,
                setting.description
              )
            );
          })
        )
      ) : null;

      var className = ("example  " + (props.className || '')).trim();
      return React__default.createElement(
        "div",
        { className: className },
        props.title,
        React__default.createElement(
          "div",
          { className: "example-box" },
          props.children
        ),
        exampleCode,
        settingsTable
      );
    }
  }]);
  return Example;
}(React.Component);

var Props = function Props(props) {
  return React__default.createElement(
    'div',
    { className: 'props' },
    React__default.createElement(
      'h3',
      null,
      props.title || 'Props'
    ),
    React__default.createElement(
      'table',
      null,
      React__default.createElement(
        'thead',
        null,
        React__default.createElement(
          'tr',
          null,
          React__default.createElement(
            'th',
            null,
            'Name'
          ),
          React__default.createElement(
            'th',
            null,
            'Type'
          ),
          React__default.createElement(
            'th',
            null,
            'Description'
          )
        )
      ),
      React__default.createElement(
        'tbody',
        null,
        props.props.map(function (prop) {
          return React__default.createElement(
            'tr',
            { key: prop.name },
            React__default.createElement(
              'td',
              null,
              prop.name
            ),
            React__default.createElement(
              'td',
              null,
              prop.type
            ),
            React__default.createElement(
              'td',
              null,
              prop.description
            )
          );
        })
      )
    )
  );
};

var ButtonSection = function ButtonSection(props) {
  return React__default.createElement(
    Section,
    { title: 'Button' },
    React__default.createElement(
      Example,
      {
        className: 'button-example',
        code: '<Button' + (props.baseVariant === 'inverse' ? ' variant="inverse"' : '') + '>Default</Button>\n<Button variant="' + (props.baseVariant === 'inverse' ? 'gradient-inverse' : 'gradient') + '">Gradient</Button>\n<Button variant="info">Info</Button>\n<Button variant="warning">Warning</Button>\n<Button variant="danger">Danger</Button>\n<Button variant="success">Success</Button>'
      },
      React__default.createElement(
        Button$1,
        { variant: props.baseVariant },
        'Default'
      ),
      React__default.createElement(
        Button$1,
        {
          variant: props.baseVariant === 'inverse' ? 'toolbar-inverse' : 'toolbar'
        },
        'Gradient'
      ),
      React__default.createElement(
        Button$1,
        { variant: 'info' },
        'Info'
      ),
      React__default.createElement(
        Button$1,
        { variant: 'warning' },
        'Warning'
      ),
      React__default.createElement(
        Button$1,
        { variant: 'danger' },
        'Danger'
      ),
      React__default.createElement(
        Button$1,
        { variant: 'success' },
        'Success'
      ),
      React__default.createElement(
        Button$1,
        { variant: props.baseVariant },
        React__default.createElement(Button$1.Icon, { name: 'download' }),
        React__default.createElement(
          Button$1.Text,
          null,
          'Download 23'
        )
      )
    ),
    React__default.createElement(Props, {
      props: [{
        name: 'rounded',
        type: 'Boolean',
        description: 'Extra rounded corners.'
      }, {
        name: 'block',
        type: 'Boolean',
        description: 'Display as a block element.'
      }, {
        name: 'size',
        type: 'String',
        description: 'Button size. Any of: null (default) | "large" | "x-large"'
      }, {
        name: 'variant',
        type: 'String',
        description: 'Variant to use. Any of: null (default) | "inverse" | "success" | "info" | "warning" | "danger"'
      }, {
        name: 'active',
        type: 'Boolean',
        description: 'Show the button in active state. Suitable for toggle buttons'
      }, {
        name: 'disabled',
        type: 'Boolean',
        description: 'Show the button in disabled state.'
      }]
    })
  );
};

var ButtonGroupSection = function (_Component) {
  inherits(ButtonGroupSection, _Component);

  function ButtonGroupSection() {
    classCallCheck(this, ButtonGroupSection);

    var _this = possibleConstructorReturn(this, (ButtonGroupSection.__proto__ || Object.getPrototypeOf(ButtonGroupSection)).call(this));

    _this.state = {
      activeButton: 0
    };
    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  createClass(ButtonGroupSection, [{
    key: 'onClick',
    value: function onClick(activeButton) {
      this.setState({
        activeButton: activeButton
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.props;


      var buttons = [{
        id: 1,
        text: 'First'
      }, {
        id: 2,
        text: 'Second'
      }, {
        id: 3,
        text: 'Third'
      }];

      var buttonItems = buttons.map(function (_ref) {
        var id = _ref.id,
            text = _ref.text;
        return React__default.createElement(
          ButtonGroup$1.Button,
          {
            key: id,
            variant: props.baseVariant,
            active: _this2.state.activeButton === id,
            onClick: function onClick() {
              return _this2.onClick(id);
            }
          },
          text
        );
      });

      return React__default.createElement(
        Section,
        { title: 'ButtonGroup' },
        React__default.createElement(
          Example,
          {
            code: '<ButtonGroup>\n  <ButtonGroup.Button>First</ButtonGroup.Button>\n  <ButtonGroup.Button active>Second</ButtonGroup.Button>\n  <ButtonGroup.Button>Third</ButtonGroup.Button>\n</ButtonGroup>'
          },
          React__default.createElement(
            ButtonGroup$1,
            null,
            buttonItems
          )
        )
      );
    }
  }]);
  return ButtonGroupSection;
}(React.Component);

var CheckboxSection = function CheckboxSection(props) {
  return React__default.createElement(
    Section,
    { title: 'Checkbox' },
    React__default.createElement(
      Example,
      { code: '<Checkbox>Label</Checkbox>' },
      React__default.createElement(
        Checkbox$1,
        { variant: props.baseVariant },
        'Label'
      )
    ),
    React__default.createElement(Props, {
      props: [{
        name: 'variant',
        type: 'String',
        description: 'Variant of the Checkbox. Any of: null (default) | "inverse".'
      }]
    })
  );
};

var TestDialog = function TestDialog(props) {
  return React__default.createElement(
    Dialog$1,
    { show: props.show, onEscape: props.onEscape, variant: props.variant },
    React__default.createElement(
      Dialog$1.Header,
      null,
      React__default.createElement(
        Dialog$1.Title,
        null,
        'Test'
      )
    ),
    React__default.createElement(
      Dialog$1.Body,
      null,
      'Bacon ipsum dolor amet picanha pastrami boudin chicken doner. Meatloaf meatball tongue, pastrami t-bone shoulder alcatra chicken ball tip brisket venison rump flank. Jowl beef ribs prosciutto bresaola, chuck ball tip t-bone pork chop ham leberkas short loin beef sirloin corned beef. Ham hock meatloaf hamburger short loin bacon short ribs pig corned beef cow leberkas sausage picanha bresaola biltong beef. Bresaola jerky strip steak filet mignon picanha swine doner salami biltong spare ribs landjaeger turducken rump cow. Cupim filet mignon prosciutto tri-tip, fatback leberkas t-bone pastrami.'
    ),
    React__default.createElement(
      Dialog$1.Footer,
      null,
      React__default.createElement(
        Button$1,
        { variant: 'info', onClick: props.close, autoFocus: true },
        'OK'
      )
    )
  );
};

var DialogSection = function (_Component) {
  inherits(DialogSection, _Component);

  function DialogSection(props) {
    classCallCheck(this, DialogSection);

    var _this = possibleConstructorReturn(this, (DialogSection.__proto__ || Object.getPrototypeOf(DialogSection)).call(this, props));

    _this.state = {
      dialogOpen: false
    };
    _this.toggleDialog = _this.toggleDialog.bind(_this);
    return _this;
  }

  createClass(DialogSection, [{
    key: 'toggleDialog',
    value: function toggleDialog(dialogOpen) {
      this.setState({ dialogOpen: dialogOpen });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React__default.createElement(
        Section,
        { title: 'Dialog' },
        React__default.createElement(
          Example,
          {
            code: '<Dialog show={this.state.show} onEscape={() => this.setState({ show: false})}>\n  <Dialog.Header>\n    <Dialog.Title>Header</Dialog.Title>\n  </Dialog.Header>\n  <Dialog.Body>Body</Dialog.Body>\n  <Dialog.Footer>\n    <Dialog.Button autoFocus onClick={() => this.setState({ show: false})}>\n      OK\n    </Dialog.Button>\n  </Dialog.Footer>\n</Dialog>'
          },
          React__default.createElement(
            Button$1,
            {
              variant: this.props.baseVariant,
              onClick: function onClick() {
                return _this2.toggleDialog(true);
              }
            },
            'Open dialog'
          ),
          React__default.createElement(TestDialog, {
            show: this.state.dialogOpen,
            onEscape: function onEscape() {
              return _this2.toggleDialog(false);
            },
            variant: this.props.baseVariant,
            close: function close() {
              return _this2.toggleDialog(false);
            }
          })
        ),
        React__default.createElement(Props, {
          props: [{
            name: 'show',
            type: 'Boolean',
            description: 'Flag used to open / close the dialog.'
          }, {
            name: 'variant',
            type: 'String',
            description: 'Variant. Any of: null (default) | "inverse".'
          }, {
            name: 'onEscape',
            type: 'Function',
            description: 'Function triggered when the escape key is pressed.'
          }, {
            name: 'onOpen',
            type: 'Function',
            description: 'Function triggered when the dialog has opened.'
          }, {
            name: 'onClose',
            type: 'Function',
            description: 'Function triggered when the dialog has closed.'
          }]
        })
      );
    }
  }]);
  return DialogSection;
}(React.Component);

var ICONS = ['sheet', 'object', 'image', 'clear-selections', 'selections-tool', 'bookmark', 'back', 'forward', 'history', 'help', 'info', 'toggle-left', 'toggle-right', 'selections-reload', 'text', 'group', 'search', 'zoom-in', 'zoom-out', 'selections-back', 'selections-forward', 'export', 'import', 'lock', 'unlock', 'database', 'calendar', 'field', 'expression', 'library', 'debug', 'script-ok', 'grid', 'star', 'print', 'remove', 'handle', 'handle-horizontal', 'menu', 'list', 'unordered-list', 'bar-chart', 'bar-chart-horizontal', 'clock', 'line-chart', 'pie-chart', 'gauge-chart', 'kpi', 'scatter-chart', 'map', 'puzzle', 'table', 'pivot-table', 'filterpane', 'treemap', 'combo-chart', 'plus', 'minus', 'triangle-top', 'triangle-bottom', 'triangle-left', 'triangle-right', 'run-script', 'tick', 'cogwheel', 'settings', 'data-model', 'script', 'sense', 'cut', 'copy', 'paste', 'align-left', 'align-center', 'align-right', 'bold', 'italic', 'underline', 'select-alternative', 'select-possible', 'select-excluded', 'select-all', 'camera', 'slide-show', 'palette', 'shapes', 'effects', 'file', 'expand', 'collapse', 'bin', 'link', 'pivot', 'reload', 'add', 'edit', 'lasso', 'key', 'box', 'home', 'person', 'stream', 'cloud', 'more', 'folder', 'auto-layout', 'toggle-bottom', 'drop', 'play', 'tag', 'close', 'direct-discovery', 'warning', 'warning-triangle', 'share', 'top', 'low-resolution', 'high-resolution', 'view', 'control', 'code', 'upload', 'repair', 'split', 'up-down', 'disconnect', 'photo-library', 'application', 'new-tab', 'ascending', 'descending', 'arrow-up', 'arrow-down', 'arrow-right', 'arrow-left', 'sync', 'draggable', 'book', 'measure', 'download', 'more-rounded', 'align-object-left', 'align-object-center', 'align-object-right', 'submit', 'operators', 'general-data-class', 'building', 'bell', 'unlink', 'lightbulb', 'associate', 'break-association', 'log-in', 'log-out', 'previous'];

var IconSection = function IconSection() {
  return React__default.createElement(
    Section,
    { title: 'Icons' },
    React__default.createElement(
      Example,
      {
        code: '<Icon name="more" />\n<Icon name="more" size="small" />\n<Icon name="more" size="large" />\n'
      },
      ICONS.map(function (name) {
        return React__default.createElement(
          'div',
          { key: name, className: 'icon-example' },
          React__default.createElement(
            'div',
            { className: 'icon-example-box' },
            React__default.createElement(Icon, { name: name })
          ),
          React__default.createElement(
            'div',
            { className: 'icon-example-text' },
            name
          )
        );
      })
    ),
    React__default.createElement(Props, {
      props: [{
        name: 'name',
        type: 'String',
        description: 'Name of the icon to show.'
      }, {
        name: 'size',
        type: 'String',
        description: 'Icon size. Any of: null (default) | "small" | "large".'
      }]
    })
  );
};

var InputSection = function InputSection(props) {
  return React__default.createElement(
    Section,
    { title: 'Input' },
    React__default.createElement(
      Example,
      { code: '<Input value={value}/>' },
      React__default.createElement(Input$1, { variant: props.baseVariant })
    ),
    React__default.createElement(Props, {
      props: [{
        name: 'variant',
        type: 'String',
        description: 'Variant of the Input. Any of: null (default) | "inverse".'
      }, {
        name: 'size',
        type: 'String',
        description: 'Input size. Any of: null (default) | "large".'
      }]
    })
  );
};

var InputGroupSection = function InputGroupSection(props) {
  return React__default.createElement(
    Section,
    { title: 'InputGroup' },
    React__default.createElement(
      Example,
      {
        code: '<InputGroup>\n  <InputGroup.Input />\n  <InputGroup.Button><Icon name="more" /></InputGroup.Button>\n</InputGroup>'
      },
      React__default.createElement(
        InputGroup$1,
        { variant: props.baseVariant },
        React__default.createElement(InputGroup$1.Input, { variant: props.baseVariant }),
        React__default.createElement(
          InputGroup$1.Button,
          { variant: props.baseVariant },
          React__default.createElement(Button$1.Icon, { name: 'more' })
        )
      )
    ),
    React__default.createElement(Props, {
      props: [{
        name: 'variant',
        type: 'String',
        description: 'Variant. Any of: null (default) | "inverse".'
      }]
    })
  );
};

var ListSection = function ListSection(props) {
  return React__default.createElement(
    Section,
    { title: 'List' },
    React__default.createElement(
      Example,
      {
        code: '<List>\n  <List.Header>Header</List.Header>\n  <List.Item>\n    <List.Text>Item 1</List.Text>\n  </List.Item>\n  <List.Item>\n    <List.Text>Item 2</List.Text>\n    <List.Aside><Icon name="info" /></List.Aside>\n  </List.Item>\n  <List.Item>\n    <List.Aside><Icon name="info" /></List.Aside>\n    <List.Text>Item 3</List.Text>\n  </List.Item>\n</List>'
      },
      React__default.createElement(
        List$1,
        { variant: props.baseVariant },
        React__default.createElement(
          List$1.Header,
          null,
          'Header'
        ),
        React__default.createElement(
          List$1.Item,
          null,
          React__default.createElement(
            List$1.Text,
            null,
            'Item 1'
          )
        ),
        React__default.createElement(
          List$1.Item,
          null,
          React__default.createElement(
            List$1.Text,
            null,
            'Item 2'
          ),
          React__default.createElement(
            List$1.Aside,
            null,
            React__default.createElement(Icon, { name: 'info' })
          )
        ),
        React__default.createElement(
          List$1.Item,
          null,
          React__default.createElement(
            List$1.Aside,
            null,
            React__default.createElement(Icon, { name: 'info' })
          ),
          React__default.createElement(
            List$1.Text,
            null,
            'Item 3'
          )
        )
      )
    )
  );
};

var MyPopover = function MyPopover(props) {
  return React__default.createElement(
    Popover$1,
    _extends({ inline: true, onOutside: props.close }, props),
    React__default.createElement(
      Popover$1.Header,
      null,
      React__default.createElement(
        Popover$1.Title,
        null,
        'Header'
      )
    ),
    React__default.createElement(
      Popover$1.Body,
      null,
      'Bacon ipsum dolor amet picanha pastrami boudin chicken doner. Meatloaf meatball tongue, pastrami t-bone shoulder alcatra chicken ball tip brisket venison rump flank. Jowl beef ribs prosciutto bresaola, chuck ball tip t-bone pork chop ham leberkas short loin beef sirloin corned beef. Ham hock meatloaf hamburger short loin bacon short ribs pig corned beef cow leberkas sausage picanha bresaola biltong beef. Bresaola jerky strip steak filet mignon picanha swine doner salami biltong spare ribs landjaeger turducken rump cow. Cupim filet mignon prosciutto tri-tip, fatback leberkas t-bone pastrami.'
    ),
    React__default.createElement(
      Popover$1.Footer,
      null,
      React__default.createElement(
        Button$1,
        { onClick: props.close },
        'Close'
      )
    )
  );
};

var PopoverSection = function (_Component) {
  inherits(PopoverSection, _Component);

  function PopoverSection(props) {
    classCallCheck(this, PopoverSection);

    var _this = possibleConstructorReturn(this, (PopoverSection.__proto__ || Object.getPrototypeOf(PopoverSection)).call(this, props));

    _this.state = {
      popoverOpen: false
    };
    _this.togglePopover = _this.togglePopover.bind(_this);
    return _this;
  }

  createClass(PopoverSection, [{
    key: 'togglePopover',
    value: function togglePopover(popoverOpen) {
      this.setState({ popoverOpen: popoverOpen });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React__default.createElement(
        Section,
        { title: 'Popover' },
        React__default.createElement(
          'p',
          null,
          'The popover is controlled by the ',
          React__default.createElement(
            'i',
            null,
            'show'
          ),
          ' property.'
        ),
        React__default.createElement(
          Example,
          {
            code: '<Popover\n  alignTo={this.alignToElement}\n  show={this.state.show}\n  onOutside={() => this.setState({ show: false})}\n>\n  <Popover.Header>\n    <Popover.Title>Header</Popover.Title>\n  </Popover.Header>\n  <Popover.Body>Body</Popover.Body>\n  <Popover.Footer>\n    <Popover.Button onClick={() => this.setState({ show: false})}>\n      Close\n    </Popover.Button>\n  </Popover.Footer>\n</Popover>\n'
          },
          React__default.createElement(
            'div',
            { ref: function ref(elem) {
                _this2.alignToElem = elem;
              }, style: { display: 'inline-block' } },
            React__default.createElement(
              Button$1,
              {
                variant: this.props.baseVariant,
                onClick: function onClick() {
                  return _this2.togglePopover(!_this2.state.popoverOpen);
                }
              },
              'Open popover'
            )
          ),
          React__default.createElement(MyPopover, {
            alignTo: this.alignToElem,
            show: this.state.popoverOpen,
            variant: this.props.baseVariant,
            close: function close() {
              return _this2.togglePopover(false);
            }
          })
        ),
        React__default.createElement(Props, {
          props: [{
            name: 'show',
            type: 'Boolean',
            description: 'Flag used to open / close the popover.'
          }, {
            name: 'dock',
            type: 'String',
            description: 'Dock side. Any of: "top" | "right" | "bottom" | "left".'
          }, {
            name: 'alignTo',
            type: 'HTMLElement',
            description: 'The element to align to.'
          }, {
            name: 'inline',
            type: 'Boolean',
            description: 'Experimental. Append the popover inline in the DOM instead of to the body.'
          }, {
            name: 'variant',
            type: 'String',
            description: 'Variant of the Popover. Any of: null (default) | "inverse".'
          }, {
            name: 'onOutside',
            type: 'Function',
            description: 'Function triggered on clicks outside the popover element.'
          }, {
            name: 'onOpen',
            type: 'Function',
            description: 'Function triggered when the popover has opened.'
          }, {
            name: 'onClose',
            type: 'Function',
            description: 'Function triggered when the popover has closed.'
          }]
        })
      );
    }
  }]);
  return PopoverSection;
}(React.Component);

var RadioButtonSection = function RadioButtonSection(props) {
  return React__default.createElement(
    Section,
    { title: 'RadioButton' },
    React__default.createElement(
      Example,
      { className: 'radiobutton-example' },
      React__default.createElement(
        RadioButton$1,
        { name: 'radio', variant: props.baseVariant },
        'Radio 1'
      ),
      React__default.createElement(
        RadioButton$1,
        { name: 'radio', variant: props.baseVariant },
        'Radio 2'
      )
    ),
    React__default.createElement(Props, {
      props: [{
        name: 'variant',
        type: 'String',
        description: 'Variant. Any of: null (default) | "inverse".'
      }]
    })
  );
};

var SelectSection = function SelectSection(props) {
  return React__default.createElement(
    Section,
    { title: 'Select' },
    React__default.createElement(
      Example,
      {
        code: '<Select>\n  <option value="x">Option 1</option>\n  <option value="y">Option 2</option>\n</Select>'
      },
      React__default.createElement(
        Select$1,
        { variant: props.baseVariant },
        React__default.createElement(
          'option',
          { value: 'x' },
          'Option 1'
        ),
        React__default.createElement(
          'option',
          { value: 'y' },
          'Option 2'
        )
      )
    ),
    React__default.createElement(Props, {
      props: [{
        name: 'variant',
        type: 'String',
        description: 'Variant. Any of: null (default) | "inverse".'
      }]
    })
  );
};

var SearchSection = function (_Component) {
  inherits(SearchSection, _Component);

  function SearchSection(props) {
    classCallCheck(this, SearchSection);

    var _this = possibleConstructorReturn(this, (SearchSection.__proto__ || Object.getPrototypeOf(SearchSection)).call(this, props));

    _this.state = {
      value: ''
    };
    _this.onChange = _this.onChange.bind(_this);
    _this.onClear = _this.onClear.bind(_this);
    return _this;
  }

  createClass(SearchSection, [{
    key: 'onChange',
    value: function onChange(e) {
      var value = e.target.value;

      this.setState({ value: value });
    }
  }, {
    key: 'onClear',
    value: function onClear() {
      this.setState({ value: '' });
    }
  }, {
    key: 'render',
    value: function render() {
      return React__default.createElement(
        Section,
        { title: 'Search' },
        React__default.createElement(
          Example,
          {
            code: '\n<Search\n  value={this.state.value}\n  onChange={e => this.setState({ value: e.target.value })}\n  onClear={() => this.setState({ value: \'\' })}\n  variant={this.props.baseVariant}\n/>\n'
          },
          React__default.createElement(Search$1, {
            value: this.state.value,
            onChange: this.onChange,
            onClear: this.onClear,
            variant: this.props.baseVariant
          })
        ),
        React__default.createElement(Props, {
          props: [{
            name: 'variant',
            type: 'String',
            description: 'Variant. Any of: null (default) | "inverse".'
          }, {
            name: 'onClear',
            type: 'Function',
            description: 'Callback that is invoked when the clear button is clicked.'
          }]
        })
      );
    }
  }]);
  return SearchSection;
}(React.Component);

var SwitchSection = function SwitchSection(props) {
  return React__default.createElement(
    Section,
    { title: 'Switch' },
    React__default.createElement(
      Example,
      { code: '<Switch value="Value" />' },
      React__default.createElement(Switch$1, { variant: props.baseVariant })
    ),
    React__default.createElement(Props, {
      props: [{
        name: 'variant',
        type: 'String',
        description: 'Variant of the Switch. Any of: null (default) | "inverse".'
      }]
    })
  );
};

var TabsSection = function (_Component) {
  inherits(TabsSection, _Component);

  function TabsSection() {
    classCallCheck(this, TabsSection);

    var _this = possibleConstructorReturn(this, (TabsSection.__proto__ || Object.getPrototypeOf(TabsSection)).call(this));

    _this.state = {
      activeTab: 0
    };
    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  createClass(TabsSection, [{
    key: 'onClick',
    value: function onClick(activeTab) {
      this.setState({
        activeTab: activeTab
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.props;

      var tabs = [{
        id: 0,
        tabContent: 'Tab 1',
        content: React__default.createElement(
          'div',
          null,
          'Content 1'
        )
      }, {
        id: 1,
        tabContent: 'Tab 2',
        content: React__default.createElement(
          'div',
          null,
          'Content 2'
        )
      }, {
        id: 2,
        tabContent: [React__default.createElement(
          Tab$1.Text,
          { key: 'text' },
          'Blah 3'
        ), React__default.createElement(
          Tab$1.Aside,
          { key: 'aside' },
          React__default.createElement(Icon, { name: 'close', size: 'small' })
        )],
        content: React__default.createElement(
          'div',
          null,
          'Content 1'
        )
      }];

      var tabItems = tabs.map(function (_ref) {
        var id = _ref.id,
            tabContent = _ref.tabContent;
        return React__default.createElement(
          Tab$1,
          {
            key: id,
            onClick: function onClick() {
              return _this2.onClick(id);
            },
            variant: props.baseVariant,
            active: _this2.state.activeTab === id
          },
          tabContent
        );
      });

      return React__default.createElement(
        Section,
        { title: 'Tabs' },
        React__default.createElement(
          Example,
          { code: '<Tabs>Tabs</Tabs>' },
          React__default.createElement(
            Tabset$1,
            null,
            tabItems
          ),
          React__default.createElement(
            'div',
            null,
            tabs[this.state.activeTab].content
          )
        )
      );
    }
  }]);
  return TabsSection;
}(React.Component);

var TextareaSection = function TextareaSection(props) {
  return React__default.createElement(
    Section,
    { title: 'Textarea' },
    React__default.createElement(
      Example,
      { code: '<Textarea/>' },
      React__default.createElement(Textarea$1, { variant: props.baseVariant })
    ),
    React__default.createElement(Props, {
      props: [{
        name: 'variant',
        type: 'String',
        description: 'Variant. Any of: null (default) | "inverse".'
      }]
    })
  );
};

var MyToast = function MyToast(_ref) {
  var close = _ref.close,
      extraProps = objectWithoutProperties(_ref, ['close']);
  return React__default.createElement(
    Toast$1,
    extraProps,
    React__default.createElement(
      Toast$1.Text,
      null,
      'Bacon ipsum dolor amet picanha pastrami boudin chicken doner.'
    ),
    React__default.createElement(
      Toast$1.Action,
      { onClick: close },
      'Close'
    )
  );
};

var ToastSection = function (_Component) {
  inherits(ToastSection, _Component);

  function ToastSection(props) {
    classCallCheck(this, ToastSection);

    var _this = possibleConstructorReturn(this, (ToastSection.__proto__ || Object.getPrototypeOf(ToastSection)).call(this, props));

    _this.state = {
      toastOpen: false,
      toast2Open: false
    };
    _this.toggleToast = _this.toggleToast.bind(_this);
    _this.toggleToast2 = _this.toggleToast2.bind(_this);
    return _this;
  }

  createClass(ToastSection, [{
    key: 'toggleToast',
    value: function toggleToast(toastOpen) {
      var _this2 = this;

      this.setState({ toastOpen: toastOpen });
      if (toastOpen) {
        setTimeout(function () {
          _this2.setState({ toastOpen: false });
        }, 5000);
      }
    }
  }, {
    key: 'toggleToast2',
    value: function toggleToast2(toast2Open) {
      var _this3 = this;

      this.setState({ toast2Open: toast2Open });
      if (toast2Open) {
        setTimeout(function () {
          _this3.setState({ toast2Open: false });
        }, 5000);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return React__default.createElement(
        Section,
        { title: 'Toast' },
        React__default.createElement(
          'p',
          null,
          'The toast is controlled by the ',
          React__default.createElement(
            'i',
            null,
            'show'
          ),
          ' property.'
        ),
        React__default.createElement(
          Example,
          {
            code: '<Toast\n  show={this.state.show}\n>\n  <Toast.Text>\n  Bacon ipsum dolor amet picanha pastrami boudin chicken doner.\n  </Toast.Text>\n  <Toast.Action onClick={close}>\n    Close\n  </Toast.Action>\n</Toast>\n'
          },
          React__default.createElement(
            'div',
            { style: { display: 'inline-block' } },
            React__default.createElement(
              Button$1,
              {
                variant: this.props.baseVariant,
                onClick: function onClick() {
                  return _this4.toggleToast(!_this4.state.toastOpen);
                }
              },
              'Open toast'
            ),
            React__default.createElement(
              Button$1,
              {
                variant: this.props.baseVariant,
                onClick: function onClick() {
                  return _this4.toggleToast2(!_this4.state.toast2Open);
                }
              },
              'Open second toast'
            )
          ),
          React__default.createElement(MyToast, {
            show: this.state.toastOpen,
            variant: this.props.baseVariant,
            close: function close() {
              return _this4.toggleToast(false);
            }
          }),
          React__default.createElement(MyToast, {
            show: this.state.toast2Open,
            variant: this.props.baseVariant,
            close: function close() {
              return _this4.toggleToast2(false);
            }
          })
        ),
        React__default.createElement(Props, {
          props: [{
            name: 'show',
            type: 'Boolean',
            description: 'Flag used to open / close the toast.'
          }, {
            name: 'onOpen',
            type: 'Function',
            description: 'Function triggered when the toast has opened.'
          }, {
            name: 'onClose',
            type: 'Function',
            description: 'Function triggered when the toast has closed.'
          }]
        })
      );
    }
  }]);
  return ToastSection;
}(React.Component);

var TooltipSection = function (_Component) {
  inherits(TooltipSection, _Component);

  function TooltipSection(props) {
    classCallCheck(this, TooltipSection);

    var _this = possibleConstructorReturn(this, (TooltipSection.__proto__ || Object.getPrototypeOf(TooltipSection)).call(this, props));

    _this.state = {
      dock: 'top',
      show: false
    };
    _this.toggleDock = _this.toggleDock.bind(_this);
    _this.toggleTooltip = _this.toggleTooltip.bind(_this);
    return _this;
  }

  createClass(TooltipSection, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.forceUpdate();
    }
  }, {
    key: 'toggleDock',
    value: function toggleDock() {
      var docks = ['left', 'top', 'right', 'bottom'];
      var dock = this.state.dock;

      dock = docks[docks.indexOf(dock) + 1] || docks[0];
      this.setState({ dock: dock });
    }
  }, {
    key: 'toggleTooltip',
    value: function toggleTooltip(show) {
      this.setState({ show: show });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React__default.createElement(
        Section,
        { title: 'Tooltip' },
        React__default.createElement(
          Example,
          {
            code: '<Tooltip\n  alignTo={this.alignToElement}\n  show={this.state.show}\n  dock={this.state.dock}\n>\n  I\'m placed to the: <b>${this.state.dock}</b>\n</Tooltip>\n'
          },
          React__default.createElement(
            'div',
            { ref: function ref(elem) {
                _this2.alignToElem = elem;
              }, style: { display: 'inline-block' } },
            React__default.createElement(
              Button$1,
              {
                onClick: this.toggleDock,
                onMouseOver: function onMouseOver() {
                  return _this2.toggleTooltip(true);
                },
                onFocus: function onFocus() {
                  return _this2.toggleTooltip(true);
                },
                onMouseLeave: function onMouseLeave() {
                  return _this2.toggleTooltip(false);
                },
                onBlur: function onBlur() {
                  return _this2.toggleTooltip(false);
                },
                variant: this.props.baseVariant
              },
              'Hover to show tooltip'
            )
          ),
          React__default.createElement(
            'p',
            null,
            'Keep clicking to see the dock change'
          ),
          React__default.createElement(
            Tooltip$1,
            {
              inline: true,
              alignTo: this.alignToElem,
              show: this.state.show,
              target: this.buttonElem,
              dock: this.state.dock
            },
            'Im placed to the: ',
            React__default.createElement(
              'strong',
              null,
              this.state.dock
            )
          )
        ),
        React__default.createElement(Props, {
          props: [{
            name: 'show',
            type: 'Boolean',
            description: 'Flag used to open / close the popover.'
          }, {
            name: 'dock',
            type: 'String',
            description: 'Dock side. Any of: "top" | "right" | "bottom" | "left".'
          }, {
            name: 'alignTo',
            type: 'HTMLElement',
            description: 'The element to align to.'
          }, {
            name: 'inline',
            type: 'Boolean',
            description: 'Experimental. Append the tooltip inline in the DOM instead of to the body.'
          }]
        })
      );
    }
  }]);
  return TooltipSection;
}(React.Component);

var sections = [{
  name: 'Installation',
  component: InstallationSection
}, {
  name: 'Get started',
  component: GetStartedSection
}, {
  name: 'Button',
  component: ButtonSection
}, {
  name: 'Button group',
  href: 'ButtonGroup',
  component: ButtonGroupSection
}, {
  name: 'Input',
  component: InputSection
}, {
  name: 'Input group',
  href: 'InputGroup',
  component: InputGroupSection
}, {
  name: 'List',
  component: ListSection
}, {
  name: 'Textarea',
  component: TextareaSection
}, {
  name: 'Select',
  component: SelectSection
}, {
  name: 'Checkbox',
  component: CheckboxSection
}, {
  name: 'Radiobuttons',
  href: 'RadioButton',
  component: RadioButtonSection
}, {
  name: 'Switch',
  component: SwitchSection
}, {
  name: 'Search',
  component: SearchSection
}, {
  name: 'Tabs',
  component: TabsSection
}, {
  name: 'Icons',
  component: IconSection
}, {
  name: 'Dialog',
  component: DialogSection
}, {
  name: 'Popover',
  component: PopoverSection
}, {
  name: 'Tooltip',
  component: TooltipSection
}, {
  name: 'Toast',
  component: ToastSection
}];

var Page = function (_Component) {
  inherits(Page, _Component);

  function Page(props) {
    classCallCheck(this, Page);

    var _this = possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

    _this.state = {
      variant: null
    };
    _this.setVariant = _this.setVariant.bind(_this);
    return _this;
  }

  createClass(Page, [{
    key: 'setVariant',
    value: function setVariant(variant) {
      var currentVariant = this.state.variant;
      var headerWrapperElem = document.body.querySelector('.header-wrapper');
      document.body.classList.remove('lui-bg-' + currentVariant);
      headerWrapperElem.classList.remove('lui-bg-' + currentVariant);

      this.setState({
        variant: variant
      });
      document.body.classList.add('lui-bg-' + variant);
      headerWrapperElem.classList.add('lui-bg-' + variant);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React__default.createElement(
        'div',
        null,
        React__default.createElement(
          'div',
          { className: 'sidebar' },
          React__default.createElement(
            'ul',
            null,
            sections.map(function (section) {
              return React__default.createElement(
                'li',
                { key: section.name },
                React__default.createElement(
                  'a',
                  { href: '#' + (section.href || section.name) },
                  section.name
                )
              );
            })
          ),
          React__default.createElement(
            'div',
            null,
            React__default.createElement(
              ButtonGroup$1,
              { className: 'sidebar-variant-bg' },
              React__default.createElement(
                Button$1,
                {
                  onClick: function onClick() {
                    return _this2.setVariant(null);
                  },
                  active: this.state.variant === null,
                  variant: this.state.variant
                },
                'Default'
              ),
              React__default.createElement(
                Button$1,
                {
                  onClick: function onClick() {
                    return _this2.setVariant('inverse');
                  },
                  active: this.state.variant === 'inverse',
                  variant: this.state.variant
                },
                'Inverse'
              )
            )
          )
        ),
        React__default.createElement(
          'div',
          { className: 'content' },
          'React implementation of ',
          React__default.createElement(
            'a',
            { href: 'https://github.com/qlik-oss/leonardo-ui' },
            'Leonardo UI'
          ),
          '.',
          sections.map(function (section) {
            var Comp = section.component;
            return React__default.createElement(Comp, { key: section.name, baseVariant: _this2.state.variant });
          })
        )
      );
    }
  }]);
  return Page;
}(React.Component);

return Page;

})));
