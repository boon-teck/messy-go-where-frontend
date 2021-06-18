import React from 'react'
import ClosedCases from './ClosedCases';
import PendingCases from './PendingCases';

function AllCases() {
    return (
        <div>
            <div>This shows all cases</div>
            <div>
                <Button to="/cases/pending">Show all<br/>pending cases</Button>
                {/* Code to be written to show only a fixed number */}
                <PendingCases />
            </div>
            <div>
                <Button to="/cases/closed">Show all<br/>closed cases</Button>
                {/* Code to be written to show only a fixed number */}
                <ClosedCases /> 
            </div>
        </div>
    )
}

export default AllCases
