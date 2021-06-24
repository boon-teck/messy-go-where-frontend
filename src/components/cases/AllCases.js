import React, {useState} from 'react'
import ClosedCases from './ClosedCases';
import PendingCases from './PendingCases';
import OpenCases from "./OpenCases";
import {NavLink} from 'react-router-dom';
import {Row} from "react-bootstrap";

function AllCases({user, pending, resolved}) {

    return (
        <div>
            <div>
                {(user && user.userType === "Staff") ?
                        <>
                            <OpenCases/>
                            <br/>
                        </>
                    : ""}
            </div>
            <div>
                <PendingCases pending={pending}/>
            </div>
            <br/>
            <div>
                <ClosedCases resolved={resolved}/>
            </div>
        </div>
    )
}

export default AllCases
