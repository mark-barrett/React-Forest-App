import React, { Component } from 'react'
import scenarios from '../data/Scenarios';
import TimePeriod from '../components/TimePeriod';
import IndicatorCategories from '../components/IndicatorCategories';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

class Scenarios extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // Get the passed down value from the prop. Before the dash is the scenarioCollectionID
            scenarioCollectionID: props.scenarioRegion.substr(0, props.scenarioRegion.indexOf('-')),
            // Get the passed down value from the prop. After the dash is the regionID
            regionID: props.scenarioRegion.split('-')[1],
            indicatorCategories: null,
            scenariosList: [],
            timePeriods: [],
            values: [],
            displayTimePeriods: false
        }

        this.scenarioChanged = this.scenarioChanged.bind(this);
        this.getScenarios = this.getScenarios.bind(this);
    }

    componentDidMount() {
        this.getScenarios(this.state.scenarioCollectionID);
    }

    getScenarios(scenarioCollectionID) {
        const { cookies } = this.props;

        let tempList = []
        // Get all scenarios based on the state passed in as a prop
        scenarios.getScenarioCollection(scenarioCollectionID, this.state.regionID, cookies.get('language'))
            .then(result => {
                // Send this result set to the home component
                this.props.getDataSet(result);
                // Take this result and iterate over it
                result.map(element => {
                    // Iterate over the scenarios and put them into an array
                    this.setState({
                        scenariosList: element.scenarios.map(item => {
                            return <option key={item.id} title={item.description} value={item.id}>{item.name}</option>;
                        })
                    })

                    // Iterate over the time periods and put them into an array
                    this.setState({
                        timePeriods: element.timePeriods.map(item => {
                            return <option key={item.id} title={item.yearStart + "-" + item.yearEnd} value={item.id}>{item.yearStart}-{item.yearEnd}</option>;
                        })
                    })

                    this.setState({ displayTimePeriods: true });

                    // Iterate over the indicatorCategories
                    this.setState({ indicatorCategories: element.indicatorCategories });

                    // Tell the scenario component to display the indicators on the right.
                    this.props.displayIndicators(element.indicatorCategories);
                })
            });
            this.props.test(scenarioCollectionID);
    }

    componentDidUpdate() {
        // If what is set in the dropdown does not match, then we have reset it
        if (this.state.scenarioCollectionID != this.props.scenarioRegion.substr(0, this.props.scenarioRegion.indexOf('-'))) {
            this.getScenarios(this.props.scenarioRegion.substr(0, this.props.scenarioRegion.indexOf('-')));
            this.setState({ scenarioCollectionID: this.props.scenarioRegion.substr(0, this.props.scenarioRegion.indexOf('-')) });
        }
    }

    scenarioChanged(event) {
        // We need to get the options selected and put them into an array.
        // If they are unselected or changed that will be tracked too
        let newScenarioIDs = event.target.options;
        let value = []

        for (var i = 0, l = newScenarioIDs.length; i < l; i++) {
            if (newScenarioIDs[i].selected) {
                value.push(newScenarioIDs[i].value);
            }
        }

        this.props.scenariosChanged(value);
    }

    render () {

        if(this.state.displayTimePeriods === false) {
            return (
                <div>
                    <hr />
                    {this.props.language.scenarios}
                    <select className="form-control" id="scenario" value={this.state.value} multiple>
                        {this.state.scenariosList}
                    </select>
                </div>
            )
        }
        else {
            return (
                !this.state.indicatorCategories ?
                <div>
                    <hr />
                    {this.props.language.scenarios}
                        <select className="form-control" id="scenario" value={this.state.value} multiple onChange={this.scenarioChanged}>
                        {this.state.scenariosList}
                    </select>

                    <br />

                        <TimePeriod language={this.props.language} timePeriods={this.state.timePeriods} timesChanged={this.props.timesChange}/>
                </div>
                :
                <div>
                    <hr />
                    {this.props.language.scenarios}
                    <select className="form-control" id="scenario" value={this.state.value} multiple onChange={this.scenarioChanged}>
                        {this.state.scenariosList}
                    </select>

                    <br />

                        <TimePeriod language={this.props.language} timePeriods={this.state.timePeriods} timesChanged={this.props.timesChanged}/>

                </div>
            )
        }
    }
}

export default withCookies(Scenarios)