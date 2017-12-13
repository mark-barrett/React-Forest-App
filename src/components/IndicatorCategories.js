import React, { Component } from 'react'

class IndicatorCategories extends Component {

    constructor(props) {
        super(props);

        this.state = {
            indicatorCategories: [],
            options: [],
            indicatorsSet: false,
            selectedIndicatorIDs: []
        }

        // Bind this to the indicatorChanged method
        this.indicatorChanged = this.indicatorChanged.bind(this);
    }

    indicatorChanged(event) {
        console.log('indicatorChanged');
        /* This gets called everytime an indicator is changed
        We must take the value that has changed append it to the selected list if not there and pass it back
        up to the home component.
        */
        let newIndicatorIDs = event.target.options;
        var value = this.state.selectedIndicatorIDs;
        
        for (var i = 0, l = newIndicatorIDs.length; i < l; i++) {
            if (newIndicatorIDs[i].selected) {
                value.push(newIndicatorIDs[i].value);
            }
            // Check for unselected
            else {
                // If there are unselected, strip them from the array
                for(var j=0; j<this.state.selectedIndicatorIDs.length; j++) {
                    // If there is a value that is unselected present in any position
                    if(this.state.selectedIndicatorIDs[j] == newIndicatorIDs[i].value) {
                        // Create a temp array
                        let temp_ids = this.state.selectedIndicatorIDs;
                        // Strip that value from the temp array
                        temp_ids.splice(j, 1);
                        // Set the state back to that stripped array
                        this.setState({selectedIndicatorIDs: temp_ids});
                    }
                }
            }
        }

        // Remove any duplicates
        for (var i = 0; i < value.length; ++i) {
            for (var j = i + 1; j < value.length; ++j) {
                if (value[i] === value[j])
                    value.splice(j--, 1);
            }
        }

        // Finally update the state
        this.setState({ selectedIndicatorIDs: value });

        // Call the indicators changed method to pass values to the home component
        this.props.indicatorsChanged(value);
    }

    // This will be called when the component is updated
    componentDidUpdate() {
        console.log('componentDidUpdate');
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
                        return (
                            <div title={element.description}>
                                {element.name}
                                <select className="form-control" id={element.id} value={this.state.value} multiple>
                                    {element.indicators.map(item => {
                                        return <option value={item.id} title={item.description} key={item.id}>{item.name}</option>
                                    })}
                                </select>
                                <br/>
                            </div>
                        )
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
                        <form name="indicatorCategories" onChange={this.indicatorChanged} value={this.state.value}>
                            {this.state.options}
                        </form>
                        {this.state.selectedIndicatorIDs}
                    </div>
                </div>
            </div>
        )
    }
}

export default IndicatorCategories