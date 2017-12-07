import React, { Component } from 'react'
import {Bootstrap, ToggleButton, MenuItem, ToggleButtonGroup, ButtonToolbar} from 'react-bootstrap';
const ReactHighcharts = require('react-highcharts')
const ReactHighchartsexporting = require('highcharts-exporting')

class BarGraph extends Component{

    chartTitle = 'Bar graph.js' //Title for chart
    config; //config that we pass to the reacthighcharts

    constructor(props)
    {
        super(props);

        global.Highcharts = require('highcharts');
        require('highcharts/modules/exporting')(global.Highcharts);
        global.HighchartsMore = require('highcharts-more');   
    }

    render() {
        console.log("BarGraph: rendering");
        console.log("Data in BarGraph" + this.data);

        this.config = {      
                    chart: {
                        type: 'column'
                    },
                
                    title: {
                        text: 'Highcharts responsive chart'
                    },
                
                    subtitle: {
                        text: 'Resize the frame or click buttons to change appearance'
                    },
                
                    legend: {
                        align: 'right',
                        verticalAlign: 'middle',
                        layout: 'vertical'
                    },
                
                    xAxis: {
                        //Scenario names here 
                        categories: ['Apples', 'Oranges', 'Bananas'],
                        labels: {
                            x: -10
                        }
                    },
                
                    yAxis: {
                        allowDecimals: false,
                        title: {
                            text: 'Amount'
                        }
                    },
                
                    series: this.props.series,
                    //series: ,
                
                    responsive: {
                        rules: [{
                            condition: {
                                maxWidth: 500
                            },
                            chartOptions: {
                                legend: {
                                    align: 'center',
                                    verticalAlign: 'bottom',
                                    layout: 'horizontal'
                                },
                                yAxis: {
                                    labels: {
                                        align: 'left',
                                        x: 0,
                                        y: -5
                                    },
                                    title: {
                                        text: null
                                    }
                                },
                                subtitle: {
                                    text: null
                                },
                                credits: {
                                    enabled: false
                                }
                            }
                        }]
                    }
                    };
        return(
                        <div >
                            <ReactHighcharts config = { this.config }></ReactHighcharts>
                        </div>
                    )
    }
}

export default BarGraph