import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Contact from './components/Contact';
import Home from './components/Home';
import language from './Language';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import Graphs from './components/Graphs';



import Graphs from './components/Graphs';

class App extends Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);

    const { cookies } = this.props;

    console.log(cookies.get('language'));

    this.state = {
      appIsOpen: true
    }

    // Bind the openApp function to have this
    this.openApp = this.openApp.bind(this);

    // Instantiate the language class for use on the app.
    this.language = new language(cookies.get('language'));

    this.changeLanguage = this.changeLanguage.bind(this);
  }

  openApp() {
    if(this.state.appIsOpen === false){
      this.setState({appIsOpen: true})
    }
  }

  changeLanguage(event) {
    const { cookies } = this.props;

    cookies.set('language', event.target.value);
    this.language.setLanguage = cookies.get('language');
  }

  render() {

    // If the app is open the render the main app component
    if(this.state.appIsOpen) {
      return (
        <div>
          <Home language={this.language} changeLanguage={this.changeLanguage}/> 
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

export default withCookies(App);
