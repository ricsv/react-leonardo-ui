import React, { Component } from 'react';

import { luiClassName } from '../util';

// TODO handle outside updates of value
class Search extends Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
    this.onClearClick = this.onClearClick.bind(this);
  }
  onClearClick(e) {
    e.preventDefault();
    if (typeof this.props.onClear === 'function') {
      this.props.onClear();
    }
  }
  focus() {
    this.element.focus();
  }
  render() {
    const {
      className,
      children,
      variant,
      value,
      onClear,
      ...extraProps
    } = this.props;

    const finalClassName = luiClassName('search', {
      className,
      modifiers: { variant }
    });

    return (
      <div className={finalClassName}>
        <span className="lui-icon  lui-icon--search  lui-search__search-icon" />
        <input
          ref={(elem) => { this.element = elem; }}
          className="lui-search__input"
          {...extraProps}
          type="text"
        />
        {value ?
          <button
            className="lui-search__clear-button"
            onClick={this.onClearClick}
          >
            <span
              className="lui-icon  lui-icon--small  lui-icon--close"
            />
          </button> : null}
      </div>
    );
  }
}

export default Search;
