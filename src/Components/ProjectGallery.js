import React from 'react';
import styled, { keyframes } from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const GalleryWrapper = styled.section`
  padding: 60px 20px;
  background: #f9f9f9;
`;

const GalleryTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.2em;
  color: #333;
  animation: ${fadeIn} 1s ease forwards;
`;

const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Project = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s, transform 0.3s;
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: ${(props) => props.index * 0.1}s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectImage = styled(LazyLoadImage)`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd;
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 20px;
  text-align: center;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4em;
  color: #333;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 1em;
  color: #555;
  margin-bottom: 20px;
`;

const ProjectButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 0.9em;
  color: #fff;
  background-color: #007bff;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const projects = [
  {
    title: 'Aplicativo - Jiu-Jitsu',
    description: 'Aplicativo - Jiu-Jitsu',
    image: 'https://img.icons8.com/color/48/000000/react-native.png',
    link: 'https://innova-jiu.netlify.app'
  },
  {
    title: 'Site - Portfólio',
    description: 'Leonardo Soares ',
    image: 'https://img.icons8.com/color/48/000000/react-native.png',
    link: 'https://github.com/leleo-arch'
  },
  {
    title: 'Node.js',
    description: 'ORM ',
    image: 'https://img.icons8.com/color/48/000000/nodejs.png',
    link: 'https://github.com/leleo-arch/Node_ORM_Sequelize'
  },
  {
    title: 'Site - Clima Tempo',
    description: 'Site - Clima Tempo',
    image: 'https://img.icons8.com/color/48/000000/bootstrap.png',
    link: 'https://watherdnc.netlify.app'
  },
  {
    title: 'Lading Page - Arquitetura',
    description: 'Lading Page - Arquitetura',
    image: 'https://img.icons8.com/color/48/000000/css.png',
    link: 'https://arquitednc.netlify.app'
  },
  {
    title: 'Lading Page - Starbucks',
    description: 'Lading Page - Starbucks',
    image: 'https://img.icons8.com/color/48/000000/javascript.png',
    link: 'https://glittering-cascaron-8bda26.netlify.app'
  },
  {
    title: 'Site - Conversor Money',
    description: 'Site - Conversor Money',
    image: 'https://img.icons8.com/color/48/000000/javascript.png',
    link: 'https://moneyinnova.netlify.app'
  },
  {
    title: 'Site - Sorteio',
    description: 'Site - Sorteio',
    image: 'https://img.icons8.com/color/48/000000/javascript.png',
    link: 'https://randonsinnova.netlify.app'
  },
  {
    title: 'Lading Page - Jokenpo',
    description: 'Lading Page - Jokenpo',
    image: 'https://img.icons8.com/color/48/000000/javascript.png',
    link: 'https://jokenpoinnova.netlify.app'
  },
  {
    title: 'Site - Cardapio ',
    description: 'Site - Cardapio',
    image: 'https://img.icons8.com/color/48/000000/react-native.png',
    link: 'https://cardapioinnova.netlify.app'
  },
];

const ProjectGallery = () => (
  <GalleryWrapper id="projects">
    <GalleryTitle>Meus Projetos</GalleryTitle>
    <Projects>
      {projects.map((project, index) => (
        <Project key={index} index={index}>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <ProjectImage 
              src={project.image} 
              alt={project.title} 
              effect="blur"
            />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectButton>Veja Mais</ProjectButton>
            </ProjectContent>
          </a>
        </Project>
      ))}
    </Projects>
  </GalleryWrapper>
);

export default ProjectGallery;
