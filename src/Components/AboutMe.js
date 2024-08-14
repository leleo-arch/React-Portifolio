import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutWrapper = styled.section`
  padding: 60px 20px;
  background-color: #0F1624;  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  animation: ${fadeIn} 1s ease forwards;
`;

const Title = styled.h2`
  font-size: 2.5em;
  color: #fff;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  color: #fff;
  max-width: 800px;
  line-height: 1.6;
`;

const ProfilePic = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const AboutMe = () => (
  <AboutWrapper id="about">
    <ProfilePic src='https://avatars.githubusercontent.com/u/157326171?v=4' alt="Minha foto de perfil" />
    <Title>Sobre Mim</Title>
    <Subtitle>
      Sou um profissional apaixonado por unir criatividade e código. Com formação em Tecnologia Multimídia e Publicidade e Propaganda e com experiência em programação, trago uma abordagem única para projetos digitais.
    </Subtitle>
 
  </AboutWrapper>
);

export default AboutMe;
