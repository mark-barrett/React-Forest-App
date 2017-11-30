import React, { Component } from 'react'
import TopNav from './TopNav';
import ScenarioSelector from './ScenarioSelector';
import Contact from './Contact';
import language from '../Language';

class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            mailIsOpen : false
        }

        this.openMail = this.openMail.bind(this);
        this.language = new language("English");

    }
    openMail(){
        if (this.state.mailIsOpen === false) {
            this.setState({mailIsOpen: true})
        }
    }

    render () {
        if (this.state.mailIsOpen) {
            return (
                <div>
                    <Contact language={this.language}/>
                </div>
            )
        }
        else {
            return (
                <div>
                    <TopNav language={this.props.language} openMail={this.openMail} />
    
                    <div className="row">
                        <div className="col-md-4">
                            <ScenarioSelector language={this.props.language} />
                        </div>
    
                        <div className="col-md-8">
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Home