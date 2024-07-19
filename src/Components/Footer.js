import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: #282c34;
  color: white;
  text-align: center;
  padding: 20px 0;
  position: absolute;
  width: 100%;
  bottom: 1;
`;

const Footer = () => (
  <FooterWrapper>
    <p>© 2024 Meu Portfólio. Todos os direitos reservados.</p>
  </FooterWrapper>
);

export default Footer;
