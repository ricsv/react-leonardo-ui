import React, { Component } from 'react';
import Portal from '../portal';
import TooltipContent from './tooltip-content';
import { luiClassName, filterProps } from '../util';

let currentId = 0;

const FADE_DURATION = 50;

const TOOLTIP_STATE = {
  opening: 0,
  open: 1,
  closing: 2,
  closed: 3
};

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltipState: props.show ? TOOLTIP_STATE.opening : TOOLTIP_STATE.closed
    };
    this.portalId = `rlui-tooltip-${currentId}`;
    currentId++;
  }
  componentWillReceiveProps(nextProps) {
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
  componentDidUpdate() {
    if (this.state.tooltipState === TOOLTIP_STATE.opening) {
      setTimeout(() => {
        this.setState({ tooltipState: TOOLTIP_STATE.open });
        if (typeof this.props.onOpen === 'function') {
          this.props.onOpen();
        }
      });
    } else if (this.state.tooltipState === TOOLTIP_STATE.closing) {
      setTimeout(() => {
        this.setState({ tooltipState: TOOLTIP_STATE.closed });
        if (typeof this.props.onClose === 'function') {
          this.props.onClose();
        }
      }, FADE_DURATION);
    }
  }
  render() {
    const props = this.props;
    const tooltipState = this.state.tooltipState;
    let className = luiClassName('tooltip', { props });
    if (tooltipState === TOOLTIP_STATE.opening || tooltipState === TOOLTIP_STATE.closing) {
      className += ' lui-fade';
    }

    if (tooltipState === TOOLTIP_STATE.closed) {
      return null;
    } else if (this.props.inline) {
      return (
        <TooltipContent inline className={className} {...filterProps(props)}>
          {props.children}
        </TooltipContent>
      );
    }
    return (
      <Portal portalId={this.portalId}>
        <TooltipContent className={className} {...filterProps(props)}>
          {props.children}
        </TooltipContent>
      </Portal>
    );
  }
}

export default Tooltip;
