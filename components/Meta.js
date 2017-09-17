import React from 'react';
import Head from 'next/head';


export default () => (
  <Head>
    <title>Alumnus</title>
    <meta charSet="utf-8" />
    <meta name="description" content="" />
    <meta name="author" content="FreeCodeCamp, Haïti" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

    <link rel="stylesheet" href="/static/css/amazium.css" />

    <link rel="shortcut icon" href="img/favicon.ico" />
    <link
      rel="apple-touch-icon-precomposed"
      href="img/apple-touch-icon-5b3615f3c2dc9f04a4ae2e9271d7b4d2.png"
    />
    <style>{`
      body {
        background-color: #eee;
      }

      #page-content {
        padding: 40px 0;
      }
    `}</style>
  </Head>
);
