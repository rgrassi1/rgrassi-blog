import React, { useMemo } from 'react';
import Link from 'next/link';
import { FcIdea } from 'react-icons/fc';
import { Container } from './styles';
import IProject from '../../../types/IProject';

const numberOfRepos = 3;

interface IMyAppProps {
  projects: IProject[];
}

interface ISummary {
  id: string;
  name: string;
  language: string;
  formatted_at: string;
}

const Projects: React.FC<IMyAppProps> = ({ projects }) => {
  const summary = useMemo<ISummary[]>(() => {
    return projects
      .filter((_, idx) => idx < numberOfRepos)
      .map((project) => {
        const { id, name, language, created_at } = project;
        return {
          id,
          name,
          language,
          formatted_at: new Date(created_at).toLocaleString('pt-BR'),
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
          <li key={project.id}>
            <h3>
              <Link href="/project/[name]" as={`/project/${project.name}`}>
                <a>{project.name}</a>
              </Link>
            </h3>
            <p>
              <strong>{project.language}</strong>
              <span>{project.formatted_at}</span>
            </p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Projects;
