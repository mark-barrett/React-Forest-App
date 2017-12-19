import React, { Component } from 'react'
import language from '../Language'

class GraphSelector extends Component {

    constructor(props) {
        super(props);

        this.changeChart = this.changeChart.bind(this);
    }

    changeChart(event) {
        this.props.changeGraph(event.target.value);
    }

    render () {
        if (this.props.display == 'graph') {
            return (
                <div className="text-center">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" onClick={this.changeChart} value="pie" className="btn btn-success">{this.props.language.pieChart}</button>
                        <button type="button" onClick={this.changeChart} value="column" className="btn btn-success">{this.props.language.columnChart}</button>
                        <button type="button" onClick={this.changeChart} value="bar" className="btn btn-success">{this.props.language.barChart}</button>
                        <button type="button" onClick={this.changeChart} value="polar" className="btn btn-success">{this.props.language.polarChart}</button>
                    </div>
                </div>
            )
        }
        else {
            return(
                <div>
                </div>
            )
        }
    }
}

export default GraphSelector