import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Member extends Component {
    componentWillMount(){
        this.componentWillReceiveProps(this.props)
    }
    componentWillReceiveProps(newProps){
        let current = null
        current = newProps.members.find((member) => member.name.toLowerCase() === newProps.match.params.member)
        const state = {
            current: current,
            members: newProps.members.filter(member => member.name.toLowerCase() !== newProps.match.params.member)
        }
        this.setState(state)
    }
    render() {
        if(!this.state) return ''
        return (
            <div align="justify">
                <div style={{paddingRight: 15, display: 'table'}} className="teampics clearfix ">
                    <div className="innershadow main" style={{float:'left'}}>
                        <img src={this.state.current.image} alt={this.state.current.name} border="0"/>
                    </div>
                    
                    {this.state.members.map((member, i) => (
                        <Link to={`${this.props.match.path.replace(':member',member.name.toLowerCase())}`} className="innershadow side" style={{float: 'right'}} key={i}>
                           <img className="grey" src={member.image} alt={member.name} border="0"/>
                        </Link>
                    ))}
                </div>
            
                <h3>{this.state.current && this.state.current.name}</h3>
                {this.state.current.hint && (
                    <div align="center" className="hint"><hr/>{this.state.current.hint} <hr/></div>
                )}
                <p align="justify">
                    {this.state.current && this.state.current.text}
                </p>
            </div>
        )
    }
}

export default Member