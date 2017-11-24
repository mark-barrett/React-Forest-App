import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      appIsOpen: false
    }

    // Bind the openApp function to have this
    this.openApp = this.openApp.bind(this);
  }

  openApp() {
    this.setState({appIsOpen: true})
  }

  render() {
    // If the app is open the render the main app component
    if(this.state.appIsOpen) {
      return (
        <div>
          <h1>App is Open</h1>
        </div>
      );
    }
    // If not then render the welcome component
    else {
      return (
        <div>
          <Welcome openApp={this.openApp} />
        </div>
      );
    }
  }
}

export default App;
