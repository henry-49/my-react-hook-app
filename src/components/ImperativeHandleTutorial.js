import React, { useRef} from 'react';
import Button from './Button';

 //  ImperativeHandle Hook allows us to define functions based on a ref that can be called by using that ref
const ImperativeHandleTutorial = () => {
// want to regference Button Component
  const buttonRef = useRef(null);

 
    return (
    <div>
         <h2>ImperativeHandleTutorial Hook Function</h2>
         <h1>Henry</h1>
         <button onClick={() => { 
           buttonRef.current.alterToggle() 
          }}
         >Button From Parent</button>
         <Button ref={buttonRef}/>
    </div>
    );
};

export default ImperativeHandleTutorial;