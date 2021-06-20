import React from 'react'
import ClosedCases from './ClosedCases';
import PendingCases from './PendingCases';
import { NavLink } from 'react-router-dom';

function AllCases() {
    //temp case state, can edit anytime.
 
    return (
        <div>
            <div>This shows both pending and closed cases</div>
            <div>
                <div className="btn">    
                    <NavLink to="/cases/pending">Show all<br/>pending cases</NavLink>
                </div>
                {/* 
                    Code to be written to show only a fixed number 
                    Do take note, component is only here to show an example of what can be seen.
                */}
                <PendingCases />
                {/** KIV --> caseStatus={caseStatus} setCaseStatus={setCaseStatus} */}
            </div>
            <div>
                <div className="btn" >
                    <NavLink to="/cases/closed">Show all<br/>closed cases</NavLink>
                </div>
                {/* 
                    Code to be written to show only a fixed number
                    Do take note, component is only here to show an example of what can be seen.
                */}
                <ClosedCases /> 
                {/** KIV --> caseStatus={caseStatus} setCaseStatus={setCaseStatus} */}
            </div>
        </div>
    )
}

export default AllCases
