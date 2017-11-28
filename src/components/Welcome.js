import React, { Component } from 'react'
import language from '../Language';

class Welcome extends Component {

    render () {
        return (
            <div className="tree-background">
                <div className="container">
                    <div className="text-center welcome-message">
                        <h1 className="display-3">{this.props.language.appName}</h1>
                        <hr/>
                        <p className="lead">{this.props.language.team}</p>
                        <button className="btn btn-success" onClick={this.props.openApp}>{this.props.language.openApp} <i className="fa fa-arrow-right" aria-hidden="true"></i></button> 
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome