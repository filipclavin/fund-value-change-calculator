import { createContext, useState } from 'react';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import SignUp from './components/SignUp';

export const Context = createContext()

function App() {
  const [user, setUser] = useState()

  return (
    <Context.Provider value={{
      user, setUser
    }}>
      {user && user.auth ?
        <SignOut />
        :
        <>
          <p>Sign in:</p>
          <br />
          <SignIn />
          <br />
          <br />
          <p>Or sign up:</p>
          <br />
          <SignUp />
        </>
      }
    </Context.Provider>
  );
}

export default App;
