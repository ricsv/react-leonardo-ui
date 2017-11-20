import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import TooltipContent from './tooltip-content';
import { luiClassName } from '../util';

const FADE_DURATION = 50;
const TOOLTIP_STATE = {
  opening: 0,
  open: 1,
  closing: 2,
  closed: 3,
};

let currentId = 0;

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltipState: props.show ? TOOLTIP_STATE.opening : TOOLTIP_STATE.closed,
    };
    this.portalId = `rlui-tooltip-${currentId}`;
    currentId += 1;

    this.transitionToOpen = this.transitionToOpen.bind(this);
    this.transitionToClosed = this.transitionToClosed.bind(this);
  }
  componentDidMount() {
    this.portalElement = document.createElement('div');
    this.portalElement.id = this.props.portalId;
    document.body.appendChild(this.portalElement);

    if (this.state.tooltipState === TOOLTIP_STATE.opening) {
      this.transitionToOpen();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (!this.props.show && nextProps.show) {
      this.setState({
        tooltipState: TOOLTIP_STATE.opening,
      });
    } else if (this.props.show && !nextProps.show) {
      this.setState({
        tooltipState: TOOLTIP_STATE.closing,
      });
    }
  }
  componentDidUpdate() {
    if (this.state.tooltipState === TOOLTIP_STATE.opening) {
      this.transitionToOpen();
    } else if (this.state.tooltipState === TOOLTIP_STATE.closing) {
      this.transitionToClosed();
    }
  }
  transitionToOpen() {
    setTimeout(() => {
      this.setState({ tooltipState: TOOLTIP_STATE.open });
      if (typeof this.props.onOpen === 'function') {
        this.props.onOpen();
      }
    });
  }
  transitionToClosed() {
    setTimeout(() => {
      this.setState({ tooltipState: TOOLTIP_STATE.closed });
      if (typeof this.props.onClose === 'function') {
        this.props.onClose();
      }
    }, FADE_DURATION);
  }
  render() {
    const { tooltipState } = this.state;

    if (tooltipState === TOOLTIP_STATE.closed) {
      return null;
    }

    const {
      className,
      children,
      inline,
      variant,
      ...extraProps
    } = this.props;

    let tooltipClassName = luiClassName('tooltip', {
      className,
      modifiers: { variant },
    });
    if (tooltipState === TOOLTIP_STATE.opening || tooltipState === TOOLTIP_STATE.closing) {
      tooltipClassName += ' lui-fade';
    }

    if (inline) {
      return (
        <TooltipContent inline className={tooltipClassName} {...extraProps}>
          {children}
        </TooltipContent>
      );
    }

    return (
      createPortal(
        <TooltipContent className={tooltipClassName} {...extraProps}>
          {children}
        </TooltipContent>,
        this.portalElement
      )
    );
  }
}

export default Tooltip;
