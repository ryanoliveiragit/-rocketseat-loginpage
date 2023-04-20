import { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Axios from 'axios';
import { MyContext } from '../context/MyContext';

export function PrivateRoute({ children }: any) {
  const [auth, setAuth] = useState(false);
  const { user, pass }: any = useContext(MyContext);

  useEffect(() => {
    Axios.post('http://localhost:3001/login', {
      email: user,
      password: pass,
    })
      .then((response) => {
        if (response.status === 200 && response.data.msg === 'Usuário logado com sucesso!') {
          setAuth(true);
        } else {
          setAuth(false);
        }
      })
      .catch((error) => {
        alert('Erro ao efetuar login');
      });
  }, [user.email, pass.password]);

  console.log(auth)

  return auth ? children : <Navigate to="/" />;
}