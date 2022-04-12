import React, { useState } from 'react';

const UseStateTutorial = () => {
    // let counter = 0;
    const  [counter, setCounter] = useState(0);
    const  [inputValue, setInputValue] = useState("Deo");

    const increment = () => {
        setCounter(counter + 1)
        // counter = counter + 1;
        // console.log(counter);
    };

    let handleInput = (event) => {
        // grab the value
        const newValue = event.target.value;
        // inputValue = newValue;
        setInputValue(newValue)
    }

    return (
    <div>
         <h2>UseState Hook Function </h2>
       <h1> { counter }</h1>
        <button onClick={increment}>Increment</button>
        <hr />
        <input text="text" placeholder='Enter some text'  onChange={handleInput}/>
        <h2>{inputValue}</h2>
        </div>
    );
};

export default UseStateTutorial;