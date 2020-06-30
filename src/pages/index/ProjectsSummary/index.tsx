import React, { useMemo } from 'react';
import Link from 'next/link';
import { FcIdea } from 'react-icons/fc';
import { Container } from './styles';
import IProject from '../../../types/IProject';
import { useProjects } from '../../../hooks/projects';

const numberOfRepos = 3;

const Projects: React.FC = () => {
  const { projects } = useProjects();

  const summary = useMemo(() => {
    return projects.filter((_, idx) => idx < numberOfRepos);
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
              <Link href="/project/[id]" as={`/project/${project.id}`}>
                <a href="/project/[id]">{project.name}</a>
              </Link>
            </h3>
            {/* <p>{project.description || '<no-description>'}</p> */}
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
