import React, { useMemo } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Container } from './styles';
import IProject from '../../types/IProject';

interface IMyAppProps extends AppProps {
  projects: IProject[];
}

const Project: React.FC<IMyAppProps> = ({ projects }) => {
  const {
    query: { id },
  } = useRouter();

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
