import React, { Component } from 'react'
var ReactHighcharts = require('react-highcharts');
var HighchartsMore = require('highcharts-more');
HighchartsMore(ReactHighcharts.Highcharts);

class PolarChart extends Component {

    constructor(props) {
        super(props);
        this.data = this.props.data;
    }

    render() {
        let graph_data = [];
        this.props.data.indicators.map(element => {
            let new_obj = {
                type: 'column',
                name: element.name,
                data: [element.sum],
                pointPlacement: 'between'
            }
            graph_data.push(new_obj);
        })

        this.config = {
            chart: {
                polar: true
            },

            title: {
                text: this.props.scenario
            },

            pane: {
                startAngle: 0,
                endAngle: 360
            },

            xAxis: {
                tickInterval: 45,
                min: 0,
                max: 360,
                labels: {
                    formatter: function () {
                        return this.value + '°';
                    }
                }
            },

            yAxis: {
                min: 0
            },

            pane: {
                size: '80%',
                startAngle: 22.5
            },
            
            plotOptions: {
                series: {
                    pointStart: 0,
                    pointInterval: 80
                },
                column: {
                    pointPadding: 0,
                    groupPadding: 0
                }
            },

            series: graph_data
        }

        const divStyle = {
            minWidth: 310,
            maxWidth: 400,
            height: 400,
            margin: 'auto'
        }
        return (
            <div style={divStyle}>
                <ReactHighcharts config={this.config}></ReactHighcharts>
            </div>
        )
    }
}

export default PolarChart