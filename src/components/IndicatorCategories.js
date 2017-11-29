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
                        return <p key={element.id}>{element.name}</p>
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