import { useState } from 'react';
import { Router } from './routes/Router';
import { MyContext } from "./context/MyContext";
import { BrowserRouter } from 'react-router-dom';

export function App() {

  const [auth, setAut] = useState(false)
  const [user, setUser] = useState(false)
  const [pass, setPass] = useState(false)

  return (
    <>
    <MyContext.Provider value={{auth, setAut, user, setUser, pass, setPass}}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      </MyContext.Provider>
    </>
  );
}
