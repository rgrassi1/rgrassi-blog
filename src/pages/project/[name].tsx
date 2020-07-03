import React, { useMemo } from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import api from '../../services/api';
import IProject from '../../types/IProject';
import {
  Container,
  MainSection,
  TopBar,
  Meta,
} from '../../components/Project/styles';

interface IProjectProps {
  project: IProject;
}

const Project: React.FC<IProjectProps> = ({ project }) => {
  return (
    <Container>
      <TopBar />
      <MainSection>
        <header>
          <h1>{project.name}</h1>
          <p>Demo & Source Code</p>
        </header>
        <hr />
        <article>
          <h3>
            Simple, semantic navigation pattern, using SSR techniques and
            without additional configurations for deploy.
          </h3>
          <hr />
          <h4>What is this?</h4>
          <p>{project.description}</p>
          <p>
            <a href="">Demo</a>
          </p>
          <hr />
        </article>
        <footer>
          <a href=".">Find me on GitHub</a>
        </footer>
      </MainSection>
      <Meta>
        <div />
        <nav />
      </Meta>
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
