import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase-config';
import Header from '../../components/header/header'
import { useNavigate } from 'react-router-dom';

import { LoginContainer, LoginForm, Input, LoginButton, Popup, Container } from './style';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in:', userCredential.user);
      setLoginSuccess(true);
      setLoginError('');
    } catch (error) {
      console.error('Error logging in:', error.message);
      setLoginSuccess(false);
      setLoginError(error.message);
    }
  };

  const closePopup = () => {
    setLoginSuccess(false);
    setLoginError('');
  };

  return (
    <Container>
      <Header></Header>
      <LoginContainer>
        <LoginForm onSubmit={handleLogin}>
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
            placeholder="Password"
            required
          />
          <LoginButton type="submit">Login</LoginButton>
        </LoginForm>
        {loginSuccess && (
          navigate('/')
          // <Popup>
          //   <p>Login realizado com sucesso!</p>
          //   <button onClick={closePopup}>Fechar</button>
          //   {/* Aqui você pode adicionar o conteúdo do popup de login bem-sucedido */}
          // </Popup>
        )}
        {loginError && (
          <Popup>
            <p>Usuário ou senha inválidos</p>
            <button onClick={closePopup}>Fechar</button>
            {/* Aqui você pode adicionar o conteúdo do popup de login falhado */}
          </Popup>
        )}
      </LoginContainer>
    </Container>
  );
}

export default Login;
