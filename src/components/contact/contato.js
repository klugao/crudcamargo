import React, { useState } from 'react';
import { Container, Conteudo, ContactForm, Label, Input, TextArea, Button } from './style';
import Header from '../header/header';
import emailjs from 'emailjs-com';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send(
      'service_qyy7y8h',  // Substitua pelo seu Service ID do EmailJS
      'template_bmboqc5', // Substitua pelo seu Template ID do EmailJS
      templateParams,
      'nUQu_oiaVJAKZ7vRN'      // Substitua pelo seu User ID do EmailJS
    )
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
       alert('Mensagem enviada com sucesso!');
    }, (err) => {
       console.log('FAILED...', err);
       alert('Erro ao enviar mensagem. Tente novamente.');
    });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Container>
      <Header />
      <Conteudo>
        <h1>Contato</h1>
        <ContactForm onSubmit={handleSubmit}>
          <Label>Nome:</Label>
          <Input 
            type="text" 
            placeholder="Seu nome" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
          <Label>Email:</Label>
          <Input 
            type="email" 
            placeholder="Seu email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <Label>Mensagem:</Label>
          <TextArea 
            placeholder="Sua mensagem" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
          />
          <Button type="submit">Enviar</Button>
        </ContactForm>
      </Conteudo>
    </Container>
  );
}

export default Contact;
