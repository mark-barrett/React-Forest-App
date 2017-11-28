import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Contact from './components/Contact';
import Home from './components/Home';
import language from './Language';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      appIsOpen: true,
      appOpenID: 0
    }

    // Bind the openApp function to have this
    this.openApp = this.openApp.bind(this);

    // Instantiate the language class for use on the app.
    this.language = new language("English");
  }

  openApp() {
    if(this.state.appOpenID === 0){
      this.setState({appOpenID: 1})
    }
    else {
      this.setState({appOpenID: 2})
    }
  }

  render() {
    // If the app is open the render the main app component
    if(this.state.appOpenID === 1) {
      return (
        <div>
          <Home language={this.language}/>
        </div>
      );
    }
    // If not then render the welcome component
    else if(this.state.appOpenID === 0) {
      return (
        <div>
          <Welcome language={this.language} openApp={this.openApp} />
        </div>
      );
    }
    else if(this.state.appOpenID === 2) {
      return (
        <div>
          <Contact language={this.language} openApp={this.openApp} />
        </div>
      );
    }
  }
}

export default App;
