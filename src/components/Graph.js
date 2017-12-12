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

        this.forceUpdate();
    }

    componentDidUpdate() {
        this.chartChoice = this.props.graphType;
        console.log(this.chartChoice);
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

            if (this.chartChoice === 'polar') {
                console.log("polar chosen");
                this.config = {
                    chart: {
                        polar: true
                    },

                    title: {
                        text: 'Highcharts Polar Chart'
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

                    series: graph_data
                };
            }
            else {
            /*const*/ this.config = {

                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false, //if true there is a border
                        type: this.chartChoice
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