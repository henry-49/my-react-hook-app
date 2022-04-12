import React, { useEffect, useState, useMemo, useCallback } from 'react';
import axios from 'axios';
import Child from './Child';

// Memo Hook is Advance
// Is use to improve performance be able to decrease latency on huge computations(an algorithm)
// that you make throughout your application
function CallbackTutorial() {
    const [data, setData] = useState("Yo, please subcribe to the channel");
    const [toggle, setToggle] = useState(false);

    // Also work like useMemo() Hook only return value: use to access value
    // useCallback Hook return function : use to access a function
    const returnComment = useCallback( (name) => {
        // useful for returning API calls
        return data + name;
    }, [data]);

    return (
        <div className='App'>
             <h2>UseCallback Hook Function </h2>
            <Child returnComment={returnComment}/>
            
            {/* <p>{ findLongestName(data) }</p> */}
            <button onClick={() => {
                setToggle(!toggle);
            }}>
               {" "} 
                Toggle
            </button>
            {toggle && <h1> toggle </h1>}
        </div>
    );
}

export default CallbackTutorial;