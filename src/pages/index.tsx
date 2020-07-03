import React from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import api from '../services/api';
import IProject from '../types/IProject';
import Header from '../components/Index/Header';
import Summary from '../components/Index/Summary';
import { Container } from '../components/Index/styles';

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
