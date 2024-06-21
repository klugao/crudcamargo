import styled from 'styled-components';

export const Container = styled.div`
  background-color: #d1d1d1;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Conteudo = styled.div`
  background-color: #fff;
  width: 80%;
  max-width: 800px;
  min-height: 400px;
  margin: 50px 0;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 20px 20px 60px #bebebe,
    -20px -20px 60px #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: 'Oswald', sans-serif;
    margin-bottom: 20px;
  }
  h2 {
    font-family: 'Oswald', sans-serif;
    margin-bottom: 20px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    width: 100%;
  }
  p {
    margin: 5px 0;
  }
`;

export const EditButton = styled.button`
  padding: 10px 20px;
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #00408b;
  }
`;

export const SaveButton = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #218838;
  }
`;

export const AdminButton = styled.button`
  padding: 10px 20px;
  background-color: #ffc107;
  color: black;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;
  &:hover {
    background-color: #e0a800;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
