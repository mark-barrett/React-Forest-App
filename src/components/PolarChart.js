import React, { Component } from 'react'
const ReactHighcharts = require('react-highcharts')
const ReactHighchartsexporting = require('highcharts-exporting')

class PolarChart extends Component {

    constructor(props) {
        super(props);

        global.Highcharts = require('highcharts');
        global.HighchartsMore = require('highcharts-more');
        require('highcharts/modules/exporting')(global.Highcharts);

        this.data = this.props.data;
    }

    render() {
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

            plotOptions: {
                series: {
                    pointStart: 0,
                    pointInterval: 45
                },
                column: {
                    pointPadding: 0,
                    groupPadding: 0
                }
            },

            series: [{
                type: 'column',
                name: 'Column',
                data: [8, 7, 6, 5, 4, 3, 2, 1],
                pointPlacement: 'between'
            }, {
                type: 'line',
                name: 'Line',
                data: [1, 2, 3, 4, 5, 6, 7, 8]
            }, {
                type: 'area',
                name: 'Area',
                data: [1, 8, 2, 7, 3, 6, 4, 5]
            }]
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