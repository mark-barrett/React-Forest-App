import React, { Component } from 'react'
import TopNav from './TopNav';
import ScenarioSelector from './ScenarioSelector';
import IndicatorCategories from '../components/IndicatorCategories';
import Contact from './Contact';
import language from '../Language';
import Display from '../components/Display';

class Home extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
            displayIndicators: false,
            indicatorCategories: [],
            mailIsOpen : false,
            indicatorIDs: [],
            scenarioIDs: [],
            timePeriodIDs: [],
            regionName: ""
        }

        this.openMail = this.openMail.bind(this);
        this.displayIndicators = this.displayIndicators.bind(this);
        this.indicatorsChanged = this.indicatorsChanged.bind(this);
        this.scenariosChanged = this.scenariosChanged.bind(this);
        this.timesChanged = this.timesChanged.bind(this);
        this.regionName = this.regionName.bind(this);
    }

    openMail(){
        if (this.state.mailIsOpen === false) {
            this.setState({mailIsOpen: true})
        }
    }
  
    displayIndicators(_indicatorCategories) {
        // Display the indicators
        this.setState({displayIndicators: true});
        this.setState({indicatorCategories: _indicatorCategories});
    }

    indicatorsChanged(_indicatorIDs) {
        console.log(_indicatorIDs);
        // This gets called whenever the indicators are changed
        this.setState({indicatorIDs: _indicatorIDs});
    }

    scenariosChanged(scenarioIDs) {
        // This gets called whenever the scenarios are changed
        this.setState({scenarioIDs: scenarioIDs});
    }

    timesChanged(timePeriodIDs) {
        this.setState({timePeriodIDs: timePeriodIDs});
    }

    regionName(_regionName) {
        this.setState({regionName: _regionName});
    }

    render () {
        if (this.state.mailIsOpen) {
            return (
                <div>
                    <Contact language={this.language}/>
                </div>
            )
        }
        else {
            if(this.state.displayIndicators === false) {
                return (
                    <div>
                        <TopNav language={this.props.language} openMail={this.openMail}/>

                        <div className="row">
                            <div className="col-md-3">
                                <ScenarioSelector language={this.props.language} displayIndicators={this.displayIndicators} scenariosChanged={this.scenariosChanged} timesChanged={this.timesChanged} regionName={this.regionName}/>
                            </div>
                            <div className="col-md-6">
                            </div>
                            <div className="col-md-3">

                            </div>
                        </div>
                    </div>
                )
            }
            else {
                return (
                    <div>
                        <TopNav language={this.props.language} openMail={this.openMail}/>
                        <div className="row">
                            <div className="col-md-3">
                                <ScenarioSelector language={this.props.language} displayIndicators={this.displayIndicators} scenariosChanged={this.scenariosChanged} timesChanged={this.timesChanged} regionName={this.regionName}/>
                            </div>
                            <div className="col-md-6">
                                <Display indicatorIDs={this.state.indicatorIDs} scenarioIDs={this.state.scenarioIDs} timePeriodIDs={this.state.timePeriodIDs} regionName={this.state.regionName}/>
                            </div>
                            <div className="col-md-3">
                                <IndicatorCategories language={this.props.language} indicatorCategories={this.state.indicatorCategories} indicatorsChanged={this.indicatorsChanged}/>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    }
}
export default Home;