import React, { Component } from 'react';

import Team from '../routes/team/TeamPhoto.png'

class Home extends Component {

    render() {
        return (
            <div align="center">
                <h3>Welcome to Royal Beauty Parlor Salon</h3>
                <div className="innershadow">
                    <img src={Team} alt="salon" border="0" title="Team Photo!" style= {{width :400}} />
                </div>
            <p>This is our team members: </p>
            <table>
                <tbody>
                     <tr>
                        <th style={{textAlign: 'left'}}>Suka:</th><td>Team Manager</td>
                    </tr>
                    <tr>
                        <th style={{textAlign: 'left'}}>Marina:</th><td>Hair Styler</td>
                    </tr>
                    <tr>
                        <th style={{textAlign: 'left'}}>Jestina:</th><td>Hair Styler</td>
                    </tr>
                    <tr>
                        <th style={{textAlign: 'left'}}>Ms.Asha:</th><td>Hair Styler</td>
                    </tr>
                    <tr>
                        <th style={{textAlign: 'left'}}>Eddie:</th><td>Developer</td>
                    </tr>
                </tbody>
            </table>
            <iframe width="0" height="0" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/198954150&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            </div>
        )
    }
}

export default Home