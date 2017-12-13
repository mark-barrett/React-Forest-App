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
                {this.props.language.chartType}
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" onClick={this.changeChart} value="pie" class="btn btn-success">{this.props.language.pieChart}</button>
                        <button type="button" onClick={this.changeChart} value="line" class="btn btn-success">{this.props.language.lineChart}</button>
                        <button type="button" onClick={this.changeChart} value="column" class="btn btn-success">{this.props.language.columnChart}</button>
                        <button type="button" onClick={this.changeChart} value="bar" class="btn btn-success">{this.props.language.barChart}</button>
                        <button type="button" onClick={this.changeChart} value="polar" class="btn btn-success">{this.props.language.polarChart}</button>
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