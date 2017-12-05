import React, { Component } from 'react'

class Graph extends Component {

    render () {
        let cols = this.props.number_of_graphs == 1 ? 12 : 6;

        console.log(this.props.data);

        return (
            <div className={"col-md-"+cols}>
                <p><strong>{this.props.data.scenarioName}</strong></p>
            </div>
        )
    }
}

export default Graph