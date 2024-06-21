import styled from 'styled-components';

export const StyledComponent = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Oswald:wght@200..700&display=swap');
  body {
    font-family: 'Montserrat';
  }
`;

export const Container = styled.div`
  background-color: #d1d1d1;
  width: 100%;
  min-height: 100vh;
`;

export const Conteudo = styled.div`
  background-color: #fff;
  min-height: 100vh;
  margin: 0px 10%;
  padding: 50px 20px 0px 20px;
  h1 {
    font-family: 'Oswald';
  }
`;

export const Section = styled.div`
  margin-bottom: 30px;
  h2 {
    font-family: 'Oswald';
    margin-bottom: 10px;
  }
  p {
    margin: 5px 0;
    font-size: 1rem;
    color: #333;
  }
`;

export const EventList = styled.div`
  margin-top: 20px;
`;

export const EventItem = styled.div`
  padding: 20px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  h2 {
    font-family: 'Oswald';
    margin-bottom: 10px;
  }
  p {
    margin: 5px 0;
    font-size: 1rem;
    color: #333;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin-top: 20px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-size: 1rem;
  color: #333;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 100px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #00408b;
  }
`;
