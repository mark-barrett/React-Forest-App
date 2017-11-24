import React, { Component } from 'react'
import language from '../Language';
import regions from '../data/Regions';

class ScenarioSelector extends Component {

    constructor(props) {
        super(props);

        // Create state to hold all of the information needed
        this.state = {
            regions: []
        }
    }

    componentDidMount() {
        // We must get the regionLevels so the user can choose from them.
        regions.getRegions().then(result => {
            // Map it onto the select input
            this.setState({regions: result.map(element => {
                return <option key={element.id}>{element.name}</option>;
            })});
        })
    }

    render () {
        return (
            <div>
                {this.regions}
                <div className="card square-corners">
                    <div className="card-header text-center">
                        {this.props.language.scenarioSelector}
                    </div>
                    <div className="card-body">
                        {this.props.language.regionLevel}
                        <div className="form-group">
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>{this.props.language.chooseRegionLevel}</option>
                                {this.state.regions}
                            </select>
                        </div>

                        {this.props.language.region}
                        <div className="form-group">
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>Lapland</option>
                                <option>Southern Finland?</option>
                            </select>
                        </div>

                        {this.props.language.scenarioCollection}
                        <div className="form-group">
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>I don't know</option>
                            </select>
                        </div>

                        <div className="list-group">
                            <button type="button" className="list-group-item list-group-item-action active">
                                Scenario 1
                            </button>
                            <button type="button" className="list-group-item list-group-item-action">Scenario 2</button>
                            <button type="button" className="list-group-item list-group-item-action">Scenario 3</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default ScenarioSelector