import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { Container } from './styles';
import { useProjects } from '../../hooks/projects';

const Project: React.FC = () => {
  const {
    query: { id },
  } = useRouter();

  const { projects } = useProjects();

  const project = useMemo(() => {
    return projects.find((proj) => Number(proj.id) === Number(id));
  }, [id, projects]);

  return (
    <Container>
      <h1>Project</h1>
      <div>
        <p>{project?.name}</p>
        <p>{project?.description}</p>
      </div>
    </Container>
  );
};

export default Project;
