import React, { Component } from 'react';
import { luiClassName } from '../util';

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
      children,
      className,
      title,
      htmlFor,
      active,
      variant,
      ...extraProps
    } = this.props;

    const finalClassName = luiClassName('switch', {
      className,
      modifiers: { variant },
      states: { active },
    });

    return (
      <div className={finalClassName} title={title}>
        <label htmlFor={htmlFor} className="lui-switch__label">
          <input
            ref={(element) => { this.element = element; }}
            className="lui-switch__checkbox"
            {...extraProps}
            type="checkbox"
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
