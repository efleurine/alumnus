import React from 'react'
import PropType from 'prop-types'
import Head from 'next/head'

function Header({ title, description }) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="FreeCodeCamp, Haïti" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=Cinzel"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link
        href="https://unpkg.com/tachyons@4.8.0/css/tachyons.min.css"
        rel="stylesheet"
      /> 
    </Head>
  )
}

Header.propTypes = {
  title: PropType.string.isRequired,
  description: PropType.string.isRequired,
}

Header.defaultProps = {
  title: 'Alumnus',
  description: 'A user friendly platform for various kind of institutions',
}

export default Header
