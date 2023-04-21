import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home/index'
import { PrimaryPage } from '../pages/primaryPage/primaryPage'
import { PrivateRoute } from './privateRoute';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<PrivateRoute> <PrimaryPage /> </PrivateRoute>} />
    </Routes>
  );
}
