import { useState } from 'react';
import { Router } from './Router';
import { Form } from './pages/authUser';
import { BrowserRouter } from 'react-router-dom';

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Router isAuthenticated={isAuthenticated} />
        <Form setIsAuthenticated={setIsAuthenticated} onGoToRegisterClick={undefined} />
      </BrowserRouter>
    </>
  );
}
