import React, { Component } from 'react';

import googleImage from './anfahrt/anfahrt.jpg'
class Anfahrt extends Component {

    render() {
        return (
            <div align="center">
                <a href="https://maps.google.de/maps?q=artifex+osnabr%C3%BCck&hl=de&ie=UTF8&ll=52.267251,8.048902&spn=0.01065,0.01929&sll=51.175806,10.454119&sspn=11.178782,19.753418&t=h&hq=artifex&hnear=Osnabr%C3%BCck,+Niedersachsen&cid=4514560862476280276&z=16&iwloc=A"
								rel="noopener noreferrer"
								target="_blank"
								title="Anfahrt">
                                <div className="innershadow">
                                    <img src={googleImage} alt="anfahrt" border="0" />
                                </div>
							</a>
                <h3><u>Royal Beauty Parlor</u></h3>
                <p align="center">
                    We will love to see you some day, here is our full address.
                </p>
            </div>
        )
    }
}

export default Anfahrt