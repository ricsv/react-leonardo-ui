(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
  (global = global || self, factory(global.reactLUI = {}, global.React, global.ReactDOM));
}(this, (function (exports, React, reactDom) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
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

    return _extends.apply(this, arguments);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function luiClassName(name) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var className = opts.className,
        _opts$modifiers = opts.modifiers,
        modifiers = _opts$modifiers === void 0 ? {} : _opts$modifiers,
        _opts$states = opts.states,
        states = _opts$states === void 0 ? {} : _opts$states;
    var baseClass = "lui-".concat(name);
    var resClassName = baseClass;
    Object.keys(modifiers).forEach(function (key) {
      // Modifiers can be booleans or key-value pair of strings
      if (typeof modifiers[key] === 'boolean') {
        if (modifiers[key]) {
          resClassName += " ".concat(baseClass, "--").concat(key);
        }
      } else if (modifiers[key]) {
        resClassName += " ".concat(baseClass, "--").concat(modifiers[key]);
      }
    });
    Object.keys(states).forEach(function (key) {
      // States are always booleans
      if (states[key]) {
        resClassName += " lui-".concat(key);
      }
    });

    if (className) {
      resClassName += " ".concat(className);
    }

    return resClassName;
  }

  var Button =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Button, _Component);

    function Button(props) {
      var _this;

      _classCallCheck(this, Button);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, props));
      _this.focus = _this.focus.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(Button, [{
      key: "focus",
      value: function focus() {
        this.element.focus();
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            variant = _this$props.variant,
            size = _this$props.size,
            block = _this$props.block,
            rounded = _this$props.rounded,
            active = _this$props.active,
            extraProps = _objectWithoutProperties(_this$props, ["children", "className", "variant", "size", "block", "rounded", "active"]);

        var finalClassName = luiClassName('button', {
          className: className,
          modifiers: {
            variant: variant,
            size: size,
            block: block,
            rounded: rounded
          },
          states: {
            active: active
          }
        });
        return React__default.createElement("button", _extends({
          type: "button",
          ref: function ref(element) {
            _this2.element = element;
          },
          className: finalClassName
        }, extraProps), children);
      }
    }]);

    return Button;
  }(React.Component);

  var Icon = function Icon(_ref) {
    var className = _ref.className,
        name = _ref.name,
        size = _ref.size,
        extraProps = _objectWithoutProperties(_ref, ["className", "name", "size"]);

    var finalClassName = luiClassName('icon', {
      className: className,
      modifiers: {
        name: name,
        size: size
      }
    });
    return React__default.createElement("span", _extends({
      className: finalClassName,
      "aria-hidden": "true"
    }, extraProps));
  };

  var ButtonIcon = function ButtonIcon(props) {
    return React__default.createElement(Icon, _extends({
      className: "lui-button__icon"
    }, props));
  };

  var ButtonText = function ButtonText(_ref) {
    var children = _ref.children,
        extraProps = _objectWithoutProperties(_ref, ["children"]);

    return React__default.createElement("span", _extends({
      className: "lui-button__text"
    }, extraProps), children);
  };

  var ButtonDropdown = function ButtonDropdown(props) {
    return React__default.createElement("span", _extends({
      className: "lui-button__caret  lui-caret"
    }, props));
  };

  Button.Icon = ButtonIcon;
  Button.Text = ButtonText;
  Button.Caret = ButtonDropdown;

  var ButtonGroup = function ButtonGroup(_ref) {
    var className = _ref.className,
        children = _ref.children,
        extraProps = _objectWithoutProperties(_ref, ["className", "children"]);

    var finalClassName = luiClassName('buttongroup', {
      className: className,
      props: extraProps
    });
    return React__default.createElement("div", _extends({}, extraProps, {
      className: finalClassName
    }), children);
  };

  var ButtonGroupButton = function ButtonGroupButton(_ref) {
    var _ref$className = _ref.className,
        className = _ref$className === void 0 ? '' : _ref$className,
        children = _ref.children,
        extraProps = _objectWithoutProperties(_ref, ["className", "children"]);

    var finalClassName = "lui-buttongroup__button  ".concat(className).trim();
    return React__default.createElement(Button, _extends({}, extraProps, {
      className: finalClassName
    }), children);
  };

  ButtonGroup.Button = ButtonGroupButton;

  var Checkbox = function Checkbox(_ref) {
    var children = _ref.children,
        className = _ref.className,
        title = _ref.title,
        htmlFor = _ref.htmlFor,
        active = _ref.active,
        variant = _ref.variant,
        extraProps = _objectWithoutProperties(_ref, ["children", "className", "title", "htmlFor", "active", "variant"]);

    var finalClassName = luiClassName('checkbox', {
      className: className,
      states: {
        active: active
      },
      modifiers: {
        variant: variant
      }
    });
    return React__default.createElement("label", {
      htmlFor: htmlFor,
      title: title,
      className: finalClassName
    }, React__default.createElement("input", _extends({
      className: "lui-checkbox__input",
      type: "checkbox"
    }, extraProps)), React__default.createElement("div", {
      className: "lui-checkbox__check-wrap"
    }, React__default.createElement("span", {
      className: "lui-checkbox__check"
    }), React__default.createElement("span", {
      className: "lui-checkbox__check-text"
    }, children)));
  };

  var TOOLTIP_STATE = {
    opening: 0,
    open: 1,
    closing: 2,
    closed: 3
  };

  var FADE_DURATION = 200;
  var currentId = 0;

  var Dialog =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Dialog, _Component);

    function Dialog(props) {
      var _this;

      _classCallCheck(this, Dialog);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Dialog).call(this, props));
      _this.portalId = "rlui-dialog-".concat(currentId);
      _this.state = {
        dialogState: TOOLTIP_STATE.closed
      };
      currentId += 1;
      _this.keyUpListener = _this.keyUpListener.bind(_assertThisInitialized(_this));
      _this.openDialog = _this.openDialog.bind(_assertThisInitialized(_this));
      _this.closeDialog = _this.closeDialog.bind(_assertThisInitialized(_this));

      if (typeof document !== 'undefined') {
        _this.parentElement = props.parentElement || document.getElementById('show-service-overlay') || document.body;
        _this.containerElement = document.createElement('div');
        _this.containerElement.id = _this.portalId;
      }

      return _this;
    }

    _createClass(Dialog, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.show) {
          this.openDialog();
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this2 = this;

        var dialogState = this.state.dialogState;
        var _this$props = this.props,
            show = _this$props.show,
            onEscape = _this$props.onEscape,
            onOpen = _this$props.onOpen,
            onClose = _this$props.onClose;

        if (!prevProps.show && show) {
          this.openDialog();
        } else if (prevProps.show && !show) {
          this.closeDialog();
        }

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
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        clearTimeout(this.openingTimeout);
        this.openingTimeout = null;
        clearTimeout(this.closingTimeout);
        this.closingTimeout = null;
      }
    }, {
      key: "keyUpListener",
      value: function keyUpListener(e) {
        if (e.keyCode === 27) {
          this.props.onEscape();
        }
      }
    }, {
      key: "openDialog",
      value: function openDialog() {
        this.parentElement.appendChild(this.containerElement);
        this.setState(function () {
          return {
            dialogState: TOOLTIP_STATE.opening
          };
        });
      }
    }, {
      key: "closeDialog",
      value: function closeDialog() {
        this.setState(function () {
          return {
            dialogState: TOOLTIP_STATE.closing
          };
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            className = _this$props2.className,
            children = _this$props2.children,
            variant = _this$props2.variant,
            show = _this$props2.show,
            onEscape = _this$props2.onEscape,
            onOpen = _this$props2.onOpen,
            onClose = _this$props2.onClose,
            parentElement = _this$props2.parentElement,
            extraProps = _objectWithoutProperties(_this$props2, ["className", "children", "variant", "show", "onEscape", "onOpen", "onClose", "parentElement"]);

        var dialogState = this.state.dialogState;

        if (dialogState === TOOLTIP_STATE.closed) {
          return null;
        }

        var dialogClassName = luiClassName('dialog', {
          className: className,
          modifiers: {
            variant: variant
          }
        });
        var backgroundClassName = 'lui-modal-background';

        if (dialogState === TOOLTIP_STATE.opening || dialogState === TOOLTIP_STATE.closing) {
          dialogClassName += ' lui-fade';
          backgroundClassName += ' lui-fade';
        }

        return reactDom.createPortal(React__default.createElement("div", {
          className: "lui-dialog-container"
        }, React__default.createElement("div", {
          className: backgroundClassName
        }), React__default.createElement("div", _extends({
          className: dialogClassName,
          tabIndex: "-1"
        }, extraProps), children)), this.containerElement);
      }
    }]);

    return Dialog;
  }(React.Component);

  var DialogBody = function DialogBody(_ref) {
    var className = _ref.className,
        children = _ref.children,
        nopad = _ref.nopad,
        extraProps = _objectWithoutProperties(_ref, ["className", "children", "nopad"]);

    var finalClassName = luiClassName('dialog__body', {
      className: className,
      states: {
        nopad: nopad
      }
    });
    return React__default.createElement("div", _extends({
      className: finalClassName
    }, extraProps), children);
  };

  var DialogFooter = function DialogFooter(_ref) {
    var className = _ref.className,
        children = _ref.children,
        nopad = _ref.nopad,
        extraProps = _objectWithoutProperties(_ref, ["className", "children", "nopad"]);

    var finalClassName = luiClassName('dialog__footer', {
      className: className,
      states: {
        nopad: nopad
      }
    });
    return React__default.createElement("div", _extends({
      className: finalClassName
    }, extraProps), children);
  };

  var DialogHeader = function DialogHeader(_ref) {
    var className = _ref.className,
        children = _ref.children,
        nopad = _ref.nopad,
        extraProps = _objectWithoutProperties(_ref, ["className", "children", "nopad"]);

    var finalClassName = luiClassName('dialog__header', {
      className: className,
      states: {
        nopad: nopad
      }
    });
    return React__default.createElement("div", _extends({
      className: finalClassName
    }, extraProps), children);
  };

  var DialogTitle = function DialogTitle(_ref) {
    var className = _ref.className,
        children = _ref.children,
        extraProps = _objectWithoutProperties(_ref, ["className", "children"]);

    var finalClassName = luiClassName('dialog__title', {
      className: className
    });
    return React__default.createElement("div", _extends({
      className: finalClassName
    }, extraProps), children);
  };

  Dialog.Header = DialogHeader;
  Dialog.Title = DialogTitle;
  Dialog.Body = DialogBody;
  Dialog.Footer = DialogFooter;

  var FadeButton = function FadeButton(_ref) {
    var className = _ref.className,
        children = _ref.children,
        variant = _ref.variant,
        size = _ref.size,
        block = _ref.block,
        rounded = _ref.rounded,
        active = _ref.active,
        extraProps = _objectWithoutProperties(_ref, ["className", "children", "variant", "size", "block", "rounded", "active"]);

    var finalClassName = luiClassName('fade-button', {
      className: className,
      modifiers: {
        variant: variant,
        size: size,
        block: block,
        rounded: rounded
      },
      states: {
        active: active
      }
    });
    return React__default.createElement("button", _extends({
      type: "button",
      className: finalClassName
    }, extraProps), children);
  };

  var FadeButtonIcon = function FadeButtonIcon(props) {
    return React__default.createElement(Icon, _extends({
      className: "lui-fade-button__icon"
    }, props));
  };

  var FadeButtonText = function FadeButtonText(_ref) {
    var children = _ref.children,
        extraProps = _objectWithoutProperties(_ref, ["children"]);

    return React__default.createElement("span", _extends({
      className: "lui-fade-button__text"
    }, extraProps), children);
  };

  var FadeButtonCaret = function FadeButtonCaret(props) {
    return React__default.createElement("span", _extends({
      className: "lui-fade-button__caret  lui-caret"
    }, props));
  };

  FadeButton.Icon = FadeButtonIcon;
  FadeButton.Text = FadeButtonText;
  FadeButton.Caret = FadeButtonCaret;

  var Input =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Input, _Component);

    function Input(props) {
      var _this;

      _classCallCheck(this, Input);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Input).call(this, props));
      _this.focus = _this.focus.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(Input, [{
      key: "focus",
      value: function focus() {
        this.element.focus();
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            className = _this$props.className,
            variant = _this$props.variant,
            size = _this$props.size,
            invalid = _this$props.invalid,
            extraProps = _objectWithoutProperties(_this$props, ["className", "variant", "size", "invalid"]);

        var finalClassName = luiClassName('input', {
          className: className,
          modifiers: {
            variant: variant,
            size: size
          },
          states: {
            invalid: invalid
          }
        });
        return React__default.createElement("input", _extends({
          ref: function ref(element) {
            _this2.element = element;
          },
          className: finalClassName
        }, extraProps));
      }
    }]);

    return Input;
  }(React.Component);

  var InputGroup = function InputGroup(_ref) {
    var className = _ref.className,
        children = _ref.children,
        variant = _ref.variant,
        extraProps = _objectWithoutProperties(_ref, ["className", "children", "variant"]);

    var finalClassName = luiClassName('input-group', {
      className: className,
      modifiers: {
        variant: variant
      }
    });
    return React__default.createElement("div", _extends({
      className: finalClassName
    }, extraProps), children);
  };

  var InputGroupButton = function InputGroupButton(_ref) {
    var _ref$className = _ref.className,
        className = _ref$className === void 0 ? '' : _ref$className,
        children = _ref.children,
        extraProps = _objectWithoutProperties(_ref, ["className", "children"]);

    var finalClassName = "lui-input-group__item  lui-input-group__button  ".concat(className).trim();
    return React__default.createElement(Button, _extends({
      className: finalClassName
    }, extraProps), children);
  };

  var InputGroupInput = function InputGroupInput(_ref) {
    var _ref$className = _ref.className,
        className = _ref$className === void 0 ? '' : _ref$className,
        extraProps = _objectWithoutProperties(_ref, ["className"]);

    var finalClassName = "lui-input-group__item  lui-input-group__input  ".concat(className).trim();
    return React__default.createElement(Input, _extends({
      className: finalClassName
    }, extraProps));
  };

  InputGroup.Button = InputGroupButton;
  InputGroup.Input = InputGroupInput;

  var List = function List(_ref) {
    var className = _ref.className,
        children = _ref.children,
        variant = _ref.variant,
        extraProps = _objectWithoutProperties(_ref, ["className", "children", "variant"]);

    var finalClassName = luiClassName('list', {
      className: className,
      modifiers: {
        variant: variant
      }
    });
    return React__default.createElement("ul", _extends({
      className: finalClassName
    }, extraProps), children);
  };

  var ListItem = function ListItem(_ref) {
    var _ref$className = _ref.className,
        className = _ref$className === void 0 ? '' : _ref$className,
        children = _ref.children,
        active = _ref.active,
        disabled = _ref.disabled,
        extraProps = _objectWithoutProperties(_ref, ["className", "children", "active", "disabled"]);

    var finalClassName = luiClassName('list__item', {
      className: className,
      states: {
        active: active,
        disabled: disabled
      }
    });
    return React__default.createElement("li", _extends({
      className: finalClassName
    }, extraProps), children);
  };

  var ListHeader = function ListHeader(_ref) {
    var _ref$className = _ref.className,
        className = _ref$className === void 0 ? '' : _ref$className,
        children = _ref.children,
        extraProps = _objectWithoutProperties(_ref, ["className", "children"]);

    var finalClassName = "lui-list__header  ".concat(className).trim();
    return React__default.createElement("li", _extends({
      className: finalClassName
    }, extraProps), children);
  };

  var ListText = function ListText(_ref) {
    var _ref$className = _ref.className,
        className = _ref$className === void 0 ? '' : _ref$className,
        children = _ref.children,
        extraProps = _objectWithoutProperties(_ref, ["className", "children"]);

    var finalClassName = "lui-list__text  ".concat(className).trim();
    return React__default.createElement("div", _extends({
      className: finalClassName
    }, extraProps), children);
  };

  var ListAside = function ListAside(_ref) {
    var _ref$className = _ref.className,
        className = _ref$className === void 0 ? '' : _ref$className,
        children = _ref.children,
        extraProps = _objectWithoutProperties(_ref, ["className", "children"]);

    var finalClassName = "lui-list__aside  ".concat(className).trim();
    return React__default.createElement("div", _extends({
      className: finalClassName
    }, extraProps), children);
  };

  List.Item = ListItem;
  List.Header = ListHeader;
  List.Text = ListText;
  List.Aside = ListAside;

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
    var top;
    var left;

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
    var top;
    var left;

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
        offset = _options$offset === void 0 ? 0 : _options$offset,
        _options$minWindowOff = options.minWindowOffset,
        minWindowOffset = _options$minWindowOff === void 0 ? 0 : _options$minWindowOff,
        _options$minEdgeOffse = options.minEdgeOffset,
        minEdgeOffset = _options$minEdgeOffse === void 0 ? 0 : _options$minEdgeOffse;
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
    } // If no fit is found - return the first position


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
    return "rlui-popover-".concat(counter);
  }

  var PopoverContent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(PopoverContent, _Component);

    function PopoverContent(props) {
      var _this;

      _classCallCheck(this, PopoverContent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(PopoverContent).call(this, props));
      _this.state = {
        positionResult: null,
        id: nextId()
      };
      _this.reposition = _this.reposition.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(PopoverContent, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this$props = this.props,
            alignTo = _this$props.alignTo,
            dock = _this$props.dock;
        alignTo.setAttribute('aria-describedby', this.state.id);
        this.reposition(dock, alignTo);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.props.alignTo.removeAttribute('aria-describedby', this.state.id);
      }
    }, {
      key: "reposition",
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
      key: "render",
      value: function render() {
        var _this2 = this;

        var res = this.state.positionResult;
        var style = {
          visibility: 'hidden',
          position: 'absolute',
          maxWidth: '500px',
          top: res ? "".concat(res.position.top, "px") : '-99999px',
          left: res ? "".concat(res.position.left, "px") : '-99999px'
        };
        var arrowElem;

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
              arrow.style.left = "".concat(res.toPosition.left - res.position.left, "px");
            } else {
              arrow.style.top = "".concat(res.toPosition.top - res.position.top, "px");
            }
          }

          arrowElem = React__default.createElement("div", {
            className: "lui-popover__arrow  lui-popover__arrow--".concat(arrow.dock),
            style: arrow.style
          });
        }

        return React__default.createElement("div", {
          ref: function ref(elem) {
            _this2.popoverElem = elem;
          },
          role: "dialog",
          className: this.props.className,
          style: style,
          id: this.state.id
        }, this.props.children, arrowElem);
      }
    }]);

    return PopoverContent;
  }(React.Component);

  var FADE_DURATION$1 = 100;
  var currentId$1 = 0;

  var Popover =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Popover, _Component);

    function Popover(props) {
      var _this;

      _classCallCheck(this, Popover);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Popover).call(this, props));
      _this.portalId = "rlui-popover-".concat(currentId$1);
      _this.state = {
        popoverState: TOOLTIP_STATE.closed
      };
      currentId$1 += 1;
      _this.outsideListener = _this.outsideListener.bind(_assertThisInitialized(_this));
      _this.keyUpListener = _this.keyUpListener.bind(_assertThisInitialized(_this));
      _this.openPopover = _this.openPopover.bind(_assertThisInitialized(_this));
      _this.closePopover = _this.closePopover.bind(_assertThisInitialized(_this));
      _this.ref = React.createRef();

      if (!props.inline && typeof document !== 'undefined') {
        _this.parentElement = props.parentElement || document.getElementById('show-service-overlay') || document.body;
        _this.containerElement = document.createElement('div');
        _this.containerElement.id = _this.props.portalId;
      }

      return _this;
    }

    _createClass(Popover, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.show) {
          this.openPopover();
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this2 = this;

        var popoverState = this.state.popoverState;
        var _this$props = this.props,
            show = _this$props.show,
            inline = _this$props.inline,
            onEscape = _this$props.onEscape,
            onOpen = _this$props.onOpen,
            onClose = _this$props.onClose,
            onOutside = _this$props.onOutside;

        if (!prevProps.show && show) {
          this.openPopover();
        } else if (prevProps.show && !show) {
          this.closePopover();
        }

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
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var popoverState = this.state.popoverState;
        var _this$props2 = this.props,
            inline = _this$props2.inline,
            onClose = _this$props2.onClose;
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
      key: "keyUpListener",
      value: function keyUpListener(e) {
        if (e.keyCode === 27) {
          this.props.onEscape();
        }
      }
    }, {
      key: "outsideListener",
      value: function outsideListener(e) {
        var element = this.ref.current;

        if (element && !element.contains(e.target)) {
          this.props.onOutside(e);
        }
      }
    }, {
      key: "openPopover",
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
      key: "closePopover",
      value: function closePopover() {
        this.setState(function () {
          return {
            popoverState: TOOLTIP_STATE.closing
          };
        });
      }
    }, {
      key: "render",
      value: function render() {
        var popoverState = this.state.popoverState;

        if (popoverState === TOOLTIP_STATE.closed) {
          return null;
        }

        var _this$props3 = this.props,
            className = _this$props3.className,
            children = _this$props3.children,
            inline = _this$props3.inline,
            variant = _this$props3.variant,
            extraProps = _objectWithoutProperties(_this$props3, ["className", "children", "inline", "variant"]);

        var popoverClassName = luiClassName('popover', {
          className: className,
          modifiers: {
            variant: variant
          }
        });

        if (popoverState === TOOLTIP_STATE.opening || popoverState === TOOLTIP_STATE.closing) {
          popoverClassName += ' lui-fade';
        }

        if (inline) {
          return React__default.createElement("div", {
            ref: this.ref
          }, React__default.createElement(PopoverContent, _extends({
            className: popoverClassName,
            inline: true
          }, extraProps), children));
        }

        return reactDom.createPortal(React__default.createElement("div", {
          ref: this.ref
        }, React__default.createElement(PopoverContent, _extends({
          className: popoverClassName
        }, extraProps), children)), this.containerElement);
      }
    }]);

    return Popover;
  }(React.Component);

  var PopoverBody = function PopoverBody(_ref) {
    var className = _ref.className,
        children = _ref.children,
        nopad = _ref.nopad,
        extraProps = _objectWithoutProperties(_ref, ["className", "children", "nopad"]);

    var finalClassName = luiClassName('popover__body', {
      className: className,
      states: {
        nopad: nopad
      }
    });
    return React__default.createElement("div", _extends({
      className: finalClassName
    }, extraProps), children);
  };

  var PopoverButton = function PopoverButton(_ref) {
    var className = _ref.className,
        children = _ref.children,
        extraProps = _objectWithoutProperties(_ref, ["className", "children"]);

    var finalClassName = "lui-popover__button ".concat(className).trim();
    return React__default.createElement(Button, _extends({
      className: finalClassName
    }, extraProps), children);
  };

  var PopoverFooter = function PopoverFooter(_ref) {
    var className = _ref.className,
        children = _ref.children,
        nopad = _ref.nopad,
        extraProps = _objectWithoutProperties(_ref, ["className", "children", "nopad"]);

    var finalClassName = luiClassName('popover__footer', {
      className: className,
      states: {
        nopad: nopad
      }
    });
    return React__default.createElement("div", _extends({
      className: finalClassName
    }, extraProps), children);
  };

  var PopoverHeader = function PopoverHeader(_ref) {
    var className = _ref.className,
        children = _ref.children,
        nopad = _ref.nopad,
        extraProps = _objectWithoutProperties(_ref, ["className", "children", "nopad"]);

    var finalClassName = luiClassName('popover__header', {
      className: className,
      states: {
        nopad: nopad
      }
    });
    return React__default.createElement("div", _extends({
      className: finalClassName
    }, extraProps), children);
  };

  var PopoverTitle = function PopoverTitle(_ref) {
    var className = _ref.className,
        children = _ref.children,
        extraProps = _objectWithoutProperties(_ref, ["className", "children"]);

    var finalClassName = luiClassName('popover__title', {
      className: className
    });
    return React__default.createElement("div", _extends({
      className: finalClassName
    }, extraProps), children);
  };

  Popover.Header = PopoverHeader;
  Popover.Title = PopoverTitle;
  Popover.Body = PopoverBody;
  Popover.Button = PopoverButton;
  Popover.Footer = PopoverFooter;

  var RadioButton = function RadioButton(_ref) {
    var children = _ref.children,
        className = _ref.className,
        title = _ref.title,
        htmlFor = _ref.htmlFor,
        active = _ref.active,
        variant = _ref.variant,
        extraProps = _objectWithoutProperties(_ref, ["children", "className", "title", "htmlFor", "active", "variant"]);

    var finalClassName = luiClassName('radiobutton', {
      className: className,
      states: {
        active: active
      },
      modifiers: {
        variant: variant
      }
    });
    return React__default.createElement("label", {
      htmlFor: htmlFor,
      className: finalClassName
    }, React__default.createElement("input", _extends({
      className: "lui-radiobutton__input"
    }, extraProps, {
      type: "radio"
    })), React__default.createElement("div", {
      className: "lui-radiobutton__radio-wrap"
    }, React__default.createElement("span", {
      className: "lui-radiobutton__radio"
    }), React__default.createElement("span", {
      className: "lui-radiobutton__radio-text"
    }, children)));
  };

  var Select =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Select, _Component);

    function Select(props) {
      var _this;

      _classCallCheck(this, Select);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, props));
      _this.focus = _this.focus.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(Select, [{
      key: "focus",
      value: function focus() {
        this.element.focus();
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            active = _this$props.active,
            variant = _this$props.variant,
            extraProps = _objectWithoutProperties(_this$props, ["children", "className", "active", "variant"]);

        var finalClassName = luiClassName('select', {
          className: className,
          modifiers: {
            variant: variant
          },
          states: {
            active: active
          }
        });
        return React__default.createElement("select", _extends({
          ref: function ref(element) {
            _this2.element = element;
          },
          className: finalClassName
        }, extraProps), children);
      }
    }]);

    return Select;
  }(React.Component);

  var Search =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Search, _Component);

    function Search(props) {
      var _this;

      _classCallCheck(this, Search);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Search).call(this, props));
      _this.focus = _this.focus.bind(_assertThisInitialized(_this));
      _this.onClearClick = _this.onClearClick.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(Search, [{
      key: "onClearClick",
      value: function onClearClick(e) {
        e.preventDefault();

        if (typeof this.props.onClear === 'function') {
          this.props.onClear();
        }
      }
    }, {
      key: "focus",
      value: function focus() {
        this.element.focus();
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            className = _this$props.className,
            children = _this$props.children,
            variant = _this$props.variant,
            value = _this$props.value,
            onClear = _this$props.onClear,
            extraProps = _objectWithoutProperties(_this$props, ["className", "children", "variant", "value", "onClear"]);

        var finalClassName = luiClassName('search', {
          className: className,
          modifiers: {
            variant: variant
          }
        });
        return React__default.createElement("div", {
          className: finalClassName
        }, React__default.createElement("span", {
          className: "lui-icon  lui-icon--search  lui-search__search-icon"
        }), React__default.createElement("input", _extends({
          ref: function ref(elem) {
            _this2.element = elem;
          },
          className: "lui-search__input",
          value: value
        }, extraProps, {
          type: "text"
        })), value ? React__default.createElement("button", {
          type: "button",
          className: "lui-search__clear-button",
          onClick: this.onClearClick
        }, React__default.createElement("span", {
          className: "lui-icon  lui-icon--small  lui-icon--close"
        })) : null);
      }
    }]);

    return Search;
  }(React.Component);

  var Switch =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Switch, _Component);

    function Switch(props) {
      var _this;

      _classCallCheck(this, Switch);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Switch).call(this, props));
      _this.focus = _this.focus.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(Switch, [{
      key: "focus",
      value: function focus() {
        this.element.focus();
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            title = _this$props.title,
            htmlFor = _this$props.htmlFor,
            active = _this$props.active,
            variant = _this$props.variant,
            extraProps = _objectWithoutProperties(_this$props, ["children", "className", "title", "htmlFor", "active", "variant"]);

        var finalClassName = luiClassName('switch', {
          className: className,
          modifiers: {
            variant: variant
          },
          states: {
            active: active
          }
        });
        return React__default.createElement("div", {
          className: finalClassName,
          title: title
        }, React__default.createElement("label", {
          htmlFor: htmlFor,
          className: "lui-switch__label"
        }, React__default.createElement("input", _extends({
          ref: function ref(element) {
            _this2.element = element;
          },
          className: "lui-switch__checkbox"
        }, extraProps, {
          type: "checkbox"
        })), React__default.createElement("span", {
          className: "lui-switch__wrap"
        }, React__default.createElement("div", {
          className: "lui-switch__inner"
        }), React__default.createElement("div", {
          className: "lui-switch__switch"
        }))));
      }
    }]);

    return Switch;
  }(React.Component);

  var Tab = function Tab(_ref) {
    var className = _ref.className,
        children = _ref.children,
        variant = _ref.variant,
        active = _ref.active,
        disabled = _ref.disabled,
        extraProps = _objectWithoutProperties(_ref, ["className", "children", "variant", "active", "disabled"]);

    var finalClassName = luiClassName('tab', {
      className: className,
      modifiers: {
        variant: variant
      },
      states: {
        active: active,
        disabled: disabled
      }
    });
    return React__default.createElement("li", _extends({
      className: finalClassName
    }, extraProps), children);
  };

  var TabAside = function TabAside(props) {
    return React__default.createElement("div", {
      className: "lui-tab__aside"
    }, props.children);
  };

  var TabText = function TabText(props) {
    return React__default.createElement("div", {
      className: "lui-tab__text"
    }, props.children);
  };

  Tab.Text = TabText;
  Tab.Aside = TabAside;

  var Tabset = function Tabset(_ref) {
    var className = _ref.className,
        children = _ref.children,
        variant = _ref.variant,
        fill = _ref.fill,
        extraProps = _objectWithoutProperties(_ref, ["className", "children", "variant", "fill"]);

    var finalClassName = luiClassName('tabset', {
      className: className,
      modifiers: {
        variant: variant,
        fill: fill
      }
    });
    return React__default.createElement("ul", _extends({
      className: finalClassName
    }, extraProps), children);
  };

  var Textarea =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Textarea, _Component);

    function Textarea(props) {
      var _this;

      _classCallCheck(this, Textarea);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Textarea).call(this, props));
      _this.focus = _this.focus.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(Textarea, [{
      key: "focus",
      value: function focus() {
        this.element.focus();
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            className = _this$props.className,
            children = _this$props.children,
            variant = _this$props.variant,
            invalid = _this$props.invalid,
            extraProps = _objectWithoutProperties(_this$props, ["className", "children", "variant", "invalid"]);

        var finalClassName = luiClassName('textarea', {
          className: className,
          modifiers: {
            variant: variant
          },
          states: {
            invalid: invalid
          }
        });
        return React__default.createElement("textarea", _extends({
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

  var Toast =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Toast, _Component);

    function Toast(props) {
      var _this;

      _classCallCheck(this, Toast);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Toast).call(this, props));
      currentId$2 += 1;
      _this.portalId = "rlui-toast-".concat(currentId$2);
      _this.state = {
        toastState: TOOLTIP_STATE.closed
      };
      _this.openToast = _this.openToast.bind(_assertThisInitialized(_this));
      _this.closeToast = _this.closeToast.bind(_assertThisInitialized(_this));

      if (typeof document !== 'undefined') {
        _this.parentElement = props.parentElement || document.getElementById('show-service-overlay') || document.body;
      }

      return _this;
    }

    _createClass(Toast, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.show) {
          this.openToast();
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this2 = this;

        var show = this.props.show;

        if (!prevProps.show && show) {
          this.openToast();
        } else if (prevProps.show && !show) {
          this.closeToast();
        }

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
      key: "openToast",
      value: function openToast() {
        this.setState(function () {
          return {
            toastState: TOOLTIP_STATE.opening
          };
        });
      }
    }, {
      key: "closeToast",
      value: function closeToast() {
        this.setState(function () {
          return {
            toastState: TOOLTIP_STATE.closing
          };
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var toastState = this.state.toastState;

        if (toastState === TOOLTIP_STATE.closed) {
          return null;
        }

        var _this$props = this.props,
            className = _this$props.className,
            children = _this$props.children,
            dock = _this$props.dock,
            alignTo = _this$props.alignTo,
            inline = _this$props.inline,
            variant = _this$props.variant,
            show = _this$props.show,
            onOpen = _this$props.onOpen,
            onClose = _this$props.onClose,
            parentElement = _this$props.parentElement,
            extraProps = _objectWithoutProperties(_this$props, ["className", "children", "dock", "alignTo", "inline", "variant", "show", "onOpen", "onClose", "parentElement"]);

        var toastClassName = luiClassName('toast', {
          className: className,
          modifiers: {
            variant: variant
          }
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
        return reactDom.createPortal(React__default.createElement("div", _extends({
          ref: function ref(el) {
            _this3.toast = el;
          },
          className: toastClassName,
          style: style
        }, extraProps), children), containerElement);
      }
    }]);

    return Toast;
  }(React.Component);

  var ToastAction = function ToastAction(_ref) {
    var className = _ref.className,
        children = _ref.children,
        extraProps = _objectWithoutProperties(_ref, ["className", "children"]);

    var finalClassName = "lui-toast__aside ".concat(className).trim();
    return React__default.createElement("div", _extends({
      className: finalClassName
    }, extraProps), children);
  };

  var ToastText = function ToastText(_ref) {
    var _ref$className = _ref.className,
        className = _ref$className === void 0 ? '' : _ref$className,
        children = _ref.children,
        extraProps = _objectWithoutProperties(_ref, ["className", "children"]);

    var finalClassName = "lui-toast__text ".concat(className).trim();
    return React__default.createElement("div", _extends({
      className: finalClassName
    }, extraProps), children);
  };

  Toast.Action = ToastAction;
  Toast.Text = ToastText;

  var DEFAULT_DOCK$1 = 'top';
  var OFFSET = 10;
  var counter$1 = 0;

  function nextId$1() {
    counter$1 += 1;
    return "rlui-tooltip-".concat(counter$1);
  }

  var TooltipContent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(TooltipContent, _Component);

    function TooltipContent(props) {
      var _this;

      _classCallCheck(this, TooltipContent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(TooltipContent).call(this, props));
      _this.state = {
        positionResult: null,
        id: nextId$1()
      };
      _this.reposition = _this.reposition.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(TooltipContent, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this$props = this.props,
            alignTo = _this$props.alignTo,
            dock = _this$props.dock;
        alignTo.setAttribute('aria-describedby', this.state.id);
        this.reposition(dock, alignTo);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this$props2 = this.props,
            alignTo = _this$props2.alignTo,
            dock = _this$props2.dock;

        if (dock !== prevProps.dock || alignTo !== prevProps.alignTo) {
          this.reposition(dock, alignTo);
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.props.alignTo.removeAttribute('aria-describedby', this.state.id);
      }
    }, {
      key: "reposition",
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
      key: "render",
      value: function render() {
        var _this2 = this;

        var res = this.state.positionResult;
        var style = {
          position: 'absolute',
          top: res ? "".concat(res.position.top, "px") : '-99999px',
          left: res ? "".concat(res.position.left, "px") : '-99999px'
        };
        var arrow = {
          dock: '',
          style: {}
        };

        if (res) {
          arrow.style.position = 'absolute';
          arrow.dock = oppositeDock(res.dock);

          if (arrow.dock === 'top' || arrow.dock === 'bottom') {
            arrow.style.left = "".concat(res.toPosition.left - res.position.left, "px");
          } else {
            arrow.style.top = "".concat(res.toPosition.top - res.position.top, "px");
          }
        }

        return React__default.createElement("div", {
          ref: function ref(elem) {
            _this2.element = elem;
          },
          role: "tooltip",
          className: this.props.className,
          style: style,
          id: this.state.id
        }, this.props.children, React__default.createElement("div", {
          className: "lui-tooltip__arrow  lui-tooltip__arrow--".concat(arrow.dock),
          style: arrow.style
        }));
      }
    }]);

    return TooltipContent;
  }(React.Component);

  var FADE_DURATION$3 = 50;
  var currentId$3 = 0;

  var Tooltip =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Tooltip, _Component);

    function Tooltip(props) {
      var _this;

      _classCallCheck(this, Tooltip);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).call(this, props));
      _this.state = {
        tooltipState: props.show ? TOOLTIP_STATE.opening : TOOLTIP_STATE.closed
      };
      _this.portalId = "rlui-tooltip-".concat(currentId$3);
      currentId$3 += 1;
      _this.openTooltip = _this.openTooltip.bind(_assertThisInitialized(_this));
      _this.closeTooltip = _this.closeTooltip.bind(_assertThisInitialized(_this));

      if (!props.inline && typeof document !== 'undefined') {
        _this.parentElement = props.parentElement || document.getElementById('show-service-overlay') || document.body;
        _this.containerElement = document.createElement('div');
        _this.containerElement.id = _this.portalId;
      }

      return _this;
    }

    _createClass(Tooltip, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (!this.props.inline) {
          this.parentElement.appendChild(this.containerElement);
        }

        if (this.state.tooltipState === TOOLTIP_STATE.opening) {
          this.openTooltip();
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this2 = this;

        var tooltipState = this.state.tooltipState;
        var _this$props = this.props,
            show = _this$props.show,
            inline = _this$props.inline,
            onOpen = _this$props.onOpen,
            onClose = _this$props.onClose;

        if (!prevProps.show && show) {
          this.openTooltip();
        } else if (prevProps.show && !show) {
          this.closeTooltip();
        }

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
      key: "openTooltip",
      value: function openTooltip() {
        this.setState(function () {
          return {
            tooltipState: TOOLTIP_STATE.opening
          };
        });
      }
    }, {
      key: "closeTooltip",
      value: function closeTooltip() {
        this.setState(function () {
          return {
            tooltipState: TOOLTIP_STATE.closing
          };
        });
      }
    }, {
      key: "render",
      value: function render() {
        var tooltipState = this.state.tooltipState;

        if (tooltipState === TOOLTIP_STATE.closed) {
          return null;
        }

        var _this$props2 = this.props,
            className = _this$props2.className,
            children = _this$props2.children,
            inline = _this$props2.inline,
            variant = _this$props2.variant,
            extraProps = _objectWithoutProperties(_this$props2, ["className", "children", "inline", "variant"]);

        var tooltipClassName = luiClassName('tooltip', {
          className: className,
          modifiers: {
            variant: variant
          }
        });

        if (tooltipState === TOOLTIP_STATE.opening || tooltipState === TOOLTIP_STATE.closing) {
          tooltipClassName += ' lui-fade';
        }

        if (inline) {
          return React__default.createElement(TooltipContent, _extends({
            inline: true,
            className: tooltipClassName
          }, extraProps), children);
        }

        return reactDom.createPortal(React__default.createElement(TooltipContent, _extends({
          className: tooltipClassName
        }, extraProps), children), this.containerElement);
      }
    }]);

    return Tooltip;
  }(React.Component);

  exports.Button = Button;
  exports.ButtonGroup = ButtonGroup;
  exports.Checkbox = Checkbox;
  exports.Dialog = Dialog;
  exports.FadeButton = FadeButton;
  exports.Icon = Icon;
  exports.Input = Input;
  exports.InputGroup = InputGroup;
  exports.List = List;
  exports.Popover = Popover;
  exports.RadioButton = RadioButton;
  exports.Search = Search;
  exports.Select = Select;
  exports.Switch = Switch;
  exports.Tab = Tab;
  exports.Tabset = Tabset;
  exports.Textarea = Textarea;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
