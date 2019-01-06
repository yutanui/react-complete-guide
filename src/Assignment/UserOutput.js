import React from 'react';
import './UserOutput.css';

const userOutput = (props) => 
{
    return (
        <div className="UserOutput">
           <p>I'm {props.userName} </p>
        </div>
    )

};

export default userOutput;