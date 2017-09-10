import React, { Component } from 'react';
import { filterProps, luiClassName } from '../util';

const modifiers = ['variant', 'size'];

const states = ['invalid'];

class Input extends Component {
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
    const className = luiClassName('input', {
      props,
      states,
      modifiers
    });
    const attributes = filterProps(props, modifiers, states, 'type');
    return (
      <input
        ref={(element) => { this.element = element; }}
        className={className} {...attributes}
      />
    );
  }
}

export default Input;
