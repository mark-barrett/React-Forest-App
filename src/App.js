import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Contact from './components/Contact';
import Home from './components/Home';
import language from './Language';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      appIsOpen: false
    }

    // Bind the openApp function to have this
    this.openApp = this.openApp.bind(this);

    // Instantiate the language class for use on the app.
    this.language = new language("English");
  }

  openApp() {
    if(this.state.appIsOpen === false){
      this.setState({appIsOpen: true})
    }
  }

  render() {
    // If the app is open the render the main app component
    if(this.state.appIsOpen) {
      return (
        <div>
          <Home language={this.language}/>
        </div>
      );
    }
    // If not then render the welcome component
    else {
      return (
        <div>
          <Welcome language={this.language} openApp={this.openApp} />
        </div>
      );
    }
  }
}

export default App;
