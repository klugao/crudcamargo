import React from 'react';
import { Container, Conteudo } from './style';
import EventFeed from '../EventFeed/eventfeed';

function Main() {
  return (
    <Container>
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
