import React from 'react';
import Header from './Components/Header';
import ProjectGallery from './Components/ProjectGallery';
import ContactForm from './Components/ContactForm';
import Technologies from './Components/Technologies';
import About from './Components/About';
import Certificado from './Components/Certificados';



import { GlobalStyle, Container } from './styles';
import AboutMe from './Components/AboutMe';

function App() {
  return (
    <Container className='App'>

      <GlobalStyle />
      <Header />
      <AboutMe/>
      <Technologies/>
      <ProjectGallery />
      <About/>
      <Certificado/>
      <ContactForm />
    </Container>
  );
}

export default App;
