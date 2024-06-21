import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Account from './components/account/account';
import Main from './components/main/main';
import CrudPublicacao from './components/admin/CrudPublicacao';
import Login from './components/login/login';
import Register from './components/register/register';
import Contact from './components/contact/contato';
import About from './components/about/sobre';
import Payment from './components/payment/payment';
import { AdminRoute } from './contexts/AdminRoute';
import { AuthProvider } from './contexts/AuthContext'; // Importe o AuthProvider
import { PrivateRoute } from './contexts/PrivateRoute'; // Importe a rota privada

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/admin" element={<AdminRoute><CrudPublicacao /></AdminRoute>} />
          <Route path="/perfil" element={<PrivateRoute><Account /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/pagamento/:id" element={<PrivateRoute><Payment /></PrivateRoute>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
