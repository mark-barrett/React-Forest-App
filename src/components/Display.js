import React, { Component } from 'react'

class Display extends Component {

    constructor(props) {
        super(props);

    }

    componentDidUpdate() {

    }

    render () {
        return (
            <div>
                <div class="card">
                    <div class="card-body">
                    <div class="text-center"><h4>{this.props.regionName}</h4></div>
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