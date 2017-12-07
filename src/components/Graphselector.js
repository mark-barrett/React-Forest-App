import React, { Component } from 'react'
import {Bootstrap, ToggleButton, MenuItem, ToggleButtonGroup, ButtonToolbar} from 'react-bootstrap';

class Graphselector extends Component{


constructor(props)
{
    super(props);
}

render()
{
            return(
                <div className="chartTypeButtonBar">Chart type:
                        <button onClick={ () => this.props.changeChart("single") }>Single Chart</button>
                        <button onClick={ () => this.props.changeChart("multiple") }>Multiple Chart</button>
                        <button onClick={ () => this.props.changeChart("bar") }>Bar Chart</button>
                        <button onClick={ () => this.props.changeChart("column") }>Column Chart</button>
                        <button onClick={ () => this.props.changeChart("line") }>Line Chart</button>
                        <button onClick={ () => this.props.changeChart("polar") }>Polar Chart</button>
                </div>
            )
}
}
export default Graphselector