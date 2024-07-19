import React from 'react';
import styled, { keyframes } from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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

const GalleryWrapper = styled.section`
  padding: 50px 0;
  background: #f4f4f4;
`;

const GalleryTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5em;
  color: #333;
  animation: ${fadeIn} 1s ease forwards;
`;

const Projects = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Project = styled.div`
  flex: 1 1 30%;
  background: white;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: ${(props) => props.index * 0.1}s;

  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 5px;
  position: relative;
`;

const ProjectImage = styled(LazyLoadImage)`
  max-width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
  filter: grayscale(0%);

  &:hover {
    transform: scale(1.1);
    filter: grayscale(30%);
  }
`;

const ProjectTitle = styled.h3`
  margin-top: 10px;
  font-size: 1.5em;
  color: #555;
`;

const ProjectDescription = styled.p`
  font-size: 1em;
  color: #777;
  margin-top: 10px;
`;

const ProjectButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #007bff;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-3px);
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

const ProjectGallery = React.memo(() => (
  <GalleryWrapper id="projects">
    <GalleryTitle>Meus Projetos</GalleryTitle>
    <Projects>
      {projects.map((project, index) => (
        <Project key={index} index={index}>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <ImageWrapper>
              <ProjectImage 
                src={project.image} 
                alt={project.title} 
                effect="blur"
              />
            </ImageWrapper>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectButton href={project.link} target="_blank" rel="noopener noreferrer">
              Veja Mais
            </ProjectButton>
          </a>
        </Project>
      ))}
    </Projects>
  </GalleryWrapper>
));

export default ProjectGallery;
