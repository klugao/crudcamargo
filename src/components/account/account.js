import React from 'react';
import { Container, Conteudo } from './style';
import Header from '../header/header'

function Account() {
  return (
    <Container>
      <Header></Header>
        <Conteudo>
          <div>
            <h1>Minha conta</h1>
          </div>
        </Conteudo>
    </Container>
  );
}

export default Account;
