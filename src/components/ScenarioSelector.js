import React, { Component } from 'react'
import language from '../Language';
import regions from '../data/Regions';

class ScenarioSelector extends Component {

    constructor(props) {
        super(props);

        // Create state to hold all of the information needed
        this.state = {
            regionLevels: [],
            regions: []
        }

        this.getRegions = this.getRegions.bind(this);
    }

    componentDidMount() {
        // We must get the regionLevels so the user can choose from them.
        regions.getRegionLevels().then(result => {
            // Map it onto the select input
            this.setState({regionLevels: result.map(element => {
                return <option key={element.id} value={element.id}>{element.name}</option>;
            })});
        })
    }

    // Get regions method to get the list of regions
    getRegions(event) {
        let regionLevelID = event.target.value;
        
        // Now that we have the value of what was selected, make a call for the regions.
        regions.getRegions(regionLevelID).then(result => {
            this.setState({regions: result.map(element => {
                return <option key={element.id} value={element.id}>{element.name}</option>;
            })})
        });
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
                            <select className="form-control" id="regionLevel" onChange={this.getRegions} value={this.state.value}>
                                <option>{this.props.language.chooseRegionLevel}</option>
                                {this.state.regionLevels}
                            </select>
                        </div>

                        {this.props.language.region}
                        <div className="form-group">
                            <select className="form-control" id="exampleFormControlSelect1">
                                {this.state.regions}
                            </select>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default ScenarioSelector