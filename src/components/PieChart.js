import React, { Component } from 'react'
const ReactHighcharts = require('react-highcharts')
const ReactHighchartsexporting = require('highcharts-exporting')

class PieChart extends Component {
    constructor(props) {
        super(props);

        global.Highcharts = require('highcharts');
        global.HighchartsMore = require('highcharts-more');
        require('highcharts/modules/exporting')(global.Highcharts);

        this.data = this.props.data;
    }
    
    componentDidUpdate() {
        console.log(this.props.data);
    }
    
    render () {
        this.config = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Browser market shares January, 2015 to May, 2015'
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
                name: 'Brands',
                colorByPoint: true,
                data: this.props.data
            }]
        }
        return (
            <div>
                <ReactHighcharts config={this.config}></ReactHighcharts>
            </div>
        )
    }
}

export default PieChart