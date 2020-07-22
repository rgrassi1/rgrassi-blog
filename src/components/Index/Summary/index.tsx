import React, { useMemo } from 'react';
import Link from 'next/link';
import { FcIdea } from 'react-icons/fc';
import { Container } from './styles';
import SummaryItem from '../SummaryItem';
import IProject from '../../../types/IProject';

const numberOfProjects = 4;

interface ISummaryProps {
  projects: IProject[];
}

const Summary: React.FC<ISummaryProps> = ({ projects }) => {
  const summary = useMemo(() => {
    return projects
      .filter((_, idx) => idx < numberOfProjects)
      .map((project) => {
        return {
          ...project,
          formatted_at: new Date(project.created_at).toLocaleString('pt-BR'),
        };
      });
  }, [projects]);

  return (
    <Container>
      <h2>
        <FcIdea />
        Recent Projects
      </h2>
      <ul>
        {summary.map((project) => (
          <SummaryItem project={project} key={project.id} />
        ))}
      </ul>
    </Container>
  );
};

export default Summary;
