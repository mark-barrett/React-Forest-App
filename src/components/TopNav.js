import React, { Component } from 'react'
import language from '../Language';
import Contact from '../components/Contact';
import { CookiesProvider } from 'react-cookie';
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
                                            <h5 class="modal-title" id="exampleModalLabel">Help</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <p>This is quick help information regarding how this application operates. It gives a quick tutorial on how to select and display data.
                                                <br/><br/>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h5>Selecting a Region Level</h5>
                                                        <p>A region level can be selected on the left hand side of the app which. Choosing this will then prompt the next option to pop up</p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <img src={firstImage} width="100%" />
                                                    </div>
                                                </div>
                                                <br/>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h5>Selecting a Scenario</h5>
                                                        <p>After selecting a region, you can then select a scenario collection and then select multiple scenarios. Each scenario will be displayed as a seperate graph, whilst all scenarios will be in one table.</p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <img src={secondImage} width="100%" />
                                                    </div>
                                                </div>
                                                <br/>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h5>Time Period</h5>
                                                        <p>After selecting your desired scenarios you can then pick your time period. The application will then display the number of empty graphs based on your scenario collection. Once indicators are picked the graphs will populate.</p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <img src={thirdImage} width="100%" />
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h5>Indicators and Graphs</h5>
                                                        <p>Once indicators are chosen on the right hand side, the graph will be populated with data. The grahs are dynamic meaning that you can add and remove indicators and these changes will reflect on the graphs instantly.</p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <img src={fourthImage} width="100%" />
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h5>Tables</h5>
                                                        <p>The information can also be displayed in table form. It gives a break down of the same information, with each indicator being listed as a new row, with each scenarios values displayed in relevant columns.</p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <img src={fifthImage} width="100%" />
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h5>Save Information</h5>
                                                        <p>Each graph and the table can all be saved to a PDF. These PDF's are then downloaded to your computer for future use.</p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <img src={sixthImage} width="100%" />
                                                    </div>
                                                </div>
                                            </p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="modal fade" id="mailModal" tabindex="-1" role="dialog" aria-labelledby="infoModal" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Contact</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <Contact language={this.props.language}/>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            &nbsp;
                            <form className="form-inline my-2 my-lg-0" onChange={this.props.changeLanguage}>
                                <div className="form-group">
                                        {language === "English"
                                            ? <select className="form-control" id="exampleFormControlSelect1"><option value="English" selected>English</option> <option value="Finnish">Finnish</option></select>
                                            : <select className="form-control" id="exampleFormControlSelect1"><option value="English">English</option> <option value="Finnish" selected>Finnish</option></select>
                                        }
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

export default withCookies(TopNav)