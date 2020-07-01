import React from 'react';
import { AppProps, AppContext } from 'next/app';
import api from '../services/api';
import IProject from '../types/IProject';
import GlobalStyle from '../styles/global';

interface IMyAppProps extends AppProps {
  projects: IProject[];
}

const MyApp = ({ Component, pageProps, projects }: IMyAppProps) => {
  return (
    <React.Fragment>
      <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Bitter:wght@400;700&family=Dosis:wght@400;500;700&display=swap');
        `}
      </style>
      <Component {...pageProps} projects={projects} />
      <GlobalStyle />
    </React.Fragment>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  const { data } = await api.get<IProject[]>('/repos?sort=create');

  const formattedProjects = data.map((project) => {
    return {
      id: project.id,
      name: project.name,
      description: project.description,
      html_url: project.html_url,
      language: project.language,
      parsed_at: new Date(project.created_at).getTime(),
      formatted_at: new Date(project.created_at).toLocaleString(),
      stargazers_count: project.stargazers_count,
    };
  });

  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps, projects: formattedProjects };
};

export default MyApp;
