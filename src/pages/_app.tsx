import React from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Bitter:wght@400;700&family=Dosis:wght@400;500;700&display=swap');
        `}
      </style>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <GlobalStyle />
    </React.Fragment>
  );
};

export default MyApp;
