import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Portal extends Component {
  constructor(props) {
    super(props);
    this.portalElement = null;
  }
  componentDidMount() {
    let p = this.props.portalId && document.getElementById(this.props.portalId);
    if (!p) {
      p = document.createElement('div');
      p.id = this.props.portalId;
      document.body.appendChild(p);
    }
    this.portalElement = p;
    this.componentDidUpdate();
  }
  componentDidUpdate() {
    render(<div>{this.props.children}</div>, this.portalElement);
  }
  componentWillUnmount() {
    document.body.removeChild(this.portalElement);
  }
  render() {
    return null;
  }
}
