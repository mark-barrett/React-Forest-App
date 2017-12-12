import React, { Component } from 'react'
import Graph from '../components/Graph'
import Table from '../components/Table';
import GraphSelector from '../components/GraphSelector';

class Display extends Component {

    constructor(props) {
        super(props);

        this.state = {
            scenarioIDs: [],
            indicatorIDs: [],
            timePeriodIDs: "",
            dataSet: [],
            parsedData: [],
            html: [],
            display: "graph",
            graphType: ""
        }

        this.changeDisplay = this.changeDisplay.bind(this);
        this.changeGraph = this.changeGraph.bind(this);
    }

    changeDisplay(event) {
        this.setState({display: event.target.value});
    }

    changeGraph(graph) {
        this.setState({graphType:graph});
    }

    render () {

        // Constructing the dataObject
        let data = [
            // Loop through each state and set the parametes
            this.props.scenarioIDs.map(scenario => {

                let scenarioID = scenario;
                let scenarioName = "";

                let indicators = [];

                // Loop through the dataSet looking for the scenario name using index 0 because only 1 scenario collection can be chosen
                for (let i = 0; i < this.props.dataSet[0].scenarios.length; i++) {
                    if (this.props.dataSet[0].scenarios[i].id == scenario) {
                        scenarioName = this.props.dataSet[0].scenarios[i].name;
                    }
                    // Loop through the dataSet and using the indicatorIDs find the indicator descriptions and make a new object for each
                    for (let j = 0; j < this.props.dataSet[0].indicatorCategories.length; j++) {
                        // Now we are looping through the indicatorCategories we need to loop through those indicators
                        for (let y = 0; y < this.props.dataSet[0].indicatorCategories[j].indicators.length; y++) {
                            let indicatorID = "";
                            let indicatorName = "";
                            let sum = 0;
                            let values = [];

                            // Now that we are looping through all of the indicatorCategories we must compare each id to the indicatorIDs
                            // If it is a match then we construct a new object with that name and id
                            for (let x = 0; x < this.props.indicatorIDs.length; x++) {
                                if (this.props.indicatorIDs[x] == this.props.dataSet[0].indicatorCategories[j].indicators[y].id) {
                                    indicatorID = this.props.indicatorIDs[x];
                                    indicatorName = this.props.dataSet[0].indicatorCategories[j].indicators[y].name;
                                }
                            }

                            if (indicatorID !== "" && indicatorName !== "") {
                                indicators.push({
                                    id: indicatorID,
                                    name: indicatorName
                                });
                            }
                        }
                    }

                }

                // Remove duplicates
                for(let x=0; x<indicators.length; x++) {
                    for(let y=0; y<indicators.length; y++) {
                        if(indicators[x].id === indicators[y].id) {
                            indicators.splice(y, 1);
                        }
                    }
                }

                // Right here we can now get all the values for the indicators
                indicators.map((i, index) => {

                    let sum = 0;

                    for (let q = 0; q < this.props.dataSet[0].values.length; q++) {
                        if (this.props.dataSet[0].values[q].indicatorId == i.id && this.props.dataSet[0].values[q].scenarioId == scenario) {
                            sum += this.props.dataSet[0].values[q].value;
                        }
                    }

                    // Now we have the sum, lets update that particular§indicator with a sum field
                    indicators[index].sum = sum;
                })

                return {
                    id: scenarioID,
                    scenarioName: scenarioName,
                    indicators: indicators
                }
            }),
        ]
        
        return (
            <div>
                <div class="card">
                    <div class="card-body">
                    <div class="text-center"><h4>{this.props.regionName} - {this.props.timeString}</h4></div>
                    <div className="float-right">
                    Display As: &nbsp;
                        <select class="custom-select" onChange={this.changeDisplay}>
                            <option selected value="graph">Graph</option>
                            <option value="table">Table</option>
                        </select>
                    </div>
                    <br/><br/>
                        <div className="row">
                            {
                                data[0].map(element => {
                                    return (
                                        <Graph data={element} number_of_graphs={data[0].length} display={this.state.display} graphType={this.state.graphType}/>
                                    )
                                })
                            }

                            <Table data={data[0]} display={this.state.display} language={this.props.language}/>
                        </div>
                        <br/>
                        <GraphSelector display={this.state.display} changeGraph={this.changeGraph} language={this.props.language}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Display