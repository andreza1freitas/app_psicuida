import { useSelector, useDispatch, Provider } from 'react-redux';
import { store } from './redux/store';
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import AuthRedirect from './components/AuthRedirect';
import { login, logout } from './redux/userSlice';
import Logout from './pages/Logout';
import Dashboard from './pages/Dashboard';
import Menu from './pages/Menu';
import Ansioso from './pages/Ansioso';
import Insone from './pages/Insone';
import Triste from './pages/Triste';
import Estressado from './pages/Estressado';
import Inseguro from './pages/Inseguro';
import Culpado from './pages/Culpado';
import Desatento from './pages/Desatento';
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Rotas Públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/cadastro" element={<Cadastro />} />

          {/* Rotas Privadas */}
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/logout" element={<LogoutComponent />} />
          </Route>

          {/* Outras Rotas */}
          <Route path="/ansioso" element={<Ansioso />} />
          <Route path="/insone" element={<Insone />} />
          <Route path="/triste" element={<Triste />} />
          <Route path="/estressado" element={<Estressado />} />
          <Route path="/inseguro" element={<Inseguro />} />
          <Route path="/culpado" element={<Culpado />} />
          <Route path="/desatento" element={<Desatento />} />

          {/* Redirecionamento de Rotas Desconhecidas */}
          <Route path="*" element={<AuthRedirect />} />
        </Routes>
      </Router>
    </Provider>
  );
}

function LoginComponent() {
  const dispatch = useDispatch();

  const handleLogin = (userData) => {
    dispatch(login(userData));
  };

  return <Login onLogin={handleLogin} />;
}

function LogoutComponent() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return <Logout onLogout={handleLogout} />;
}


function PrivateRoutes() {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <LayoutWithMenu>
      <Outlet />
    </LayoutWithMenu>
  );
}

function LayoutWithMenu() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Menu onLogout={handleLogout} />
      <Outlet />
    </>
  );
}


export default App;
