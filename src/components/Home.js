import React, { Component } from 'react'
import TopNav from './TopNav'
import ScenarioSelector from './ScenarioSelector'
import IndicatorCategories from '../components/IndicatorCategories'
import Display from '../components/Display'

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayIndicators: false,
            indicatorCategories: [],
            indicatorIDs: [],
            scenarioIDs: [],
            timePeriodIDs: "",
            regionID: "",
            regionName: "",
            dataSet: [],
            timePeriodString: "",
            timePeriodIsSet: false,
            testValue: "",
            linkObj: {}
        }

        this.displayIndicators = this.displayIndicators.bind(this);
        this.indicatorsChanged = this.indicatorsChanged.bind(this);
        this.scenariosChanged = this.scenariosChanged.bind(this);
        this.timesChanged = this.timesChanged.bind(this);
        this.regionName = this.regionName.bind(this);
        this.getDataSet = this.getDataSet.bind(this);
        this.test = this.test.bind(this);
        this.scenarioCollection = this.scenarioCollection.bind(this);
    }

    displayIndicators(_indicatorCategories) {
        // Display the indicators
        this.setState({ indicatorCategories: _indicatorCategories });
    }

    indicatorsChanged(_indicatorIDs) {
        // This gets called whenever the indicators are changed
        this.setState({ indicatorIDs: _indicatorIDs });
    }

    scenariosChanged(scenarioIDs) {
        // This gets called whenever the scenarios are changed
        this.setState({ scenarioIDs: scenarioIDs });
    }

    timesChanged(timePeriodIDs) {
        this.setState({ timePeriodIDs: timePeriodIDs });
        this.setState({ timePeriodIsSet: true });
        this.setState({ displayIndicators: true });
    }

    test(scenarioCollectionID) {
        if(scenarioCollectionID != this.state.testValue) {
            this.setState({testValue: scenarioCollectionID});
        }
    }

    scenarioCollection(scenarioCollectionID) {
        this.setState({scenarioCollectionID: scenarioCollectionID});
    }
    
    regionName(_regionName, regionID) {
        this.setState({ regionName: _regionName,
        regionID: regionID});
    }

    getDataSet(_dataSet) {
        // Get the selected data set to pass to the graph component
        this.setState({ dataSet: _dataSet });
    }

    render() {
        if (this.state.displayIndicators == false) {
            return (
                <div>
                    <TopNav language={this.props.language} openMail={this.openMail} changeLanguage={this.props.changeLanguage} />

                    <div className="row">
                        <div className="col-md-3">
                            <ScenarioSelector test={this.test} language={this.props.language} displayIndicators={this.displayIndicators} scenariosChanged={this.scenariosChanged} timesChanged={this.timesChanged} regionName={this.regionName} getDataSet={this.getDataSet} scenarioCollection={this.scenarioCollection}/>
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
            let obj = {
                'lk': this.state.scenarioCollectionID,
                'ko': this.state.regionID,
                'ty': this.state.scenarioIDs,
                'ka': this.state.timePeriodIDs,
                'mj': this.state.indicatorIDs
            }

            return (
                <div>
                    <TopNav language={this.props.language} openMail={this.openMail} changeLanguage={this.props.changeLanguage} />
                    <div className="row">
                        <div className="col-md-3">
                            <ScenarioSelector test={this.test} language={this.props.language} displayIndicators={this.displayIndicators} scenariosChanged={this.scenariosChanged} timesChanged={this.timesChanged} regionName={this.regionName} getDataSet={this.getDataSet} scenarioCollection={this.scenarioCollection}/>
                        </div>
                        <div className="col-md-6">
                            <Display linkObj={obj} language={this.props.language} indicatorIDs={this.state.indicatorIDs} scenarioIDs={this.state.scenarioIDs} timePeriodIDs={this.state.timePeriodIDs} regionName={this.state.regionName} dataSet={this.state.dataSet} />
                        </div>
                        <div className="col-md-3">
                            <IndicatorCategories language={this.props.language} indicatorCategories={this.state.indicatorCategories} indicatorsChanged={this.indicatorsChanged} />
                        </div>
                    </div>
                </div>
            )
        }
    }
}
export default Home;