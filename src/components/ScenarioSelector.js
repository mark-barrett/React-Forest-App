import React, { Component } from 'react'
import language from '../Language';

class ScenarioSelector extends Component {

    constructor(props) {
        super(props);

        // Instantiate the language class for use on the app.
        this.language = new language("English");
    }

    render () {
        return (
            <div>
                <div class="card square-corners">
                    <div class="card-header text-center">
                        {this.language.scenarioSelector}
                    </div>
                    <div class="card-body">
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default ScenarioSelector