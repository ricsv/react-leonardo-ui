(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
	(factory((global['React Leonardo UI'] = global['React Leonardo UI'] || {}),global.React,global.ReactDOM));
}(this, (function (exports,React,reactDom) { 'use strict';

var React__default = 'default' in React ? React['default'] : React;

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











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var modifiers = ['variant', 'size', 'block', 'rounded'];
var states = ['active', 'disabled'];

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
    value: function render$$1() {
      var _this2 = this;

      var props = this.props;

      var className = luiClassName('button', {
        props: props,
        modifiers: modifiers,
        states: states
      });
      return React__default.createElement(
        'button',
        _extends({
          ref: function ref(element) {
            _this2.element = element;
          },
          className: className
        }, filterProps(props, modifiers, states)),
        props.children
      );
    }
  }]);
  return Button;
}(React.Component);

var modifiers$1 = ['size', 'name'];

var Icon = function Icon(props) {
  var className = luiClassName('icon', {
    props: props,
    modifiers: modifiers$1
  });
  return React__default.createElement('span', _extends({ className: className, 'aria-hidden': 'true' }, filterProps(props, modifiers$1)));
};

var ButtonIcon = function ButtonIcon(props) {
  return React__default.createElement(Icon, _extends({ className: 'lui-button__icon' }, props));
};

var ButtonText = function ButtonText(props) {
  return React__default.createElement(
    "span",
    { className: "lui-button__text" },
    props.children
  );
};

var ButtonDropdown = function ButtonDropdown() {
  return React__default.createElement("span", { className: "lui-button__caret  lui-caret" });
};

Button$1.Icon = ButtonIcon;
Button$1.Text = ButtonText;
Button$1.Caret = ButtonDropdown;

var ButtonGroup$1 = function ButtonGroup(props) {
  var className = luiClassName('buttongroup', {
    props: props
  });
  return React__default.createElement(
    'div',
    _extends({}, filterProps(props), { className: className }),
    props.children
  );
};

var ButtonGroupButton = function ButtonGroupButton(props) {
  var className = 'lui-buttongroup__button  ' + (props.className || '');
  return React__default.createElement(
    Button$1,
    _extends({}, filterProps(props), { className: className }),
    props.children
  );
};

ButtonGroup$1.Button = ButtonGroupButton;

var states$1 = ['active'];
var modifiers$2 = ['variant'];

var Checkbox$1 = function Checkbox(props) {
  var attributes = filterProps(props, states$1, modifiers$2, 'title', 'type');

  var className = luiClassName('checkbox', {
    props: props,
    states: states$1,
    modifiers: modifiers$2
  });
  return React__default.createElement(
    'label',
    { htmlFor: props.htmlFor, title: props.title, className: className },
    React__default.createElement('input', _extends({ className: 'lui-checkbox__input', type: 'checkbox' }, attributes)),
    React__default.createElement(
      'div',
      { className: 'lui-checkbox__check-wrap' },
      React__default.createElement('span', { className: 'lui-checkbox__check' }),
      React__default.createElement(
        'span',
        { className: 'lui-checkbox__check-text' },
        props.children
      )
    )
  );
};

var Portal = function (_Component) {
  inherits(Portal, _Component);

  function Portal(props) {
    classCallCheck(this, Portal);

    var _this = possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).call(this, props));

    _this.portalElement = null;
    return _this;
  }

  createClass(Portal, [{
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
      reactDom.render(React__default.createElement(
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
    value: function render$$1() {
      return null;
    }
  }]);
  return Portal;
}(React.Component);

var FADE_DURATION = 200;

var DIALOG_STATE = {
  opening: 0,
  open: 1,
  closing: 2,
  closed: 3
};

var modifiers$3 = ['variant'];

var currentId = 0;

var Dialog$1 = function (_Component) {
  inherits(Dialog, _Component);

  function Dialog(props) {
    classCallCheck(this, Dialog);

    var _this = possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));

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

  createClass(Dialog, [{
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
    value: function render$$1() {
      var dialogState = this.state.dialogState;

      var className = luiClassName('dialog', {
        props: this.props,
        modifiers: modifiers$3
      });
      var backgroundClassName = 'lui-modal-background';
      if (dialogState === DIALOG_STATE.opening || dialogState === DIALOG_STATE.closing) {
        className += ' lui-fade';
        backgroundClassName += ' lui-fade';
      }

      var passProps = filterProps(this.props, modifiers$3, 'onEscape', 'show', 'onOpen', 'onClose');

      return dialogState !== DIALOG_STATE.closed ? React__default.createElement(
        Portal,
        { portalId: this.portalId },
        React__default.createElement(
          'div',
          { className: 'lui-dialog-container' },
          React__default.createElement('div', { className: backgroundClassName }),
          React__default.createElement(
            'div',
            _extends({ className: className, tabIndex: '-1' }, passProps),
            this.props.children
          )
        )
      ) : null;
    }
  }]);
  return Dialog;
}(React.Component);

var DialogBody = function DialogBody(props) {
  var className = luiClassName('dialog__body', { props: props });
  return React__default.createElement(
    'div',
    _extends({ className: className }, filterProps(props)),
    props.children
  );
};

var DialogFooter = function DialogFooter(props) {
  var className = luiClassName('dialog__footer', { props: props });
  return React__default.createElement(
    'div',
    _extends({ className: className }, filterProps(props)),
    props.children
  );
};

var DialogHeader = function DialogHeader(props) {
  var className = luiClassName('dialog__header', { props: props });
  return React__default.createElement(
    'div',
    _extends({ className: className }, filterProps(props)),
    props.children
  );
};

var DialogTitle = function DialogTitle(props) {
  var className = luiClassName('dialog__title', { props: props });
  return React__default.createElement(
    'div',
    _extends({ className: className }, filterProps(props)),
    props.children
  );
};

Dialog$1.Header = DialogHeader;
Dialog$1.Title = DialogTitle;
Dialog$1.Body = DialogBody;
Dialog$1.Footer = DialogFooter;

var states$2 = ['active', 'disabled'];
var modifiers$4 = ['variant', 'block', 'rounded', 'size'];

var FadeButton$1 = function FadeButton(props) {
  var className = luiClassName('fade-button', {
    props: props,
    states: states$2,
    modifiers: modifiers$4
  });

  return React__default.createElement(
    'button',
    _extends({ className: className }, filterProps(props, modifiers$4, states$2)),
    props.children
  );
};

var FadeButtonIcon = function FadeButtonIcon(props) {
  return React__default.createElement(Icon, _extends({ className: 'lui-button__icon' }, props));
};

var FadeButtonText = function FadeButtonText(props) {
  return React__default.createElement(
    "span",
    { className: "lui-button__text" },
    props.children
  );
};

var FadeButtonCaret = function FadeButtonCaret() {
  return React__default.createElement("span", { className: "lui-button__caret  lui-caret" });
};

FadeButton$1.Icon = FadeButtonIcon;
FadeButton$1.Text = FadeButtonText;
FadeButton$1.Caret = FadeButtonCaret;

var modifiers$5 = ['variant', 'size'];

var states$3 = ['invalid'];

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
    value: function render$$1() {
      var _this2 = this;

      var props = this.props;

      var className = luiClassName('input', {
        props: props,
        states: states$3,
        modifiers: modifiers$5
      });
      var attributes = filterProps(props, modifiers$5, states$3, 'type');
      return React__default.createElement('input', _extends({
        ref: function ref(element) {
          _this2.element = element;
        },
        className: className }, attributes));
    }
  }]);
  return Input;
}(React.Component);

var modifiers$6 = ['variant'];

var InputGroup$1 = function InputGroup(props) {
  var className = luiClassName('input-group', {
    props: props,
    modifiers: modifiers$6
  });
  return React__default.createElement(
    'div',
    _extends({ className: className }, filterProps(props, modifiers$6)),
    props.children
  );
};

var InputGroupButton = function InputGroupButton(props) {
  var className = 'lui-input-group__item  lui-input-group__button  ' + (props.className || '');
  return React__default.createElement(
    Button$1,
    _extends({ className: className }, filterProps(props)),
    props.children
  );
};

var InputGroupInput = function InputGroupInput(props) {
  var className = 'lui-input-group__item  lui-input-group__input  ' + (props.className || '');
  return React__default.createElement(Input$1, _extends({ className: className }, filterProps(props)));
};

InputGroup$1.Button = InputGroupButton;
InputGroup$1.Input = InputGroupInput;

var modifiers$7 = ['variant'];

var List$1 = function List(props) {
  var className = luiClassName('list', {
    props: props,
    modifiers: modifiers$7
  });
  return React__default.createElement(
    'ul',
    _extends({ className: className }, filterProps(props, modifiers$7)),
    props.children
  );
};

var ListItem = function ListItem(props) {
  var className = luiClassName('list__item', { props: props });
  return React__default.createElement(
    'li',
    _extends({ className: className }, filterProps(props)),
    props.children
  );
};

var ListAside = function ListAside(props) {
  var className = luiClassName('list__header', { props: props });
  return React__default.createElement(
    'li',
    _extends({ className: className }, filterProps(props)),
    props.children
  );
};

var ListText = function ListText(props) {
  var className = luiClassName('list__text', { props: props });
  return React__default.createElement(
    'div',
    _extends({ className: className }, filterProps(props)),
    props.children
  );
};

var ListAside$1 = function ListAside(props) {
  var className = luiClassName('list__aside', { props: props });
  return React__default.createElement(
    'div',
    _extends({ className: className }, filterProps(props)),
    props.children
  );
};

List$1.Item = ListItem;
List$1.Header = ListAside;
List$1.Text = ListText;
List$1.Aside = ListAside$1;

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
    value: function render$$1() {
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

var PopoverBody = function PopoverBody(props) {
  var className = 'lui-popover__body ' + (props.className ? props.className : '');
  return React__default.createElement(
    'div',
    _extends({ className: className }, filterProps(props)),
    props.children
  );
};

var PopoverFooter = function PopoverFooter(props) {
  var className = luiClassName('popover__footer', { props: props });
  return React__default.createElement(
    'div',
    _extends({ className: className }, filterProps(props)),
    props.children
  );
};

var PopoverHeader = function PopoverHeader(props) {
  var className = luiClassName('popover__header', { props: props });
  return React__default.createElement(
    'div',
    _extends({ className: className }, filterProps(props)),
    props.children
  );
};

var PopoverTitle = function PopoverTitle(props) {
  var className = luiClassName('popover__title', { props: props });
  return React__default.createElement(
    'div',
    _extends({ className: className }, filterProps(props)),
    props.children
  );
};

var FADE_DURATION$1 = 100;

var POPOVER_STATE = {
  opening: 0,
  open: 1,
  closing: 2,
  closed: 3
};

var modifiers$8 = ['variant'];

var currentId$1 = 0;

var Popover$1 = function (_Component) {
  inherits(Popover, _Component);

  function Popover(props) {
    classCallCheck(this, Popover);

    var _this = possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).call(this, props));

    _this.portalId = 'rlui-popover-' + currentId$1;
    _this.state = {
      popoverState: props.show ? POPOVER_STATE.opening : POPOVER_STATE.closed
    };
    currentId$1++;

    _this.outsideListener = _this.outsideListener.bind(_this);
    _this.transitionToOpen = _this.transitionToOpen.bind(_this);
    _this.transitionToClosed = _this.transitionToClosed.bind(_this);
    return _this;
  }

  createClass(Popover, [{
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
      }, FADE_DURATION$1);
    }
  }, {
    key: 'render',
    value: function render$$1() {
      var _this4 = this;

      var popoverState = this.state.popoverState;

      var props = this.props;
      var className = luiClassName('popover', {
        props: props,
        modifiers: modifiers$8
      });
      if (popoverState === POPOVER_STATE.opening || popoverState === POPOVER_STATE.closing) {
        className += ' lui-fade';
      }

      if (popoverState === POPOVER_STATE.closed) {
        return null;
      } else if (this.props.inline) {
        return React__default.createElement(
          'div',
          { ref: function ref(el) {
              _this4.element = el;
            } },
          React__default.createElement(
            PopoverContent,
            _extends({ className: className, inline: true }, filterProps(props)),
            props.children
          )
        );
      }
      return React__default.createElement(
        Portal,
        { portalId: this.portalId },
        React__default.createElement(
          'div',
          { ref: function ref(el) {
              _this4.element = el;
            } },
          React__default.createElement(
            PopoverContent,
            _extends({ className: className }, filterProps(props)),
            props.children
          )
        )
      );
    }
  }]);
  return Popover;
}(React.Component);

Popover$1.Header = PopoverHeader;
Popover$1.Title = PopoverTitle;
Popover$1.Body = PopoverBody;
Popover$1.Footer = PopoverFooter;

var PopoverButton = function PopoverButton(props) {
  var className = 'lui-popover__button  ' + (props.className || '');
  return React__default.createElement(
    Button$1,
    _extends({}, filterProps(props), { className: className }),
    props.children
  );
};

Popover$1.Header = PopoverHeader;
Popover$1.Title = PopoverTitle;
Popover$1.Body = PopoverBody;
Popover$1.Button = PopoverButton;
Popover$1.Footer = PopoverFooter;

var modifiers$9 = ['variant'];
var states$4 = ['active'];

var RadioButton$1 = function RadioButton(props) {
  var className = luiClassName('radiobutton', {
    props: props,
    modifiers: modifiers$9,
    states: states$4
  });

  return React__default.createElement(
    'label',
    { htmlFor: props.htmlFor, className: className },
    React__default.createElement('input', _extends({ className: 'lui-radiobutton__input', type: 'radio' }, filterProps(props, modifiers$9, states$4, 'type'))),
    React__default.createElement(
      'div',
      { className: 'lui-radiobutton__radio-wrap' },
      React__default.createElement('span', { className: 'lui-radiobutton__radio' }),
      React__default.createElement(
        'span',
        { className: 'lui-radiobutton__radio-text' },
        props.children
      )
    )
  );
};

var modifiers$10 = ['variant'];
var states$5 = ['active'];

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
    value: function render$$1() {
      var _this2 = this;

      var props = this.props;

      var className = luiClassName('select', {
        props: props,
        states: states$5,
        modifiers: modifiers$10
      });
      return React__default.createElement(
        'select',
        _extends({
          ref: function ref(element) {
            _this2.element = element;
          },
          className: className
        }, filterProps(props, states$5, modifiers$10)),
        props.children
      );
    }
  }]);
  return Select;
}(React.Component);

var modifiers$11 = ['variant'];

// TODO handle outside updates of value

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
    value: function render$$1() {
      var _this2 = this;

      var props = this.props;

      var className = luiClassName('search', {
        props: props,
        modifiers: modifiers$11
      });

      return React__default.createElement(
        'div',
        { className: className },
        React__default.createElement('span', { className: 'lui-icon  lui-icon--search  lui-search__search-icon' }),
        React__default.createElement('input', _extends({
          ref: function ref(elem) {
            _this2.element = elem;
          },
          type: 'text',
          className: 'lui-search__input'
        }, filterProps(props, modifiers$11, 'type', 'onClear'))),
        this.props.value ? React__default.createElement(
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

var modifiers$12 = ['variant'];
var states$6 = ['active'];

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
    value: function render$$1() {
      var _this2 = this;

      var props = this.props;

      var className = luiClassName('switch', {
        props: props,
        states: states$6,
        modifiers: modifiers$12
      });

      var attributes = filterProps(props, modifiers$12, states$6, 'title', 'type');
      return React__default.createElement(
        'div',
        { className: className, title: props.title },
        React__default.createElement(
          'label',
          { htmlFor: props.htmlFor, className: 'lui-switch__label' },
          React__default.createElement('input', _extends({
            ref: function ref(element) {
              _this2.element = element;
            },
            className: 'lui-switch__checkbox',
            type: 'checkbox'
          }, attributes)),
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

var modifiers$13 = ['variant'];
var states$7 = ['active', 'disabled'];

var Tab$1 = function Tab(props) {
  var className = luiClassName('tab', {
    props: props,
    states: states$7,
    modifiers: modifiers$13
  });
  var attributes = filterProps(props, modifiers$13, states$7);
  return React__default.createElement(
    'li',
    _extends({ className: className }, attributes),
    props.children
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

var modifiers$14 = ['variant', 'fill'];

var Tabset$1 = function Tabset(props) {
  var className = luiClassName('tabset', {
    props: props,
    modifiers: modifiers$14
  });
  return React__default.createElement(
    'ul',
    _extends({ className: className }, filterProps(props, modifiers$14)),
    props.children
  );
};

var modifiers$15 = ['variant'];

var states$8 = ['invalid'];

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
    value: function render$$1() {
      var _this2 = this;

      var props = this.props;

      var className = luiClassName('textarea', {
        props: props,
        states: states$8,
        modifiers: modifiers$15
      });
      return React__default.createElement('textarea', _extends({
        ref: function ref(element) {
          _this2.element = element;
        },
        className: className
      }, filterProps(props, modifiers$15, states$8)));
    }
  }]);
  return Textarea;
}(React.Component);

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
    value: function render$$1() {
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

var currentId$2 = 0;

var FADE_DURATION$2 = 50;

var TOOLTIP_STATE = {
  opening: 0,
  open: 1,
  closing: 2,
  closed: 3
};

var Tooltip$1 = function (_Component) {
  inherits(Tooltip, _Component);

  function Tooltip(props) {
    classCallCheck(this, Tooltip);

    var _this = possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

    _this.state = {
      tooltipState: props.show ? TOOLTIP_STATE.opening : TOOLTIP_STATE.closed
    };
    _this.portalId = 'rlui-tooltip-' + currentId$2;
    currentId$2++;

    _this.transitionToOpen = _this.transitionToOpen.bind(_this);
    _this.transitionToClosed = _this.transitionToClosed.bind(_this);
    return _this;
  }

  createClass(Tooltip, [{
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
      }, FADE_DURATION$2);
    }
  }, {
    key: 'render',
    value: function render$$1() {
      var props = this.props;
      var tooltipState = this.state.tooltipState;
      var className = luiClassName('tooltip', { props: props });
      if (tooltipState === TOOLTIP_STATE.opening || tooltipState === TOOLTIP_STATE.closing) {
        className += ' lui-fade';
      }

      if (tooltipState === TOOLTIP_STATE.closed) {
        return null;
      } else if (this.props.inline) {
        return React__default.createElement(
          TooltipContent,
          _extends({ inline: true, className: className }, filterProps(props)),
          props.children
        );
      }
      return React__default.createElement(
        Portal,
        { portalId: this.portalId },
        React__default.createElement(
          TooltipContent,
          _extends({ className: className }, filterProps(props)),
          props.children
        )
      );
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
exports.Tooltip = Tooltip$1;

Object.defineProperty(exports, '__esModule', { value: true });

})));
