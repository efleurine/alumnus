import React, { Component } from 'react'
import PropType from 'prop-types'
import Head from '../components/Head'
import Footer from '../components/Footer'
import Nav from '../components/TopNavBar'
// import { initGA } from '../utils/analytics'

export default class Layout extends Component {
  componentDidMount() {
    // if (!window. GA_INTIALIZED) {
    //   initGA()
    //   window.GA_INTIALIZED = true
    // }
  }
  render() {
    const { title, description, children } = this.props
    const style = { display: 'flex', flexDirection: 'column' }
    const className = 'vh-100 bg-near-white'
    return (
      <div style={style} className={className}>
        <Head title={title} description={description} />
        <Nav />
        {children}
        <Footer />
        <script src="https://code.jquery.com/jquery-3.2.1.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/js/materialize.min.js" />
        <script src="../static/js/app.js" />
      </div>
    )
  }
}

Layout.propTypes = {
  title: PropType.string.isRequired,
  description: PropType.string.isRequired,
  children: PropType.node.isRequired,

}

Layout.defaultProps = {
  title: 'Alumnus',
  description: 'A user friendly platform for various kind of institutions',
}

