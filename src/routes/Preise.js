import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app


import schaukasten from './preise/Schaukasten.jpg'

class Preise extends Component {
    constructor(props){
        super(props)
        this.state ={
            isOpen: false
        }
    }
    render() {
        const { isOpen } = this.state;

        return (
            <div id="preise" align="center">
                <table cellSpacing="0" rules="none" border="0">
                <tbody>
                <tr>
                    <td align="left">
                        <table cellSpacing="0" rules="none" border="0">
                        <tbody>
                            <tr>
                                <td colSpan="2">
                                    <h2 className="hbody">...Our Service</h2>
                                </td>
                            </tr>
                        </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <button className="innershadow" onClick={() => this.setState({ isOpen: true })}>
                            <img src={schaukasten} style={{width: 500}} alt="Preisaushang"/>
                        </button>
                        { isOpen && (
                            <Lightbox mainSrc={schaukasten}
                                onCloseRequest={() => this.setState({ isOpen: false })}/>
                        )}
                        
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <h2 className="hbody">...More Info</h2>
                    </td>
                </tr>
                </tbody>
                </table>
                <p align="justify">
                    <b>
                    We are proudly serving in Glendale Area. Our salon provides a services that
                    include manicures, pedicures, nails and facials.
                    </b>
                </p>
            </div>
        )
    }
}

export default Preise