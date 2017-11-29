import React, { Component } from 'react'
import scenarios from '../data/Scenarios';

class Scenarios extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // Get the passed down value from the prop. Before the dash is the scenarioCollectionID
            scenarioCollectionID: props.scenarioRegion.substr(0, props.scenarioRegion.indexOf('-')),
            // Get the passed down value from the prop. After the dash is the regionID
            regionID: props.scenarioRegion.split('-')[1],
            indicatorCategories: [],
            scenariosList: [],
            timePeriods: [],
            values: []
        }
    }

    componentDidMount() {
        let tempList = []
        // Get all scenarios based on the state passed in as a prop
        scenarios.getScenarioCollection(this.state.scenarioCollectionID, this.state.regionID)
        .then(result => {
            // Take this result and iterate over it
            result.map(element => {
                this.setState({scenariosList: element.scenarios.map(item => {
                    return <option key={element.id} value={element.id}>{element.name}</option>;
                })})
                console.log(this.state.scenariosList);
            })
        });
    }

    render () {
        return (
            <div>
                <hr/>   
                {this.props.language.scenarios}
                <select className="form-control" id="scenario" value={this.state.value}>
                    {this.state.scenariosList}
                </select>
            </div>
        )
    }
}

export default Scenarios