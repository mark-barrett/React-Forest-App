import React, { Component } from 'react'
import Graph from '../components/Graph'
import Table from '../components/Table';
import GraphSelector from '../components/GraphSelector';
import PolarChart from '../components/PolarChart';

class Display extends Component {

    constructor(props) {
        super(props);

        this.state = {
            scenarioIDs: [],
            indicatorIDs: [],
            timePeriodIDs: "",
            timeString: "",
            dataSet: [],
            parsedData: [],
            html: [],
            display: "graph",
            graphType: "bar"
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

    componentDidMount() {
        for (let i = 0; i < this.props.dataSet[0].timePeriods.length; i++) {
            if (this.props.dataSet[0].timePeriods[i].id == this.props.timePeriodIDs) {
                if (this.state.timeString != this.props.dataSet[0].timePeriods[i].yearStart + "-" + this.props.dataSet[0].timePeriods[i].yearEnd) {
                    this.setState({ timeString: this.props.dataSet[0].timePeriods[i].yearStart + "-" + this.props.dataSet[0].timePeriods[i].yearEnd });
                }
            }
        }
    }

    componentDidUpdate() {
        for (let i = 0; i < this.props.dataSet[0].timePeriods.length; i++) {
            if (this.props.dataSet[0].timePeriods[i].id == this.props.timePeriodIDs) {
                if (this.state.timeString != this.props.dataSet[0].timePeriods[i].yearStart + "-" + this.props.dataSet[0].timePeriods[i].yearEnd) {
                    this.setState({ timeString: this.props.dataSet[0].timePeriods[i].yearStart + "-" + this.props.dataSet[0].timePeriods[i].yearEnd });
                }
            }
        }

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
                        if(indicators[x].id == indicators[y].id) {
                            indicators.splice(y, 1);
                        }
                    }
                }

                // Right here we can now get all the values for the indicators
                indicators.map((i, index) => {

                    let sum = 0;

                    for (let q = 0; q < this.props.dataSet[0].values.length; q++) {
                        if (this.props.dataSet[0].values[q].indicatorId == i.id && this.props.dataSet[0].values[q].scenarioId == scenario && this.props.dataSet[0].values[q].timePeriodId == this.props.timePeriodIDs) {
                            sum += this.props.dataSet[0].values[q].value;
                        }
                    }

                    // Now we have the sum, lets update that particular§indicator with a sum field
                    indicators[index].sum = Number((sum).toFixed(2));
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
                <div className="card">
                    <div className="card-body">
                    <div className="text-center"><h4>{this.props.regionName} - {this.state.timeString}</h4></div>
                    <div className="float-right">
                    {this.props.language.displayAs}
                        <select className="custom-select" onChange={this.changeDisplay}>
                            <option selected value="graph">{this.props.language.graph}</option>
                            <option value="table">{this.props.language.table}</option>
                        </select>
                    </div>
                    <br/><br/>
                        <GraphSelector display={this.state.display} changeGraph={this.changeGraph} language={this.props.language} /><br/>
                        <div className="row">
                            {
                                data[0].map(element => {
                                    return (
                                        <Graph data={element} number_of_graphs={data[0].length} display={this.state.display} graphType={this.state.graphType}/>
                                    )
                                })
                            }

                            <Table data={data[0]} display={this.state.display} language={this.props.language}/>
                            <br/>
                            <a target="_blank" href={"http://mela2.metla.fi/mela/_tupatest15/tupa/index.php?lk=" + this.props.linkObj.lk + "&ko=" + this.props.linkObj.ko + "&ty=" + this.props.linkObj.ty + "&ka=" + this.props.linkObj.ka + "&mj=" + this.props.linkObj.mj} className="btn btn-success btn-block">{this.props.language.viewOnMelatupa}</a>
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Display