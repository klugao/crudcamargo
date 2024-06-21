import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Importando Link do react-router-dom

export const StyledComponent = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Oswald:wght@200..700&display=swap');
  body {
    font-family: 'Montserrat';
  }
`;

export const HeaderContainer = styled.div`
  background-color: #323a4d;
  margin: 0px;
  padding: 0px;
  display: flex;
  justify-content: space-between;
  padding: 10px 100px 10px 100px;
  align-items: center;
  h1 {
    font-family: 'Oswald', sans-serif;
    color: white;
    margin-left: 50px;
  }
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  color: white;
  h1 {
    font-family: 'Oswald', sans-serif;
    color: white;
    margin: 0;
  }
`;

export const Nav = styled.nav`
  margin: 0px;
  display: flex;
  align-items: center;
`;

export const NavLink = styled.a`
  font-family: 'Arial';
  color: white;
  font-size: 1.2rem;
  margin-right: 15px;
  text-decoration: none;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    color: #61dafb;
  }
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  font-family: 'Arial';
  &:hover {
    color: #61dafb;
  }
`;
