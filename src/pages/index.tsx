import React from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import styled from 'styled-components';
import api from '../services/api';
import IProject from '../types/IProject';
import Header from '../components/Header';
import Summary from '../components/Summary';
// import { Container } from './styles';

const Container = styled.div`
  max-width: 920px;
  width: 100%;
  margin: 0 auto;

  > hr {
    border: 0;
    background: #c66;
    border-radius: 6px;
    display: block;
    height: 16px;
    margin: 40px 32px;
  }
`;

interface IMainProps {
  projects: IProject[];
}

const Main: React.FC<IMainProps> = ({ projects }) => {
  return (
    <Container>
      <Header />
      <hr />
      <Summary projects={projects} />
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps<IMainProps> = async (
  ctx: GetServerSidePropsContext,
) => {
  const response = await api.get<IProject[]>(
    '/users/rgrassi1/repos?sort=create',
  );
  return { props: { projects: response.data } };
};

export default Main;
