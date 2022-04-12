import React, { useEffect } from 'react';


function Child({ returnComment }) {
    useEffect(() => {
        console.log("CHILD FUNCTION WAS CALLED");
        // called every time there is a change to our reutrnComment function parsed in our props
    }, [returnComment])
    return (
        <div>
         {/* Callback Hook Stores a Function */}
            <p>{ returnComment("Henry") }</p>
        </div>
    );
}

export default Child;