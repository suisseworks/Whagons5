import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/welcome/Welcome';
import HelloWorld from './pages/helloworld/HelloWorld';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import SettingsDashboard from './pages/settings/appSettings/Settings';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={ <Login/>} />
        <Route path="/hello" element={<HelloWorld/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/settings" element={<SettingsDashboard/>} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
};

const rootElement = document.getElementById('app');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
