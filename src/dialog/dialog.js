import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import DIALOG_STATE from '../overlay-state';
import { luiClassName } from '../util';

const FADE_DURATION = 200;
let currentId = 0;

class Dialog extends Component {
  constructor(props) {
    super(props);
    this.portalId = `rlui-dialog-${currentId}`;
    this.state = {
      dialogState: DIALOG_STATE.closed,
    };
    currentId += 1;

    this.keyUpListener = this.keyUpListener.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);

    if (typeof document !== 'undefined') {
      this.parentElement = props.parentElement || document.getElementById('show-service-overlay') || document.body;

      this.containerElement = document.createElement('div');
      this.containerElement.id = this.portalId;
    }
  }
  componentDidMount() {
    if (this.props.show) {
      this.openDialog();
    }
  }
  componentDidUpdate(prevProps) {
    const {
      dialogState,
    } = this.state;

    const {
      show,
      onEscape,
      onOpen,
      onClose,
    } = this.props;

    if (!prevProps.show && show) {
      this.openDialog();
    } else if (prevProps.show && !show) {
      this.closeDialog();
    }

    if (dialogState === DIALOG_STATE.opening) {
      this.openingTimeout = this.openingTimeout || setTimeout(() => {
        this.openingTimeout = null;
        this.setState(() => ({
          dialogState: DIALOG_STATE.open,
        }));
        if (typeof onEscape === 'function') {
          window.addEventListener('keyup', this.keyUpListener);
        }
        if (typeof onOpen === 'function') {
          onOpen();
        }
      });
    } else if (dialogState === DIALOG_STATE.closing) {
      if (typeof onEscape === 'function') {
        window.removeEventListener('keyup', this.keyUpListener);
      }
      this.closingTimeout = this.closingTimeout || setTimeout(() => {
        this.closingTimeout = null;
        this.setState(() => ({
          dialogState: DIALOG_STATE.closed,
        }));
        if (typeof onClose === 'function') {
          onClose();
        }
        this.parentElement.removeChild(this.containerElement);
      }, FADE_DURATION);
    }
  }
  componentWillUnmount() {
    clearTimeout(this.openingTimeout);
    this.openingTimeout = null;
    clearTimeout(this.closingTimeout);
    this.closingTimeout = null;
  }
  keyUpListener(e) {
    if (e.keyCode === 27) {
      this.props.onEscape();
    }
  }
  openDialog() {
    this.parentElement.appendChild(this.containerElement);

    this.setState(() => ({
      dialogState: DIALOG_STATE.opening,
    }));
  }
  closeDialog() {
    this.setState(() => ({
      dialogState: DIALOG_STATE.closing,
    }));
  }
  render() {
    const {
      className,
      children,
      variant,
      show,
      onEscape,
      onOpen,
      onClose,
      parentElement,
      ...extraProps
    } = this.props;

    const { dialogState } = this.state;

    if (dialogState === DIALOG_STATE.closed) {
      return null;
    }

    let dialogClassName = luiClassName('dialog', {
      className,
      modifiers: { variant },
    });
    let backgroundClassName = 'lui-modal-background';

    if (dialogState === DIALOG_STATE.opening || dialogState === DIALOG_STATE.closing) {
      dialogClassName += ' lui-fade';
      backgroundClassName += ' lui-fade';
    }

    return createPortal(
      <div className="lui-dialog-container">
        <div className={backgroundClassName} />
        <div className={dialogClassName} tabIndex="-1" {...extraProps}>
          {children}
        </div>
      </div>,
      this.containerElement
    );
  }
}

export default Dialog;
