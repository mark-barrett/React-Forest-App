import React, { Component } from 'react'
import language from '../Language'

class Contact extends Component {
    render () {
        return (
            <div className="container">
                    <div className="form-group">
                        <label for="email">{this.props.language.emailAddress}</label>
                        <input className="form-control" name="inputEmail" id="inputEmail" placeholder="email@example.com"/>
                    </div>
                    <div className="form-group">
                        <label for="subject">{this.props.language.emailSubject}</label>
                        <input className="form-control" name="inputSubject" id="inputSubject"/>
                    </div>
                    <div className="form-group">
                        <label for="body">{this.props.language.emailBody}</label>
                        <textarea className="form-control" name="inputText" id="inputText" rows="6"></textarea>
                    </div>
                <button id="button2" className="btn btn-success btn-block" onClick={sendEmail}>{this.props.language.send}</button>
            </div>                
        )
    }
}

function sendEmail(){
    // Email address, subject & text are put into variables, which are put together in mailto
    var email = document.getElementById('inputEmail').value;
    var emailSubject = document.getElementById("inputSubject").value;
    var emailBody = document.getElementById('inputText').value;
    window.location.href = "mailto:"+email+"?subject="+emailSubject+"&body="+encodeURIComponent(emailBody);    
}

export default Contact