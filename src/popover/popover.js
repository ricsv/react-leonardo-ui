import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import PopoverContent from './popover-content';
import PopoverBody from './popover-body';
import PopoverFooter from './popover-footer';
import PopoverHeader from './popover-header';
import PopoverTitle from './popover-title';

import { luiClassName, filterProps } from '../util';

const FADE_DURATION = 100;
const POPOVER_STATE = {
  opening: 0,
  open: 1,
  closing: 2,
  closed: 3
};

const modifiers = ['variant'];
const reservedProps = ['onEscape', 'show', 'onOpen', 'onClose'];

let currentId = 0;

class Popover extends Component {
  constructor(props) {
    super(props);
    this.portalId = `rlui-popover-${currentId}`;
    this.state = {
      popoverState: props.show ? POPOVER_STATE.opening : POPOVER_STATE.closed
    };
    currentId++;

    this.outsideListener = this.outsideListener.bind(this);
    this.transitionToOpen = this.transitionToOpen.bind(this);
    this.transitionToClosed = this.transitionToClosed.bind(this);
  }
  componentDidMount() {
    this.portalElement = document.createElement('div');
    this.portalElement.id = this.props.portalId;
    document.body.appendChild(this.portalElement);

    if (this.state.popoverState === POPOVER_STATE.opening) {
      this.transitionToOpen();
    }
  }
  componentWillReceiveProps(nextProps) {
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
  componentDidUpdate() {
    if (this.state.popoverState === POPOVER_STATE.opening) {
      this.transitionToOpen();
    } else if (this.state.popoverState === POPOVER_STATE.closing) {
      this.transitionToClosed();
    }
  }
  outsideListener(e) {
    if (!this.element.contains(e.target)) {
      this.props.onOutside();
    }
  }
  transitionToOpen() {
    setTimeout(() => {
      this.setState({ popoverState: POPOVER_STATE.open });
      if (typeof this.props.onOutside === 'function') {
        document.addEventListener('click', this.outsideListener);
      }
      if (typeof this.props.onOpen === 'function') {
        this.props.onOpen();
      }
    });
  }
  transitionToClosed() {
    if (typeof this.props.onOutside === 'function') {
      document.removeEventListener('click', this.outsideListener);
    }
    setTimeout(() => {
      this.setState({ popoverState: POPOVER_STATE.closed });
      if (typeof this.props.onClose === 'function') {
        this.props.onClose();
      }
    }, FADE_DURATION);
  }
  render() {
    const { popoverState } = this.state;

    if (popoverState === POPOVER_STATE.closed) {
      return null;
    }

    const props = this.props;
    let className = luiClassName('popover', {
      props,
      modifiers
    });
    if (popoverState === POPOVER_STATE.opening || popoverState === POPOVER_STATE.closing) {
      className += ' lui-fade';
    }

    const passProps = filterProps(this.props, modifiers, ...reservedProps);
    if (this.props.inline) {
      return (
        <div ref={(el) => { this.element = el; }}>
          <PopoverContent className={className} inline {...passProps}>
            {props.children}
          </PopoverContent>
        </div>
      );
    }

    return (
      createPortal(
        <div ref={(el) => { this.element = el; }}>
          <PopoverContent className={className} {...passProps}>
            {props.children}
          </PopoverContent>
        </div>,
        this.portalElement
      )
    );
  }
}

Popover.Header = PopoverHeader;
Popover.Title = PopoverTitle;
Popover.Body = PopoverBody;
Popover.Footer = PopoverFooter;

export default Popover;
