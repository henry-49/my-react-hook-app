import React, { useReducer } from 'react';

const UseReducerTutorial = () => {
    // let counter = 0;
    // const  [counter, setCounter] = useState(0);
    // const  [showText, setText] = useState(true);

    // standard for very time reuder hook is used in react
    // takes two values ( state, action)
    const reducer = (state, action) => {
        switch(action.type){
            case "INCREMENT":
             return {counter: state.counter + 1, showText: state.showText};
             case "toggleShowText":
                return {counter: state.counter, showText: !state.showText}; 
            default:
                return state;
        }
    }
        // states(counter, showText),
        // dispatch() is use to change the value of our state and also called when ever changes occour in our state
        // reducer()
        // {} takes the inisitial value for all the states in the reducer 
    const [state, dispatch] = useReducer(reducer, {counter: 0, showText: true})

    return (
    <div>
        <h2>UseReducer Hook Function </h2>
       <h1> { state.counter }</h1>
        <hr />
        <button onClick={() => {
            dispatch({ type: "INCREMENT"});
            dispatch({ type: "toggleShowText"});
            }}>
                Toggle Text
            </button>
            { state.showText && <p>This is a text</p>}
        <hr />
        </div>
    );
};

export default UseReducerTutorial;