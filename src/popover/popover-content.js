import React, { Component } from 'react';

import { oppositeDock, positionToElement } from '../positioner';

const DEFAULT_DOCK = 'bottom';
const OFFSET = 10;

let counter = 0;

function nextId() {
  counter += 1;
  return `rlui-popover-${counter}`;
}

class PopoverContent extends Component {
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
  componentWillUnmount() {
    this.props.alignTo.removeAttribute('aria-describedby', this.state.id);
  }
  reposition(dock, alignTo) {
    const positionResult = positionToElement(
      this.popoverElem,
      alignTo,
      dock,
      {
        containerElement: this.props.inline ? this.popoverElem : null,
        dock: this.props.dock || DEFAULT_DOCK,
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
      visibility: 'hidden',
      position: 'absolute',
      maxWidth: '500px',
      top: res ? `${res.position.top}px` : '-99999px',
      left: res ? `${res.position.left}px` : '-99999px',
    };
    const arrow = {
      dock: '',
      style: {},
    };
    if (res) {
      style.visibility = 'visible';
      arrow.dock = oppositeDock(res.dock);
      if (arrow.dock === 'top' || arrow.dock === 'bottom') {
        arrow.style.left = `${res.toPosition.left - res.position.left}px`;
      } else {
        arrow.style.top = `${res.toPosition.top - res.position.top}px`;
      }
    }
    return (
      <div
        ref={(elem) => { this.popoverElem = elem; }}
        role="dialog"
        className={this.props.className}
        style={style}
        id={this.state.id}
      >
        {this.props.children}
        <div
          className={`lui-popover__arrow  lui-popover__arrow--${arrow.dock}`}
          style={arrow.style}
        />
      </div>
    );
  }
}

export default PopoverContent;
