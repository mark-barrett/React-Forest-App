import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Contact from './components/Contact';
import Home from './components/Home';
import language from './Language';



import Graphs from './components/Graphs';
import Graphselector from './components/Graphselector'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      appIsOpen: true,
      chartSelection: ""
    }

    // Bind the openApp function to have this
    this.openApp = this.openApp.bind(this);
    this.changeChart = this.changeChart.bind(this);

    // Instantiate the language class for use on the app.
    this.language = new language("English");
    //this.chartSelection = "pie"; //Default chart
    
  }

  componentDidUpdate()
  {
    console.log("updating");
  }

  openApp() {
    this.setState({appIsOpen: true})
  }

  changeChart(chart) {
    console.log(chart);
    this.setState({chartSelection: chart});
    //this.forceUpdate();
    console.log(this.chartSelection);
  }

  render() {

    // If the app is open the render the main app component
    if(this.state.appIsOpen) {
      return (
        <div>
          <Home language={this.language}/>
          <Graphselector changeChart={this.changeChart}/>
          {this.chartSelection}
          <Graphs chartSelection={this.state.chartSelection}/> 
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
