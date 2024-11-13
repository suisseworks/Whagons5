import ReactDOM from 'react-dom/client';
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider, useAuth } from './context/AuthContext/AuthProvider';
import ProtectedRoute from './components/AuthComponent/ProtectedRoute';

import Welcome from './pages/welcome/Welcome';
import HelloWorld from './pages/helloworld/HelloWorld';
import LoginPage from './pages/login/LoginPage';

const App = () => {

  const { isAuthenticated } = useAuth();

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route path="/" element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/welcome" element={<HelloWorld />} />
          </Route>

        </Routes>
      </Router>
    </AuthProvider>
  );
};

const rootElement = document.getElementById('app');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
