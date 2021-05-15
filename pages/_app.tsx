import React from 'react';
import { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0';

export default function App({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
