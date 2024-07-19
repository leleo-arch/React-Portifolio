import React from 'react';
import Header from './Components/Header';
import ProjectGallery from './Components/ProjectGallery';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
import { GlobalStyle, Container } from './styles';
import AboutMe from './Components/AboutMe';

function App() {
  return (
    <Container className='App'>

      <GlobalStyle />
      <Header />
      <AboutMe/>
      <ProjectGallery />
      <ContactForm />
      <Footer />
    </Container>
  );
}

export default App;
