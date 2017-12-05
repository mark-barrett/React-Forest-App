import React, { Component } from 'react'
import language from '../Language';

class TopNav extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-success" style={{ padding: 2 }}>
                    <div className="container">
                        <a className="navbar-brand text-white" href="#"><i class="fa fa-tree" aria-hidden="true"></i> {this.props.language.appName}</a>
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
                        <button className="w3-btn" onClick={this.props.openMail}> <img src="https://cdn4.iconfinder.com/data/icons/aiga-symbol-signs/439/aiga_mail-32.png" alt="" /></button>
                    </div>
                </nav>
            </div>
        )
    }
}

export default TopNav