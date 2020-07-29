import React from 'react';
import TopBar from '../../components/TopBar';
import { Container, MainSection } from '../../components/About/styles';

const About: React.FC = () => {
  return (
    <Container>
      <TopBar />
      <MainSection>
        <article>
          <figure>
            <img src="" alt="" />
          </figure>
          <header>
            <h1>Rodrigo Grassi</h1>
            <h2>From The Internet</h2>
          </header>
          <hr />
          <p />
        </article>
      </MainSection>
    </Container>
  );
};

export default About;
