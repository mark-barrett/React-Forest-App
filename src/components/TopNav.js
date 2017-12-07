import React, { Component } from 'react'
import language from '../Language';
import { CookiesProvider } from 'react-cookie';

class TopNav extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-success" style={{ padding: 2 }}>
                    <div className="container">
                        <a className="navbar-brand text-white animate" href="#"><i class="treeanimate fa fa-tree" aria-hidden="true"></i> {this.props.language.appName}</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                            </ul>
                            <button type="button" class="btn btn-light" data-toggle="modal" data-target="#infoModal">
                                <i class="fa fa-info"></i>
                            </button>
                            &nbsp;
                            <button className="btn btn-light" onClick={this.props.openMail}><i className="fa fa-envelope"></i></button>
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
                    

                        <div class="modal fade" id="infoModal" tabindex="-1" role="dialog" aria-labelledby="infoModal" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Information</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        {this.props.language.info} <a href='https://github.com/mark-barrett/React-Forest-App'>here</a>.<br/><br/>
                                        {this.props.language.team}
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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