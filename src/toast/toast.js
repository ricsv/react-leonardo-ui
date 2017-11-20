import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import { luiClassName } from '../util';

const FADE_DURATION = 200;
const TOAST_STATE = {
  opening: 0,
  open: 1,
  closing: 2,
  closed: 3,
};

let currentId = 0;

const getOrCreateContainer = () => {
  let element = document.getElementById('lui-toast-container');
  if (!element) {
    element = document.createElement('div');
    element.classList.add('lui-toast-container');
    element.id = 'lui-toast-container';
    document.body.appendChild(element);
  }
  return element;
};

class Toast extends Component {
  constructor(props) {
    super(props);

    currentId += 1;
    this.portalId = `rlui-toast-${currentId}`;
    this.state = {
      toastState: TOAST_STATE.closed,
    };

    this.openToast = this.openToast.bind(this);
    this.closeToast = this.closeToast.bind(this);
  }
  componentDidMount() {
    if (this.props.show) {
      this.openToast();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (!this.props.show && nextProps.show) {
      this.openToast();
    } else if (this.props.show && !nextProps.show) {
      this.closeToast();
    }
  }
  componentDidUpdate() {
    if (this.state.toastState === TOAST_STATE.opening) {
      setTimeout(() => {
        this.setState({ toastState: TOAST_STATE.open });
        if (typeof this.props.onOutside === 'function') {
          document.addEventListener('click', this.outsideListener);
        }
        if (typeof this.props.onOpen === 'function') {
          this.props.onOpen();
        }
      });
    } else if (this.state.toastState === TOAST_STATE.closing) {
      if (typeof this.props.onOutside === 'function') {
        document.removeEventListener('click', this.outsideListener);
      }
      setTimeout(() => {
        this.setState({ toastState: TOAST_STATE.closed });
        if (typeof this.props.onClose === 'function') {
          this.props.onClose();
        }
      }, FADE_DURATION);
    }
  }
  openToast() {
    this.setState(() => ({
      toastState: TOAST_STATE.opening,
    }));
  }
  closeToast() {
    this.setState(() => ({
      toastState: TOAST_STATE.closing,
    }));
  }
  render() {
    const { toastState } = this.state;

    if (toastState === TOAST_STATE.closed) {
      return null;
    }

    const {
      className,
      children,
      dock,
      alignTo,
      inline,
      variant,
      show, // Don't pass
      ...extraProps
    } = this.props;

    let toastClassName = luiClassName('toast', {
      className,
      modifiers: { variant },
    });

    const style = {
      bottom: '-50px',
    };
    if (toastState === TOAST_STATE.opening || toastState === TOAST_STATE.closing) {
      toastClassName += ' lui-fade';
    } else {
      style.bottom = '10px';
    }

    if (typeof document === 'undefined') {
      return null;
    }

    const containerElement = getOrCreateContainer();
    return (
      createPortal(
        <div
          ref={(el) => { this.toast = el; }}
          className={toastClassName}
          style={style}
          {...extraProps}
        >
          {children}
        </div>,
        containerElement
      )
    );
  }
}

export default Toast;
