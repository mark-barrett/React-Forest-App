import React, { Component } from 'react'

class Contact extends Component {
    render () {
        return (
            <div class="container">
                <div class="form-group row">
                    <label class="col-sm-1 col-form-label">Address</label>
                    <input class="col-sm-4" name="inputEmail" id="inputEmail" placeholder="email@example.com"></input>
                </div>
                <div class="form-group row">
                    <label class="col-sm-1 col-form-label">Subject</label>
                    <input class="col-sm-3" name="inputSubject" id="inputSubject"></input>
                </div>
                <div class="form-group row">
                    <label class="col-sm-1 col-form-label">Text</label>
                    <textarea class="col-sm-5" name="inputText" id="inputText" rows="6"></textarea>
                </div>
                <button id="button2" class="btn btn-second" onClick={sendEmail}>Send</button>
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