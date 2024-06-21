import React from 'react';
import { Container, Conteudo, Section } from './style';
import Header from '../header/header';

function About() {
  console.log('About component rendered'); // Log para depuração

  return (
    <Container>
      <Header />
      <Conteudo>
        <h1>Sobre Nós</h1>
        <Section>
          <h2>Nossa Empresa</h2>
          <p>
            Bem-vindo à EasyTickets! Somos líderes na venda de ingressos para eventos ao vivo, oferecendo uma experiência fácil e segura para nossos clientes. 
            Nosso objetivo é conectar pessoas a eventos emocionantes e memoráveis, garantindo que cada compra de ingresso seja rápida e confiável.
          </p>
        </Section>
        <Section>
          <h2>Missão</h2>
          <p>
            Nossa missão é proporcionar uma experiência de compra de ingressos que seja fácil, segura e agradável para todos os nossos clientes, 
            garantindo acesso a eventos que criem lembranças duradouras.
          </p>
        </Section>
        <Section>
          <h2>Visão</h2>
          <p>
            Ser a plataforma líder mundial em venda de ingressos para eventos ao vivo, reconhecida pela excelência no atendimento ao cliente e pela inovação constante.
          </p>
        </Section>
        <Section>
          <h2>Valores</h2>
          <p>
            Integridade, inovação, comprometimento com o cliente e paixão pelo que fazemos são os pilares que sustentam nossa empresa.
          </p>
        </Section>
      </Conteudo>
    </Container>
  );
}

export default About;
