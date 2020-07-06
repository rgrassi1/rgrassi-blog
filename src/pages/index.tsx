import React from 'react';
import styled from 'styled-components';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import api from '../services/api';
import IProject from '../types/IProject';
import Header from '../components/Index/Header';
import Summary from '../components/Index/Summary';
import Footer from '../components/Footer';

export const Container = styled.div`
  max-width: 768px;
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

  > hr:last-of-type {
    margin-bottom: 0;
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
      <hr />
      <Footer />
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
