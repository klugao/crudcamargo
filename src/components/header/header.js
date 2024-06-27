import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase-config'; // Verifique se o caminho está correto
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { HeaderContainer, Nav, NavLink, LogoutButton, LogoLink } from './style'; // Verifique o caminho

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // Usuário está logado
        setUser(currentUser);
      } else {
        // Usuário não está logado
        setUser(null);
      }
    });

    // Desinscrever do listener quando o componente for desmontado
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <HeaderContainer>
      <LogoLink to="/">
        <h1>EasyTickets.com</h1>
      </LogoLink>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/contato">Contato</NavLink>
        <NavLink href="/sobre">Sobre</NavLink>
        <NavLink href="/register">Register</NavLink>
        {user ? (
          <>
            <NavLink href="/perfil">{user.displayName || "Perfil"}</NavLink>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </>
        ) : (
          <NavLink href="/login">Login</NavLink>
        )}
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
