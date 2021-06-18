import React from 'react'
import ClosedCases from './ClosedCases';
import PendingCases from './PendingCases';

function AllCases() {
    return (
        <div>
            <div>This shows all cases</div>
            <div>
                <ClosedCases />
            </div>
            <div>
                <PendingCases />
            </div>
        </div>
    )
}

export default AllCases
