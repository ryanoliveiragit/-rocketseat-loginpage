import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { MyContext } from '../context/MyContext';
import { Home } from '../pages/Home/index'
import { Logado } from '../pages/logado'
import { PrivateRoute } from './privateRoute';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Logado" element={
        <PrivateRoute>
          <Logado/>
        </PrivateRoute>
      } />
    </Routes>
  );
}
