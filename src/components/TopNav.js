import React, { Component } from 'react'
import language from '../Language';

class TopNav extends Component {

    constructor(props) {
        super(props);

        // Instantiate the language class for use on the app.
        this.language = new language("English");
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-success" style={{ padding: 2 }}>
                    <div className="container">
                        <a className="navbar-brand text-white" href="#">{this.language.appName}</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <div className="form-group">
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>English</option>
                                        <option>Finnish</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default TopNav