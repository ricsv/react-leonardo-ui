import React, { Component } from 'react';
import { filterProps, luiClassName } from '../util';

const modifiers = ['variant'];
const states = ['active'];

class Switch extends Component {
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
    const className = luiClassName('switch', {
      props,
      states,
      modifiers
    });

    const attributes = filterProps(props, modifiers, states, 'title', 'type');
    return (
      <div className={className} title={props.title}>
        <label htmlFor={props.htmlFor} className="lui-switch__label">
          <input
            ref={(element) => { this.element = element; }}
            className="lui-switch__checkbox"
            type="checkbox"
            {...attributes}
          />
          <span className="lui-switch__wrap">
            <div className="lui-switch__inner" />
            <div className="lui-switch__switch" />
          </span>
        </label>
      </div>
    );
  }
}

export default Switch;
