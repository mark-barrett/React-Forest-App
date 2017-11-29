import React, { Component } from 'react'

class IndicatorCategories extends Component {

    constructor(props) {
        super(props);

        this.state = {
            indicatorCategories: props.indicatorCategories,
            options: []
        }

    }

    // This will be called when the component is updated
    componentDidUpdate() {
        // This will be called when the props sent are full.
        // We must ensure that it only gets called once so it doesnt create an infite loop.
        // Extra conditional logic is needed.
        if(this.props.indicatorCategories.length > 0 && this.state.indicatorCategories.length < 0) {
            // We can now set the state
            this.setState({indicatorCategories: this.props.indicatorCategories});
        }
    }

    componentDidMount() {
        this.setState({options: this.state.indicatorCategories.map(element => {
            return <p key={element.id}>{element.name}</p>
        })});
        // Now lets iterate over the state and make it presentable as options
        this.state.indicatorCategories.map(element => {
            // We need to have seperate 
        })
    }

    render () {
        return (
            <div>
                <div className="card square-corners">
                    <div className="card-header text-center">
                        {this.props.language.chooseIndicator}
                    </div>
                </div>
                {this.state.options}
            </div>
        )
    }
}

export default IndicatorCategories