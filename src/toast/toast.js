import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import TOAST_STATE from '../overlay-state';
import { luiClassName } from '../util';

const FADE_DURATION = 200;
let currentId = 0;

const getOrCreateContainer = (parentElement) => {
  let element = document.getElementById('lui-toast-container');
  if (!element) {
    element = document.createElement('div');
    element.classList.add('lui-toast-container');
    element.id = 'lui-toast-container';
    parentElement.appendChild(element);
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


    if (typeof document !== 'undefined') {
      this.parentElement = props.parentElement || document.getElementById('show-service-overlay') || document.body;
    }
  }

  componentDidMount() {
    if (this.props.show) {
      this.openToast();
    }
  }

  componentDidUpdate(prevProps) {
    const { show } = this.props;
    if (!prevProps.show && show) {
      this.openToast();
    } else if (prevProps.show && !show) {
      this.closeToast();
    }
    if (this.state.toastState === TOAST_STATE.opening) {
      setTimeout(() => {
        this.setState(() => ({
          toastState: TOAST_STATE.open,
        }));
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
        this.setState(() => ({
          toastState: TOAST_STATE.closed,
        }));
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
      // Avoid passing
      show,
      onOpen,
      onClose,
      parentElement,
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

    const containerElement = getOrCreateContainer(this.parentElement);
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
