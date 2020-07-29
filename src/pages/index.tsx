import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import api from '../services/api';
import IProject from '../types/IProject';
import { Container } from '../components/Index/Container/styles';
import Header from '../components/Index/Header';
import Summary from '../components/Index/Summary';
import Footer from '../components/Footer';

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get<IProject[]>(
    '/users/rgrassi1/repos?sort=create',
  );
  return {
    props: { projects: response.data },
    revalidate: 60 * 60 * 24,
  };
};

const Main: React.FC = ({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <Head>
        <meta charSet="utf-8" />

        <title>RGrassi - Blog</title>
        <meta name="description" content="Rodrigo Grassi's blog" />
        <link rel="canonical" href="https://rodrigo-grassi.dev" />
        <meta name="author" content="Rodrigo Antonio Grassi" />
        <meta name="robots" content="index,nofollow" />
        <meta name="googlebot" content="index,nofollow" />

        <meta property="og:title" content="RGrassi - Blog" />
        <meta property="og:description" content="Rodrigo Grassi's blog" />
        <meta property="og:url" content="https://rodrigo-grassi.dev" />
        <meta property="og:site_name" content="Rodrigo Antonio Grassi" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://rodrigo-grassi.dev" />
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
