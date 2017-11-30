import React, { Component } from 'react'
import {Bootstrap, ToggleButton, MenuItem, ToggleButtonGroup, ButtonToolbar} from 'react-bootstrap';
const ReactHighcharts = require('react-highcharts')
const ReactHighchartsexporting = require('highcharts-exporting')
var Highcharts = require('react-highcharts');

class Graphs extends Component{
    
    chartChoice =  'pie'; //Default choice is Pie chart

    constructor(props)
    {
        super(props);

        global.Highcharts = require('highcharts');
        require('highcharts/modules/exporting')(global.Highcharts);
        var ReactHighcharts = require('react-highcharts');
    }

    setChartType(choice)
    {
        this.chartChoice = choice;
        this.forceUpdate(); //Renders Chart again
    }

    render() {

        const config = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null, //null
                plotShadow: false, //if true there is a border
                type: this.chartChoice 
            },
            title: {
                text: 'This is a test chart'
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
                            //color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            color: 'black'
                        }
                    }
                }
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{     //Data goes here
                    name: 'IE',
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
        };

        return(

            <div>
                <ReactHighcharts config = { config }></ReactHighcharts>

                <ButtonToolbar>
                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                    <ToggleButton onClick={ () => {this.setChartType('pie')} } value={1}>Pie Chart</ToggleButton>
                    <ToggleButton onClick={ () => {this.setChartType('area')} } value={2}>Area Chart</ToggleButton>
                    <ToggleButton onClick={ () => {this.setChartType('line')} } value={3}>Line Chart</ToggleButton>
                    <ToggleButton onClick={ () => {this.setChartType('column')} }value={4}>Column Chart</ToggleButton>
                    <ToggleButton onClick={ () => {this.setChartType('bar')} }value={5}>Bar Chart</ToggleButton>
                </ToggleButtonGroup>
                </ButtonToolbar>
            </div>
        )
    }
}

export default Graphs