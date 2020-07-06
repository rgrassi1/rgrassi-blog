import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import api from '../../services/api';
import TopBar from '../../components/TopBar';
import Profile from '../../components/Profile';
import Footer from '../../components/Footer';
import ButtonLink from '../../components/ButtonLink';
import TextLink from '../../components/TextLink';
import IProject from '../../types/IProject';
import { Container, MainSection } from '../../components/Project/styles';

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
            <ButtonLink url={project.html_url}>Demo</ButtonLink>
          </p>
          <hr />
          <h4>Support</h4>
          <p>
            <strong>Browsers - </strong>
            Works perfectly on all modern browsers and IE9 +.
          </p>
          <p>
            <strong>Bugs - </strong>
            If you find a bug
            <TextLink url="mailto:rgrassi1@gmail.com">email me</TextLink>
            or
            <TextLink
              url={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              fork it
            </TextLink>
            on GitHub!
          </p>
          <p>
            <TextLink
              url={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Demo
            </TextLink>
            {' | '}
            <TextLink
              url={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source on GitHub
            </TextLink>
          </p>
        </article>
        <footer>
          <ButtonLink
            icon={FiGithub}
            url="https://github.com/rgrassi1"
            target="_blank"
          >
            Find me on GitHub
          </ButtonLink>
        </footer>
        <hr />
      </MainSection>
      <Profile />
      <Footer />
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
