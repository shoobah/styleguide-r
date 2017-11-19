import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
