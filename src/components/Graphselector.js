import React, { Component } from 'react'

class GraphSelector extends Component {

    changeChart(event) {
        console.log(event.target.value);
    }

    render () {
        if (this.props.display === 'graph') {
            return (
                <div className="text-center">
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" onClick={this.changeChart} value="pie" class="btn btn-success">Pie Chart</button>
                        <button type="button" onClick={this.changeChart} class="btn btn-success">Line Chart</button>
                        <button type="button" onClick={this.changeChart} class="btn btn-success">Column Chart</button>
                        <button type="button" onClick={this.changeChart} class="btn btn-success">Bar Chart</button>
                        <button type="button" onClick={this.changeChart} class="btn btn-success">Polar Chart</button>
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