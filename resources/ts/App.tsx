import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext/AuthContext';
import ProtectedRoute from './components/AuthComponent/ProtectedRoute';

import Welcome from './pages/welcome/Welcome';
import HelloWorld from './pages/helloworld/HelloWorld';
import LoginPage from './pages/login/LoginPage';

const App = () => {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>

          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<HelloWorld />} exact />
            <Route path="/welcome" element={<HelloWorld />} exact />
          </Route>
          <Route path="/login" element={<LoginPage />} />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById('app');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
