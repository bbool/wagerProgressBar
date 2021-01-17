import React, { Component } from 'react';

export default class CasinoLogo extends Component {
    render() {
        return(
            <a href="#">
                <img src={process.env.PUBLIC_URL + '/images/casinos/' + this.props.name + '.' + this.props.extension} className="casino-logo" alt="logo" />
            </a>
        )
    }
}