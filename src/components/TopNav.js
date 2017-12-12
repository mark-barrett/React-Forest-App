import React, { Component } from 'react'
import language from '../Language';
import { CookiesProvider } from 'react-cookie';
import Contact from './Contact';

class TopNav extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-success" style={{ padding: 2 }}>
                    <div className="container">
                        <a className="navbar-brand text-white animate" href="#"><i className="treeanimate fa fa-tree" aria-hidden="true"></i> {this.props.language.appName}</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                            </ul>
                            <button type="button" className="btn btn-light" data-toggle="modal" data-target="#infoModal">
                                <i className="fa fa-info"></i>
                            </button>
                            &nbsp;
                            <button type="button" className="btn btn-light" data-toggle="modal" data-target="#email">
                                <i className="fa fa-envelope"></i>
                            </button>
                            &nbsp;
                            <form className="form-inline my-2 my-lg-0" onChange={this.props.changeLanguage}>
                                <div className="form-group">
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option value="English">English</option>
                                        <option value="Finnish">Finnish</option>
                                    </select>
                                </div>
                            </form>
                        </div>

                        <div className="modal fade bd-example-modal-sm" id="email" tabIndex="-1" role="dialog" aria-labelledby="email" aria-hidden="true">
                            <div className="modal-dialog modal-lg" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">{this.props.language.sendEmail}</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                    <Contact language={this.props.language}/>
                                    </div>
                                    <div className="modal-footer">
                                        <button typ0e="button" className="btn btn-secondary" data-dismiss="modal">{this.props.language.close}</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="infoModal" tabIndex="-1" role="dialog" aria-labelledby="infoModal" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">{this.props.language.information}</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        {this.props.language.info} <a href='https://github.com/mark-barrett/React-Forest-App'>{this.props.language.here}</a>.<br/><br/>
                                        {this.props.language.team}
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">{this.props.language.close}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default TopNav