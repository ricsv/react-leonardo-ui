(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
	(factory((global.reactLUI = {}),global.React,global.ReactDOM));
}(this, (function (exports,React,reactDom) { 'use strict';

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
  var children = _ref.children,
      extraProps = objectWithoutProperties(_ref, ["children"]);
  return React__default.createElement(
    "span",
    _extends({ className: "lui-button__text" }, extraProps),
    children
  );
};

var ButtonDropdown = function ButtonDropdown(props) {
  return React__default.createElement("span", _extends({ className: "lui-button__caret  lui-caret" }, props));
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
      _this.parentElement = props.parentElement || document.getElementById('show-service-overlay') || document.body;

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
        this.openingTimeout = this.openingTimeout || setTimeout(function () {
          _this2.openingTimeout = null;
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
        this.closingTimeout = this.closingTimeout || setTimeout(function () {
          _this2.closingTimeout = null;
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
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.openingTimeout);
      this.openingTimeout = null;
      clearTimeout(this.closingTimeout);
      this.closingTimeout = null;
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

var FadeButton$1 = function FadeButton(_ref) {
  var className = _ref.className,
      children = _ref.children,
      variant = _ref.variant,
      size = _ref.size,
      block = _ref.block,
      rounded = _ref.rounded,
      active = _ref.active,
      extraProps = objectWithoutProperties(_ref, ['className', 'children', 'variant', 'size', 'block', 'rounded', 'active']);

  var finalClassName = luiClassName('fade-button', {
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
    _extends({ className: finalClassName }, extraProps),
    children
  );
};

var FadeButtonIcon = function FadeButtonIcon(props) {
  return React__default.createElement(Icon, _extends({ className: 'lui-fade-button__icon' }, props));
};

var FadeButtonText = function FadeButtonText(_ref) {
  var children = _ref.children,
      extraProps = objectWithoutProperties(_ref, ["children"]);
  return React__default.createElement(
    "span",
    _extends({ className: "lui-fade-button__text" }, extraProps),
    children
  );
};

var FadeButtonCaret = function FadeButtonCaret(props) {
  return React__default.createElement("span", _extends({ className: "lui-fade-button__caret  lui-caret" }, props));
};

FadeButton$1.Icon = FadeButtonIcon;
FadeButton$1.Text = FadeButtonText;
FadeButton$1.Caret = FadeButtonCaret;

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
      active = _ref.active,
      disabled = _ref.disabled,
      extraProps = objectWithoutProperties(_ref, ['className', 'children', 'active', 'disabled']);

  var finalClassName = luiClassName('list__item', {
    className: className,
    states: { active: active, disabled: disabled }
  });
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
var DEFAULT_OFFSET = 10;

var counter = 0;

function nextId() {
  counter += 1;
  return 'rlui-popover-' + counter;
}

var PopoverContent = function (_Component) {
  inherits(PopoverContent, _Component);

  function PopoverContent(props) {
    classCallCheck(this, PopoverContent);

    var _this = possibleConstructorReturn(this, (PopoverContent.__proto__ || Object.getPrototypeOf(PopoverContent)).call(this, props));

    _this.state = {
      positionResult: null,
      id: nextId()
    };
    _this.reposition = _this.reposition.bind(_this);
    return _this;
  }

  createClass(PopoverContent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          alignTo = _props.alignTo,
          dock = _props.dock;

      alignTo.setAttribute('aria-describedby', this.state.id);
      this.reposition(dock, alignTo);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.alignTo.removeAttribute('aria-describedby', this.state.id);
    }
  }, {
    key: 'reposition',
    value: function reposition(dock, alignTo) {
      var positionResult = positionToElement(this.popoverElem, alignTo, dock, {
        containerElement: this.props.inline ? this.popoverElem : null,
        dock: this.props.dock || DEFAULT_DOCK,
        offset: typeof this.props.offset === 'undefined' ? DEFAULT_OFFSET : this.props.offset,
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

      var arrowElem = void 0;

      if (res) {
        style.visibility = 'visible';
      }

      if (this.props.noArrow) {
        arrowElem = null;
      } else {
        var arrow = {
          dock: '',
          style: {}
        };
        if (res) {
          arrow.dock = oppositeDock(res.dock);
          if (arrow.dock === 'top' || arrow.dock === 'bottom') {
            arrow.style.left = res.toPosition.left - res.position.left + 'px';
          } else {
            arrow.style.top = res.toPosition.top - res.position.top + 'px';
          }
        }
        arrowElem = React__default.createElement('div', {
          className: 'lui-popover__arrow  lui-popover__arrow--' + arrow.dock,
          style: arrow.style
        });
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
        arrowElem
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

    _this.ref = React.createRef();

    if (!props.inline && typeof document !== 'undefined') {
      _this.parentElement = props.parentElement || document.getElementById('show-service-overlay') || document.body;

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


      var outsideEvent = 'ontouchend' in window ? 'touchend' : 'click';
      if (popoverState === TOOLTIP_STATE.opening && !this.openingTimeout) {
        this.openingTimeout = setTimeout(function () {
          _this2.openingTimeout = null;
          _this2.setState(function () {
            return {
              popoverState: TOOLTIP_STATE.open
            };
          });
          if (typeof onEscape === 'function') {
            window.addEventListener('keyup', _this2.keyUpListener);
          }
          if (typeof onOutside === 'function') {
            document.addEventListener(outsideEvent, _this2.outsideListener);
          }
          if (typeof onOpen === 'function') {
            onOpen();
          }
        });
      } else if (popoverState === TOOLTIP_STATE.closing && !this.closingTimeout) {
        if (typeof onEscape === 'function') {
          window.removeEventListener('keyup', this.keyUpListener);
        }
        if (typeof onOutside === 'function') {
          document.removeEventListener(outsideEvent, this.outsideListener);
        }
        this.closingTimeout = setTimeout(function () {
          _this2.closingTimeout = null;
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
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var popoverState = this.state.popoverState;
      var _props2 = this.props,
          inline = _props2.inline,
          onClose = _props2.onClose;


      clearTimeout(this.openingTimeout);
      this.openingTimeout = null;
      clearTimeout(this.closingTimeout);
      this.closingTimeout = null;
      if (popoverState === TOOLTIP_STATE.closing) {
        if (typeof onClose === 'function') {
          onClose();
        }
        if (!inline) {
          this.parentElement.removeChild(this.containerElement);
        }
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
      var element = this.ref.current;
      if (element && !element.contains(e.target)) {
        this.props.onOutside(e);
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
      var popoverState = this.state.popoverState;


      if (popoverState === TOOLTIP_STATE.closed) {
        return null;
      }

      var _props3 = this.props,
          className = _props3.className,
          children = _props3.children,
          inline = _props3.inline,
          variant = _props3.variant,
          extraProps = objectWithoutProperties(_props3, ['className', 'children', 'inline', 'variant']);


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
          { ref: this.ref },
          React__default.createElement(
            PopoverContent,
            _extends({ className: popoverClassName, inline: true }, extraProps),
            children
          )
        );
      }

      return reactDom.createPortal(React__default.createElement(
        'div',
        { ref: this.ref },
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
          className: 'lui-search__input',
          value: value
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
      _this.parentElement = props.parentElement || document.getElementById('show-service-overlay') || document.body;
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
var OFFSET = 10;

var counter$1 = 0;

function nextId$1() {
  counter$1 += 1;
  return 'rlui-tooltip-' + counter$1;
}

var TooltipContent = function (_Component) {
  inherits(TooltipContent, _Component);

  function TooltipContent(props) {
    classCallCheck(this, TooltipContent);

    var _this = possibleConstructorReturn(this, (TooltipContent.__proto__ || Object.getPrototypeOf(TooltipContent)).call(this, props));

    _this.state = {
      positionResult: null,
      id: nextId$1()
    };
    _this.reposition = _this.reposition.bind(_this);
    return _this;
  }

  createClass(TooltipContent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          alignTo = _props.alignTo,
          dock = _props.dock;

      alignTo.setAttribute('aria-describedby', this.state.id);
      this.reposition(dock, alignTo);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.dock !== this.props.dock || nextProps.alignTo !== this.props.alignTo) {
        this.reposition(nextProps.dock, nextProps.alignTo);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.alignTo.removeAttribute('aria-describedby', this.state.id);
    }
  }, {
    key: 'reposition',
    value: function reposition(dock, alignTo) {
      var positionResult = positionToElement(this.element, alignTo, dock, {
        containerElement: this.props.inline ? this.element : null,
        dock: dock || DEFAULT_DOCK$1,
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
      _this.parentElement = props.parentElement || document.getElementById('show-service-overlay') || document.body;

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

exports.Button = Button$1;
exports.ButtonGroup = ButtonGroup$1;
exports.Checkbox = Checkbox$1;
exports.Dialog = Dialog$1;
exports.FadeButton = FadeButton$1;
exports.Icon = Icon;
exports.Input = Input$1;
exports.InputGroup = InputGroup$1;
exports.List = List$1;
exports.Popover = Popover$1;
exports.RadioButton = RadioButton$1;
exports.Search = Search$1;
exports.Select = Select$1;
exports.Switch = Switch$1;
exports.Tab = Tab$1;
exports.Tabset = Tabset$1;
exports.Textarea = Textarea$1;
exports.Toast = Toast$1;
exports.Tooltip = Tooltip$1;

Object.defineProperty(exports, '__esModule', { value: true });

})));
