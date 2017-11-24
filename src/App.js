import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';

class App extends Component {

  constructor(props) {
    super(props);
  }

  openApp() {
    console.log("Hello World");
  }

  render() {
    return (
      <div>
        <Welcome openApp={this.openApp}/>
      </div>
    );
  }
}

export default App;
