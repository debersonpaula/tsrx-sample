import * as React from 'react';

export class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome">
        <h3>Welcome to TSREX Sample Page</h3>

        <hr />

        <p>TSREX means:</p>
        <ul>
          <li>
            <b>T</b>ype<b>S</b>cript
            <ul>
              <li>Types</li>
              <li>Decorators</li>
              <li>interfaces</li>
              <li>Full Object-Orientation</li>
            </ul>
          </li>
          <li>
            <b>R</b>eact
            <ul>
              <li>Containers</li>
              <li>Components</li>
              <li>Connections</li>
            </ul>
          </li>
          <li>
            <b>EX</b>Redux
            <ul>
              <li>Redux-Store</li>
              <li>State Management - Class Models</li>
              <li>MVVM Architecture</li>
              <li>Fully Typed and Decorated</li>
            </ul>
          </li>
        </ul>

        <hr />

        <p>Use this project as playground to test functionalities of the TSREX stack.</p>
      </div>
    );
  }
}
