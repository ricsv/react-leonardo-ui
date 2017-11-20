import React, { Component } from 'react';
import { luiClassName } from '../util';

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
      children,
      className,
      active,
      variant,
      ...extraProps
    } = this.props;

    const finalClassName = luiClassName('select', {
      className,
      modifiers: { variant },
      states: { active }
    });

    return (
      <select
        ref={(element) => { this.element = element; }}
        className={finalClassName}
        {...extraProps}
      >
        {children}
      </select>
    );
  }
}

export default Select;
