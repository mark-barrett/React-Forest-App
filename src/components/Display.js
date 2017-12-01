import React, { Component } from 'react'
import Graph from '../components/Graph'

class Display extends Component {

    constructor(props) {
        super(props);

    }


    render () {
        return (
            <div>
                <div class="card">
                    <div class="card-body">
                    <div class="text-center"><h4>{this.props.regionName}</h4></div>

                        <Graph scenarioIDs={this.props.scenarioIDs} indicatorIDs={this.props.indicatorIDs} timePeriodIDs={this.props.timePeriodIDs} dataSet={this.props.dataSet}/>
                        Indicators:
                        {this.props.indicatorIDs}<br />
                        Time Periods:
                        {this.props.timePeriodIDs}<br />
                        Scenarios:
                        {this.props.scenarioIDs}<br />
                    </div>
                </div>
            </div>
        )
    }
}

export default Display