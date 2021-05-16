import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { UserProvider } from '@auth0/nextjs-auth0';
import GlobalStyle from 'theme/globals';

export default function App({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Karla:400|Rubik:500" rel="stylesheet" />
      </Head>
      <UserProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}
