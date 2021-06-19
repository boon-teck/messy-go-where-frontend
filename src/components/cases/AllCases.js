import React from 'react'
import ClosedCases from './ClosedCases';
import PendingCases from './PendingCases';
import { Button } from 'react-bootstrap';

function AllCases() {
    //temp case state, can edit anytime.
 
    return (
        <div>
            <div>This shows all cases</div>
            <div>
                <Button to="/cases/pending">Show all<br/>pending cases</Button>
                {/* Code to be written to show only a fixed number */}
                <PendingCases />
                {/** KIV --> caseStatus={caseStatus} setCaseStatus={setCaseStatus} */}
            </div>
            <div>
                <Button to="/cases/closed">Show all<br/>closed cases</Button>
                {/* Code to be written to show only a fixed number */}
                <ClosedCases /> 
                {/** KIV --> caseStatus={caseStatus} setCaseStatus={setCaseStatus} */}
            </div>
        </div>
    )
}

export default AllCases
