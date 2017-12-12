import React, { Component } from 'react'

class GraphSelector extends Component {

    constructor(props) {
        super(props);

        this.changeChart = this.changeChart.bind(this);
    }

    changeChart(event) {
        this.props.changeGraph(event.target.value);
    }

    render () {
        if (this.props.display === 'graph') {
            return (
                <div className="text-center">
                Chart Type:
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" onClick={this.changeChart} value="pie" class="btn btn-success">Pie Chart</button>
                        <button type="button" onClick={this.changeChart} value="line" class="btn btn-success">Line Chart</button>
                        <button type="button" onClick={this.changeChart} value="column" class="btn btn-success">Column Chart</button>
                        <button type="button" onClick={this.changeChart} value="bar" class="btn btn-success">Bar Chart</button>
                        <button type="button" onClick={this.changeChart} value="polar" class="btn btn-success">Polar Chart</button>
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