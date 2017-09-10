import React, { Component } from 'react';
import { filterProps, luiClassName } from '../util';

const modifiers = ['variant'];
const states = ['active'];

class Select extends Component {
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
    const className = luiClassName('select', {
      props,
      states,
      modifiers
    });
    return (
      <select
        ref={(element) => { this.element = element; }}
        className={className}
        {...filterProps(props, states, modifiers)}
      >
        {props.children}
      </select>
    );
  }
}

export default Select;
