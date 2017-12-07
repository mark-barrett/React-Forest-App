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
            timePeriodIDs: "",
            regionName: "",
            dataSet: [],
            timePeriodString: "",
            timePeriodIsSet: false
        }

        this.openMail = this.openMail.bind(this);
        this.displayIndicators = this.displayIndicators.bind(this);
        this.indicatorsChanged = this.indicatorsChanged.bind(this);
        this.scenariosChanged = this.scenariosChanged.bind(this);
        this.timesChanged = this.timesChanged.bind(this);
        this.regionName = this.regionName.bind(this);
        this.getDataSet = this.getDataSet.bind(this);
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
        // This gets called whenever the indicators are changed
        this.setState({indicatorIDs: _indicatorIDs});
    }

    scenariosChanged(scenarioIDs) {
        // This gets called whenever the scenarios are changed
        this.setState({scenarioIDs: scenarioIDs});
    }

    timesChanged(timePeriodIDs) {
        this.setState({timePeriodIDs: timePeriodIDs});
        this.setState({timePeriodIsSet: true});

        // Now get the time date so it can be displayed on the next component
        for(let i=0; i<this.state.dataSet[0].timePeriods.length; i++) {
            if(this.state.dataSet[0].timePeriods[i].id == this.state.timePeriodIDs) {
                this.setState({ timePeriodString: this.state.dataSet[0].timePeriods[i].yearStart + "-" + this.state.dataSet[0].timePeriods[i].yearEnd})
            }
        }
    }

    regionName(_regionName) {
        this.setState({regionName: _regionName});
    }

    getDataSet(_dataSet) {
        // Get the selected data set to pass to the graph component
        this.setState({dataSet: _dataSet});
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
                                <ScenarioSelector language={this.props.language} displayIndicators={this.displayIndicators} scenariosChanged={this.scenariosChanged} timesChanged={this.timesChanged} regionName={this.regionName} getDataSet={this.getDataSet}/>
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
                                <ScenarioSelector language={this.props.language} displayIndicators={this.displayIndicators} scenariosChanged={this.scenariosChanged} timesChanged={this.timesChanged} regionName={this.regionName} getDataSet={this.getDataSet}/>
                            </div>
                            <div className="col-md-6">
                                <Display indicatorIDs={this.state.indicatorIDs} scenarioIDs={this.state.scenarioIDs} timePeriodIDs={this.state.timePeriodIDs} regionName={this.state.regionName} dataSet={this.state.dataSet} timeString={this.state.timePeriodString}/>
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