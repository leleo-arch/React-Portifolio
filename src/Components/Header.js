import styled from 'styled-components';
import Git from "../assets/github.png";
import Linkedin from "../assets/Linkedin.png";

const HeaderWrapper = styled.header`
  text-align: center;
  padding: 50px 0;
  width: 100%;
  background-color: #0F1624;
  color: white;

  @media screen and (max-width: 900px) {
    padding: 10px 0;
  }
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin: 0;
  color: white;

  @media screen and (max-width: 375px) {
    font-size: 2em;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2em;
`;

const Nav = styled.nav`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto; 
  white-space: nowrap; 
  @media screen and (max-width: 900px) {
    margin-top: 20px;
    padding: 10px;
  }
`;

const NavLink = styled.a`
  margin: 0 10px;
  text-decoration: none;
  color: white;
  font-size: 1.1em;
  transition: color 0.3s;

  &:hover {
    color: #61dafb;
  }

  @media screen and (max-width: 375px) {
    margin: 0 10px;
    font-size: 0.8em;
  }
`;

const NavLink2 = styled.a`
  margin: 0 5px;
  text-decoration: none;
  color: white;
  font-size: 1em;
  transition: color 0.3s;

  &:hover {
    color: #61dafb;
  }

  @media screen and (max-width: 375px) {
    font-size: 0.9em;
  }
`;

const Image = styled.img`
  width: 20px;
  height: 20px;

  @media screen and (max-width: 375px) {
    width: 20px;
    height: 20px;
  }
`;

const Header = () => (
  <HeaderWrapper id="Nav">
    <Title>Leonardo Soares</Title>
    <Subtitle>Desenvolvedor Web</Subtitle>

    <Nav>
      <NavLink href="#projects">Projetos</NavLink>
      <NavLink href="#about">Sobre</NavLink>
      <NavLink href="#contact">Contato</NavLink>
      <NavLink href="#technologies">Tecnologias</NavLink>
      <NavLink2 href="https://github.com/leleo-arch">
        <Image src={Git} alt="GitHub" />
      </NavLink2>
      <NavLink2 href="https://www.linkedin.com/in/leonardo-soares-1842b32b0/">
        <Image src={Linkedin} alt="LinkedIn" />
      </NavLink2>
    </Nav>
  </HeaderWrapper>
);

export default Header;
