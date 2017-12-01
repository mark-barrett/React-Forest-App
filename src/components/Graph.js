import React, { Component } from 'react'

class Graph extends Component {

    constructor(props) {
        super(props);

        this.state = {
            scenarioIDs: [],
            indicatorIDs: [],
            timePeriodIDs: "",
            dataSet: [],
        }
    }

    componentDidUpdate() {
        // Update the state while it is not the same as the props
        if(this.props.scenarioIDs !== this.state.scenarioIDs) {
            this.setState({ scenarioIDs: this.props.scenarioIDs });
        }
        // Check to see if the passed data set is equal to the current set one. If not update
        if(this.props.dataSet !== this.state.dataSet) {
            this.setState({dataSet: this.props.dataSet});
        }
        // Check to see if the indicatorIDs props are the same as the state and if not then update them
        if(this.props.indicatorIDs !== this.state.indicatorIDs) {
            this.setState({indicatorIDs: this.props.indicatorIDs});
        }
        // Check to see if the time period ID is set and if not then update it
        if(this.props.timePeriodIDs !== this.state.timePeriodIDs) {
            this.setState({timePeriodIDs: this.props.timePeriodIDs});
        }
        console.log(this.state.dataSet);

        // Constructing the dataObject
        let data = [
                // Loop through each state and set the parametes
                this.state.scenarioIDs.map(scenario => {
                
                    let scenarioID = scenario;
                    let scenarioName = "";

                    let indicators = [];

                    // Loop through the dataSet looking for the scenario name using index 0 because only 1 scenario collection can be chosen
                    for(let i=0; i<this.state.dataSet[0].scenarios.length; i++) {
                        if(this.state.dataSet[0].scenarios[i].id == scenario) {
                            scenarioName = this.state.dataSet[0].scenarios[i].description;
                        }
                        // Loop through the dataSet and using the indicatorIDs find the indicator descriptions and make a new object for each
                        for(let j=0; j<this.state.dataSet[0].indicatorCategories.length; j++) {
                            // Now we are looping through the indicatorCategories we need to loop through those indicators
                            for(let y=0; y<this.state.dataSet[0].indicatorCategories[j].indicators.length; y++) {
                                let indicatorID = "";
                                let indicatorName = "";
                                let sum = 0;
                                let values = [];

                                // Now that we are looping through all of the indicatorCategories we must compare each id to the indicatorIDs
                                // If it is a match then we construct a new object with that name and id
                                for(let x=0; x<this.state.indicatorIDs.length; x++) {
                                    if(this.state.indicatorIDs[x] == this.state.dataSet[0].indicatorCategories[j].indicators[y].id) {
                                        indicatorID = this.state.indicatorIDs[x];
                                        indicatorName = this.state.dataSet[0].indicatorCategories[j].indicators[y].name;
                                    }
                                }

                                if(indicatorID !== "" && indicatorName !== "") {
                                    indicators.push({
                                        id: indicatorID,
                                        name: indicatorName
                                    });
                                }
                            }
                        }
                        
                    }

                    // Lets remove duplicates from the indicators array
                    indicators.map(i => {
                        // Loop through indicators
                        indicators.map((j, index) => {
                            if(i.id == j.id) {
                                indicators.pop(index);
                            }
                        })
                    })

                    // Right here we can now get all the values for the indicators
                    indicators.map((i, index) => {

                        let sum = 0;

                        for (let q = 0; q < this.state.dataSet[0].values.length; q++) {
                            if (this.state.dataSet[0].values[q].indicatorId == i.id && this.state.dataSet[0].values[q].scenarioId == scenario) {
                                sum += this.state.dataSet[0].values[q].value;
                            }
                        }

                        // Now we have the sum, lets update that particular indicator with a sum field
                        indicators[index].sum = sum;
                    })

                    return {
                        id: scenarioID,
                        scenarioName : scenarioName,
                        indicators: indicators
                    }
                }),
        ]

        console.log(data);
    }

    render () {
        return (
            <div>
                Scenario IDS real
                {this.state.scenarioIDs}
            </div>
        )
    }
}

export default Graph