import React, { Component } from 'react'
import {Bootstrap, ToggleButton, MenuItem, ToggleButtonGroup, ButtonToolbar} from 'react-bootstrap';
//import 'highcharts-more';
const ReactHighcharts = require('react-highcharts')
const ReactHighchartsexporting = require('highcharts-exporting')
//var Highcharts = require('react-highcharts');

class Graphs extends Component{

    chartTitle = 'This is a test chart' //Title for chart
    config; //config that we pass to the reacthighcharts

    constructor(props)
    {
        super(props);

        global.Highcharts = require('highcharts');
        require('highcharts/modules/exporting')(global.Highcharts);
        global.HighchartsMore = require('highcharts-more');        
    }

    render() {

        console.log("rendering");

        if(this.props.chartSelection === 'polar')
        {
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
        };
        }
        else{
        /*const*/ this.config = {

            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null, 
                plotShadow: false, //if true there is a border
                type: this.props.chartSelection 
            },
            title: {
                text: this.chartTitle
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: 'black'
                        }
                    }
                }
            },
            series: [{
                name: 'Scenarioname',
                colorByPoint: true,
                
                data: [{     //Data goes here
                    name: 'Mustikkasato',
                    y: 56.33
                }, {
                    name: 'Chrome',
                    y: 24.03,
                    sliced: true,
                    selected: true
                }, {
                    name: 'Firefox',
                    y: 10.38
                }, {
                    name: 'Safari',
                    y: 4.77
                }, {
                    name: 'Opera',
                    y: 0.91
                }, {
                    name: 'Other',
                    y: 0.2
                }]
            }]

            

        };}

        return(

            <div >
                <ReactHighcharts config = { this.config }></ReactHighcharts>
            </div>
        )
    }
}

export default Graphs