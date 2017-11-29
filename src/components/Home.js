import React, { Component } from 'react'

// Import components
import TopNav from './TopNav';
import ScenarioSelector from './ScenarioSelector';
import IndicatorCategories from '../components/IndicatorCategories';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayIndicators: false,
            indicatorCategories: []
        }

        this.displayIndicators = this.displayIndicators.bind(this);
    }

    displayIndicators(_indicatorCategories) {
        // Display the indicators
        this.setState({displayIndicators: true});
        this.setState({indicatorCategories: _indicatorCategories});
    }

    render () {

        if(this.state.displayIndicators === false) {
            return (
                <div>
                    <TopNav language={this.props.language} />

                    <div className="row">
                        <div className="col-md-3">
                            <ScenarioSelector language={this.props.language} displayIndicators={this.displayIndicators} />
                        </div>
                        <div className="col-md-6">
                        </div>
                        <div className="col-md-3">

                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <TopNav language={this.props.language} />

                    <div className="row">
                        <div className="col-md-3">
                            <ScenarioSelector language={this.props.language} displayIndicators={this.displayIndicators} />
                        </div>
                        <div className="col-md-6">
                        </div>
                        <div className="col-md-3">
                            <IndicatorCategories language={this.props.language} indicatorCategories={this.state.indicatorCategories} />
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Home