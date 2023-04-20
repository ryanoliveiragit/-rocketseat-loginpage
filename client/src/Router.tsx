import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home/index'
import { Logado } from './pages/logado'

export function Router({ isAuthenticated }: { isAuthenticated: boolean }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/logado"
        element={
          isAuthenticated ? (
            <Logado />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
    </Routes>
  );
}