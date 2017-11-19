import React, { Component } from 'react';

class Example extends Component {
  componentDidMount() {
    if (this.codeElem && window.hljs) {
      hljs.highlightBlock(this.codeElem); // eslint-disable-line no-undef
    }
  }
  componentDidUpdate() {
    if (this.codeElem && window.hljs) {
      hljs.highlightBlock(this.codeElem); // eslint-disable-line no-undef
    }
  }
  render() {
    const props = this.props;

    let exampleCode;
    if (props.code) {
      exampleCode = (
        <div
          ref={(elem) => { this.codeElem = elem; }}
          className="example-code"
        >
          <pre><code className="jsx">
            {props.code}
          </code></pre>
        </div>
      );
    }

    const settingsTable = props.settings ? (
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Type</td>
            <td>Description</td>
          </tr>
        </thead>
        <tbody>
          {props.settings.map(setting => (
            <tr>
              <td>{setting.name}</td>
              <td>{setting.type}</td>
              <td>{setting.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : null;

    const className = `example  ${props.className || ''}`.trim();
    return (
      <div className={className}>
        {props.title}

        <div className="example-box">
          {props.children}
        </div>
        {exampleCode}
        {settingsTable}
      </div>
    );
  }
}

export default Example;
