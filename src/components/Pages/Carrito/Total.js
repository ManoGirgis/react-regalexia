import React, { Component } from 'react'

class Total extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        let Tax = this.props.subtotal * (21 / 100);
        return (
            <div className='Total-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Total: </th>
                            <th>{(this.props.subtotal - Tax).toFixed(2)}</th>
                        </tr>
                        <tr>
                            <th>Tax: </th>
                            <th>{Tax.toFixed(2)}</th>
                        </tr>
                        <tr>
                            <th><hr /></th>
                            <th><hr /></th>
                        </tr>
                        <tr>
                            <th>SubTotal: </th>
                            <th>{(this.props.subtotal).toFixed(2)}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Total
