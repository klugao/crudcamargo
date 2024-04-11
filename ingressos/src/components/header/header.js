import React from 'react';
import { HeaderContainer, Nav, NavLink } from './style';

function Header() {
  return (
    <HeaderContainer>
      <h1>Ingressos.com</h1>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/contato">Contato</NavLink>
        <NavLink href="/sobre">Eventos</NavLink>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
