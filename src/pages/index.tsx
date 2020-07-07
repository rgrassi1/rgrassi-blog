import React from 'react';
import styled from 'styled-components';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
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

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get<IProject[]>(
    '/users/rgrassi1/repos?sort=create',
  );
  return { props: { projects: response.data } };
};

const Main: React.FC = ({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <Head>
        <meta charSet="utf-8" />

        <title>Rodrigo Grassi - Blog</title>
        <meta name="description" content="Rodrigo Grassi's blog" />
        <link rel="canonical" href="https://rodrigo-grassi.dev" />
        <meta name="author" content="Rodrigo Grassi" />
        <meta name="robots" content="index, nofollow" />

        <meta property="og:title" content="Rodrigo Grassi - Blog" />
        <meta property="og:description" content="Rodrigo Grassi's blog" />
        <meta property="og:url" content="https://rodrigo-grassi.dev" />
        <meta property="og:site_name" content="rodrigo-grassi.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="profile.jpeg" />
      </Head>

      <Header />
      <hr />
      <Summary projects={projects} />
      <hr />
      <Footer />
    </Container>
  );
};

export default Main;
