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
                    <div class="text-center"><h4>{this.props.regionName} - {this.props.timeString}</h4></div>

                        <Graph scenarioIDs={this.props.scenarioIDs} indicatorIDs={this.props.indicatorIDs} timePeriodIDs={this.props.timePeriodIDs} dataSet={this.props.dataSet}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Display