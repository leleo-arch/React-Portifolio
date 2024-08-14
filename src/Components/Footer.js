import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    background: #0F1624;
    color: black;
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: 1;
  height: 10px;
`;

const Footer = () => (
  <FooterWrapper>
    <p>© 2024 Meu Portfólio. Todos os direitos reservados.</p>
  </FooterWrapper>
);

export default Footer;
