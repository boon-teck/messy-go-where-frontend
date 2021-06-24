import React, {useEffect, useState} from 'react';
import Rating from '@material-ui/lab/Rating';

function ShowRating({issue}) {



    return (
        <div>
            <p>Rating by User</p>
            <Rating name="read-only" value={issue.rating} size="large" readOnly />
        </div>
    );
}

export default ShowRating;








