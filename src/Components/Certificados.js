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

const CertificatesWrapper = styled.section`
  padding: 60px 20px;
  background-color: #0F1624;
  display: flex;
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

const CertificatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  max-width: 1000px;
  width: 100%;
`;

const CertificateCard = styled.div`
  background-color: #1F2A44;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const CertificateImage = styled.p`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const CertificateTitle = styled.h3`
  font-size: 1.5em;
  color: #fff;
  margin-top: 10px;
`;

const CertificateLink = styled.a`
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
  border-radius: 25px;
  text-decoration: none;

  &:hover {
    background: linear-gradient(270deg, #13ADC7 0%, #6978D1 80%, #945DD6 120%);
  }
`;

const certificates = [
  {
    title: 'Desenvolvimento Frond-End',
    link: 'https://docs.google.com/viewerng/viewer?url=https://files.dnc.group/acervo/1061/179884/29464fab35f8118307a7069daacc0ecf.pdf',
  },
  {
    title: 'React.js',
    link: 'https://docs.google.com/viewerng/viewer?url=https://files.dnc.group/acervo/1061/179884/d420a0d7987ca86c127b97214b3989d1.pdf',
  },
  {
    title: 'API - Aplicação Funcional',
    link: 'https://docs.google.com/viewerng/viewer?url=https://files.dnc.group/acervo/1061/179884/257d302f9d6c73a721b909860a30f31b.pdf',
  },
  {
    title: 'Introdução ao Desenvolvimento Web',
    link: 'https://docs.google.com/viewerng/viewer?url=https://files.dnc.group/acervo/1061/179884/9d89224577b179004d1f17e0a8c659dc.pdf',
  },
  {
    title: 'Bacharelado-Publicidade e Propaganda ',
    link: 'https://onedrive.live.com/?id=F361BC058141259C%21s805f6e68a56c44db95316979e1432b8c&resid=F361BC058141259C%21s805f6e68a56c44db95316979e1432b8c&cid=f361bc058141259c&ithint=file%2Cpdf&redeem=aHR0cHM6Ly8xZHJ2Lm1zL2IvYy9mMzYxYmMwNTgxNDEyNTljL0VXaHVYNEJzcGR0RWxURnBlZUZESzR3Qjl3a0dmLUV2SEZrdEotb3UyYXVxRHc&migratedtospo=true&v=validatepermission',
  },
];

const Certificates = () => (
  <CertificatesWrapper id="certificates">
    <Title>Meus Certificados</Title>
    <CertificatesGrid>
      {certificates.map((certificate, index) => (
        <CertificateCard key={index}>
          <CertificateImage  alt={certificate.title} />
          <CertificateTitle>{certificate.title}</CertificateTitle>
          <CertificateLink href={certificate.link} download>
            Baixar Certificado
          </CertificateLink>
        </CertificateCard>
      ))}
    </CertificatesGrid>
  </CertificatesWrapper>
);

export default Certificates;
