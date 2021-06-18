import React from 'react'

function ClosedCases() {
    return (
        <div>
            <div>
                This will show all closed cases.
            </div>
            <div>
                {/* An example for showing multiple pending cases and only the images.
                    {PendingCases.map(el=>(
                    {el.img}
                    <Button to="/case/:id">View case: {`el.id(case.id) can be here.`}</Button>
                ))} */}
            </div>
        </div>
    )
}

export default ClosedCases
