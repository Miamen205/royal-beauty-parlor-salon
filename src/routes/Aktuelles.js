import React, { Component } from 'react';
import FacebookProvider, { Page } from 'react-facebook';

class Aktuelles extends Component {

    render() {
        return (
            <div align="center">
            { 
                (<FacebookProvider appId="2120104824903778">
                    <Page href="https://www.facebook.com/Royal-Beauty-Parlor-2200045870215097/?modal=admin_todo_tour"  width={500} height={800} tabs="timeline" />
                </FacebookProvider>)
            }
            </div>
        )
    }
}

export default Aktuelles