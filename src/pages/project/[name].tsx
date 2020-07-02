import React, { useMemo } from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import styled from 'styled-components';
import api from '../../services/api';
import IProject from '../../types/IProject';

const Container = styled.div`
  > h1 {
    font-size: 3em;
  }
`;

interface IProjectProps {
  project: IProject;
}

const Project: React.FC<IProjectProps> = ({ project }) => {
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

export const getServerSideProps: GetServerSideProps<IProjectProps> = async ({
  query,
}: GetServerSidePropsContext) => {
  const { name } = query;
  const response = await api.get<IProject>(`repos/rgrassi1/${name}`);

  return { props: { project: response.data } };
};

export default Project;
