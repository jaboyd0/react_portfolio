import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="GW Coding Bootcamp" where="George Washington University" from="January 2020" to="Present"/>
            <Widecard title="BS in Finance" where="Virginia Commonwealth University" from="2013" to="2017"/>
            </div>
            )
        }
    }
    
export default Education
    