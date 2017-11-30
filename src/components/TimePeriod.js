import React, { Component } from 'react'

class TimePeriod extends Component {

    constructor(props) {
        super(props);

        this.state = {
            timePeriods: props.timePeriods
        }
    }
    
    render () {
        return (
            <div>
                {this.props.language.timePeriod}
                <select className="form-control" id="timePeriod" value={this.state.value}>
                    <option key="default">{this.props.language.chooseTimePeriod}</option>
                    {this.state.timePeriods}
                </select>
            </div>
        )
    }
}

export default TimePeriod