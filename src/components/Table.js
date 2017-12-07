import React, { Component } from 'react'

class Table extends Component {
    render () {

        if(this.props.display === 'table') {
            console.log(this.props.data);

            if (this.props.data.length > 0 && this.props.data[0].indicators.length > 0) {
                return (
                    <div className="scroll-x">
                        <table className="table">
                            <thead className="thead bg-success text-white">
                                <tr>
                                    <th>Indicators</th>
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