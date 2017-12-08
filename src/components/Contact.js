import React, { Component } from 'react'
import language from '../Language';

class Contact extends Component {
    render () {
        return (
            <div className="container">
                <div className="form-group row">
                    <label className="col-sm-1 col-form-label">{this.props.language.emailAddress}</label>
                    <input className="col-sm-4" name="inputEmail" id="inputEmail" placeholder="email@example.com"></input>
                </div>
                <div className="form-group row">
                    <label className="col-sm-1 col-form-label">{this.props.language.emailSubject}</label>
                    <input className="col-sm-3" name="inputSubject" id="inputSubject"></input>
                </div>
                <div className="form-group row">
                    <label className="col-sm-1 col-form-label">{this.props.language.emailBody}</label>
                    <textarea className="col-sm-5" name="inputText" id="inputText" rows="6"></textarea>
                </div>
                <button id="button2" className="btn btn-second" onClick={sendEmail}>{this.props.language.send}</button>
            </div>                
        )
    }
}

function sendEmail(){
    var email = document.getElementById('inputEmail').value;
    var emailSubject = document.getElementById("inputSubject").value;
    var emailBody = document.getElementById('inputText').value;
    window.location.href = "mailto:"+email+"?subject="+emailSubject+"&body="+encodeURIComponent(emailBody);    
}

export default Contact