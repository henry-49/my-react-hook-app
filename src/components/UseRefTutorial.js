import React, { useRef } from 'react';
import axios from 'axios';

const UseRefTutorial = () => {
  // useRef is an easy way to manupulate DOM elements
  const inputRef = useRef(null);

  const onClick = () => {
      // set focus and clear input
      inputRef.current.focus();
    //   inputRef.current.value = "";
      console.log(inputRef.current.value);
  }


    return (
    <div>
         <h2>UseRef Hook Function</h2>
         <h1>Henry</h1>
         <input type="text" placeholder='Ex...' ref={inputRef} />
        <button onClick={onClick}>Change Name</button>
    </div>
    );
};

export default UseRefTutorial;