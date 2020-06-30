import React from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
// import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import { RootProvider } from '../hooks/projects';
// import theme from '../styles/theme';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <React.StrictMode>
      <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Bitter:wght@400;700&family=Dosis:wght@400;500;700&display=swap');
        `}
      </style>
      <RootProvider>
        <Component {...pageProps} />
      </RootProvider>
      <GlobalStyle />
    </React.StrictMode>
  );
};

export default MyApp;
