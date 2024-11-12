import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Welcome from './pages/welcome/Welcome';
import HelloWorld from './pages/helloworld/HelloWorld';
import LoginPage from './pages/login/LoginPage';

const App = () => {

  function LoginRoute({ children }) {
    const isAuthenticated = localStorage.getItem('authToken'); // Revisa si hay un token guardado

    return isAuthenticated ? <Navigate to="/welcome" /> : children;
  }


  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginRoute><LoginPage /></LoginRoute>} />
        <Route path="/hello" element={<HelloWorld />} />
        <Route path="/welcome" element={<HelloWorld />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

const rootElement = document.getElementById('app');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
