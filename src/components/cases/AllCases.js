import React, {useState} from 'react'
import ClosedCases from './ClosedCases';
import PendingCases from './PendingCases';
import OpenCases from "./OpenCases";
import {NavLink} from 'react-router-dom';

function AllCases({user, pending, resolved}) {
    //temp case state, can edit anytime.


    return (
        <div>
            <div>
                {(user && user.userType==="Staff") ?
                    <div>
                        <div className="btn">
                            <NavLink to="">Show all<br/>Open cases</NavLink>
                        </div>

                        <OpenCases />
                        {/** KIV --> caseStatus={caseStatus} setCaseStatus={setCaseStatus} */}
                    </div>
                    : ""}


                <div className="btn">
                    <NavLink to="/cases/pending">Show all<br/>pending cases</NavLink>
                </div>

                <PendingCases pending={pending}/>
                {/** KIV --> caseStatus={caseStatus} setCaseStatus={setCaseStatus} */}
            </div>
            <div>
                <div className="btn">
                    <NavLink to="/cases/closed">Show all<br/>closed cases</NavLink>
                </div>

                <ClosedCases resolved={resolved}/>
                {/** KIV --> caseStatus={caseStatus} setCaseStatus={setCaseStatus} */}
            </div>
        </div>
    )
}

export default AllCases
