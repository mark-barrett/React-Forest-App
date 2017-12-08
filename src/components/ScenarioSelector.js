import React, { Component } from 'react'
import regions from '../data/Regions';
import Scenarios from '../components/Scenarios';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

class ScenarioSelector extends Component {

    constructor(props) {
        super(props);

        // Create state to hold all of the information needed
        this.state = {
            regionLevels: [],
            regions: [],
            scenarioCollections: [],
            displayRegions: false,
            displayScenarioCollections: false,
            displayScenarios: false,
            scenarioRegionSelection: ""
        }

        this.getRegions = this.getRegions.bind(this);
        this.getScenarioCollections = this.getScenarioCollections.bind(this);
        this.displayScenarios = this.displayScenarios.bind(this);
        this.displayIndicators = this.displayIndicators.bind(this);
    }

    componentDidMount() {

        const { cookies } = this.props;

        // We must get the regionLevels so the user can choose from them.
        regions.getRegionLevels(cookies.get('language')).then(result => {
            // Map it onto the select input
            this.setState({regionLevels: result.map(element => {
                return <option key={element.id} value={element.id}>{element.name}</option>;
            })});
        })
    }

    // Get regions method to get the list of regions
    getRegions(event) {
        const { cookies } = this.props;
        
        // If the choose region level selection is chosen
        if (event.target.value != this.props.language.chooseRegionLevel) {

            this.setState({ displayScenarioCollections: false });

            let regionLevelID = event.target.value;

            // Now that we have the value of what was selected, make a call for the regions.
            regions.getRegions(regionLevelID, cookies.get('language')).then(result => {

                result.map(element => {

                    // Go through each region and add its id and the scenarios collections to the list
                    this.setState({
                        scenarioCollections: result.map(element => {
                            return {
                                'id': element.id,
                                'scenarioCollections': element.scenarioCollections.map(collection => {
                                    return collection;
                                })
                            }
                        })
                    });
                })

                this.setState({
                    regions: result.map(element => {
                        // We need to add each regions scenario collections to the list
                        return <option key={element.id} value={element.id}>{element.name}</option>;
                    })
                });
            });
            this.setState({ displayRegions: true });
        }
        else {
            this.setState({ displayRegions: false });
            this.setState({ displayScenarioCollections: false });
        }
    
    }

    getScenarioCollections(event) {

        if(event.target.value != this.props.language.chooseRegion) {

            let regionID = event.target.value;
            let filteredScenarios = []

            this.state.regions.map(element => {
                if(regionID == element.props.value) {
                    this.props.regionName(element.props.children);
                }
            })

            // Filter the scenarioCollections so that only the ones that are matching exist
            this.state.scenarioCollections.map(result => {
                if(result.id == regionID) {
                    result.scenarioCollections.map(result => {
                        // Put the scenarioID and regionID in split with a dash
                        filteredScenarios.push(<option key={result.id} value={result.id+"-"+regionID}>{result.name}</option>)
                    })
                }
            });

            this.setState({scenarioCollections: filteredScenarios});
            this.setState({displayScenarioCollections: true});
        }
        else {
            this.setState({ displayScenarios: false });
            this.setState({scenarioCollections: []});
            this.setState({displayScenarioCollections: false});
        }

    }

    displayScenarios(event) {
        // Set the scenario collection id to pass into the scenarios component
        this.setState({ scenarioRegionSelection: event.target.value});
        this.setState({displayScenarios: true});
    }

    displayIndicators(indicatorCategories) {
        // Pass it to the home component
        this.props.displayIndicators(indicatorCategories);
    }

    render () {

        if(this.state.displayRegions === false) {
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
                                    <option value={this.props.language.chooseRegionLevel}>{this.props.language.chooseRegionLevel}</option>
                                    {this.state.regionLevels}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        if(this.state.displayRegions === true && this.state.displayScenarioCollections === false){
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
                                <select className="form-control" id="regions" onChange={this.getScenarioCollections} value={this.state.value}>
                                    <option>{this.props.language.chooseRegion}</option>
                                    {this.state.regions}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        if (this.state.displayScenarioCollections === true && !this.state.displayScenarios) {
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
                                <select className="form-control" id="regions" onChange={this.getScenarioCollections} value={this.state.value}>
                                    <option>{this.props.language.chooseRegion}</option>
                                    {this.state.regions}
                                </select>
                            </div>

                            {this.props.language.scenarioCollection}
                            <div className="form-group">
                                <select className="form-control" id="scenarioCollections" onChange={this.displayScenarios} value={this.state.value}>
                                <option>{this.props.language.chooseScenarioCollection}</option>
                                {this.state.scenarioCollections}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        if (this.state.displayScenarioCollections === true && this.state.displayScenarios) {
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
                                <select className="form-control" id="regions" onChange={this.getScenarioCollections} value={this.state.value}>
                                    <option>{this.props.language.chooseRegion}</option>
                                    {this.state.regions}
                                </select>
                            </div>

                            {this.props.language.scenarioCollection}
                            <div className="form-group">
                                <select className="form-control" id="scenarioCollections" onChange={this.displayScenarios} value={this.state.value}>
                                    <option>{this.props.language.chooseScenarioCollection}</option>
                                    {this.state.scenarioCollections}
                                </select>
                            </div>
                            <Scenarios language={this.props.language} scenarioRegion={this.state.scenarioRegionSelection} displayIndicators={this.displayIndicators} scenariosChanged={this.props.scenariosChanged} timesChanged={this.props.timesChanged} getDataSet={this.props.getDataSet}/>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default withCookies(ScenarioSelector)