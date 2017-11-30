import React, { Component } from 'react'

class IndicatorCategories extends Component {

    constructor(props) {
        super(props);

        this.state = {
            indicatorCategories: [],
            options: [],
            indicatorsSet: false
        }

    }

    // This will be called when the component is updated
    componentDidUpdate() {
        // This will be called when the props sent are full.
        // We must ensure that it only gets called once so it doesnt create an infite loop.
        // Extra conditional logic is needed.
        if(this.props.indicatorCategories.length > 0 && this.state.indicatorsSet === false) {
            // We can now set the states

            // Make boolean true so this only executes once
            this.setState({indicatorsSet: true})


            // Update the states of the indicatorCategories
            this.setState({ indicatorCategories: this.props.indicatorCategories }, function () {
                this.setState({
                    options: this.state.indicatorCategories.map(element => {
                        return (
                            <div>
                                {element.name}
                                <select className="form-control" id={element.id} value={this.state.value} multiple>
                                    {element.indicators.map(item => {
                                        return <option value={item.id} key={item.id}>{item.name}</option>
                                    })}
                                </select>
                                <br/>
                            </div>
                        )
                    })
                });
            });
        }
    }

    render () {
        return (
            <div>
                <div className="card square-corners">
                    <div className="card-header text-center">
                        {this.props.language.chooseIndicator}
                    </div>
                    <div className="card-body">
                        {this.state.options}
                    </div>
                </div>
            </div>
        )
    }
}

export default IndicatorCategories