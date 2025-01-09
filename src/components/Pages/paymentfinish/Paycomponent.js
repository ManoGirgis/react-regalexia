import React, { Component } from 'react'

export default class Paycomponent extends Component {
    render() {
        return (
            <div>
                <h1>Redsys Payment Integration</h1>
                <iframe
                    //src={`${process.env.PUBLIC_URL}/Payment.html`}
                    title="Redsys Payment Form"
                    style={{ width: "100%", height: "600px", border: "none" }}
                />
            </div>
        )
    }
}
