import React, { useState } from 'react';
import {Container,Publicacao} from './style'


function EventFeed() {
  // Dados simulados para os eventos
  const [events, setEvents] = useState([
    { id: 1, name: 'Concerto de Rock', description: 'Venha curtir o melhor do rock nacional e internacional.' },
    { id: 2, name: 'Peça de Teatro: A Revolução', description: 'Uma peça que irá desafiar suas percepções de sociedade.' },
    { id: 3, name: 'Exposição de Arte Moderna', description: 'Explore obras contemporâneas de artistas renomados.' }
  ]);

  return (
    <Container>
      {events.map(event => (
        <Publicacao key={event.id} >
          <h2>{event.name}</h2>
          <p>{event.description}</p>
          <button>Informações</button>
        </Publicacao>
      ))}
    </Container>
  );
}

export default EventFeed;