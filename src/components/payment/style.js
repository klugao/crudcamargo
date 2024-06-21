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
  box-shadow:  20px 20px 60px #bebebe,
               -20px -20px 60px #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: 'Oswald', sans-serif;
    margin-bottom: 20px;
  }
  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    margin: 10px 0;
  }
  .total {
    font-size: 1.5rem;
    font-weight: bold;
    color: green;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
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

export const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const RadioLabel = styled.label`
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  margin-right: 10px;
`;

export const QRCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

export const CardDetailsForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  label {
    margin-bottom: 10px;
    font-family: 'Montserrat', sans-serif;
  }
  input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;
