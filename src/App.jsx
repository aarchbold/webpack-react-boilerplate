import React, { Component } from 'react';

import HelloWorld from './components/hello-world';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>Router test</p>
        <a href="/home">go to home route</a>
        <HelloWorld title="Hello from React webpack" />
        ;
      </div>
    );
  }
}

export default App;
