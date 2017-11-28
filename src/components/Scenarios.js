import React, { Component } from 'react'

class Scenarios extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // Get the passed down value from the prop. Before the dash is the scenarioCollectionID
            scenarioCollectionID: props.scenarioRegion.substr(0, props.scenarioRegion.indexOf('-')),
            // Get the passed down value from the prop. After the dash is the regionID
            regionID: props.scenarioRegion.split('-')[1]
        }

        console.log(this.state.scenarioCollectionID);
        console.log(this.state.regionID);
    }

    render () {
        return (
            <div>
                <hr/>   
            
            </div>
        )
    }
}

export default Scenarios