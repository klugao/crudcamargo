import styled from 'styled-components';

export const StyledComponent = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Oswald:wght@200..700&display=swap');
body{
    font-family: 'Montserrat';
}
`;

export const Container = styled.div`
  background-color: #d1d1d1;
  width: 100%;
  height: 100vh;
`;

export const Conteudo = styled.div`
  background-color: #fff;
  height: 100vh;
  margin: 0px 10% 0px 10%;
  padding: 50px 20px 0px 20px;
  h1{
    font-family: 'Oswald';
  }
`;
