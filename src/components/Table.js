import React, { Component } from 'react'
import jsPDF from 'jspdf';
import html2pdf from 'html2pdf.js'

class Table extends Component {

    constructor(props) {
        super(props);

        this.savePDF = this.savePDF.bind(this);
    }

    savePDF() {
        let pdf = new jsPDF();
        pdf.text(this.props.language.pdfText, 10, 10)
        let canvas = pdf.canvas;
        document.getElementById("credit").innerHTML = this.props.language.pdfText;
        html2pdf(document.getElementById("table"), pdf, function (pdf) {
            var iframe = document.getElementById("table");
            document.body.appendChild(iframe);
            iframe.src = pdf.output('datauristring');
            //var div = document.createElement('pre');
            //div.innerText=pdf.output();
            //document.body.appendChild(div);
        }
        );
        document.getElementById("credit").innerHTML = "";
    }

    render () {

        if(this.props.display === 'table') {
            console.log(this.props.data);

            if (this.props.data.length > 0 && this.props.data[0].indicators.length > 0) {
                return (
                    <div className="scroll-x">
                        <div id="table">
                        <div className="text-center" id="credit"></div>
                            <table className="table">
                                <thead className="thead bg-success text-white">
                                    <tr>
                                        <th>{this.props.language.indicators}</th>
                                        {
                                            this.props.data.map(element => {
                                                return (
                                                    <th scope="col">{element.scenarioName}</th>
                                                )
                                            })
                                        }
                                    </tr>
                                </thead>
                                <tbody className="text-dark">
                                    {
                                        this.props.data[0].indicators.map(item => {
                                            return (
                                                <tr>
                                                    <td>{item.name}</td>
                                                    {
                                                        this.props.data.map(element => {
                                                            return (
                                                                element.indicators.map(obj => {
                                                                    if (obj.id === item.id) {
                                                                        return (
                                                                            <td>{obj.sum}</td>
                                                                        )
                                                                    }
                                                                })
                                                            )
                                                        })
                                                    }
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            <br/>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-success" onClick={this.savePDF}><i className="fa fa-floppy-o" aria-hidden="true"></i>{this.props.language.savePDF}</button>
                        </div>
                        <br/>
                    </div>
                )
            }
            else {
                return (
                    <div>
                    </div>
                )
            }
        }
        else {
            return(
                <div>
                </div>
            )
        }
    }
}

export default Table