import React, { forwardRef,useImperativeHandle,useState } from 'react';

// forwardRef allows us to transform a functional component and allow it to accept a reference from parent
const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

// ImperativeHandle Hook allows us to define functions based on a ref that can be called by using that ref
   useImperativeHandle(ref, () => ({
    alterToggle(){
      setToggle(!toggle)
     }
   }));

    return (
    <>
        <button>Button From Child</button>
        <p>{toggle && <span>Toggle</span>}</p>
    </>
    
    );
});

export default Button;