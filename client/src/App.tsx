import { useState } from 'react';
import { Router } from './routes/Router';
import { BrowserRouter } from 'react-router-dom';

export function App() {

  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}
