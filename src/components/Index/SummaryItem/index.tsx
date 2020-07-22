import React, { useMemo } from 'react';
import Link from 'next/link';
import IProject from '../../../types/IProject';
import { Container } from './styles';

interface ISummaryItemProps {
  project: IProject;
}

const SummaryItem: React.FC<ISummaryItemProps> = ({ project }) => {
  return (
    <Container>
      <h3>
        <Link href="/project/[name]" as={`/project/${project.name}`}>
          <a>{project.name}</a>
        </Link>
      </h3>
      <p>
        <strong>{project.language}</strong>
        <span>{project.formatted_at}</span>
      </p>
    </Container>
  );
};

export default SummaryItem;
