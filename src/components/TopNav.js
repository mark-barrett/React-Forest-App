import React, { Component } from 'react'
import language from '../Language';
import { CookiesProvider } from 'react-cookie';
import Contact from './Contact';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import firstImage from '../images/first.png';
import secondImage from '../images/second.png';
import thirdImage from '../images/third.png';
import fourthImage from '../images/fourth.png';
import fifthImage from '../images/fifth.png';
import sixthImage from '../images/sixth.png';

class TopNav extends Component {

    render() {
        const { cookies } = this.props;

        let language = cookies.get('language');

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
                            <button type="button" class="btn btn-light" data-toggle="modal" data-target="#questionModal">
                                <i class="fa fa-question"></i>
                            </button>
                            &nbsp;
                            <button type="button" class="btn btn-light" data-toggle="modal" data-target="#mailModal">
                                <i class="fa fa-envelope"></i>
                            </button>

                            <div class="modal fade bd-example-modal-lg" id="questionModal" tabindex="-1" role="dialog" aria-labelledby="questionModal" aria-hidden="true">
                                <div class="modal-dialog modal-lg" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">{this.props.language.help}</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <p>{this.props.language.helpText1}
                                                <br/><br/>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h5>{this.props.language.helpText2}</h5>
                                                        <p>{this.props.language.helpText3}</p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <img src={firstImage} width="100%" />
                                                    </div>
                                                </div>
                                                <br/>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h5>{this.props.language.helpText4}</h5>
                                                        <p>{this.props.language.helpText5}</p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <img src={secondImage} width="100%" />
                                                    </div>
                                                </div>
                                                <br/>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h5>{this.props.language.helpText6}</h5>
                                                        <p>{this.props.language.helpText7}</p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <img src={thirdImage} width="100%" />
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h5>{this.props.language.helpText8}</h5>
                                                        <p>{this.props.language.helpText9}</p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <img src={fourthImage} width="100%" />
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h5>{this.props.language.helpText10}</h5>
                                                        <p>{this.props.language.helpText11}</p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <img src={fifthImage} width="100%" />
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h5>{this.props.language.helpText12}</h5>
                                                        <p>{this.props.language.helpText13}</p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <img src={sixthImage} width="100%" />
                                                    </div>
                                                </div>
                                            </p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">{this.props.language.close}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="modal fade" id="mailModal" tabindex="-1" role="dialog" aria-labelledby="infoModal" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">{this.props.language.contact}</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <Contact language={this.props.language}/>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">{this.props.language.close}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            &nbsp;
                            <form className="form-inline my-2 my-lg-0" onChange={this.props.changeLanguage}>
                                <div className="form-group">
                                        {language === "English"
                                            ? <select className="form-control" id="exampleFormControlSelect1"><option value="English" selected>English &nbsp;</option> <option value="Finnish">Finnish</option></select>
                                            : <select className="form-control" id="exampleFormControlSelect1"><option value="English">Englanti</option> <option value="Finnish" selected>Suomi</option></select>
                                        }
                                </div>
                            </form>
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

export default withCookies(TopNav)