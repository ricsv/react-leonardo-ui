import React, { Component } from 'react';

import { oppositeDock, positionToElement } from '../positioner';

const DEFAULT_DOCK = 'top';
const OFFSET = 10;

class TooltipContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positionResult: null,
    };
    this.reposition = this.reposition.bind(this);
  }
  componentDidMount() {
    this.reposition(this.props.dock, this.props.alignTo);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.dock !== this.props.dock ||
      nextProps.alignTo !== this.props.alignTo) {
      this.reposition(nextProps.dock, nextProps.alignTo);
    }
  }
  reposition(dock, alignTo) {
    const positionResult = positionToElement(
      this.element,
      alignTo,
      dock,
      {
        containerElement: this.props.inline ? this.element : null,
        dock: dock || DEFAULT_DOCK,
        offset: OFFSET,
        minWindowOffset: 10,
        minEdgeOffset: 5,
      }
    );

    this.setState({
      positionResult,
    });
  }
  render() {
    const res = this.state.positionResult;
    const style = {
      position: 'absolute',
      top: res ? `${res.position.top}px` : '-99999px',
      left: res ? `${res.position.left}px` : '-99999px',
    };
    const arrow = {
      dock: '',
      style: {},
    };
    if (res) {
      arrow.style.position = 'absolute';
      arrow.dock = oppositeDock(res.dock);
      if (arrow.dock === 'top' || arrow.dock === 'bottom') {
        arrow.style.left = `${res.toPosition.left - res.position.left}px`;
      } else {
        arrow.style.top = `${res.toPosition.top - res.position.top}px`;
      }
    }
    return (
      <div
        ref={(elem) => { this.element = elem; }}
        role="tooltip"
        className={this.props.className}
        style={style}
        id={this.state.id}
      >
        {this.props.children}
        <div
          className={`lui-tooltip__arrow  lui-tooltip__arrow--${arrow.dock}`}
          style={arrow.style}
        />
      </div>
    );
  }
}

export default TooltipContent;
