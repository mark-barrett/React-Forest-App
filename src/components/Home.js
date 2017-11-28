import React, { Component } from 'react'

// Import components
import TopNav from './TopNav';
import ScenarioSelector from './ScenarioSelector';

class Home extends Component {

    render () {
        return (
            <div>
                <TopNav language={this.props.language} />

                <div className="row">
                    <div className="col-md-4">
                        <ScenarioSelector language={this.props.language} />
                    </div>

                    <div className="col-md-8">
                    </div>
                </div>
            </div>
        )
    }
}

export default Home