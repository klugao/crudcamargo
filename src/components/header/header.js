// import React from 'react';
// import { HeaderContainer, Nav, NavLink } from './style';

// function Header() {
//   return (
//     <HeaderContainer>
//       <h1>Ingressos.com</h1>
//       <Nav>
//         <NavLink href="/">Home</NavLink>
//         <NavLink href="/contato">Contato</NavLink>
//         <NavLink href="/sobre">Eventos</NavLink>
//         <NavLink href="/login">Eventos</NavLink>
//       </Nav>
//     </HeaderContainer>
//   );
// }

// export default Header;

import React, { useEffect, useState } from 'react';
import { auth } from '../../index'; // Certifique-se de que o caminho está correto
import { onAuthStateChanged } from 'firebase/auth';
import { HeaderContainer, Nav, NavLink } from './style';

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listener para mudanças no estado de autenticação
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

  return (
    <HeaderContainer>
      <h1>Ingressos.com</h1>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/contato">Contato</NavLink>
        <NavLink href="/sobre">Eventos</NavLink>
        {user ? (
          <NavLink href="/perfil">{user.displayName || "Perfil"}</NavLink> // Mostra o nome do usuário ou 'Perfil'
        ) : (
          <NavLink href="/login">Login</NavLink> // Mostra 'Login' se não estiver logado
        )}
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
