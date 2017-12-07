import React, { Component } from 'react'

class TimePeriod extends Component {

    constructor(props) {
        super(props);

        this.state = {
            timePeriods: props.timePeriods
        }

        this.timeChanged = this.timeChanged.bind(this);
    }

    timeChanged(event) {
        // This is executed whenever the user changes the time
        this.props.timesChanged(event.target.value);
    }
    
    render () {
        return (
            <div>
                {this.props.language.timePeriod}
                <select className="form-control" id="timePeriod" value={this.state.value} onChange={this.timeChanged}>
                    <option key="default">{this.props.language.chooseTimePeriod}</option>
                    {this.state.timePeriods}
                </select>
            </div>
        )
    }
}

export default TimePeriod