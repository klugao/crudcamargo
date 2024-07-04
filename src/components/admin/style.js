import styled from 'styled-components';

export const Form = styled.form`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
`;

export const TextArea = styled.textarea`
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  height: 100px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  color: white;
  background-color: #007BFF;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const List = styled.div`
  margin: 20px;
  padding: 20px;
`;

export const ListItem = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  .box-img img {
    max-width: 100px;
    max-height: 100px;
    margin-right: 10px;
  }

  .box-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .titulo h3 {
    margin: 0;
  }

  .infos {
    display: flex;
    flex-direction: column;
  }

  .infos p {
    margin: 0;
  }

  .preco {
    font-weight: bold;
  }
`;

export const CreateButton = styled.button`
  top: 20px;
  left: 20px;
  padding: 10px 20px;
  color: white;
  background-color: #28a745;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;
