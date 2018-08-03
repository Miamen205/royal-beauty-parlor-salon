import React, { Component } from 'react';

import buchungIcon from './onlinebuchung/sh.png'

class Onlinebuchung extends Component {

    render() {
        return (
            <div align="center">
                <p align="center">
                To view availability for some of our popular services please use our online appointment system.
                 If you do not see a service or service provider please give the salon a call.
                 To book same day appointments please call us at .
                    <br/>
                </p>
                <a className="lbody" href="https://calendly.com/royalbeautyparlorsalon/640min" rel="noopener noreferrer" target="_blank">
                    <p align="center">
                        Schedule Appoinment
                        <br/>
                        <img src={buchungIcon} border="0" alt="Zur Onlinebuchung" title="Zur Onlinebuchung"/>
                        <br/>
                        With Royal Beauty Parlor
                    </p>
                </a>
                <br/>
                <p>
               Our Artists transform your hair, face and body with every touch. Their artistry comes in many forms: colorists paint infinite shades,
                stylists sculpt with scissors, makeup masters brush on nature's colors.
                </p>
            </div>
        )
    }
}

export default Onlinebuchung