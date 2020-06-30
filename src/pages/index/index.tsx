import React, { useEffect, useCallback } from 'react';
import { GetServerSideProps } from 'next';
import api from '../../services/api';
import IProject from '../../types/IProject';
import Header from './Header';
import Projects from './ProjectsSummary';
import { Container } from './styles';
import { useProjects } from '../../hooks/projects';

interface IMainProperties {
  projects: IProject[];
}

const Main: React.FC<IMainProperties> = ({ projects }) => {
  const { setProjects } = useProjects();

  useEffect(() => {
    setProjects(projects);
  }, [projects, setProjects]);

  return (
    <Container>
      <Header />
      <hr />
      <Projects />
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps<IMainProperties> = async () => {
  const response = await api.get<IProject[]>('/repos?sort=create');

  const formattedProjects = response.data.map((project) => {
    return {
      ...project,
      parsed_at: new Date(project.created_at).getTime(),
      formatted_at: new Date(project.created_at).toLocaleString('pt-BR'),
    };
  });

  return {
    props: {
      projects: formattedProjects,
    },
  };
};

export default Main;
