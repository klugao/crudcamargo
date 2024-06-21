import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header'
import { RegisterContainer, RegisterForm, Input, RegisterButton } from './style'; // Verifique o caminho

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/')
    } catch (error) {
      console.error('Erro ao fazer registro:', error);
      alert('Erro ao fazer registro: ' + error.message);
    }
  };

  return (
    <RegisterContainer>
      <RegisterForm onSubmit={handleRegister}>
        <h2>Registrar</h2>
        <Input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email"
          required 
        />
        <Input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Senha"
          required 
        />
        <RegisterButton type="submit">Registrar</RegisterButton>
      </RegisterForm>
    </RegisterContainer>
  );
}

export default Register;
