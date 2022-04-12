import React, { useContext } from 'react';
import { AppContext } from './ContextTutorial';

// { setUsername }
function Login() {
    const {setUsername} = useContext(AppContext);

    return (
        <div>
            <h1>Login</h1>
            <input onChange={(event) => {
                setUsername(event.target.value);
            }} />
        </div>
    );
}

export default Login;