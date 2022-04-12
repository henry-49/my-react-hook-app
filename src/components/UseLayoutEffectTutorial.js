import React, { useLayoutEffect, useEffect, useRef} from 'react';

const UseLayoutEffectTutorial = () => {
  const inputRef = useRef(null);

  //  useLayoutEffect is use to render content on the template
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "Hello";
  }, [])

    return (
    <div>
         <h2>UseLayoutEffect Hook Function</h2>
         <h1>Henry</h1>
         <input value="Henry" style={{width: 400, height: 100}} placeholder='Ex...' ref={inputRef} />
        <button >Change Name</button>
    </div>
    );
};

export default UseLayoutEffectTutorial;