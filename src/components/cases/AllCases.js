import React, {useState} from 'react'
import ClosedCases from './ClosedCases';
import PendingCases from './PendingCases';
import {NavLink} from 'react-router-dom';

function AllCases({user, pending, resolved}) {
    //temp case state, can edit anytime.


    return (
        <div>
            <div>
                <div className="btn">
                    <NavLink to="/cases/pending">Show all<br/>pending cases</NavLink>
                </div>
                {/*
                    Code to be written to show only a fixed number
                    Do take note, component is only here to show an example of what can be seen.
                    Grid cards can be used. Link is included and in Home.js component.
                */}
                <PendingCases pending={pending}/>
                {/** KIV --> caseStatus={caseStatus} setCaseStatus={setCaseStatus} */}
            </div>
            <div>
                <div className="btn">
                    <NavLink to="/cases/closed">Show all<br/>closed cases</NavLink>
                </div>
                {/*
                    Code to be written to show only a fixed number
                    Do take note, component is only here to show an example of what can be seen.
                    Grid cards can be used. Link is included and in Home.js component.
                */}
                <ClosedCases/>
                {/** KIV --> caseStatus={caseStatus} setCaseStatus={setCaseStatus} */}
            </div>
        </div>
    )
}

export default AllCases
