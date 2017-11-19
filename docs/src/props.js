import React from 'react';

const Props = props => (
  <div className="props">
    <h3>{props.title || 'Props'}</h3>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {props.props.map(prop => (
          <tr key={prop.name}>
            <td>{prop.name}</td>
            <td>{prop.type}</td>
            <td>{prop.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Props;
