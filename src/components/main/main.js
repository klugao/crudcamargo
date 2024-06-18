import React from 'react';
import { Container, Conteudo } from './style';
import EventFeed from '../EventFeed/eventfeed';
import Header from '../../components/header/header'

function Main() {
  return (
    <Container>
      <Header></Header>
        <Conteudo>
          <div>
            <h1>Feed de Eventos</h1>
            <EventFeed/>
          </div>
        </Conteudo>
    </Container>
  );
}

export default Main;
