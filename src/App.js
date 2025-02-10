import { useSelector, useDispatch, Provider } from 'react-redux';
import { store } from './redux/store';
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import AuthRedirect from './components/AuthRedirect';
import { login } from './redux/userSlice';
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
          </Route>

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


function PrivateRoutes() {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

}


export default App;
