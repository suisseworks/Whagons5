import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/welcome/Welcome';
import HelloWorld from './pages/helloworld/HelloWorld';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/hello" element={<HelloWorld/>} />
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
