import React, { Component } from 'react';

import { oppositeDock, positionToElement } from '../positioner';

const DEFAULT_DOCK = 'top';
const OFFSET = 10;

let counter = 0;

function nextId() {
  counter += 1;
  return `rlui-tooltip-${counter}`;
}

class TooltipContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positionResult: null,
      id: nextId(),
    };
    this.reposition = this.reposition.bind(this);
  }

  componentDidMount() {
    const {
      alignTo,
      dock,
    } = this.props;
    alignTo.setAttribute('aria-describedby', this.state.id);
    this.reposition(dock, alignTo);
  }

  componentDidUpdate(prevProps) {
    const {
      alignTo,
      dock,
    } = this.props;
    if (dock !== prevProps.dock
      || alignTo !== prevProps.alignTo) {
      this.reposition(dock, alignTo);
    }
  }

  componentWillUnmount() {
    this.props.alignTo.removeAttribute('aria-describedby', this.state.id);
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
