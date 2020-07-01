import React from 'react';
import IProject from '../types/IProject';
import Header from '../components/Header';
import Summary from '../components/Summary';
import { Container } from './styles';

interface IMainProperties {
  projects: IProject[];
}

const Main: React.FC<IMainProperties> = ({ projects }) => {
  return (
    <Container>
      <Header />
      <hr />
      <Summary projects={projects} />
    </Container>
  );
};

export default Main;
