import React, { Component } from 'react'
import {Bootstrap, ToggleButton, MenuItem, ToggleButtonGroup, ButtonToolbar} from 'react-bootstrap';

class Graphselector extends Component{


constructor(props)
{
    super(props);
}

render()
{
    <div className="chartTypeButtonBar">Chart type:
    <ButtonToolbar>
        <ToggleButtonGroup type="radio" name="options" defaultValue={1} >
            <ToggleButton onClick={ } value={1}>Pie Chart</ToggleButton>
            <ToggleButton onClick={ } value={2}>Area Chart</ToggleButton>
            <ToggleButton onClick={ } value={3}>Line Chart</ToggleButton>
            <ToggleButton onClick={ }value={4}>Column Chart</ToggleButton>
            <ToggleButton onClick={ }value={5}>Bar Chart</ToggleButton>
            <ToggleButton onClick={ }value={6}>Polar Chart</ToggleButton>
        </ToggleButtonGroup>
    </ButtonToolbar>
    </div>
}
}