import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';

// Memo Hook is Advance
// Is use to improve performance be able to decrease latency on huge computations(an algorithm)
// that you make throughout your application
function MemoTutorial() {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
             .then(response => {
                 setData(response.data)
             });
    }, []);

    // algorithm to find the logest name in the comments
    const findLongestName = (comments) => {
        // base case
        if(!comments) return null;
  
    let longestName = "";
    for(let i = 0; i < comments.length; i++){
        let currentName = comments[i].name;
        if(currentName.length > longestName.length){
            longestName = currentName;
        }
    }
    console.log("THAT WAS COMUPUTED");
    return longestName; 
};

    //TODO: check out useMemo Hook 
    // run only when our dependecy array chnages
    // recompute only when data changes
    // stores a value and not a function like Callback Hook
    const getLongestName = useMemo(() => findLongestName(data), [data]);

    return (
        <div>
             <h2>UseMemo Hook Function </h2>

            <p>{ getLongestName }</p>
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

export default MemoTutorial;