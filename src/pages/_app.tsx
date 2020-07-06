import React from 'react';
import { AppProps } from 'next/app';
import { Router } from 'next/dist/client/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import GlobalStyle from '../styles/global';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Bitter:wght@400;700&family=Dosis:wght@400;500;700&display=swap');
        `}
      </style>
      <Component {...pageProps} />
      <GlobalStyle />
    </React.Fragment>
  );
}

export default MyApp;
