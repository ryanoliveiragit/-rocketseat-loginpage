import { Navigate } from 'react-router-dom';

export function PrivateRoute({ children }: any) {
  const isAuth = localStorage.getItem('auth') === 'true';

  return isAuth ? children : <Navigate to="/" />;
}