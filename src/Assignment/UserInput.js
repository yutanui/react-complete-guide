import React from 'react';
import './UserInput.css';

const userInput = (props) => 
{
    return (
        <div className="UserInput">
            <input type="Text" value={props.userName} onChange={props.changed}></input>
        </div>
    )

};

export default userInput;