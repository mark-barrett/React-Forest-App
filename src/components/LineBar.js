import React, { Component } from 'react'
const ReactHighcharts = require('react-highcharts')
const ReactHighchartsexporting = require('highcharts-exporting')

class LineBar extends Component {

    constructor(props) {
        super(props);

        global.Highcharts = require('highcharts');
        global.HighchartsMore = require('highcharts-more');
        require('highcharts/modules/exporting')(global.Highcharts);

        console.log(this.props.data);
    }

    render () {
        let graph_data = [];
        this.props.data.indicators.map(element => {
            let new_obj = {
                name: element.name,
                data: [element.sum]
            }
            graph_data.push(new_obj);
        })

        this.config = {
            chart: {
                type: this.props.chart
            },
            title: {
                text: this.props.scenario
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            credits: {
                enabled: false
            },
            series: graph_data
        }
        return (
            <div>
                <ReactHighcharts config={this.config}></ReactHighcharts>
            </div>
        )
    }
}

export default LineBar