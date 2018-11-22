import React, { createRef, Component } from 'react';
import { createPortal } from 'react-dom';

import POPOVER_STATE from '../overlay-state';
import PopoverContent from './popover-content';
import { luiClassName } from '../util';

const FADE_DURATION = 100;

let currentId = 0;

class Popover extends Component {
  constructor(props) {
    super(props);

    this.portalId = `rlui-popover-${currentId}`;
    this.state = {
      popoverState: POPOVER_STATE.closed,
    };
    currentId += 1;

    this.outsideListener = this.outsideListener.bind(this);
    this.keyUpListener = this.keyUpListener.bind(this);
    this.openPopover = this.openPopover.bind(this);
    this.closePopover = this.closePopover.bind(this);

    this.ref = createRef();

    if (!props.inline && typeof document !== 'undefined') {
      this.parentElement = props.parentElement || document.body;

      this.containerElement = document.createElement('div');
      this.containerElement.id = this.props.portalId;
    }
  }
  componentDidMount() {
    if (this.props.show) {
      this.openPopover();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (!this.props.show && nextProps.show) {
      this.openPopover();
    } else if (this.props.show && !nextProps.show) {
      this.closePopover();
    }
  }
  componentDidUpdate() {
    const {
      popoverState,
    } = this.state;

    const {
      inline,
      onEscape,
      onOpen,
      onClose,
      onOutside,
    } = this.props;

    const outsideEvent = 'ontouchend' in window ? 'touchend' : 'click';
    if (popoverState === POPOVER_STATE.opening && !this.openingTimeout) {
      this.openingTimeout = setTimeout(() => {
        this.openingTimeout = null;
        this.setState(() => ({
          popoverState: POPOVER_STATE.open,
        }));
        if (typeof onEscape === 'function') {
          window.addEventListener('keyup', this.keyUpListener);
        }
        if (typeof onOutside === 'function') {
          document.addEventListener(outsideEvent, this.outsideListener);
        }
        if (typeof onOpen === 'function') {
          onOpen();
        }
      });
    } else if (popoverState === POPOVER_STATE.closing && !this.closingTimeout) {
      if (typeof onEscape === 'function') {
        window.removeEventListener('keyup', this.keyUpListener);
      }
      if (typeof onOutside === 'function') {
        document.removeEventListener(outsideEvent, this.outsideListener);
      }
      this.closingTimeout = setTimeout(() => {
        this.closingTimeout = null;
        this.setState(() => ({
          popoverState: POPOVER_STATE.closed,
        }));
        if (typeof onClose === 'function') {
          onClose();
        }
        if (!inline) {
          this.parentElement.removeChild(this.containerElement);
        }
      }, FADE_DURATION);
    }
  }
  componentWillUnmount() {
    const {
      popoverState,
    } = this.state;

    const {
      inline,
      onClose,
    } = this.props;

    clearTimeout(this.openingTimeout);
    this.openingTimeout = null;
    clearTimeout(this.closingTimeout);
    this.closingTimeout = null;
    if (popoverState === POPOVER_STATE.closing) {
      if (typeof onClose === 'function') {
        onClose();
      }
      if (!inline) {
        this.parentElement.removeChild(this.containerElement);
      }
    }
  }
  keyUpListener(e) {
    if (e.keyCode === 27) {
      this.props.onEscape();
    }
  }
  outsideListener(e) {
    const element = this.ref.current;
    if (element && !element.contains(e.target)) {
      this.props.onOutside(e);
    }
  }
  openPopover() {
    if (!this.props.inline) {
      this.parentElement.appendChild(this.containerElement);
    }

    this.setState(() => ({
      popoverState: POPOVER_STATE.opening,
    }));
  }
  closePopover() {
    this.setState(() => ({
      popoverState: POPOVER_STATE.closing,
    }));
  }
  render() {
    const { popoverState } = this.state;

    if (popoverState === POPOVER_STATE.closed) {
      return null;
    }

    const {
      className,
      children,
      // dock,
      // alignTo,
      inline,
      variant,
      ...extraProps
    } = this.props;

    let popoverClassName = luiClassName('popover', {
      className,
      modifiers: { variant },
    });
    if (popoverState === POPOVER_STATE.opening || popoverState === POPOVER_STATE.closing) {
      popoverClassName += ' lui-fade';
    }

    if (inline) {
      return (
        <div ref={this.ref}>
          <PopoverContent className={popoverClassName} inline {...extraProps}>
            {children}
          </PopoverContent>
        </div>
      );
    }

    return (
      createPortal(
        <div ref={this.ref}>
          <PopoverContent className={popoverClassName} {...extraProps}>
            {children}
          </PopoverContent>
        </div>,
        this.containerElement
      )
    );
  }
}

export default Popover;
