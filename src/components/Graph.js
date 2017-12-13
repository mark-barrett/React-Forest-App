import React, { Component } from 'react'
const ReactHighcharts = require('react-highcharts')
const ReactHighchartsexporting = require('highcharts-exporting')

class Graph extends Component {

    chartChoice = 'column';

    constructor(props) {
        super(props);

        global.Highcharts = require('highcharts');
        require('highcharts/modules/exporting')(global.Highcharts);
        global.HighchartsMore = require('highcharts-more');
    }

    setChartType(choice) {
        this.chartChoice = choice;
    }

    render () {
        if(this.props.display === 'graph') {
            let cols = this.props.number_of_graphs == 1 ? 12 : 6;

            // Object for displaying the chart
            let graph_data = [];

            this.props.data.indicators.map(element => {
                let new_obj = {
                    name: element.name,
                    y: element.sum
                }
                graph_data.push(new_obj);
            })

            this.config = {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false, //if true there is a border
                    type: this.props.graphType
                },
                title: {
                    text: this.props.data.scenarioName
                },
                tooltip: {
                    pointFormat: '<b>{point.y}</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>',
                            style: {
                                color: 'black'
                            }
                        }
                    }
                },
                series: [{
                    name: "",
                    colorByPoint: true,

                    data: graph_data
                }]
            }
            
        
            return (
                <div className={"col-md-"+cols}>
                    <ReactHighcharts config={this.config}></ReactHighcharts>
                </div>
            )
        }
        else {
            return (
                <div>
                </div>
            )
        }
    }
}

export default Graph