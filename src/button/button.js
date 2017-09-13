import React, { Component } from 'react';

import { filterProps, luiClassName } from '../util';

const modifiers = ['variant', 'size', 'block', 'rounded'];
const states = ['active', 'disabled'];

class Button extends Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }
  focus() {
    this.element.focus();
  }
  render() {
    const {
      props
    } = this;
    const className = luiClassName('button', {
      props,
      modifiers,
      states
    });
    return (
      <button
        ref={(element) => { this.element = element; }}
        className={className}
        {...filterProps(props, modifiers, states)}
      >
        {props.children}
      </button>
    );
  }
}

export default Button;
