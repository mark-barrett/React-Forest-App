import React, { Component } from 'react'
import scenarios from '../data/Scenarios';
import TimePeriod from '../components/TimePeriod';
import IndicatorCategories from '../components/IndicatorCategories';

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
    }

    componentDidMount() {
        let tempList = []
        // Get all scenarios based on the state passed in as a prop
        scenarios.getScenarioCollection(this.state.scenarioCollectionID, this.state.regionID)
        .then(result => {
            // Take this result and iterate over it
            result.map(element => {
                // Iterate over the scenarios and put them into an array
                this.setState({scenariosList: element.scenarios.map(item => {
                    return <option key={item.id} value={item.id}>{item.description}</option>;
                })})

                // Iterate over the time periods and put them into an array
                this.setState({timePeriods: element.timePeriods.map(item => {
                    return <option key={item.id} value={item.id}>{item.yearStart}-{item.yearEnd}</option>;
                })})
                this.setState({displayTimePeriods: true});

                // Iterate over the indicatorCategories
                this.setState({indicatorCategories: element.indicatorCategories});

                // Tell the scenario component to display the indicators on the right.
                this.props.displayIndicators(this.state.indicatorCategories);
            })
        });
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
                    <select className="form-control" id="scenario" value={this.state.value} multiple>
                        {this.state.scenariosList}
                    </select>

                    <br />

                    <TimePeriod language={this.props.language} timePeriods={this.state.timePeriods} />
                </div>
                :
                <div>
                    <hr />
                    {this.props.language.scenarios}
                    <select className="form-control" id="scenario" value={this.state.value} multiple>
                        {this.state.scenariosList}
                    </select>

                    <br />

                    <TimePeriod language={this.props.language} timePeriods={this.state.timePeriods} />

                </div>
            )
        }
    }
}

export default Scenarios