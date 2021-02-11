import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import React from 'react';

function MyApp({ Component, pageProps }): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
