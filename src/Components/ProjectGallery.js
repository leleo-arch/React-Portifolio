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
    title: 'Projeto 1',
    description: 'Descrição do Projeto 1',
    image: 'https://via.placeholder.com/300',
    link: 'https://innova-jiu.netlify.app'
  },
  {
    title: 'Projeto 2',
    description: 'Descrição do Projeto 2',
    image: 'https://via.placeholder.com/300',
    link: 'https://watherdnc.netlify.app'
  },
  {
    title: 'Projeto 3',
    description: 'Descrição do Projeto 3',
    image: 'https://via.placeholder.com/300',
    link: 'https://arquitednc.netlify.app'
  },
  {
    title: 'Projeto 4',
    description: 'Descrição do Projeto 4',
    image: 'https://via.placeholder.com/300',
    link: 'https://glittering-cascaron-8bda26.netlify.app'
  },
  {
    title: 'Projeto 5',
    description: 'Descrição do Projeto 5',
    image: 'https://via.placeholder.com/300',
    link: 'https://moneyinnova.netlify.app'
  },
  {
    title: 'Projeto 6',
    description: 'Descrição do Projeto 6',
    image: 'https://via.placeholder.com/300',
    link: 'https://randonsinnova.netlify.app'
  },
  {
    title: 'Projeto 7',
    description: 'Descrição do Projeto 7',
    image: 'https://via.placeholder.com/300',
    link: 'https://jokenpoinnova.netlify.app'
  },
  {
    title: 'Projeto 8',
    description: 'Descrição do Projeto 8',
    image: 'https://via.placeholder.com/300',
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
