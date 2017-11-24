import React, { Component } from 'react'
import language from '../Language';

class ScenarioSelector extends Component {

    render () {
        return (
            <div>
                <div class="card square-corners">
                    <div class="card-header text-center">
                        {this.props.language.scenarioSelector}
                    </div>
                    <div class="card-body">
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default ScenarioSelector