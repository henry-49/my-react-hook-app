import React, { useState, createContext } from 'react';
import Login from './Login';
import User from './User';

// Context API allows you to manage your state very easily
// In Context API props is not needed
// A Context is a collection of states 
export const AppContext = createContext(null);


function ContextTutorial(props) {
    const [username, setUsername] = useState("");

    return (
        <AppContext.Provider value={{username, setUsername}}>
             <h2>Context Hook Function </h2>
             <Login /> <User />
            {/* <Login setUsername={setUsername}/> */}
            {/* <User username={username}/> */}
        </AppContext.Provider>
    );
}

export default ContextTutorial;