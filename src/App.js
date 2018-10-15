import React, { Component } from 'react';
import GitHub from './modules/github/components/GitHub';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GitHub />
      </div>
    );
  }
}

export default App;
