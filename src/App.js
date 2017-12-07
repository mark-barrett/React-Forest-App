import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Contact from './components/Contact';
import Home from './components/Home';
import language from './Language';



import Graphs from './components/Graphs';
import BarGraph from './components/BarGraph';
import Graphselector from './components/Graphselector'

class App extends Component {

  scenarioAmount = 3;

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

    this.series = [{
      name: 'Mustikkasato',
      data: [1, 4, 3]
      }, {
      name: 'Hiilinielu',
      data: [6.9, 4, 2]
      }, {
      name: 'Suurin nettotulo',
      data: [8, 4, 3]
  }];


    this.data = [{
        name: 'Microsoft Internet Explorer',
        y: 56.33
        }, {
        name: 'Chrome',
        y: 24.03,
        sliced: true,
        selected: true
        }, {
        name: 'Firefox',
        y: 10.38
        }, {
        name: 'Safari',
        y: 4.77
        }, {
        name: 'Opera',
        y: 0.91
        }, {
        name: 'Proprietary', 
        y: 0.2
      }]
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
    var indents = [];

    // If the app is open the render the main app component
    if(this.state.appIsOpen) {
      switch(this.state.chartSelection)
      {
        case 'single':
        indents = <Graphs series = { this.series }/>;
        break;
        case 'multiple':
        //pass data here from array? 
        for(var i = 0; i < this.scenarioAmount; i++) {
          indents.push(<Graphs series = { this.series }/> );
          } 
        break;
        case 'bar':
        indents = <BarGraph series = { this.series }/>;
        break;
        case 'table':
        //indets = <Table> something <Table>
        break;
      }
      return(
        <div>
        <Home language={this.language}/>
        {indents}
        <Graphselector changeChart={this.changeChart}/>
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
