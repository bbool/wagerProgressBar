import React, { Component } from 'react';

export default class CasinoLogo extends Component {
    render() {
        return(
            <div name="casinoLogo" className="flex justify-center items-center">
                <a href="#" onClick={this.highlightCasino.bind(this)}>
                    <img src={process.env.PUBLIC_URL + "/images/casinos/" + this.props.name + "." + this.props.extension} className="casino-logo" alt="logo" />
                </a>
            </div>
        )
    }

    highlightCasino(e) {
        var casinoLogos = document.getElementsByName("casinoLogo");
        for (let i = 0; i < casinoLogos.length; i++) {
            casinoLogos[i].classList.remove("logo-selected")
        }
        e.target.parentNode.classList.add("logo-selected");
    }
}