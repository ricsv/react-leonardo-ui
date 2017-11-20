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

    this.openTooltip = this.openTooltip.bind(this);
    this.closeTooltip = this.closeTooltip.bind(this);

    if (!props.inline && typeof document !== 'undefined') {
      this.containerElement = document.createElement('div');
      this.containerElement.id = this.portalId;
    }
  }
  componentDidMount() {
    if (!this.props.inline) {
      document.body.appendChild(this.containerElement);
    }

    if (this.state.tooltipState === TOOLTIP_STATE.opening) {
      this.openTooltip();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (!this.props.show && nextProps.show) {
      this.openTooltip();
    } else if (this.props.show && !nextProps.show) {
      this.closeTooltip();
    }
  }
  componentDidUpdate() {
    const {
      tooltipState,
    } = this.state;

    const {
      inline,
      onOpen,
      onClose,
    } = this.props;

    if (tooltipState === TOOLTIP_STATE.opening) {
      setTimeout(() => {
        this.setState({ tooltipState: TOOLTIP_STATE.open });
        if (typeof onOpen === 'function') {
          onOpen();
        }
      });
    } else if (tooltipState === TOOLTIP_STATE.closing) {
      setTimeout(() => {
        this.setState({ tooltipState: TOOLTIP_STATE.closed });

        if (typeof onClose === 'function') {
          onClose();
        }

        if (!inline) {
          document.body.removeChild(this.containerElement);
        }
      }, FADE_DURATION);
    }
  }
  openTooltip() {
    this.setState({
      tooltipState: TOOLTIP_STATE.opening,
    });
  }
  closeTooltip() {
    this.setState({
      tooltipState: TOOLTIP_STATE.closing,
    });
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
        this.containerElement
      )
    );
  }
}

export default Tooltip;
