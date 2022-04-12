import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UseEffectTutorial = () => {
    const [data, setData] = useState("");
    const  [counter, setCounter] = useState(0);

  // useEffect Hook is called when ever a page rerender
  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                setData(response.data[0].email);
                console.log("API WAS CALLED")
            });
            
  }, []);

    return (
    <div>
         <h2>UseEffect Hook Function For API Calls</h2>
         <p>{ data}</p>
         <p>{ counter}</p>
        <button onClick={() => { setCounter(counter + 1)} }>Click Me</button>
    </div>
    );
};

export default UseEffectTutorial;